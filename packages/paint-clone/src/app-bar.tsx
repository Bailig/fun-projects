import React, { FC } from "react";
import { AppBarRoot } from "./app-bar.styled";

export type ToolType = "brush" | "eraser";

interface AppBarProps {
  activeTool: ToolType;
  backgroundColor: string;
  brushColor: string;
  brushSize: number;
  onDownload?: () => void;
  onCacheClear?: () => void;
  onCanvasClear?: () => void;
  onToolSelect?: (toolType: ToolType) => void;
  onBackgroundColorChange?: (color: string) => void;
  onBrushColorChange?: (color: string) => void;
  onBrushSizeChange?: (size: number) => void;
}

export const AppBar: FC<AppBarProps> = (props) => {
  const {
    activeTool,
    backgroundColor,
    brushColor,
    brushSize,
    onDownload,
    onCacheClear,
    onCanvasClear,
    onToolSelect = () => {},
    onBackgroundColorChange = () => {},
    onBrushColorChange = () => {},
    onBrushSizeChange = () => {},
  } = props;

  return (
    <AppBarRoot style={{ display: "flex" }}>
      <div>{activeTool}</div>
      <button type="button" onClick={() => onToolSelect("brush")}>
        brush
      </button>
      <input
        value={brushColor}
        autoComplete="off"
        onChange={(e) => onBrushColorChange(e.target.value)}
      />
      <div>brush size</div>
      <div>{brushSize}</div>
      <input
        type="range"
        min="1"
        max="50"
        value={brushSize}
        onChange={(e) => onBrushSizeChange(parseInt(e.target.value, 10))}
      />
      <input
        value={backgroundColor}
        autoComplete="off"
        onChange={(e) => onBackgroundColorChange(e.target.value)}
      />
      <button
        type="button"
        title="Eraser"
        onClick={() => onToolSelect("eraser")}
      >
        eraser
      </button>
      <button type="button" title="Clear" onClick={onCanvasClear}>
        clear
      </button>
      <button type="button" title="Clear cache" onClick={onCacheClear}>
        clear cache
      </button>
      <button type="button" title="Save image file" onClick={onDownload}>
        save image file
      </button>
    </AppBarRoot>
  );
};
