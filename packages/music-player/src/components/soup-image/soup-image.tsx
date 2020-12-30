import { useTheme } from "@material-ui/core";
import React, { FC, memo } from "react";
import soupGIFUpSM from "../../assets/soup-up-sm.gif";
import soupUpSM from "../../assets/soup-up-sm.png";
import soupGIFXS from "../../assets/soup-xs.gif";
import soupXS from "../../assets/soup-xs.png";
import { SoupImageRoot } from "./soup-image.styled";

export interface SoupImageProps {
  animated: boolean;
}

export const SoupImage: FC<SoupImageProps> = memo((props) => {
  const { animated } = props;
  const theme = useTheme();

  return (
    <SoupImageRoot
      animated={animated}
      sources={[
        {
          media: theme.breakpoints.down("xs").replace("@media ", ""),
          src: soupXS,
          animatedSrc: soupGIFXS,
        },
        {
          media: theme.breakpoints.up("sm").replace("@media ", ""),
          src: soupUpSM,
          animatedSrc: soupGIFUpSM,
        },
      ]}
      alt="soup"
    />
  );
});
