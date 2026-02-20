"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AutomationCard } from "@/components/ui/automation-card";
import { Bot, Briefcase, MessagesSquare, Receipt, Users, Zap } from "lucide-react";

const automations = [
    {
        title: "AI Lead Qualification & CRM Sync",
        description: "Automatically scrape, score, and sync high-intent leads directly into Salesforce or HubSpot. Watch your sales pipeline grow while you sleep.",
        type: "B2B" as const,
        hoursSaved: 65,
        icon: Briefcase,
    },
    {
        title: "24/7 AI Customer Support Triage",
        description: "Instantly resolve 80% of common customer queries and intelligently route complex issues to human agents with summarized context.",
        type: "B2C" as const,
        hoursSaved: 140,
        icon: MessagesSquare,
    },
    {
        title: "Automated Invoice Processing",
        description: "Extract data from incoming invoices, validate against POs, and auto-draft payments in Xero or Quickbooks without manual entry.",
        type: "B2B" as const,
        hoursSaved: 45,
        icon: Receipt,
    },
    {
        title: "Personalized Marketing Outreach",
        description: "Connect n8n with your email provider and LLMs to draft uniquely tailored campaigns based on individual user behavior.",
        type: "B2C" as const,
        hoursSaved: 80,
        icon: Users,
    },
    {
        title: "Internal Knowledge Base Bot",
        description: "Turn your scattered company docs into a conversational AI oracle for your team. Never answer 'how do I do X?' again.",
        type: "B2B" as const,
        hoursSaved: 60,
        icon: Bot,
    },
    {
        title: "Social Media Content Engine",
        description: "Monitor industry news, synthesize key points, and auto-draft engaging social media posts tailored to different platforms.",
        type: "B2B" as const,
        hoursSaved: 50,
        icon: Zap,
    },
];

export default function AutomationsPage() {
    const totalHours = automations.reduce((acc, curr) => acc + curr.hoursSaved, 0);

    return (
        <div className="flex min-h-screen flex-col bg-[#030712] text-white">
            <Navbar />

            <main className="relative flex-1 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcbys01o3/image/upload/v1705663673/grid_q4915m.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="mx-auto max-w-3xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                        >
                            <Zap className="h-4 w-4" />
                            N8N + Custom AI Workflows
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
                        >
                            Automate the Mundane.<br />
                            <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Elevate the Essential.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-10 text-xl text-gray-400"
                        >
                            Stop wasting human potential on repetitive tasks. We build intelligent agentic workflows that save <span className="text-white font-semibold">{totalHours}+ hours</span> every single month for a single setup.
                        </motion.p>
                    </div>

                    {/* Bento Grid layout */}
                    <div className="mt-20">
                        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-4">
                            <h2 className="text-2xl font-bold tracking-tight">Showcase Workflows</h2>
                            <p className="text-sm text-gray-400">B2B & B2C Agentic Solutions</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {automations.map((automation, index) => (
                                <AutomationCard
                                    key={automation.title}
                                    {...automation}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl sm:p-16"
                    >
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Tell us your problem, let's see can we solve it</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
                            Drop your biggest bottleneck or repetitive task below. Our team will review it to see if an AI workflow could save your operating hours and boost revenue.
                        </p>

                        <form className="mx-auto flex w-full max-w-lg flex-col gap-4 text-left" onSubmit={(e) => {
                            e.preventDefault();

                            // Honeypot check
                            const formData = new FormData(e.currentTarget);
                            if (formData.get("website")) {
                                return; // Silently drop bot submission
                            }

                            alert("Thank you! We've received your problem and will reach out with a solution.");
                        }}>
                            {/* Honeypot - hidden from users but visible to bots scanning the DOM */}
                            <input
                                type="url"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                className="absolute -z-10 h-0 w-0 overflow-hidden opacity-0"
                            />
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Your specific problem or bottleneck</label>
                                <textarea
                                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="I spend 15 hours a week manually entering data from emails into our CRM..."
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    required
                                />
                                <button type="submit" className="rounded-xl bg-primary px-8 py-4 font-bold whitespace-nowrap text-white transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
