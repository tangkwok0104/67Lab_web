"use client";

import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Brain, Cog, Coins, Zap } from "lucide-react";

export function BentoFeatures() {
    const features = [
        {
            title: "AI Integration",
            description:
                "From GPT-5 to Claude and Gemini, we wire up the smartest models into your product. Let them cook.",
            icon: <Brain className="h-6 w-6" />,
        },
        {
            title: "Process Automation",
            description:
                "Born in finance, built for scale. Streamline workflows, automate repetitive tasks, boost human efficiency.",
            icon: <Cog className="h-6 w-6" />,
        },
        {
            title: "Business Solutions",
            description:
                "Enterprise automation, analytics dashboards, CRM integrations. Real solutions for real business challenges.",
            icon: <Coins className="h-6 w-6" />,
        },
        {
            title: "On-Time Deployment",
            description:
                "67 means business. Deadlines met, no excuses. Financial precision meets AI intelligence.",
            icon: <Zap className="h-6 w-6" />,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="labs" className="relative px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        The <span className="text-primary">67</span> Stack
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Four pillars of modern AI development. Built on experience, powered
                        by innovation.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <BentoGrid>
                        {features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <BentoCard {...feature} />
                            </motion.div>
                        ))}
                    </BentoGrid>
                </motion.div>
            </div>
        </section>
    );
}
