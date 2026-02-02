"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedBeam, AnimatedBeamContainer } from "@/components/ui/animated-beam";
import { Brain, Database, Cpu, Zap, Globe, Lock } from "lucide-react";

export function LabView() {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const node1Ref = useRef<HTMLDivElement>(null);
    const node2Ref = useRef<HTMLDivElement>(null);
    const node3Ref = useRef<HTMLDivElement>(null);
    const node4Ref = useRef<HTMLDivElement>(null);
    const node5Ref = useRef<HTMLDivElement>(null);
    const node6Ref = useRef<HTMLDivElement>(null);

    const nodes = [
        { ref: node1Ref, icon: Brain, label: "AI Models", color: "text-purple-400" },
        { ref: node2Ref, icon: Database, label: "Data Layer", color: "text-blue-400" },
        { ref: node3Ref, icon: Cpu, label: "Processing", color: "text-green-400" },
        { ref: node4Ref, icon: Zap, label: "Real-time", color: "text-yellow-400" },
        { ref: node5Ref, icon: Globe, label: "APIs", color: "text-cyan-400" },
        { ref: node6Ref, icon: Lock, label: "Security", color: "text-red-400" },
    ];

    return (
        <section className="relative px-4 py-32">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Inside the <span className="text-primary">Lab</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Where ideas transform into intelligence. Watch how we connect the dots.
                    </p>
                </motion.div>

                <AnimatedBeamContainer className="mx-auto h-[600px] max-w-4xl">
                    <div ref={containerRef} className="relative h-full w-full">
                        {/* Center Node - 67Lab */}
                        <div
                            ref={centerRef}
                            className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/20 to-accent/20 shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-sm"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">67</div>
                                <div className="text-xs font-medium text-foreground">Lab.ai</div>
                            </div>
                        </div>

                        {/* Surrounding Nodes in Circular Pattern */}
                        {nodes.map((node, index) => {
                            const angle = (index * 360) / nodes.length;
                            const radius = 220;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;
                            const Icon = node.icon;

                            return (
                                <div key={index}>
                                    <div
                                        ref={node.ref}
                                        className="absolute z-10 flex h-20 w-20 items-center justify-center rounded-xl border border-white/20 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                                        style={{
                                            left: `calc(50% + ${x}px)`,
                                            top: `calc(50% + ${y}px)`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        <div className="text-center">
                                            <Icon className={`mx-auto h-6 w-6 ${node.color}`} />
                                            <div className="mt-1 text-[10px] font-medium text-muted-foreground">
                                                {node.label}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Beam from center to node */}
                                    <AnimatedBeam
                                        containerRef={containerRef}
                                        fromRef={centerRef}
                                        toRef={node.ref}
                                        duration={3}
                                        delay={index * 0.3}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </AnimatedBeamContainer>
            </div>
        </section>
    );
}
