import { Container, Grid } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import { Slider } from "../slider/slider";
import {
  ButtonSection,
  Controls,
  Divider,
  Headline,
  SliderLabel,
  SliderSection,
  SortingVisualizerRoot,
} from "./sorting-visualizer.styled";

export interface SortingVisualizerProps {
  chart?: ReactNode;
  buttons?: ReactNode[];
  generateNewButton: ReactNode;
  defaultSpeed?: number;
  defaultArrayLength?: number;
  onArrayLengthChange?: (value: number) => void;
  onSpeedChange?: (value: number) => void;
}

export const SortingVisualizer: FC<SortingVisualizerProps> = (props) => {
  const {
    chart,
    buttons,
    defaultArrayLength,
    defaultSpeed,
    generateNewButton,
    onSpeedChange,
    onArrayLengthChange,
  } = props;

  return (
    <SortingVisualizerRoot>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12}>
            <Headline>sorting visualizer</Headline>
          </Grid>
          <Grid item xs={12} lg={9}>
            {chart}
          </Grid>
          <Grid item xs={12} lg={3}>
            <Controls>
              <SliderSection>
                <div>
                  <SliderLabel>array length</SliderLabel>
                  <Slider
                    min={2}
                    max={80}
                    defaultValue={defaultArrayLength}
                    onChangeCommitted={(value) =>
                      onArrayLengthChange && onArrayLengthChange(value)
                    }
                  />
                </div>
                <div>
                  <SliderLabel>speed</SliderLabel>
                  <Slider
                    min={4}
                    max={100}
                    defaultValue={defaultSpeed}
                    onChangeCommitted={(value) =>
                      onSpeedChange && onSpeedChange(value)
                    }
                  />
                </div>
                {generateNewButton}
              </SliderSection>
              <Divider />
              <ButtonSection>{buttons}</ButtonSection>
            </Controls>
          </Grid>
        </Grid>
      </Container>
    </SortingVisualizerRoot>
  );
};
