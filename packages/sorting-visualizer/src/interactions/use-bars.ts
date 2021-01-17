import { select } from "d3";
import { useCallback } from "react";

export interface Bar {
  node: SVGRectElement;
  value: number;
}

export const useBars = (
  colors: { default: string; highlight: string },
  wait: number,
) => {
  const setFill = useCallback(
    (color: string, bar: Bar) => {
      return select(bar.node)
        .transition()
        .duration(wait)
        .attr("fill", color)
        .end();
    },
    [wait],
  );

  const highlight = useCallback((bar: Bar) => setFill(colors.highlight, bar), [
    colors.highlight,
    setFill,
  ]);

  const unhighlight = useCallback((bar: Bar) => setFill(colors.default, bar), [
    colors.default,
    setFill,
  ]);

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
