"use client";

import { Marquee } from "@/components/ui/marquee";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Wei Lin Chen",
            role: "Founder @ TechFlow",
            content:
                "67Lab delivered our AI-powered analytics platform in 6 weeks. They just let him cook and it was perfect.",
            rating: 5,
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO @ LogiNext",
            content:
                "The automation system they built handles 10k+ daily transactions. Always on time, always precise.",
            rating: 5,
        },
        {
            name: "Priya Sharma",
            role: "Product Lead @ Crypto Ventures",
            content:
                "Best Web3 integration team I've worked with. No buzzwords, just results. 67 knows what's up.",
            rating: 5,
        },
        {
            name: "Alex Nakamura",
            role: "CEO @ FinTech Solutions",
            content:
                "From concept to MVP in 4 weeks. The team literally lives in the lab. Unmatched dedication.",
            rating: 5,
        },
        {
            name: "Isabella Martinez",
            role: "Director @ AI Innovations",
            content:
                "GPT-4 integration that actually works in production. They understand AI beyond the hype.",
            rating: 5,
        },
    ];

    return (
        <section className="relative overflow-hidden py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Let Them <span className="text-primary">Cook</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Don&apos;t just take our word for it. Here&apos;s what happens when you let
                        67Lab do what they do best.
                    </p>
                </div>

                <Marquee speed="slow" pauseOnHover>
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="mx-2 w-[400px] border-white/10 bg-card/50 p-6 backdrop-blur-sm"
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <Quote className="h-8 w-8 text-primary/40" />
                                <div className="flex gap-1">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-primary text-primary"
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className="mb-6 text-sm leading-relaxed text-foreground">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="border-t border-white/10 pt-4">
                                <div className="font-semibold text-foreground">
                                    {testimonial.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {testimonial.role}
                                </div>
                            </div>
                        </Card>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
