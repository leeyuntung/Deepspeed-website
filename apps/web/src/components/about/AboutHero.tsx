"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background-dark text-white">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/car.jpg"
                    alt="Autonomous race car on track"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-deep-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-block px-3 py-1 bg-accent-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded text-white"
                >
                    The F1TENTH Vanguard
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="font-serif italic text-6xl md:text-8xl leading-none mb-8 max-w-3xl"
                >
                    Beyond the <br />
                    <span className="not-italic font-bold tracking-tighter uppercase text-primary">
                        Machine
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-light max-w-xl leading-relaxed text-slate-300 mb-10"
                >
                    Engineering the future of autonomous racing with surgical precision and
                    raw passion. Where high-octane performance meets clinical technical
                    excellence.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="text-white/50 w-10 h-10" />
            </motion.div>
        </section>
    );
}
