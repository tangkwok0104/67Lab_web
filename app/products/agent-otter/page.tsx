"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CheckCircle2, ArrowRight, Brain, Zap, LineChart, Palette, ExternalLink, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AgentOtterPage() {
    const capabilities = [
        {
            title: "Contextual Intelligence",
            description: "Standard bots rely on rigid regex triggers. Agent Otter uses advanced LLMs to understand natural language, infer intent, and read conversation history, providing nuanced answers.",
            Icon: Brain
        },
        {
            title: "Done-For-You Execution",
            description: "Admins simply enter their Server ID into our high-tech dashboard, type in plain-English 'Protocols,' and the AI is instantly operational. Deploy an AI community manager in 60 seconds.",
            Icon: Zap
        },
        {
            title: "Enterprise-Grade Telemetry",
            description: "Go beyond basic metrics. Get insights like Sentiment Analysis and Topic Modeling to understand what your members actually care about—like new pricing features or upcoming launches.",
            Icon: LineChart
        },
        {
            title: "Brand Voice Customization",
            description: "Free bots sound like soulless robots. Our persona system allows admins to inject a specific tone. Whether you need a hype-man coach or a formal financial system, Agent Otter adapts perfectly.",
            Icon: Palette
        }
    ];

    const visionText = "We are not selling a \"Discord Bot.\" We are selling an AI Community Employee. Designed for B2B SaaS, Web3 spaces, and premium communities where time is money and community trust equals revenue. Save your team 10+ hours a week.";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < visionText.length) {
                // Use a functional state update to ensure we always append to the latest value.
                // We also slice the original text to guarantee correct characters even if React batches updates.
                setDisplayedText(visionText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30); // Speed of typing in ms

        return () => clearInterval(typingInterval);
    }, [visionText]);


    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <main className="relative flex flex-col items-center overflow-hidden pt-32 pb-16">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />
                <div className="absolute left-[20%] top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute right-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center"
                >
                    <Badge className="mb-6 gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm backdrop-blur-md" variant="outline">
                        ✨ A 67lab.ai Innovation
                    </Badge>

                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                        Agent Otter: The <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Community Employee</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground font-medium">
                        Stop manually updating welcome messages. Deploy a highly intelligent AI that reads your guidelines and dynamically answers member questions 24/7.
                    </p>

                    {/* The Vision Section with Enhanced Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mx-auto mb-12 max-w-3xl relative group"
                    >
                        {/* Animated gradient border glow */}
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur pb-1 transition-all duration-500 group-hover:opacity-75 group-hover:blur-md"></div>

                        <div className="relative rounded-2xl border border-white/10 bg-card/60 p-8 text-left backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:bg-card/80 group-hover:border-primary/30 min-h-[180px]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full bg-primary/20 p-2">
                                    <Brain className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">The Vision</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {displayedText}
                                <span className="animate-pulse opacity-50 ml-1">|</span>
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-20">
                        <Button size="lg" className="h-14 gap-2 px-8 text-lg bg-primary hover:bg-primary/90" asChild>
                            <a href="https://communitybot.67lab.ai" target="_blank" rel="noopener noreferrer">
                                Deploy Your Agent <ExternalLink className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 gap-2 px-8 text-lg border-white/20 bg-transparent hover:bg-white/5" asChild>
                            <Link href="/products">
                                <ArrowRight className="h-5 w-5 rotate-180" /> Back to Products
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Dashboard / Product UI Concept */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative z-10 mx-auto w-full max-w-6xl px-4 mb-32"
                >
                    <div className="flex flex-col gap-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">
                                The AI Otter Command Center
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Manage your AI fleet, configure rules, and monitor telemetry from a single, high-tech interface.
                            </p>
                        </div>

                        {/* Gallery Container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Main Feature - Rules Manager */}
                            <motion.div
                                className="md:col-span-2 group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm shadow-2xl"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border-b border-white/10 bg-[#0a0a0c]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/dashboard-screenshots/ss-rules.png" alt="Rules Manager Dashboard" className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8">
                                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 backdrop-blur-md">Admin Controls</Badge>
                                    <h3 className="text-2xl font-bold text-white mb-2">Rules Manager</h3>
                                    <p className="text-muted-foreground max-w-2xl">Approve or deny AI-proposed server rules before they go live. Complete oversight, zero surprises.</p>
                                </div>
                            </motion.div>

                            {/* Secondary Feature 1 - Setup Guide */}
                            <motion.div
                                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm shadow-xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden border-b border-white/10 bg-[#0a0a0c]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/dashboard-screenshots/ss-setup.png" alt="Bot Setup & Guidelines" className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Instant Deployment</h3>
                                    <p className="text-sm text-muted-foreground">1-click Discord integration with transparent intent requirements.</p>
                                </div>
                            </motion.div>

                            {/* Secondary Feature 2 - Agent Config */}
                            <motion.div
                                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm shadow-xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden border-b border-white/10 bg-[#0a0a0c]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/dashboard-screenshots/ss-config.png" alt="Agent Configuration" className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Neural Persona Tuning</h3>
                                    <p className="text-sm text-muted-foreground">Inject custom personality matrices and strict behavioral instructions.</p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

                {/* Key Capabilities */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Key Capabilities
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Agent Otter replaces rigid commands with deep contextual comprehension, offering unprecedented ROI for your moderation tasks.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-4 rounded-2xl border border-white/10 bg-card/30 p-8 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/50"
                            >
                                <div className="mt-1 shrink-0 rounded-xl bg-primary/10 p-3 ring-1 ring-inset ring-primary/20">
                                    <cap.Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">{cap.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Proof & ROI Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 mx-auto w-full max-w-4xl px-4 mt-32 text-center"
                >
                    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-12 backdrop-blur-md">
                        <h2 className="text-3xl font-bold text-white mb-6">Built for Tangible ROI</h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                            &quot;We are not competing with basic bots. We are competing with hiring a part-time community manager on Upwork. Against that metric, a premium subscription for Agent Otter is an absolute bargain.&quot;
                        </p>

                        <div className="grid grid-cols-2 divide-x divide-white/10">
                            <div className="px-6 py-4">
                                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                                <div className="text-sm text-muted-foreground">Hours saved per week</div>
                            </div>
                            <div className="px-6 py-4">
                                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                                <div className="text-sm text-muted-foreground">Coverage &amp; Response</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Engine Badge */}
                <div className="relative z-10 mt-32 text-center pb-8 border-t border-white/10 w-full pt-16">
                    <p className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest font-medium">
                        <span className="h-px w-8 bg-primary/50"></span>
                        A 67lab.ai Innovation
                        <span className="h-px w-8 bg-primary/50"></span>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
