import Link from "next/link";
import { Github, X, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 px-4 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                                <span className="text-xl font-bold text-primary-foreground">
                                    67
                                </span>
                            </div>
                            <span className="text-xl font-bold">
                                67Lab<span className="text-primary">.ai</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Cooking AI MVPs with operational excellence. Always in the lab.
                        </p>
                    </div>

                    {/* Links - Services */}
                    <div>
                        <h3 className="mb-4 font-semibold">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    AI Integration
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    SaaS Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    Process Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    Business Solutions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h3 className="mb-4 font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h3 className="mb-4 font-semibold">Connect</h3>
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/67Lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://x.com/67LabAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
                            >
                                <X className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://linkedin.com/company/67lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link
                                href="mailto:hello@67lab.ai"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-card transition-all hover:border-primary/50 hover:bg-primary/10"
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground md:flex-row">
                    <p>© {currentYear} 67Lab.ai. Made in the Lab 🔬</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/sla" className="hover:text-primary transition-colors">
                            SLA
                        </Link>
                    </div>
                </div>

                {/* Easter Egg */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground/60">
                        67 = On9? Nah, we&apos;re just always cooking. 🍳
                    </p>
                </div>
            </div>
        </footer>
    );
}
