"use client";

import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export function VideoHub() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayMainVideo = () => {
        setIsPlaying(true);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.play();
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0; // Optional: Reset to start
    };

    return (
        <section className="py-24 bg-deep-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold tracking-tighter uppercase mb-4 italic">
                        Video Hub
                    </h3>
                    <div className="h-1 w-24 bg-primary mx-auto"></div>
                </div>

                {/* Main Video Player */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                    {!isPlaying ? (
                        <div className="relative w-full h-full cursor-pointer" onClick={handlePlayMainVideo}>
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK3QgkR4pcdZP3wWGqFSgxoXwLkfrdDVQOSkNF-RfSgCk3KGE6nojR9sZo9nxCRzjy3tzUXq7qmkWqpLJkoYd6OLzOTOVlmzEswA1NUJISxoKAeNKw1_3En10lvChhH9Gq3HqAgKLUvuG5iJXSnTHWqXFaH0MqscpzEpDkcfBznVadmcnLxSAcW2JTTVuZnFeRcubA1ohPnz2e-TEzf6g_FPxnvlY6ZS9eeTaE8dn_KtHisHFXdtIqQVZNJAMZF3MuKRY9HsZrvLE"
                                alt="Cinematic thumbnail"
                                fill
                                className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="size-24 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="w-10 h-10 fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                                <div>
                                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-2 block">
                                        Feature Film
                                    </span>
                                    <h4 className="text-2xl font-bold italic uppercase">
                                        Autonomy Redefined: The Season Recap
                                    </h4>
                                </div>
                                <div className="flex gap-4 items-center bg-black/40 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-white/50 uppercase">
                                            Duration
                                        </span>
                                        <span className="text-sm font-bold">04:22</span>
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/20"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] text-white/50 uppercase">
                                            Quality
                                        </span>
                                        <span className="text-sm font-bold text-primary italic">
                                            8K
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <video
                            src="/car_footage_1.mp4"
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                        />
                    )}
                </div>

                {/* Technical Clips Carousel */}
                <div className="mt-20">
                    <div className="flex items-center justify-between mb-8">
                        <h5 className="text-sm font-bold uppercase tracking-widest text-white/60">
                            Technical Micro-Clips
                        </h5>
                        <div className="flex gap-4">
                            <button className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-black transition-all">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-deep-black transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Clip 1 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-3 relative">
                                <video
                                    src="/telemetry.mp4"
                                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuC1rdUU569jsR2-_6GCyxAjIxyygv7TJuGUSsFIRcdmo5QJLQlfclk261MhHO2lyElvyJYhi9DALaMkiwLxwNFKBQcAsqtcO7wTbYcSMd5fjdVtr4cAabWIUuQhERu60dHHBBhqgdwaVBgFJ917qWn0rCqrNpAewJPDJW1pi1MKEdL-JyAczSyFowfg4knST_AIcDI1Gh06xSDA70XvpTi3KjXlWYcQ7fd-ms_HqrwN7RVI_stlVZ4B0maOXXB0jodBgViH0fZz86U"
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                                    <PlayCircle className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                                Telemetry
                            </p>
                            <h6 className="text-xs font-bold uppercase mt-1">
                                Live Heatmap Analysis
                            </h6>
                        </div>

                        {/* Clip 2 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-3 relative">
                                <video
                                    src="/lidar.mp4"
                                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBu0itESrOGF5E6KQWC78hjN1BqcoM0NDrP-awcjRrW0BR84wE5yR2DqtRQPWzAt0UeWPeuYB-rzz9XF_R6zfY3Xs25eHRkc8Jg85W9agTxov--n4My9JfEeKJ3U-bKCfowRHxFV0LfCG5aXPhiSTm_zp6q3AKgAlNC1889YZwGVXuF15Js3gGvwg_IV6QoWuam5xKPY6OBrHv4BuACBSnllb5O6WjT7rF6C5rG0BpCM9OCfXdzDi8hR--wkvi2JO5ei8Z1EclGvo8"
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                                    <PlayCircle className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                                LiDAR
                            </p>
                            <h6 className="text-xs font-bold uppercase mt-1">
                                3D SLAM Mapping
                            </h6>
                        </div>

                        {/* Clip 3 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-3 relative">
                                <video
                                    src="/ai-hub.mp4"
                                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDFyjFKudjL2gsHC7R_SP9jRPfhFniGdWVLNaZeJrfKy4Mj7p6wKRQ_HKph1BoL_zjnMn_3Oe2iWZSLCL1E4G6XswmBC0jhZTyEpt0DruBJ913i7a9tbl2dVa-svisu6LVXdXsVBCyiDkX53zV9AxXu_akYXJynhA0OeugCsugng6tfUCmHD9LNb9eTsoWDr9CkPP6FPwbVcP4qR4sdMXrvHwKrfYtdhzy_lN4_HhXJtjSINJNkMFOm1bf50aRP0LmrqGwOc2iidMA"
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                                    <PlayCircle className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                                AI Hub
                            </p>
                            <h6 className="text-xs font-bold uppercase mt-1">
                                Weight Gradient Descent
                            </h6>
                        </div>

                        {/* Clip 4 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-3 relative">
                                <video
                                    src="/fpov.mp4"
                                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBdn2FHsA-2vgbReQ5Dq6oGm7TPsMNlJAnonzPDdiaDKEcIRMAFZ6ArBFRmHZfd1COKhYnFOuaA6-UEzdTkwjHvTtRrpr2CZ_ed0BuhkAzIE5NllZ-QN4D4Y1VFKdOpLTgqA__XM_spe4PY5tZYP0j-YHdWgm0X9VPvQsiW8P3nXtLCRmHRAmbYummIiPeyjfXDHHn_gV4ZGeilp-TcC9JWQyA2m88oWtU0CSI94x5FK7s4hX_nXKRWB3ki0wkOVPKk-YBHxR44Ho4"
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                                    <PlayCircle className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                                FPOV
                            </p>
                            <h6 className="text-xs font-bold uppercase mt-1">
                                The First-Person Race
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
