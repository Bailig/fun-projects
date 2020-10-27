import { useTheme } from "@material-ui/core";
import React, { FC } from "react";
import onigiriGIFUpSM from "./assets/onigiri-up-sm.gif";
import onigiriUpSM from "./assets/onigiri-up-sm.png";
import onigiriGIFXS from "./assets/onigiri-xs.gif";
import onigiriXS from "./assets/onigiri-xs.png";
import { OnigiriGIFRoot } from "./onigiri-image.styled";

export interface OnigiriImageProps {
  animated: boolean;
}

export const OnigiriImage: FC<OnigiriImageProps> = (props) => {
  const { animated } = props;
  const theme = useTheme();

  return (
    <OnigiriGIFRoot
      animated={animated}
      sources={[
        {
          media: theme.breakpoints.down("xs").replace("@media ", ""),
          src: onigiriXS,
          animatedSrc: onigiriGIFXS,
        },
        {
          media: theme.breakpoints.up("sm").replace("@media ", ""),
          src: onigiriUpSM,
          animatedSrc: onigiriGIFUpSM,
        },
      ]}
      alt="onigiri"
    />
  );
};
