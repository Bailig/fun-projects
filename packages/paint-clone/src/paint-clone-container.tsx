import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { AppBar, ToolType } from "./app-bar";
import { appBarVariables } from "./app-bar.styled";
import { Canvas, MobileMessage } from "./paint-clone.styled";

const STROKES_STORAGE_KEY = "canvasStrokes";

const setStrokes = (strokes: Stroke[]) =>
  localStorage.setItem(STROKES_STORAGE_KEY, JSON.stringify(strokes));
const getStrokes = (): Stroke[] =>
  JSON.parse(localStorage.getItem(STROKES_STORAGE_KEY) || "[]");
const clearStrokes = () => localStorage.removeItem(STROKES_STORAGE_KEY);

export const PaintCloneContainer: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>();
  const drawingRef = useRef<boolean>(false);
  const stokesRef = useRef<Stroke[]>([]);
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [brushColor, setBrushColor] = useState<string>("#000000");
  const [brushSize, setBrushSize] = useState<number>(10);
  const [activeTool, setActiveTool] = useState<ToolType>("brush");
  const [downloadUrl, setDownloadUrl] = useState<string>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    contextRef.current = canvas.getContext("2d")!;
    stokesRef.current = getStrokes();
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
    const drawnStokes = stokesRef.current!;

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

  const getCanvasImageUrl = useCallback(
    () => canvasRef.current?.toDataURL("image/jpeg", 1),
    [],
  );

  useEffect(() => {
    initCanvas();
    restoreDrawing();
    setDownloadUrl(getCanvasImageUrl());
  }, [getCanvasImageUrl, initCanvas, restoreDrawing]);

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
    drawingRef.current = true;
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
    if (!drawingRef.current) return;
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
    stokesRef.current.push(stroke);
  };

  const handleMouseUp = () => {
    drawingRef.current = false;
    setStrokes(stokesRef.current);
    setDownloadUrl(getCanvasImageUrl());
  };

  const handleCanvasClear = () => {
    stokesRef.current = [];
    clearStrokes();
    initCanvas();
    setDownloadUrl(getCanvasImageUrl());
  };

  return (
    <>
      <AppBar
        activeTool={activeTool}
        backgroundColor={backgroundColor}
        brushColor={brushColor}
        brushSize={brushSize}
        downloadUrl={downloadUrl}
        onBackgroundColorChange={setBackgroundColor}
        onBrushColorChange={setBrushColor}
        onToolSelect={setActiveTool}
        onBrushSizeChange={setBrushSize}
        onCanvasClear={handleCanvasClear}
        onCacheClear={clearStrokes}
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

// types
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
