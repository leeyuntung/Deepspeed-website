"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TeamHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // Content moves slower than background
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900/90">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/Deepspeed-website/team_image.jpg"
                    alt="The Team Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90"></div>
            </motion.div>

            {/* Content */}
            <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="h-[2px] w-8 md:w-16 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-500 font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
                        Engineering Personnel
                    </span>
                    <div className="h-[2px] w-8 md:w-16 bg-blue-600 rounded-full"></div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-serif text-[15vw] md:text-7xl leading-none text-white font-bold tracking-tighter text-center mix-blend-overlay"
                >
                    THE TEAM
                </motion.h1>

                {/* Subtitle/Description - Optional based on design but good for context */}
                {/* <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-8 text-slate-400 max-w-lg text-center font-light tracking-wide"
                >
                    Pushing the boundaries of autonomous systems.
                </motion.p> */}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-slate-500 tracking-[0.3em] uppercase mb-2">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
