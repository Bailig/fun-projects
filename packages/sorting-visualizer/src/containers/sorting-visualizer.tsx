import { randomArray } from "@fun-projects/utils";
import { max, range, scaleBand, scaleLinear, select } from "d3";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";

const width = 500;
const height = 500;
const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const colors = {
  primary: "grey",
  secondary: "lightblue",
};

interface Bar {
  node: SVGRectElement;
  value: number;
}

export const SortingVisualizerContainer: FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const barsRef = useRef<Bar[]>();
  const numberCountRef = useRef(10);
  const [array, setArray] = useState(
    randomArray(numberCountRef.current, numberCountRef.current * 2),
  );
  const [speed, setSpeed] = useState(80);

  const waitTime = useMemo(() => scaleLinear([100, 1], [1, 1000])(speed), [
    speed,
  ]);

  // initialize bars based on the array
  useEffect(() => {
    const maxValue = max(array)!;
    const yScale = scaleLinear().domain([0, maxValue]).range([0, innerHeight]);

    const xScale = scaleBand<number>()
      .domain(range(0, array.length))
      .range([0, innerWidth])
      .padding(0.1);

    const svg = select(svgRef.current).style("background-color", "pink");

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    barsRef.current = g
      .selectAll("rect")
      .data(array)
      .enter()
      .append("rect")
      .attr("fill", colors.primary)
      .attr("width", xScale.bandwidth())
      .attr("height", yScale)
      .attr("x", (_, i) => xScale(i) || null)
      .attr("y", (d) => innerHeight - yScale(d))
      .nodes()
      .map((n, i) => ({ value: array[i], node: n }));

    return () => {
      g.remove();
    };
  }, [array]);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const setFill = (color: string) => (bar: Bar) => {
    return select(bar.node)
      .transition()
      .duration(waitTime)
      .attr("fill", color)
      .end();
  };

  const highlight = setFill(colors.secondary);
  const unhighlight = setFill(colors.primary);

  const swap = async (bars: Bar[], index1: number, index2: number) => {
    if (index1 === index2) return;
    const bar1 = select(bars[index1].node);
    const bar2 = select(bars[index2].node);

    const x1 = +bar1.attr("x");
    const x2 = +bar2.attr("x");
    await Promise.all([
      bar1.transition().duration(waitTime).attr("x", x2).end(),
      bar2.transition().duration(waitTime).attr("x", x1).end(),
    ]);

    const tmp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = tmp;
  };

  const handleBubbleSort = async () => {
    if (barsRef.current === undefined) return;
    const bars = barsRef.current;

    for (let j = 1; j < bars.length; j++) {
      for (let i = 0; i < bars.length - j; i++) {
        const bar1 = bars[i];
        const bar2 = bars[i + 1];
        await highlight(bar1);
        await highlight(bar2);

        if (bar1.value >= bar2.value) {
          await swap(bars, i, i + 1);
        }
        await Promise.all([unhighlight(bar1), unhighlight(bar2)]);
      }
    }
  };

  const handleSelectionSort = async () => {
    if (barsRef.current === undefined) return;
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
  };

  const mergeSort = async (bars: Bar[], left = 0, right = bars.length - 1) => {
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
      await Promise.all([highlight(bar1), highlight(bar2)]);
      if (i !== bar2Index) {
        await swap(bars, i, bar2Index);
      }
      await Promise.all([unhighlight(bar1), unhighlight(bar2)]);
    }
  };

  const handleMergeSort = async () => {
    if (barsRef.current === undefined) return;
    await mergeSort(barsRef.current);
  };

  const positionItem = async (bars: Bar[], left: number, right: number) => {
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
      await unhighlight(bars[pivotIndex]);
    }

    return pivotIndex;
  };

  const quickSort = async (bars: Bar[], left = 0, right = bars.length - 1) => {
    if (left >= right) return bars;
    const partitionIndex = await positionItem(bars, left, right);
    await quickSort(bars, left, partitionIndex - 1);
    await quickSort(bars, partitionIndex + 1, right);
    return bars;
  };

  const handleQuickSort = async () => {
    if (barsRef.current === undefined) return;
    await quickSort(barsRef.current);
  };

  return (
    <>
      <button type="button" onClick={handleBubbleSort}>
        bubble sort
      </button>
      <button type="button" onClick={handleSelectionSort}>
        selection sort
      </button>
      <button type="button" onClick={handleMergeSort}>
        merge sort
      </button>
      <button type="button" onClick={handleQuickSort}>
        quick sort
      </button>
      <input
        type="number"
        minLength={1}
        min={2}
        max={60}
        defaultValue={numberCountRef.current}
        onChange={(e) => {
          numberCountRef.current = +e.currentTarget.value;
        }}
      />
      <button
        type="button"
        onClick={() =>
          setArray(
            randomArray(numberCountRef.current, numberCountRef.current * 2),
          )
        }
      >
        Generate
      </button>
      <input
        type="range"
        min="1"
        max="100"
        defaultValue={speed}
        onMouseUp={(e) => setSpeed(+e.currentTarget.value)}
      />
      <svg ref={svgRef} width={width} height={height} />
    </>
  );
};

// 曼听公园 总佛寺
// 星光夜市 六国水上夜市
// 勐泐大佛寺
