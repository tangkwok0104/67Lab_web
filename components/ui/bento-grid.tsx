import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

interface BentoCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoCard({ title, description, icon, className }: BentoCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl border border-white/10 bg-card p-6 transition-all duration-300 hover:border-primary/50",
                "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
                "before:bg-gradient-to-br before:from-primary/10 before:to-transparent",
                "hover:before:opacity-100 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
                className
            )}
        >
            <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Glow effect on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 40%)"
                }}
            />
        </div>
    );
}
