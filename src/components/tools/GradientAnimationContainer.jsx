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
    "left-to-right": "to right",
    "right-to-left": "to left",
    "top-to-bottom": "to bottom",
    "bottom-to-top": "to top",
    "diagonal": "to bottom-right",
    "checkerboard": "to bottom right",
    "moving-gradient": "to right"
  };

  const speedDurations = {
    slow: 10,
    medium: 5,
    fast: 2,
  };

  const gradientEffect = {
    linear: `linear-gradient(${directionClasses[direction] || "to right"}, ${color1}, ${color2}, ${color3}, ${color4})`,
    radial: `radial-gradient(circle, ${color1}, ${color2}, ${color3})`,
    conic: `conic-gradient(from ${color1} at 0%, ${color2} at 50%, ${color3} at 100%)`,
    diagonal: `linear-gradient(to bottom right, ${color1}, ${color2}, ${color3}, ${color4})`,
    checkerboard: `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`,
    "moving-gradient": `linear-gradient(to right, ${color1}, ${color2}, ${color3}, ${color4})`
  };

  const animationClass = {
    static: "",
    sliding: "bg-[length:200%_200%] animate-slide",
    pulsing: "animate-pulse",
    circular: "animate-rotate",
    zigzag: "animate-zigzag",
    water: "animate-wave",
  };

  // Inline styles for gradient background
  const gradientStyle = {
    backgroundImage: gradientEffect[effect] || gradientEffect.linear,
  };

  return (
    <motion.div
      className={`w-full h-full flex justify-center rounded-lg items-center ${animationClass[movement]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: speedDurations[speed] }}
      style={gradientStyle}
    >
      {children}
    </motion.div>
  );
};

export default GradientAnimationContainer;