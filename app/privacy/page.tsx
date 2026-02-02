"use client";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="relative px-4 pt-32 pb-16">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                            67Lab.ai – Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Version: 2.0
                        </p>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg mb-8">
                                Effective Date: February 2, 2026
                            </p>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">I. Data Sovereignty & Philosophy</h2>
                                <p className="mb-4">
                                    At 67Lab, we treat data with the same rigor as financial capital. We operate on a Principle of Least Privilege: we only collect what is necessary to "cook" your intelligence layers. We do not sell, trade, or monetize your data for third-party advertising.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">II. Information We Collect</h2>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li>
                                        <strong>Account Data:</strong> Names, emails, and billing information for administrative purposes.
                                    </li>
                                    <li>
                                        <strong>Input Data:</strong> The text, files, and data structures you provide to our AI models.
                                    </li>
                                    <li>
                                        <strong>Technical Metadata:</strong> IP addresses, browser types, and "Lab logs" to monitor for system abuse and performance optimization.
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">III. AI Data Processing (The "Black Box" Protocol)</h2>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li>
                                        <strong>Third-Party Models:</strong> To provide our services, we utilize enterprise-grade APIs from providers like Google (Gemini), OpenAI, and Anthropic.
                                    </li>
                                    <li>
                                        <strong>Zero-Training Guarantee:</strong> We utilize Enterprise/API-tier agreements that specify your data is NOT used to train the base models of these providers.
                                    </li>
                                    <li>
                                        <strong>Data Residency:</strong> Where possible, we pin data processing to specific geographic regions (e.g., US-East, EU-West) to comply with local data sovereignty laws (GDPR, CCPA).
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">IV. Data Retention & "The Wipe"</h2>
                                <p className="mb-4">
                                    We retain your data only for as long as your account is active. Upon request for account deletion, 67Lab initiates the "Lab Wipe", which purges all Input and Output from our active databases within 30 days, subject to legal record-keeping requirements.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">V. Security Measures</h2>
                                <p className="mb-4">
                                    We employ AES-256 encryption at rest and TLS 1.3 in transit. Our internal "Lab access" is restricted via Multi-Factor Authentication (MFA) and audited quarterly.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
