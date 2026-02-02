"use client";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { motion } from "framer-motion";

export default function SLAPage() {
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
                            67Lab.ai – Service Level Agreement (SLA)
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Status: Enterprise-Ready | Coverage: Premium & Custom Tiers
                        </p>
                        <div className="prose prose-invert max-w-none">
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">I. Uptime Commitment</h2>
                                <p className="mb-4">
                                    67Lab commits to a <strong>99.9% Monthly Uptime Percentage</strong>. "Uptime" is defined as the availability of the 67Lab API and core web interface for processing requests.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">II. The "Maintenance Window"</h2>
                                <p className="mb-4">Routine maintenance is essential for high-performance AI.</p>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li>
                                        <strong>Scheduled Maintenance:</strong> Weekly on Sundays (02:00 – 04:00 UTC).
                                    </li>
                                    <li>
                                        <strong>Emergency Maintenance:</strong> In rare cases of critical security patches, we may perform unscheduled maintenance with a minimum of 30 minutes' notice via our status page.
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">III. Service Credits (The "Financial Penalty")</h2>
                                <p className="mb-4">If we fail to meet the Uptime Commitment, you are eligible for Service Credits applied against your next billing cycle:</p>
                                <div className="overflow-x-auto rounded-lg border border-white/10">
                                    <table className="w-full text-left">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="p-4 font-semibold border-b border-white/10">Monthly Uptime %</th>
                                                <th className="p-4 font-semibold border-b border-white/10">Service Credit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">&lt; 99.9% but ≥ 99.0%</td>
                                                <td className="p-4">10% of monthly fee</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">&lt; 99.0% but ≥ 95.0%</td>
                                                <td className="p-4">25% of monthly fee</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4">&lt; 95.0%</td>
                                                <td className="p-4">50% of monthly fee</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">IV. Support Response Tiers</h2>
                                <p className="mb-4">We categorize issues based on "Lab Impact":</p>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li>
                                        <strong>P0 (Critical):</strong> Service is down for all users. <br />
                                        <span className="text-muted-foreground">Response Goal: &lt; 1 hour.</span>
                                    </li>
                                    <li>
                                        <strong>P1 (High):</strong> Major feature failure with no workaround. <br />
                                        <span className="text-muted-foreground">Response Goal: &lt; 4 hours.</span>
                                    </li>
                                    <li>
                                        <strong>P2 (Routine):</strong> General questions or UI glitches. <br />
                                        <span className="text-muted-foreground">Response Goal: &lt; 24 hours.</span>
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary">V. Exclusions</h2>
                                <p className="mb-4">The SLA does not apply if the downtime is caused by:</p>
                                <ul className="space-y-4 list-disc pl-5">
                                    <li>Upstream AI Provider outages (e.g., a global OpenAI or Google Cloud outage).</li>
                                    <li>User-side connectivity issues or unauthorized modifications to the "67 Stack."</li>
                                    <li>Acts of God or "Force Majeure" events.</li>
                                </ul>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
