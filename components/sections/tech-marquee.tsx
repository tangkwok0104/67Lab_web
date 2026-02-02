"use client";

import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";

export function TechMarquee() {
    const technologies = [
        { name: "Next.js", color: "bg-white text-black" },
        { name: "OpenAI", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "Anthropic", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        { name: "Tailwind CSS", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
        { name: "Google Cloud", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "TypeScript", color: "bg-blue-400/20 text-blue-300 border-blue-400/30" },
        { name: "Supabase", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
        { name: "Vercel", color: "bg-white/20 text-white border-white/30" },
        { name: "Framer Motion", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    ];

    return (
        <section className="relative overflow-hidden py-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="relative">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Powered by the <span className="text-primary">Best</span>
                    </h2>
                    <p className="text-muted-foreground">
                        We don&apos;t reinvent the wheel. We just make it run faster.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* First Row - Normal Direction */}
                    <Marquee speed="normal">
                        {technologies.map((tech, index) => (
                            <Badge
                                key={`tech-1-${index}`}
                                variant="outline"
                                className={`whitespace-nowrap border px-6 py-3 text-base font-semibold ${tech.color}`}
                            >
                                {tech.name}
                            </Badge>
                        ))}
                    </Marquee>

                    {/* Second Row - Reverse Direction */}
                    <Marquee speed="normal" reverse>
                        {technologies.map((tech, index) => (
                            <Badge
                                key={`tech-2-${index}`}
                                variant="outline"
                                className={`whitespace-nowrap border px-6 py-3 text-base font-semibold ${tech.color}`}
                            >
                                {tech.name}
                            </Badge>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
