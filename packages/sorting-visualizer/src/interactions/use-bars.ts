import { select } from "d3";
import { useCallback } from "react";

export interface Bar {
  node: SVGRectElement;
  value: number;
}

const setFill = (color: string) => (bar: Bar) => {
  return select(bar.node).attr("fill", color);
};

export const useBars = (
  colors: { default: string; highlight: string },
  wait: number,
) => {
  const highlight = useCallback(setFill(colors.highlight), [colors.highlight]);

  const unhighlight = useCallback(setFill(colors.default), [colors.default]);

  const swap = useCallback(
    async (bars: Bar[], index1: number, index2: number) => {
      if (index1 === index2) return;
      const bar1 = select(bars[index1].node);
      const bar2 = select(bars[index2].node);

      const x1 = +bar1.attr("x");
      const x2 = +bar2.attr("x");
      await Promise.all([
        bar1.transition().duration(wait).attr("x", x2).end(),
        bar2.transition().duration(wait).attr("x", x1).end(),
      ]);

      const tmp = bars[index1];
      bars[index1] = bars[index2];
      bars[index2] = tmp;
    },
    [wait],
  );

  return { highlight, unhighlight, swap };
};
