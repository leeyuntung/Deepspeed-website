"use client";

import Link from "next/link";
import Image from "next/image";
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
                    <div className="relative h-10 w-40">
                        <Image
                            src="/Deepspeed-website/deepspeed_logo.png"
                            alt="DEEPSPEED"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-white/80"
                    >
                        Home
                    </Link>

                    <div className="relative group">
                        <button
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-white/80 flex items-center gap-1"
                        >
                            About
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-slate-900 border border-white/10 p-2 rounded-md shadow-xl flex flex-col gap-1">
                                <Link
                                    href="/about/f1tenth"
                                    className="block px-4 py-2 text-sm text-white/80 hover:text-primary hover:bg-white/5 rounded-sm transition-colors uppercase tracking-widest"
                                >
                                    F1TENTH
                                </Link>
                                <Link
                                    href="/about/team"
                                    className="block px-4 py-2 text-sm text-white/80 hover:text-primary hover:bg-white/5 rounded-sm transition-colors uppercase tracking-widest"
                                >
                                    The Team
                                </Link>
                            </div>
                        </div>
                    </div>

                    {[
                        { label: "Blog", href: "/blog" },
                        { label: "Technology", href: "/tech" },
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
                    <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
                        <a
                            href="https://www.instagram.com/ntu_deepspeed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-primary transition-colors"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" /></svg>
                        </a>
                        <a
                            href="mailto:hello@deepspeed.tech"
                            className="text-white/80 hover:text-primary transition-colors"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        </a>
                        <a
                            href="https://github.com/NTU-Autonomous-Racing-Team"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-primary transition-colors"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/recruit">
                            <Button size="sm">JOIN US</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
