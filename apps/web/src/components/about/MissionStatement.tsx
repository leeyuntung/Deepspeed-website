"use client";

import { motion } from "framer-motion";

export function MissionStatement() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-accent-red text-sm font-bold tracking-[0.4em] uppercase mb-8"
                >
                    Clinical Excellence
                </motion.h2>

                <motion.blockquote
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-serif italic text-deep-black dark:text-slate-100 leading-tight"
                >
                    "We don't just build faster cars; we architect the intelligence that makes
                    speed inevitable."
                </motion.blockquote>

                <div className="mt-12 flex justify-center items-center gap-4">
                    <div className="h-[1px] w-12 bg-accent-red"></div>
                    <p className="text-deep-black/60 dark:text-slate-400 font-medium uppercase tracking-widest text-xs">
                        The Deepspeed Philosophy
                    </p>
                    <div className="h-[1px] w-12 bg-accent-red"></div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h4 className="font-bold text-lg mb-4 text-primary">01 / Perception</h4>
                        <p className="text-sm text-deep-black/70 dark:text-slate-400 leading-relaxed">
                            Advanced LiDAR and computer vision systems processing environments at
                            millisecond scales.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h4 className="font-bold text-lg mb-4 text-primary">02 / Planning</h4>
                        <p className="text-sm text-deep-black/70 dark:text-slate-400 leading-relaxed">
                            Optimization algorithms that calculate the ideal racing line while
                            accounting for dynamic obstacles.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h4 className="font-bold text-lg mb-4 text-primary">03 / Control</h4>
                        <p className="text-sm text-deep-black/70 dark:text-slate-400 leading-relaxed">
                            Precision actuation systems ensuring every maneuver is executed with
                            absolute aerodynamic fidelity.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
