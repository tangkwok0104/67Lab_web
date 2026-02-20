"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export interface AutomationCardProps {
    title: string;
    description: string;
    type: "B2B" | "B2C";
    hoursSaved: number;
    index: number;
    icon: React.ElementType;
}

export function AutomationCard({
    title,
    description,
    type,
    hoursSaved,
    index,
    icon: Icon,
}: AutomationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
        >
            {/* Background Gradient Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                        <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
                        {type}
                    </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-primary">
                    {title}
                </h3>
                <p className="mb-6 text-sm text-white/60 line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-sm text-primary">
                    <Clock className="h-4 w-4" />
                    <span className="font-semibold">{hoursSaved} Hrs Saved / Mo</span>
                </div>

                <div className="flex items-center gap-1 text-sm font-medium text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Explore <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </motion.div>
    );
}
