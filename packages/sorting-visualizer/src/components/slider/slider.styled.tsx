import { Slider as MUISlider } from "@material-ui/core";
import styled, { css } from "styled-components";

const slider = {
  thumb: {
    height: 36,
  },
  track: {
    height: 12,
  },
};

export const SLider = styled(MUISlider)`
  ${({ theme }) => css`
    &.MuiSlider-root {
      height: ${slider.track.height}px;
      padding: ${(slider.thumb.height - slider.track.height) / 2};
    }

    .MuiSlider-thumb {
      height: ${slider.thumb.height}px;
      margin-top: -${(slider.thumb.height - slider.track.height) / 2}px;
      width: 13px;
      border-radius: 20px;
      box-shadow: ${theme.shadows[1]};
      background: ${theme.colors.yellow};
    }

    .MuiSlider-track,
    .MuiSlider-rail {
      height: ${slider.track.height}px;
      border-radius: 20px;
      background: ${theme.colors.blue};
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
