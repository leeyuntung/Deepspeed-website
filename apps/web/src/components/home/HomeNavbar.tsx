"use client";

import Link from "next/link";
import { Button } from "@packages/ui/src/Button";
import { useState, useEffect } from "react";

export function HomeNavbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    // if scroll down hide the navbar
                    setIsVisible(false);
                } else {
                    // if scroll up show the navbar
                    setIsVisible(true);
                }

                // remember current page location to use in the next move
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                } bg-slate-900/95 backdrop-blur-md border-b border-primary/10`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                        <span className="material-icons text-white text-xl">speed</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tighter uppercase text-white">
                        DEEPSPEED
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { label: "About", href: "/about" },
                        { label: "Blog", href: "/blog" },
                        { label: "Technology", href: "/racing" },
                        { label: "Contact", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-white/80"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/recruit">
                        <Button size="sm">Join the Grid</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
