import { select } from "d3";
import React, { FC, useRef } from "react";

export const SortingVisualizerContainer: FC = () => {
  const svgRef = useRef(null);

  select(svgRef.current)
  .data([4, 8, 15, 16, 23, 42])
  return <svg ref={svgRef} />;
};
