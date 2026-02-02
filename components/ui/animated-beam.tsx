"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedBeamProps {
    containerRef: React.RefObject<HTMLElement | null>;
    fromRef: React.RefObject<HTMLElement | null>;
    toRef: React.RefObject<HTMLElement | null>;
    curvature?: number;
    reverse?: boolean;
    duration?: number;
    delay?: number;
}

export function AnimatedBeam({
    containerRef,
    fromRef,
    toRef,
    curvature = 0,
    reverse = false,
    duration = 2,
    delay = 0,
}: AnimatedBeamProps) {
    const [pathD, setPathD] = useState("");

    useEffect(() => {
        const updatePath = () => {
            if (!containerRef.current || !fromRef.current || !toRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const fromRect = fromRef.current.getBoundingClientRect();
            const toRect = toRef.current.getBoundingClientRect();

            const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
            const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
            const toX = toRect.left + toRect.width / 2 - containerRect.left;
            const toY = toRect.top + toRect.height / 2 - containerRect.top;

            const midX = (fromX + toX) / 2;
            const midY = (fromY + toY) / 2 + curvature;

            const path = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
            setPathD(path);
        };

        updatePath();
        window.addEventListener("resize", updatePath);
        return () => window.removeEventListener("resize", updatePath);
    }, [containerRef, fromRef, toRef, curvature]);

    return (
        <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-full"
            style={{ zIndex: 1 }}
        >
            <defs>
                <linearGradient
                    id={`beam-gradient-${delay}`}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
            </defs>
            <motion.path
                d={pathD}
                stroke={`url(#beam-gradient-${delay})`}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear",
                }}
            />
        </svg>
    );
}

interface AnimatedBeamContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function AnimatedBeamContainer({ children, className }: AnimatedBeamContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {children}
        </div>
    );
}
