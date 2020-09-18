import React from "react";
import { AppBar } from "./app-bar";

export const Default = () => (
  <AppBar
    activeTool="brush"
    backgroundColor="#fff"
    brushColor="#000"
    brushSize={20}
  />
);

export default {
  title: "paint-clone/AppBar",
  component: AppBar,
};
