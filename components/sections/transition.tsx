"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, DollarSign } from "lucide-react";

export function Transition() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section ref={sectionRef} id="fleet-ai" className="relative overflow-hidden px-4 py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

            <motion.div
                style={{ opacity, scale }}
                className="mx-auto max-w-6xl"
            >
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Side - Finance Foundation */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                            <DollarSign className="h-4 w-4" />
                            The Foundation
                        </div>

                        <h3 className="text-3xl font-bold md:text-4xl">
                            Born in <span className="text-orange-400">Finance</span>
                        </h3>

                        <p className="text-lg text-muted-foreground">
                            We didn&apos;t start in Silicon Valley. We started in finance—managing
                            portfolios, optimizing strategies, solving real-world problems with real
                            constraints.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Financial modeling & analysis",
                                "Risk management systems",
                                "Data-driven decision making",
                                "Regulatory compliance automation",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side - AI Evolution */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <Zap className="h-4 w-4" />
                            The Evolution
                        </div>

                        <h3 className="text-3xl font-bold md:text-4xl">
                            Built for <span className="text-primary">AI Intelligence</span>
                        </h3>

                        <p className="text-lg text-muted-foreground">
                            That financial precision? We brought it to AI development. Every
                            MVP, every SaaS product, every integration—built with the same
                            discipline that managed billions.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "LLM integration & fine-tuning",
                                "AI-powered automation systems",
                                "Intelligent data pipelines",
                                "Production-ready ML models",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Connecting Arrow/Visual */}
                <div className="relative mt-16">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-20 bg-gradient-to-r from-orange-400 to-transparent" />
                            <TrendingUp className="h-8 w-8 text-primary" />
                            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
                        </div>
                    </div>
                    <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                        Financial Precision meets AI Intelligence
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
