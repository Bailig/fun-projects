import { Container, Grid } from "@material-ui/core";
import React, { FC, ReactElement, ReactNode } from "react";
import { Slider } from "../slider/slider";
import {
  SliderField,
  SliderLabel,
  SliderSection,
  SortingVisualizerRoot,
} from "./sorting-visualizer.styled";

export interface SortingVisualizerProps {
  chart?: ReactNode;
  buttons?: ReactElement[];
  defaultSpeed?: number;
  defaultArrayLength?: number;
  onArrayLengthChange?: (value: number) => void;
  onSpeedChange?: (value: number) => void;
}

export const SortingVisualizer: FC<SortingVisualizerProps> = (props) => {
  const {
    chart,
    buttons = [],
    defaultArrayLength,
    defaultSpeed,
    onSpeedChange,
    onArrayLengthChange,
  } = props;

  return (
    <SortingVisualizerRoot>
      <Container>
        <Grid container spacing={2} justify="center">
          {buttons.map((button) => (
            <Grid
              key={button.props.children as string}
              item
              xs={6}
              sm={3}
              lg={2}
            >
              {button}
            </Grid>
          ))}
        </Grid>

        <Grid container justify="center">
          <Grid item xs={12} lg={8}>
            {chart}
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={12} lg={8}>
            <SliderSection>
              <SliderField>
                <SliderLabel>array length</SliderLabel>
                <Slider
                  min={2}
                  max={200}
                  defaultValue={defaultArrayLength}
                  onChangeCommitted={(value) =>
                    onArrayLengthChange && onArrayLengthChange(value)
                  }
                />
              </SliderField>

              <SliderField>
                <SliderLabel>speed</SliderLabel>
                <Slider
                  min={4}
                  max={100}
                  defaultValue={defaultSpeed}
                  onChangeCommitted={(value) =>
                    onSpeedChange && onSpeedChange(value)
                  }
                />
              </SliderField>
            </SliderSection>
          </Grid>
        </Grid>
      </Container>
    </SortingVisualizerRoot>
  );
};
