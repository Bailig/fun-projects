import { useTheme } from "@fun-projects/ui";
import { scaleLinear } from "d3";
import React, { FC, useMemo, useRef, useState } from "react";
import { BarChart, Button, SortingVisualizer } from "../components";
import { SortType, useArray, useBars, useSorts } from "../interactions";

const sortTypes: SortType[] = ["bubble", "selection", "merge", "quick"];

export const SortingVisualizerContainer: FC = () => {
  const theme = useTheme();
  const svgRef = useRef<HTMLDivElement>(null);
  const { arrayLengthRef, array, setRandomArray } = useArray();
  const [speed, setSpeed] = useState(80);
  const waitTime = useMemo(() => scaleLinear([100, 1], [0, 1000])(speed), [
    speed,
  ]);
  const { highlight, unhighlight, swap } = useBars(
    { default: theme.colors.primary, highlight: theme.colors.black },
    waitTime,
  );
  const {
    sorting,
    sortType,
    handleSort,
    handleSortType,
    stopSorting,
    setBars,
  } = useSorts({
    highlight,
    unhighlight,
    swap,
    array,
  });

  return (
    <SortingVisualizer
      sorting={sorting}
      defaultArrayLength={arrayLengthRef.current}
      defaultSpeed={speed}
      chart={<BarChart ref={svgRef} numbers={array} onLoadedBars={setBars} />}
      buttons={sortTypes.map((s) => (
        <Button
          key={s}
          color="white"
          active={sortType === s}
          disabled={sortType === s}
          onClick={() => handleSortType(s)}
        >
          {s}
        </Button>
      ))}
      onSort={handleSort}
      onGenerateNew={() => {
        stopSorting();
        setRandomArray();
      }}
      onArrayLengthChange={(value) => {
        arrayLengthRef.current = value;
        if (!sorting) {
          setRandomArray();
        }
      }}
      onSpeedChange={setSpeed}
    />
  );
};
