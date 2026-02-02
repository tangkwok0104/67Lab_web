"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const stats = [
        { label: "67+ Projects", value: "67+" },
        { label: "100% On-Time", value: "100%" },
        { label: "24/7 In the Lab", value: "24/7" },
        { label: "∞ Coffee", value: "∞" },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden px-4 pt-32">
            {/* Spotlight Effect */}
            <Spotlight />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-5xl text-center"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                    <Badge variant="outline" className="border-primary/20 bg-primary/10 px-4 py-2 text-sm">
                        🔬 Always in the Lab
                    </Badge>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="mb-6 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    We Cook Your AI MVPs.{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        Fast.
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    variants={itemVariants}
                    className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
                >
                    From raw ideas to deployed intelligence. 67Lab.ai is the engine for your next shift.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link href="/feedback">
                        <ShimmerButton className="min-w-[200px]">
                            Start Building
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </ShimmerButton>
                    </Link>
                    <Link href="/products">
                        <Button
                            variant="outline"
                            size="lg"
                            className="min-w-[200px] border-white/20 bg-transparent hover:bg-white/5"
                        >
                            View Products
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-3xl font-bold text-primary md:text-4xl">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
