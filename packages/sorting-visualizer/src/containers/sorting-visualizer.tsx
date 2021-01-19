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
    { default: theme.colors.white, highlight: theme.colors.yellow[2] },
    waitTime,
  );
  const { sorting, sortType, handleSort, setBars } = useSorts({
    highlight,
    unhighlight,
    swap,
    array,
  });

  return (
    <SortingVisualizer
      defaultArrayLength={arrayLengthRef.current}
      defaultSpeed={speed}
      chart={<BarChart ref={svgRef} numbers={array} onLoadedBars={setBars} />}
      buttons={sortTypes.map((bt) => (
        <Button
          key={bt}
          active={sortType === bt}
          disabled={sorting}
          onClick={() => handleSort(bt)}
        >
          {bt}
        </Button>
      ))}
      generateNewButton={
        <Button
          color="yellow"
          onClick={() => {
            setRandomArray();
          }}
        >
          generate array
        </Button>
      }
      onArrayLengthChange={(value) => {
        arrayLengthRef.current = value;
        setRandomArray();
      }}
      onSpeedChange={setSpeed}
    />
  );
};
