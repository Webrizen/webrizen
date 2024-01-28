// Import necessary libraries and components

"use client";
import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

export const MouseGradient = () => {
    return (
        <MouseImageTrail
            renderImageBuffer={50}
            rotationRange={25}
            gradients={[
                "linear-gradient(45deg, #FFF, #EEE)",
                "linear-gradient(45deg, #f1f1f1, #1f1f1f)",
                "linear-gradient(45deg, #1f1f1f, #000)",
            ]}


        >
            <section className="grid h-screen w-full place-content-center">
                <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black dark:text-slate-50">
                    ✨
                    <span>Our Clients</span>
                </p>
            </section>
        </MouseImageTrail>
    );
};

const MouseImageTrail = ({
    children,
    gradients, // Replace 'images' with 'gradients'
    renderImageBuffer,
    rotationRange,
}) => {
    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);
    const [scope, animate] = useAnimate();

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage();
        }
    };

    const calculateDistance = (x1, y1, x2, y2) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        // Using the Pythagorean theorem to calculate the distance
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    };


    const renderNextImage = () => {
        const gradientIndex = imageRenderCount.current % gradients.length; // Change 'images' to 'gradients'
        const selector = `[data-mouse-move-index="${gradientIndex}"]`;

        const el = document.querySelector(selector);

        el.style.top = `${lastRenderPosition.current.y}px`;
        el.style.left = `${lastRenderPosition.current.x}px`;
        el.style.zIndex = imageRenderCount.current.toString();

        const rotation = Math.random() * rotationRange;

        animate(
            selector,
            {
                opacity: [0, 1],
                transform: [
                    `translate(-50%, -25%) scale(0.5) ${gradientIndex % 2
                        ? `rotate(${rotation}deg)`
                        : `rotate(-${rotation}deg)`
                    }`,
                    `translate(-50%, -50%) scale(1) ${gradientIndex % 2
                        ? `rotate(-${rotation}deg)`
                        : `rotate(${rotation}deg)`
                    }`,
                ],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        animate(
            selector,
            {
                opacity: [1, 0],
            },
            { ease: "linear", duration: 0.5, delay: 5 }
        );

        imageRenderCount.current = imageRenderCount.current + 1;
    };

    return (
        <div
            ref={scope}
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}

            {gradients.map((gradient, index) => (
                <div
                    className="pointer-events-none absolute left-0 top-0 w-28 h-28 filter blur-3xl rounded-full bg-neutral-900 opacity-0"
                    style={{
                        background: gradient,
                    }}
                    key={index}
                    data-mouse-move-index={index}
                />
            ))}
        </div>
    );
};
