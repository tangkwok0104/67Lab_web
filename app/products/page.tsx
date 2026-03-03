"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Rocket, ArrowUpRight, ArrowRight, PhoneCall, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products = [
    {
        name: "Recepto-Ria",
        tagline: "The Future of First Impressions",
        description: "Our premier AI Voice Receptionist, designed to handle the complexities of modern client intake with the warmth of a natural conversation.",
        icon: <PhoneCall className="h-10 w-10 text-primary" />,
        slug: "/products/recepto-ria",
        externalLink: "https://recepto.xyz",
        status: "Live"
    }
];

const agents = [
    {
        name: "SYS.CORE",
        tagline: "The AI Community Employee",
        description: "Stop manually updating welcome messages. Deploy a contextual AI that reads your guidelines and dynamically answers member questions 24/7, just like a human moderator.",
        icon: <Bot className="h-10 w-10 text-primary" />,
        slug: "https://communitybot.67lab.ai",
        externalLink: "https://communitybot.67lab.ai",
        status: "Live"
    }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pt-32 pb-24">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mx-auto w-full max-w-5xl text-center"
                >
                    <Badge className="mb-6 border-primary/20 bg-primary/10 px-4 py-2 text-sm" variant="outline">
                        ✨ 67lab.ai Ecosystem
                    </Badge>

                    <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
                        Discover Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Products</span>
                    </h1>

                    <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        Precision-engineered solutions bridging the gap between human empathy and AI efficiency.
                    </p>

                    {/* Products Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
                        {products.map((product, idx) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-8 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-card/60"
                            >
                                {/* Highlight effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                                        {product.icon}
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold">{product.name}</h3>
                                        {product.status === "Live" && (
                                            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                        )}
                                    </div>
                                    <h4 className="font-medium text-primary mb-3 text-sm">{product.tagline}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                                    <Button asChild variant="default" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                        <Link href={product.slug}>
                                            Learn More <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="icon" className="shrink-0 group/external">
                                        <a href={product.externalLink} target="_blank" rel="noopener noreferrer" title="Visit App">
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/external:-translate-y-0.5 group-hover/external:translate-x-0.5" />
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}

                        {/* Coming Soon Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-card/10 p-8 text-center"
                        >
                            <div className="mb-4 rounded-full bg-white/5 p-4">
                                <Rocket className="h-8 w-8 text-muted-foreground opacity-50" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white/70">More Cooking</h3>
                            <p className="text-sm text-muted-foreground">
                                We are developing more exciting solutions. Stay tuned.
                            </p>
                        </motion.div>
                    </div>

                    {/* Hire your agent Section */}
                    <div className="mt-32">
                        <Badge className="mb-6 border-primary/20 bg-primary/10 px-4 py-2 text-sm" variant="outline">
                            🤖 AI Employees
                        </Badge>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                            Hire your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">agent</span>
                        </h2>
                        <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            Deploy highly intelligent, contextual AI agents to supercharge your community and workflow.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
                            {agents.map((agent, idx) => (
                                <motion.div
                                    key={agent.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-8 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-card/60"
                                >
                                    {/* Highlight effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                    <div className="relative z-10">
                                        <div className="mb-6 inline-flex rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                                            {agent.icon}
                                        </div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold">{agent.name}</h3>
                                            {agent.status === "Live" && (
                                                <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                            )}
                                        </div>
                                        <h4 className="font-medium text-primary mb-3 text-sm">{agent.tagline}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                            {agent.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                                        <Button asChild variant="default" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                            <a href={agent.externalLink} target="_blank" rel="noopener noreferrer">
                                                Go to App <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
