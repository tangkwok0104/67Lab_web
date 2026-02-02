"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Spotlight() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Main spotlight that follows cursor */}
            <motion.div
                className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-[120px]"
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            {/* Static gradient beams */}
            <div className="absolute left-1/4 top-0 h-[800px] w-[1px] bg-gradient-to-b from-cyan-500/50 via-transparent to-transparent" />
            <div className="absolute right-1/4 top-0 h-[800px] w-[1px] bg-gradient-to-b from-blue-500/50 via-transparent to-transparent" />

            {/* Ambient glow */}
            <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>
    );
}
