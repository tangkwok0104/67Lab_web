"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Placeholder blog posts - will be replaced with n8n automated content
const blogPosts = [
    {
        title: "Building AI MVPs: Lessons from the Lab",
        excerpt: "What we learned cooking 67+ AI products and how you can apply these insights to your next project.",
        date: "2026-02-01",
        readTime: "5 min read",
        category: "AI Development",
        slug: "building-ai-mvps-lessons",
    },
    {
        title: "From Finance to AI: Our Journey",
        excerpt: "How financial precision and risk management shaped our approach to building reliable AI systems.",
        date: "2026-01-28",
        readTime: "8 min read",
        category: "Company",
        slug: "finance-to-ai-journey",
    },
    {
        title: "The Real Cost of AI Integration",
        excerpt: "Breaking down the actual costs, timelines, and challenges of integrating LLMs into production systems.",
        date: "2026-01-25",
        readTime: "6 min read",
        category: "AI Development",
        slug: "real-cost-ai-integration",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="relative px-4 py-32">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 mx-auto max-w-6xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <BookOpen className="h-4 w-4" />
                            Insights from the Lab
                        </div>
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                            67Lab <span className="text-primary">Blog</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Deep dives, case studies, and lessons learned from building AI products in the real world.
                        </p>
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <Card className="group h-full border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                                        {/* Category Badge */}
                                        <Badge
                                            variant="outline"
                                            className="mb-4 border-primary/20 bg-primary/10 text-primary"
                                        >
                                            {post.category}
                                        </Badge>

                                        {/* Title */}
                                        <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        {/* Read More Link */}
                                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                                            Read More
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Coming Soon Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <Card className="border-white/10 bg-card/50 p-8 backdrop-blur-sm">
                            <p className="text-sm text-muted-foreground">
                                📝 More posts coming soon! We&apos;re automating our content pipeline with <span className="font-semibold text-primary">n8n</span> to bring you regular insights from the lab.
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
