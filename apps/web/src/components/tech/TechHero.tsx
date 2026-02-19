"use client";

import Image from "next/image";

export function TechHero() {
    return (
        <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">
                        Engineering Excellence
                    </h2>
                    <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight mb-6">
                        F1TENTH CAR<br />
                        <span className="text-primary">ARCHITECTURE</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
                        A high-performance synthesis of custom-engineered hardware and state-of-the-art autonomous racing stacks.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <div className="p-4 border border-primary/20 rounded-xl bg-white dark:bg-slate-900">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                            Compute Latency
                        </p>
                        <p className="text-2xl font-bold text-primary">
                            4.2<span className="text-sm ml-1 font-normal">ms</span>
                        </p>
                    </div>
                    <div className="p-4 border border-primary/20 rounded-xl bg-white dark:bg-slate-900">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                            Refresh Rate
                        </p>
                        <p className="text-2xl font-bold text-primary">
                            120<span className="text-sm ml-1 font-normal">Hz</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Blueprint Viewer */}
            <div className="mt-16 relative aspect-video w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-primary/10 group">
                <div className="absolute inset-0 opacity-10 tech-grid"></div>
                <div className="relative w-full h-full opacity-80 mix-blend-luminosity">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXPUytaz7LbJxj51UzjMwoIid2LQcrSRc95UwDpGE_RpEJoy7HFg8CuwziawbpZLxPEL7GZMtX7GsLQVlwpmwnFIVlXb49ueHTIzUPSWYlSABFKtYVpHNYKd595l33-De5k8ydHXycoDRHaGdS7vtF4s_AKhgKdmnDjyvDQbhyKvXkPvXW1ZhyeYFtC0XXdEWV6mwjDLrFMCYX9f3fBPuXw1NRyzjr4X9fG2FGco8h4bAvA1vfOokEqeNYIJXB6aHM-cxHcFMhi8"
                        alt="Technical blueprint render of an F1TENTH car chassis"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Hotspots - Hokuyo LiDAR */}
                <div className="absolute top-[35%] left-[25%] group/spot z-10">
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-primary rounded-full relative cursor-pointer ring-2 ring-white/20"></div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary/20 shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity w-48 pointer-events-none">
                        <h4 className="font-bold text-xs uppercase text-primary">
                            Hokuyo 2D LiDAR
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-1">
                            30m Range | 270° Field of View
                        </p>
                    </div>
                </div>

                {/* Hotspots - Jetson AGX Orin */}
                <div className="absolute top-[50%] left-[55%] group/spot z-10">
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-primary rounded-full relative cursor-pointer ring-2 ring-white/20"></div>
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary/20 shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity w-48 pointer-events-none">
                        <h4 className="font-bold text-xs uppercase text-primary">
                            Jetson AGX Orin
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-1">
                            275 TOPS AI Performance
                        </p>
                    </div>
                </div>

                {/* Overlay Labels */}
                <div className="absolute bottom-8 right-8 flex flex-col items-end z-10">
                    <div className="bg-black/80 text-white p-4 font-mono text-xs rounded-lg backdrop-blur shadow-2xl space-y-2 border border-white/10 w-fit">
                        <div className="flex justify-between gap-8">
                            <span>STEER_ANGLE:</span>
                            <span className="text-primary">+12.4°</span>
                        </div>
                        <div className="flex justify-between gap-8">
                            <span>VELOCITY:</span>
                            <span className="text-primary">8.42 m/s</span>
                        </div>
                        <div className="flex justify-between gap-8">
                            <span>BATTERY_V:</span>
                            <span className="text-primary">14.8V</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
