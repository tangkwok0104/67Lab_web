"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 right-0 top-4 z-50 mx-auto max-w-6xl transition-all duration-300 ${isScrolled
                    ? "bg-card/80 shadow-lg shadow-primary/5 backdrop-blur-xl"
                    : "bg-transparent"
                } rounded-2xl border border-white/10 px-6 py-3`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                        <span className="text-xl font-bold text-primary-foreground">67</span>
                    </div>
                    <span className="text-xl font-bold">
                        67Lab<span className="text-primary">.ai</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/products" className={navigationMenuTriggerStyle()}>
                                Products
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

                {/* CTA Button */}
                <Link href="/feedback">
                    <Button className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                        Let&apos;s Cook 🔥
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
