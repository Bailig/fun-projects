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
      border-radius: 6px;
      background: ${theme.colors.yellow[2]};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
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
    .MuiSlider-thumb:hover {
      box-shadow: none;
    }
    .MuiSlider-thumb.Mui-focusVisible {
      box-shadow: 0px 0px 10px ${theme.colors.yellow[2]};
    }
  `}
`;
