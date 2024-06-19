"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GradientAnimationContainer from "./GradientAnimationContainer";
import { Separator } from "@/components/ui/separator";

const GradientAnimationGenerator = () => {
  const [direction, setDirection] = useState("left-to-right");
  const [speed, setSpeed] = useState("medium");
  const [movement, setMovement] = useState("static");
  const [effect, setEffect] = useState("linear");
  const [color1, setColor1] = useState("#0077b6");
  const [color2, setColor2] = useState("#00b2ff");
  const [color3, setColor3] = useState("#ffb703");
  const [color4, setColor4] = useState("#fb8500");

  const containerCode = `<GradientAnimationContainer
  direction="${direction}"
  speed="${speed}"
  movement="${movement}"
  effect="${effect}"
  color1="${color1}"
  color2="${color2}"
  color3="${color3}"
  color4="${color4}"
>
  <p className="text-slate-50 h-[300px] bg-transparent flex justify-center items-center w-full text-center">
    Live gradient preview
  </p>
</GradientAnimationContainer>`;

  const exampleContainerCode = `<GradientAnimationContainer
         direction="top-to-bottom"
         speed="fast"
         movement="sliding"
         effect="linear"
         color1="#ff0000"
         color2="#00ff00"
         color3="#0000ff"
         color4="#ffff00"
       >
<p className="text-slate-50 h-[300px] bg-transparent flex justify-center items-center w-full text-center">
Live gradient preview
</p>
</GradientAnimationContainer>`;

  const componentCode = `
"use client";
import React from "react";
import { motion } from "framer-motion";

const GradientAnimationContainer = ({
  children,
  direction,
  speed,
  movement,
  effect,
  color1,
  color2,
  color3,
  color4,
}) => {
  const directionClasses = {
    "left-to-right": "bg-gradient-to-r",
    "right-to-left": "bg-gradient-to-l",
    "top-to-bottom": "bg-gradient-to-b",
    "bottom-to-top": "bg-gradient-to-t",
  };

  const speedDurations = {
    slow: 10,
    medium: 5,
    fast: 2,
  };

  const gradientEffect = {
    linear: \`from-[\${color1}] via-[\${color2}] to-[\${color3}]\`,
    radial: \`bg-radial from-[\${color1}] via-[\${color2}] to-[\${color3}]\`,
    conic: \`bg-conic from-[\${color1}] via-[\${color2}] to-[\${color3}] via-[\${color4}]\`,
  };

  const animationClass = {
    static: "",
    sliding: "bg-[length:200%_200%] animate-slide",
    pulsing: "animate-pulse",
  };

  return (
    <motion.div
      className={\`w-full h-full flex justify-center rounded-lg items-center \${directionClasses[direction]} \${animationClass[movement]} \${gradientEffect[effect]}\`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: speedDurations[speed] }}
      style={{
        backgroundImage: \`linear-gradient(to right, \${color1}, \${color2}, \${color3}, \${color4})\`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default GradientAnimationContainer;
`;

  const [showCode, setShowCode] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(containerCode);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const handleCodeCopyToClipboard = () => {
    navigator.clipboard.writeText(componentCode);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const handleExampleCodeCopyToClipboard = () => {
    navigator.clipboard.writeText(exampleContainerCode);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gradient Animation Generator
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Create beautiful gradient animations for your website.
            </p>
          </div>
          <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="grid gap-2">
              <label htmlFor="direction" className="text-sm font-medium">
                Direction
              </label>
              <Select
                id="direction"
                value={direction}
                onValueChange={setDirection}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left-to-right">Left to Right</SelectItem>
                  <SelectItem value="right-to-left">Right to Left</SelectItem>
                  <SelectItem value="top-to-bottom">Top to Bottom</SelectItem>
                  <SelectItem value="bottom-to-top">Bottom to Top</SelectItem>
                  <SelectItem value="diagonal">Diagonal</SelectItem>
                  <SelectItem value="moving-gradient">
                    Moving Gradient
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="speed" className="text-sm font-medium">
                Speed
              </label>
              <Select id="speed" value={speed} onValueChange={setSpeed}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Speed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slow">Slow</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="fast">Fast</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="movement" className="text-sm font-medium">
                Movement
              </label>
              <Select
                id="movement"
                value={movement}
                onValueChange={setMovement}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Movement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="static">Static</SelectItem>
                  <SelectItem value="sliding">Sliding</SelectItem>
                  <SelectItem value="pulsing">Pulsing</SelectItem>
                  <SelectItem value="circular">Circular</SelectItem>
                  <SelectItem value="zigzag">Zigzag</SelectItem>
                  <SelectItem value="water">Wave</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="effect" className="text-sm font-medium">
                Effect
              </label>
              <Select id="effect" value={effect} onValueChange={setEffect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Effect" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linear">Linear</SelectItem>
                  <SelectItem value="radial">Radial</SelectItem>
                  <SelectItem value="conic">Conic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-4 md:grid-cols-2 w-full">
              <div className="grid gap-2 w-full">
                <label htmlFor="color1" className="text-sm font-medium">
                  Color 1
                </label>
                <Input
                  id="color1"
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-full h-[45px] rounded-md p-0 m-0"
                />
              </div>
              <div className="grid gap-2 w-full">
                <label htmlFor="color2" className="text-sm font-medium">
                  Color 2
                </label>
                <Input
                  id="color2"
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-full h-[45px] rounded-md p-0 m-0"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 w-full">
              <div className="grid gap-2 w-full">
                <label htmlFor="color3" className="text-sm font-medium">
                  Color 3
                </label>
                <Input
                  id="color3"
                  type="color"
                  value={color3}
                  onChange={(e) => setColor3(e.target.value)}
                  className="w-full h-[45px] rounded-md p-0 m-0"
                />
              </div>
              <div className="grid gap-2 w-full">
                <label htmlFor="color4" className="text-sm font-medium">
                  Color 4
                </label>
                <Input
                  id="color4"
                  type="color"
                  value={color4}
                  onChange={(e) => setColor4(e.target.value)}
                  className="w-full h-[45px] rounded-md p-0 m-0"
                />
              </div>
            </div>
          </div>
          <GradientAnimationContainer
            direction={direction}
            speed={speed}
            movement={movement}
            effect={effect}
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
          >
            <p className="text-slate-50 h-[300px] bg-transparent flex justify-center items-center w-full text-center">
              Live gradient preview
            </p>
          </GradientAnimationContainer>
          <div className="flex gap-4">
            <Button
              onClick={() => setShowCode((prev) => !prev)}
              variant={showCode ? "solid" : "outline"}
            >
              {showCode ? "Hide Code" : "Show Code"}
            </Button>
          </div>
          {showCode && (
            <div className="w-full max-w-full overflow-y-auto whitespace-pre-wrap rounded-lg relative bg-gray-900 p-4 text-white">
              <pre className="font-mono text-sm">{containerCode}</pre>
              <Button
                onClick={handleCopyToClipboard}
                className="absolute top-2 right-2"
                variant="ghost"
              >
                {copiedToClipboard ? (
                  "Copied!"
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                )}
              </Button>
            </div>
          )}
        </div>
        <Separator className="my-4" />
        <div className="w-full p-2 space-y-1">
          <h2 className="text-3xl font-bold">Installation</h2>
          <p className="text-md text-muted-foreground pb-4">
            Copy and paste the following code into your project.
          </p>
          <div className="w-full max-w-4xl overflow-y-auto whitespace-pre-wrap rounded-lg relative bg-slate-950 px-4 py-2 mt-2 text-white">
            <pre className="font-mono text-sm">{componentCode}</pre>
            <Button
              onClick={handleCodeCopyToClipboard}
              className="absolute top-2 right-2"
              variant="ghost"
            >
              {copiedToClipboard ? (
                "Copied!"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
        <div className="space-y-1 py-4 px-2">
          <h2 className="text-3xl font-bold leading-none">Usage</h2>
          <p className="text-md text-muted-foreground pb-4">
            Once you have installed the necessary dependencies and created the
            components, you can use the GradientAnimationContainer in your
            project by importing it and adding it to your JSX:
          </p>
          <div className="w-full max-w-4xl overflow-y-auto whitespace-pre-wrap rounded-lg relative bg-slate-950 px-4 py-2 mt-2 text-white">
            <pre className="font-mono text-sm">{exampleContainerCode}</pre>
            <Button
              onClick={handleExampleCodeCopyToClipboard}
              className="absolute top-2 right-2"
              variant="ghost"
            >
              {copiedToClipboard ? (
                "Copied!"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientAnimationGenerator;
