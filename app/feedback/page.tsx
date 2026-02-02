"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Send, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FeedbackPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreed) {
            alert("Please agree to the Terms, Privacy Policy, and SLA to proceed.");
            return;
        }

        // Create mailto link with form data
        const mailtoLink = `mailto:hello@67lab.ai?subject=${encodeURIComponent(
            formData.subject || "Feedback from Website"
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="relative px-4 py-32">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_110%)]" />

                <div className="relative z-10 mx-auto max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            We&apos;re <span className="text-primary">Listening</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Your feedback helps us cook better products. Tell us what&apos;s on your mind.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <Card className="border-white/10 bg-card/50 p-6 backdrop-blur-sm">
                                <Mail className="mb-4 h-8 w-8 text-primary" />
                                <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                                <p className="text-sm text-muted-foreground">
                                    hello@67lab.ai
                                </p>
                            </Card>

                            <Card className="border-white/10 bg-card/50 p-6 backdrop-blur-sm">
                                <MessageSquare className="mb-4 h-8 w-8 text-primary" />
                                <h3 className="mb-2 text-lg font-semibold">Response Time</h3>
                                <p className="text-sm text-muted-foreground">
                                    Usually within 24 hours
                                </p>
                            </Card>

                            <Card className="border-white/10 bg-card/50 p-6 backdrop-blur-sm">
                                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                                <h3 className="mb-2 text-lg font-semibold">We Value</h3>
                                <p className="text-sm text-muted-foreground">
                                    Every single feedback
                                </p>
                            </Card>
                        </motion.div>

                        {/* Feedback Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <Card className="border-white/10 bg-card/50 p-8 backdrop-blur-sm">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
                                        <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
                                        <p className="text-muted-foreground">
                                            Your email client should open. We&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, subject: e.target.value })
                                                }
                                                className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Message *
                                            </label>
                                            <textarea
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                placeholder="Tell us what you think..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full gap-2 bg-primary hover:bg-primary/90"
                                        >
                                            <Send className="h-5 w-5" />
                                            Send Feedback
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
