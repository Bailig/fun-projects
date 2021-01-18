import { useTheme } from "@fun-projects/ui";
import { randomArray } from "@fun-projects/utils";
import { scaleLinear } from "d3";
import React, { FC, useMemo, useRef, useState } from "react";
import { BarChart, Button, SortingVisualizer } from "../components";
import { useBars, useSorts } from "../interactions";

type ButtonType = "bubble" | "selection" | "merge" | "quick";
const buttonTypes: ButtonType[] = ["bubble", "selection", "merge", "quick"];

export const SortingVisualizerContainer: FC = () => {
  const theme = useTheme();
  const svgRef = useRef<HTMLDivElement>(null);
  const numberCountRef = useRef(15);
  const [array, setArray] = useState(
    randomArray(numberCountRef.current, numberCountRef.current * 2),
  );
  const [speed, setSpeed] = useState(80);
  const waitTime = useMemo(() => scaleLinear([100, 1], [0, 1000])(speed), [
    speed,
  ]);
  const { highlight, unhighlight, swap } = useBars(
    { default: theme.colors.white, highlight: theme.colors.yellow[0] },
    waitTime,
  );
  const { sortHandlerMap, setBars } = useSorts({
    highlight,
    unhighlight,
    swap,
    array,
  });
  const [buttonType, setButtonType] = useState<ButtonType>();

  return (
    <SortingVisualizer
      defaultArrayLength={numberCountRef.current}
      defaultSpeed={speed}
      chart={<BarChart ref={svgRef} numbers={array} onLoadedBars={setBars} />}
      buttons={buttonTypes.map((bt) => (
        <Button
          key={bt}
          active={buttonType === bt}
          disabled={buttonType !== undefined}
          onClick={async () => {
            setButtonType(bt);
            await sortHandlerMap[bt]();
            setButtonType(undefined);
          }}
        >
          {bt}
        </Button>
      ))}
      onArrayLengthChange={(value) => {
        numberCountRef.current = value;
      }}
      onSpeedChange={setSpeed}
      onGenerateNew={() =>
        randomArray(numberCountRef.current, numberCountRef.current * 2)
      }
    />
  );
};
