import { createMuiTheme } from "@material-ui/core";
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints";
import { always, ascend, pipe, sort, tail, values } from "ramda";

const mui = createMuiTheme();

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];

const colors = {
  primary: [
    mui.palette.primary.dark,
    mui.palette.primary.main,
    mui.palette.primary.light,
  ],
  secondary: [
    mui.palette.secondary.dark,
    mui.palette.secondary.main,
    mui.palette.secondary.light,
  ],
};

const space = [
  mui.spacing(0),
  mui.spacing(1),
  mui.spacing(2),
  mui.spacing(3),
  mui.spacing(4),
];

const breakpoints = pipe<BreakpointValues, number[], number[], number[]>(
  values,
  sort(ascend(always)),
  tail,
)(mui.breakpoints.values);

const mediaQueries = {
  sm: mui.breakpoints.up("sm"),
  md: mui.breakpoints.up("md"),
  lg: mui.breakpoints.up("lg"),
  xl: mui.breakpoints.up("xl"),
};

export const defaultTheme = {
  mui,
  systemUI: {
    fontSizes,
    colors,
    space,
    breakpoints,
    mediaQueries,
    shadows: mui.shadows as string[],
    transitions: mui.transitions,
  },
};

export type Theme = typeof defaultTheme;
export type MuiTheme = typeof defaultTheme.mui;
export type SystemUITheme = typeof defaultTheme.systemUI;
