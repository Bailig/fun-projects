import { Container, Grid } from "@material-ui/core";
import React, { FC, ReactNode, useState } from "react";
import { Button } from "../button/button";
import { Slider } from "../slider/slider";
import { SortingText } from "./sorting-text";
import {
  ActionSection,
  Headline,
  SliderLabel,
  SliderSection,
  SortingVisualizerRoot,
  SortTypeSection,
} from "./sorting-visualizer.styled";

export interface SortingVisualizerProps {
  chart?: ReactNode;
  buttons?: ReactNode[];
  sorting?: boolean;
  defaultArrayLength: number;
  defaultSpeed?: number;
  onArrayLengthChange?: (value: number) => void;
  onSpeedChange?: (value: number) => void;
  onGenerateNew?: () => void;
  onSort?: () => void;
}

export const SortingVisualizer: FC<SortingVisualizerProps> = (props) => {
  const {
    chart,
    buttons,
    defaultArrayLength,
    defaultSpeed,
    sorting = false,
    onSort = () => {},
    onSpeedChange = () => {},
    onArrayLengthChange = () => {},
    onGenerateNew = () => {},
  } = props;
  const [arrayLength, setArrayLength] = useState(defaultArrayLength);
  const [sortedOnce, setSortedOnce] = useState(false);

  return (
    <SortingVisualizerRoot>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Headline>sorting visualizer</Headline>
          </Grid>

          <Grid item xs={12} lg={8}>
            {chart}
          </Grid>

          <Grid
            container
            item
            spacing={3}
            xs={12}
            lg={4}
            style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0 }}
          >
            <Grid item xs={12} sm={6} lg={12}>
              <SliderSection>
                <SliderLabel>array length</SliderLabel>
                <Slider
                  min={2}
                  max={80}
                  value={arrayLength}
                  onChange={setArrayLength}
                  onChangeCommitted={onArrayLengthChange}
                />

                <SliderLabel>slow</SliderLabel>
                <Slider
                  min={4}
                  max={100}
                  defaultValue={defaultSpeed}
                  onChangeCommitted={onSpeedChange}
                />
                <SliderLabel>fast</SliderLabel>
              </SliderSection>
            </Grid>

            <Grid item xs={12} sm={6} lg={12}>
              <SortTypeSection>{buttons}</SortTypeSection>
            </Grid>

            <Grid item xs={12}>
              <ActionSection showGenerateNewButton={sortedOnce}>
                <Button
                  color="white"
                  variant="outlined"
                  onClick={onGenerateNew}
                >
                  generate new
                </Button>

                <Button
                  active={sorting}
                  disabled={sorting}
                  onClick={() => {
                    setSortedOnce(true);
                    onSort();
                  }}
                >
                  {sorting ? <SortingText /> : "sort!"}
                </Button>
              </ActionSection>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SortingVisualizerRoot>
  );
};
