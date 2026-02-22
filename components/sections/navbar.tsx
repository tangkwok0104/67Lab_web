"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav
            className={`fixed left-0 right-0 top-4 z-50 mx-auto max-w-6xl transition-all duration-300 ${isScrolled
                ? "bg-card/80 shadow-lg shadow-primary/5 backdrop-blur-xl"
                : "bg-transparent"
                } rounded-2xl border border-white/10 px-6 py-3`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                        <span className="text-xl font-bold text-primary-foreground">67</span>
                    </div>
                    <span className="text-xl font-bold">
                        67Lab<span className="text-primary">.ai</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/products" className={navigationMenuTriggerStyle()}>
                                Products
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/automations" className={navigationMenuTriggerStyle()}>
                                Automations
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/blog" className={navigationMenuTriggerStyle()}>
                                Blog
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/feedback" className={navigationMenuTriggerStyle()}>
                                Feedback
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                    {/* CTA Button */}
                    <Link href="/feedback" className="hidden sm:block">
                        <Button className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                            Let&apos;s Cook 🔥
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-background/50 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col space-y-2 pb-2 animate-in slide-in-from-top-2 fade-in duration-200">
                    <Link
                        href="/products"
                        className="rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Products
                    </Link>
                    <Link
                        href="/automations"
                        className="rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Automations
                    </Link>
                    <Link
                        href="/blog"
                        className="rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/feedback"
                        className="rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Feedback
                    </Link>
                    <Link href="/feedback" className="pt-2 sm:hidden" onClick={closeMobileMenu}>
                        <Button className="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                            Let&apos;s Cook 🔥
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
