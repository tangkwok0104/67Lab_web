"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    className?: string;
}

export function ShimmerButton({
    children,
    shimmerColor = "#06b6d4",
    shimmerSize = "0.1em",
    borderRadius = "0.75rem",
    className,
    ...props
}: ShimmerButtonProps) {
    return (
        <button
            className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]",
                className
            )}
            style={{
                borderRadius,
            }}
            {...props}
        >
            {/* Shimmer effect */}
            <div
                className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                    backgroundSize: "200% 100%",
                }}
            />

            {/* Button content */}
            <span className="relative z-10">{children}</span>

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl"
                style={{
                    background: `radial-gradient(circle, ${shimmerColor}40 0%, transparent 70%)`,
                }}
            />
        </button>
    );
}
