import { Slider as MUISlider } from "@material-ui/core";
import styled, { css } from "styled-components";

const slider = {
  thumb: {
    height: 48,
  },
  track: {
    height: 12,
  },
};

export const SliderRoot = styled(MUISlider)`
  ${({ theme }) => css`
    &.MuiSlider-root {
      height: ${slider.track.height}px;
      padding: ${(slider.thumb.height - slider.track.height) / 2}px 0;
    }

    .MuiSlider-thumb {
      width: 12px;
      border-radius: 20px;
      box-shadow: ${theme.shadows[1]};
      background: ${theme.colors.yellow};

      height: ${slider.thumb.height}px;
      margin-top: -${(slider.thumb.height - slider.track.height) / 2}px;
    }

    .MuiSlider-track,
    .MuiSlider-rail {
      border-radius: 20px;
      background: ${theme.colors.blue};

      height: ${slider.track.height}px;
    }

    .MuiSlider-rail {
      box-shadow: ${theme.shadows[1]};
    }

    .MuiSlider-thumb:hover {
      box-shadow: ${theme.shadows[1]};
    }

    .MuiSlider-thumb.Mui-focusVisible {
      box-shadow: ${theme.shadows[0]};
    }
  `}
`;
