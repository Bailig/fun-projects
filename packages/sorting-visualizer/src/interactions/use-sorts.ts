import { useCallback, useMemo, useRef, useState } from "react";
import { Bar, useBars } from "./use-bars";

export type SortType = "bubble" | "selection" | "merge" | "quick";

type UseSortDeps = ReturnType<typeof useBars> & {
  array: number[];
};

export const useSorts = ({
  highlight,
  unhighlight,
  swap,
  array,
}: UseSortDeps) => {
  const barsRef = useRef<Bar[]>();

  const handleBubbleSort = useCallback(async () => {
    if (!barsRef.current) return;
    const bars = barsRef.current;

    for (let j = 1; j < bars.length; j++) {
      for (let i = 0; i < bars.length - j; i++) {
        const bar1 = bars[i];
        const bar2 = bars[i + 1];
        await Promise.all([highlight(bar1), highlight(bar2)]);
        if (bar1.value > bar2.value) {
          await swap(bars, i, i + 1);
        }
        await Promise.all([unhighlight(bar1), unhighlight(bar2)]);
      }
    }
  }, [highlight, swap, unhighlight]);

  const handleSelectionSort = useCallback(async () => {
    if (!barsRef.current) return;
    const bars = barsRef.current;

    for (let j = 0; j < bars.length; j++) {
      let minIndex = j;
      await highlight(bars[j]);
      for (let i = j; i < bars.length; i++) {
        const bar = bars[i];
        await highlight(bar);
        if (bar.value < bars[minIndex].value) {
          if (minIndex !== j) {
            await unhighlight(bars[minIndex]);
          }
          minIndex = i;
        } else if (i !== j) {
          await unhighlight(bar);
        }
      }
      if (j !== minIndex) {
        await swap(bars, j, minIndex);
        await Promise.all([unhighlight(bars[j]), unhighlight(bars[minIndex])]);
      } else {
        await unhighlight(bars[j]);
      }
    }
  }, [highlight, swap, unhighlight]);

  const mergeSort = useCallback(
    async (bars: Bar[], left = 0, right = bars.length - 1) => {
      if (left >= right) return;
      const mid = Math.floor((left + right) / 2);
      await mergeSort(bars, left, mid);
      await mergeSort(bars, mid + 1, right);

      const result = [];
      let i = left;
      let j = mid + 1;
      while (i <= mid && j <= right) {
        const first = bars[i];
        const second = bars[j];

        await Promise.all([highlight(first), highlight(second)]);

        if (first.value === second.value) {
          result.push(first);
          result.push(second);
          i++;
          j++;
        } else if (first.value < second.value) {
          result.push(first);
          i++;
        } else if (first.value > second.value) {
          result.push(second);
          j++;
        }
        await Promise.all([unhighlight(first), unhighlight(second)]);
      }

      while (i <= mid) {
        const bar = bars[i];
        await highlight(bar);
        result.push(bar);
        i++;
        await unhighlight(bar);
      }
      while (j <= right) {
        const bar = bars[j];
        await highlight(bar);
        result.push(bar);
        j++;
        await unhighlight(bar);
      }

      // put result back to original array
      // eslint-disable-next-line no-shadow
      for (let i = left; i < right + 1; i++) {
        const bar1 = bars[i];
        const bar2 = result[i - left];
        const bar2Index = bars.indexOf(bar2);
        if (i !== bar2Index) {
          await Promise.all([highlight(bar1), highlight(bar2)]);
          await swap(bars, i, bar2Index);
          await Promise.all([unhighlight(bar1), unhighlight(bar2)]);
        }
      }
    },
    [highlight, swap, unhighlight],
  );

  const handleMergeSort = useCallback(async () => {
    if (!barsRef.current) return;
    const bars = barsRef.current;

    await mergeSort(bars);
  }, [mergeSort]);

  const positionItem = useCallback(
    async (bars: Bar[], left: number, right: number) => {
      const pivot = bars[right];
      let pivotIndex = left;
      await Promise.all([highlight(pivot), highlight(bars[pivotIndex])]);

      for (let i = left; i < right; i++) {
        const bar = bars[i];
        await highlight(bar);

        if (bar.value < pivot.value) {
          if (pivotIndex !== i) {
            await swap(bars, pivotIndex, i);

            await Promise.all([
              unhighlight(bars[pivotIndex]),
              unhighlight(bars[i]),
            ]);
          }
          pivotIndex++;
          await highlight(bars[pivotIndex]);
        }
        if (pivotIndex !== i) {
          await unhighlight(bar);
        }
      }
      if (right !== pivotIndex) {
        await swap(bars, right, pivotIndex);

        await Promise.all([
          unhighlight(bars[right]),
          unhighlight(bars[pivotIndex]),
        ]);
      } else {
        unhighlight(bars[pivotIndex]);
      }

      return pivotIndex;
    },
    [highlight, swap, unhighlight],
  );

  const quickSort = useCallback(
    async (bars: Bar[], left = 0, right = bars.length - 1) => {
      if (left >= right) return bars;
      const partitionIndex = await positionItem(bars, left, right);
      await quickSort(bars, left, partitionIndex - 1);
      await quickSort(bars, partitionIndex + 1, right);
      return bars;
    },
    [positionItem],
  );

  const handleQuickSort = useCallback(async () => {
    if (!barsRef.current) return;
    const bars = barsRef.current;

    await quickSort(bars);
  }, [quickSort]);

  const sortHandlerMap = useMemo(
    () => ({
      bubble: handleBubbleSort,
      selection: handleSelectionSort,
      merge: handleMergeSort,
      quick: handleQuickSort,
    }),
    [handleBubbleSort, handleMergeSort, handleQuickSort, handleSelectionSort],
  );

  const sortingCountRef = useRef(0);
  const [sortType, setSortType] = useState<SortType>();

  const handleSort = useCallback(
    async (type: SortType) => {
      setSortType(type);
      sortingCountRef.current++;
      await sortHandlerMap[type]();
      sortingCountRef.current--;
      if (sortingCountRef.current === 0) {
        setSortType(undefined);
      }
    },
    [sortHandlerMap],
  );

  const setBars = useCallback(
    (bars: SVGRectElement[]) => {
      setSortType(undefined);
      barsRef.current = bars.map((bar, index) => ({
        value: array[index],
        node: bar,
      }));
    },
    [array],
  );

  return {
    barsRef,
    sorting: sortType !== undefined,
    sortType,
    handleSort,
    setBars,
  };
};
