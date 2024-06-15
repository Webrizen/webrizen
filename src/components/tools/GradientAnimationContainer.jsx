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
  };

  const speedDurations = {
    slow: 10,
    medium: 5,
    fast: 2,
  };

  const animationClass = {
    static: "",
    sliding: "bg-[length:200%_200%] animate-slide",
    pulsing: "animate-pulse",
  };

  // Determine the correct direction class based on the direction prop
  const gradientDirection = directionClasses[direction] || "to right";

  // Determine the correct gradient effect based on the effect prop
  const gradientEffect = {
    linear: `linear-gradient(${gradientDirection}, ${color1}, ${color2}, ${color3}, ${color4})`,
    radial: `radial-gradient(${color1}, ${color2}, ${color3})`,
    conic: `conic-gradient(from ${color1} at 0%, ${color2} at 50%, ${color3} at 100%)`,
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