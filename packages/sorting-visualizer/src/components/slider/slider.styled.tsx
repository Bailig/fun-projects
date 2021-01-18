import { Slider as MUISlider } from "@material-ui/core";
import styled, { css } from "styled-components";

const slider = {
  thumb: {
    height: 12,
  },
  rail: {
    height: 2,
  },
};

export const SliderRoot = styled(MUISlider)`
  ${({ theme }) => css`
    &.MuiSlider-root {
      height: ${slider.rail.height}px;
      padding: ${(slider.thumb.height - slider.rail.height) / 2}px 0;
    }

    .MuiSlider-thumb {
      width: 12px;
      border-radius: 20px;
      background: ${theme.colors.yellow[0]};

      height: ${slider.thumb.height}px;
      margin-top: -${(slider.thumb.height - slider.rail.height) / 2}px;
    }

    .MuiSlider-track,
    .MuiSlider-rail {
      border-radius: 1px;
      height: ${slider.rail.height}px;
    }
    .MuiSlider-rail {
      background: ${theme.colors.blue[1]};
    }
    ..MuiSlider-track {
      background: ${theme.colors.blue[2]};
    }

    .MuiSlider-rail,
    .MuiSlider-thumb:hover,
    .MuiSlider-thumb.Mui-focusVisible {
      box-shadow: none;
    }
  `}
`;
