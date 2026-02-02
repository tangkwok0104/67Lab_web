"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Rocket, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pt-32">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mx-auto max-w-3xl text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 inline-flex"
                    >
                        <Badge className="gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm" variant="outline">
                            <Sparkles className="h-4 w-4" />
                            Something Big is Cooking
                        </Badge>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8 inline-flex"
                    >
                        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-8">
                            <Rocket className="h-24 w-24 text-primary" />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                    >
                        Coming <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Soon</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        We&apos;re cooking up something extraordinary. Our product lineup is being crafted with the same precision and dedication that powers our client solutions.
                    </motion.p>

                    {/* Notify CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                            <Bell className="h-5 w-5" />
                            Notify Me on Launch
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 bg-transparent hover:bg-white/5" asChild>
                            <a href="/">Back to Home</a>
                        </Button>
                    </motion.div>

                    {/* Coming Features Teaser */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-16 grid gap-6 md:grid-cols-3"
                    >
                        {[
                            { label: "AI Tools", emoji: "🤖" },
                            { label: "SaaS Platforms", emoji: "☁️" },
                            { label: "Automation Suite", emoji: "⚡" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm"
                            >
                                <div className="mb-2 text-4xl">{item.emoji}</div>
                                <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
