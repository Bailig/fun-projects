import { Slider as MUISlider } from "@material-ui/core";
import styled, { css } from "styled-components";

const slider = {
  thumb: {
    height: {
      xs: 25,
      sm: 36,
    },
  },
  track: {
    height: {
      xs: 8,
      sm: 12,
    },
  },
};

export const SLider = styled(MUISlider)`
  ${({ theme }) => css`
    &.MuiSlider-root {
      height: ${slider.track.height.xs}px;
      padding: ${(slider.thumb.height.xs - slider.track.height.xs) / 2};
      ${theme.mediaQueries.sm} {
        height: ${slider.track.height.sm}px;
        padding: ${(slider.thumb.height.sm - slider.track.height.sm) / 2};
      }
    }

    .MuiSlider-thumb {
      width: 13px;
      border-radius: 20px;
      box-shadow: ${theme.shadows[1]};
      background: ${theme.colors.yellow};

      height: ${slider.thumb.height.xs}px;
      margin-top: -${(slider.thumb.height.xs - slider.track.height.xs) / 2}px;
      ${theme.mediaQueries.sm} {
        height: ${slider.thumb.height.sm}px;
        margin-top: -${(slider.thumb.height.sm - slider.track.height.sm) / 2}px;
      }
    }

    .MuiSlider-track,
    .MuiSlider-rail {
      border-radius: 20px;
      background: ${theme.colors.blue};

      height: ${slider.track.height.xs}px;
      ${theme.mediaQueries.sm} {
        height: ${slider.track.height.sm}px;
      }
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
