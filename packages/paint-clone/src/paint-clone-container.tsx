import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { AppBar, ToolType } from "./app-bar";
import { appBarVariables } from "./app-bar.styled";
import { Canvas, MobileMessage } from "./paint-clone.styled";

interface StrokeBase {
  x: number;
  y: number;
  size: number;
}

interface BrushStoke extends StrokeBase {
  color: string;
  type: "brush";
}
interface EraserStoke extends StrokeBase {
  type: "eraser";
}

type Stroke = BrushStoke | EraserStoke;

export const PaintCloneContainer: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>();
  const isDrawingRef = useRef<boolean>(false);
  const drawnStokesRef = useRef<Stroke[]>([]);
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [brushColor, setBrushColor] = useState<string>("#000000");
  const [brushSize, setBrushSize] = useState<number>(10);
  const [activeTool, setActiveTool] = useState<ToolType>("brush");

  useEffect(() => {
    const canvas = canvasRef.current!;
    contextRef.current = canvas.getContext("2d")!;
  }, []);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current!;
    const context = contextRef.current!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - appBarVariables.height;
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, [backgroundColor]);

  const restoreDrawing = useCallback(() => {
    const context = contextRef.current!;
    const drawnStokes = drawnStokesRef.current!;

    drawnStokes.forEach((stroke, i) => {
      if (i === 0) return;
      context.beginPath();
      context.moveTo(drawnStokes[i - 1].x, drawnStokes[i - 1].y);
      context.lineWidth = stroke.size;
      context.lineCap = "round";
      if (stroke.type === "eraser") {
        context.strokeStyle = backgroundColor;
      } else {
        context.strokeStyle = stroke.color;
      }
      context.lineTo(stroke.x, stroke.y);
      context.stroke();
    });
  }, [backgroundColor]);

  useEffect(() => {
    initCanvas();
    restoreDrawing();
  }, [initCanvas, restoreDrawing]);

  const getMousePosition = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => {
    const boundaries = canvasRef.current!.getBoundingClientRect();
    return {
      x: event.clientX - boundaries.left,
      y: event.clientY - boundaries.top,
    };
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => {
    isDrawingRef.current = true;
    const context = contextRef.current!;
    const curserPosition = getMousePosition(e);
    context.moveTo(curserPosition.x, curserPosition.y);
    context.beginPath();
    context.lineCap = "round";
    if (activeTool === "eraser") {
      context.strokeStyle = backgroundColor;
      context.lineWidth = 50;
    } else {
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
    }
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => {
    if (!isDrawingRef.current) return;
    const context = contextRef.current!;

    const currentPosition = getMousePosition(e);
    context.lineTo(currentPosition.x, currentPosition.y);
    context.stroke();
    const stroke =
      activeTool === "brush"
        ? {
            x: currentPosition.x,
            y: currentPosition.y,
            size: brushSize,
            color: brushColor,
            type: activeTool,
          }
        : {
            x: currentPosition.x,
            y: currentPosition.y,
            size: 50,
            type: activeTool,
          };
    drawnStokesRef.current.push(stroke);
  };

  const handleMouseUp = () => {
    isDrawingRef.current = false;
  };

  const handleCanvasClear = () => {
    drawnStokesRef.current = [];
    initCanvas();
  };

  return (
    <>
      <AppBar
        activeTool={activeTool}
        backgroundColor={backgroundColor}
        brushColor={brushColor}
        brushSize={brushSize}
        onBackgroundColorChange={setBackgroundColor}
        onBrushColorChange={setBrushColor}
        onToolSelect={setActiveTool}
        onBrushSizeChange={setBrushSize}
        onCanvasClear={handleCanvasClear}
      />
      <Canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <MobileMessage>Please use application on larger screen</MobileMessage>
    </>
  );
};
