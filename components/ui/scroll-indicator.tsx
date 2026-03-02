"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function GlobalScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide the indicator if scrolled past 100px
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check in case they load the page halfway down
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
                    aria-hidden="true"
                >
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/80">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        className="flex h-10 w-6 justify-center rounded-full border border-white/20 bg-background/50 p-1 backdrop-blur-sm"
                    >
                        <ChevronDown className="h-4 w-4 text-primary" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
