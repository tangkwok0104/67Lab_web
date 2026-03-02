"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Zap, Activity, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const capabilities = [
    {
        title: "24/7 Intelligent Coverage",
        description: "Never miss a lead, even after hours or during peak overflows.",
        icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
        title: "Seamless Task Automation",
        description: "From instant appointment booking to smart call routing, Recepto-Ria manages the 'busy work' so your team can focus on the 'human work'.",
        icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
        title: "Industry-Aware Logic",
        description: "Tailored configurations for medical, legal, and professional services, ensuring compliance and specialized greetings.",
        icon: <ShieldCheck className="h-6 w-6 text-primary" />
    },
    {
        title: "Real-Time Mission Control",
        description: "Integrated dashboard for 67lab.ai partners to track transcripts, costs, and conversion metrics in one view.",
        icon: <Activity className="h-6 w-6 text-primary" />
    }
];

export default function ReceptoRiaPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <main className="relative flex flex-col items-center overflow-hidden pt-32 pb-16">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

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
                        Recepto-Ria: The Future of <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">First Impressions</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground font-medium">
                        Precision-engineered by 67lab.ai to bridge the gap between human empathy and AI efficiency.
                    </p>

                    <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/10 bg-card/60 p-6 text-left backdrop-blur-md shadow-2xl shadow-black/50">
                        <h3 className="mb-3 text-lg font-semibold text-primary">The Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            At 67lab.ai, we believe no business opportunity should ever go to voicemail.
                            Recepto-Ria is our premier AI Voice Receptionist, designed to handle the complexities of modern client intake with the warmth of a natural conversation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-20">
                        <Button size="lg" className="h-14 gap-2 px-8 text-lg bg-primary hover:bg-primary/90" asChild>
                            <a href="https://recepto.xyz" target="_blank" rel="noopener noreferrer">
                                Explore Live Demo <ExternalLink className="h-5 w-5" />
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
                    <div className="aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl relative flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-50" />

                        {/* 
                            NOTE: We can place the user-uploaded PR image here.
                            For now, using a stylized placeholder that prompts the logo/UI 
                        */}
                        <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
                            <div className="mb-6 mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-purple-600 p-1 shadow-lg shadow-primary/20">
                                <div className="flex h-full w-full items-center justify-center rounded-xl bg-background/90 backdrop-blur">
                                    <span className="text-4xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">Ria</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground font-medium flex items-center gap-2 justify-center">
                                <CheckCircle2 className="h-5 w-5 text-green-500" /> Connecting to Recepto-Ria Architecture...
                            </p>
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
                            Recepto-Ria uses 67lab.ai’s proprietary &quot;fractal architecture&quot; to understand intent, answer complex FAQs, and schedule appointments directly into existing workflows.
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
                                    {cap.icon}
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
                            &quot;With Recepto-Ria, we aren&apos;t just building a bot; we are building a teammate. Our goal was to solve the $1.2B problem of missed business calls by providing an accessible, high-performance voice agent that sounds and thinks like a professional.&quot;
                        </p>

                        <div className="grid grid-cols-2 divide-x divide-white/10">
                            <div className="px-6 py-4">
                                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                                <div className="text-sm text-muted-foreground">Automation of routine inquiries</div>
                            </div>
                            <div className="px-6 py-4">
                                <div className="text-4xl font-bold text-accent mb-2">&lt;500ms</div>
                                <div className="text-sm text-muted-foreground">Response latency architecture</div>
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
