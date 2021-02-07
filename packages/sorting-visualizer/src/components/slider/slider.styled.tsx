import { Slider as MUISlider } from "@material-ui/core";
import styled, { css } from "styled-components";

const slider = {
  thumb: {
    height: 24,
    shadow: "5px 5px 15px rgba(136, 160, 183, 0.25)",
  },
  track: {
    height: 8,
  },
};

export const SliderRoot = styled(MUISlider)`
  ${({ theme, value }) => css`
    &.MuiSlider-root {
      height: ${slider.track.height}px;
      padding: ${(slider.thumb.height - slider.track.height) / 2}px 0;
    }

    .MuiSlider-thumb {
      margin-top: -${(slider.thumb.height - slider.track.height) / 2}px;
      height: ${slider.thumb.height}px;
      width: ${slider.thumb.height}px;
      background: ${theme.colors.primary};
      border-radius: 20px;

      &:hover,
      &.MuiSlider-active,
      &.Mui-focusVisible {
        box-shadow: ${slider.thumb.shadow};
      }

      &::before {
        content: "${value}";
        line-height: ${slider.thumb.height}px;
        padding: 0 12px;
        font-size: 14px;
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        box-shadow: ${slider.thumb.shadow};
        border-radius: 20px;
        position: absolute;
        top: 0;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }

    .MuiSlider-track,
    .MuiSlider-rail {
      height: ${slider.track.height}px;
      background: ${theme.colors.white};
      box-shadow: inset -5px -5px 3px rgba(255, 255, 255, 0.2),
        inset 3px 3px 5px rgba(136, 160, 183, 0.35);
      border-radius: 4px;
      opacity: 1;
    }
  `}
`;
