import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/.{js,jsx}",
    "./components//*.{js,jsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: { "2xl": "1400px" },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slide: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulse: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.5 } },
        diagonal: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        checkerboard: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        "moving-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "shimmerx": {
  				from: {
  					backgroundPosition: '0 0',
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			},
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slide: "slide 10s ease infinite",
        pulse: "pulse 5s ease infinite",
        diagonal: "diagonal 10s ease infinite",
        checkerboard: "checkerboard 5s ease infinite",
        "moving-gradient": "moving-gradient 5s linear infinite",
        rotate: "rotate 2s linear infinite",
        zigzag: "zigzag 2s ease-in-out infinite",
        wave: "wave 2s ease-in-out infinite",
        shimmerx: 'shimmerx 2s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
};
