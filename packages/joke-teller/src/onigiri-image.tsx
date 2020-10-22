import { useTheme } from "@material-ui/core";
import React, { FC } from "react";
import onigiriGIFUpSM from "./assets/onigiri-up-sm.gif";
import onigiriUpSM from "./assets/onigiri-up-sm.png";
import onigiriGIFXS from "./assets/onigiri-xs.gif";
import onigiriXS from "./assets/onigiri-xs.png";
import { OnigiriImageRoot } from "./onigiri-image.styled";

export interface OnigiriImageProps {
  animated: boolean;
}

export const OnigiriImage: FC<OnigiriImageProps> = (props) => {
  const { animated } = props;
  const theme = useTheme();

  return (
    <picture>
      <source
        media={theme.breakpoints.down("xs").replace("@media ", "")}
        srcSet={animated ? onigiriGIFXS : onigiriXS}
      />
      <source
        media={theme.breakpoints.up("sm").replace("@media ", "")}
        srcSet={animated ? onigiriGIFUpSM : onigiriUpSM}
      />
      <OnigiriImageRoot src={onigiriUpSM} alt="onigiri" />
    </picture>
  );
};
