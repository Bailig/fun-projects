import { useTheme } from "@fun-projects/ui";
import { max, range, scaleBand, scaleLinear, select } from "d3";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import { useMeasure } from "react-use";
import { BarChartRoot } from "./bar-chart.styled";

export interface BarChartProps {
  numbers: number[];
  onLoadedBars?: (bars: SVGRectElement[]) => void;
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, ref) => {
    const { numbers, onLoadedBars } = props;
    const rootRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const [setRef, { width: rootWidth }] = useMeasure();
    const theme = useTheme();

    useImperativeHandle(ref, () => rootRef.current!);

    useEffect(() => {
      if (!rootRef.current) return;
      setRef(rootRef.current as any);
    });

    useEffect(() => {
      if (!svgRef.current || numbers.length === 0) return;
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;

      const maxValue = max(numbers)!;
      const yScale = scaleLinear().domain([0, maxValue]).range([0, height]);

      const xScale = scaleBand<number>()
        .domain(range(0, numbers.length))
        .range([0, width])
        .padding(0.1);

      const g = select(svgRef.current).append("g");

      const bars = g
        .selectAll("rect")
        .data(numbers)
        .enter()
        .append("rect")
        .attr("fill", theme.colors.white)
        .attr("width", xScale.bandwidth())
        .attr("height", yScale)
        .attr("x", (_, i) => xScale(i) || null)
        .attr("y", (d) => height - yScale(d))
        .nodes();

      if (onLoadedBars) {
        onLoadedBars(bars);
      }

      return () => {
        g.remove();
      };
    }, [numbers, onLoadedBars, rootWidth, theme.colors.white]);

    return (
      <BarChartRoot ref={rootRef}>
        <svg ref={svgRef} height="100%" width="100%" />
      </BarChartRoot>
    );
  },
);
