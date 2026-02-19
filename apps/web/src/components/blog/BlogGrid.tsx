"use client";

import { ArticleCard } from "./ArticleCard";
import { useState } from "react";

const BLOG_ARTICLES = [
    {
        title: "Mastering the Hairpin: Our New RL Model for Cornering",
        excerpt:
            "Leveraging asynchronous reinforcement learning to shave 1.2 seconds off lap times at the Montreal GP circuit through precision trajectory optimization.",
        date: "Oct 28, 2023",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCwybhuawTq51At4g5amdKN5UAvqWTLCdq5_RW_mcMBKZ5t9E0Oi7nALbIbUG-sVtMg53ELQFNupdmoG8t6XULLu99bW_PFbWwSF8s5ilcphWCnpFs-M90Pb9ntqdX-t7K_WBlMfATNLagt-j-3r9AuUbhMdk7jQY0RH-Jrmt8_Gc-hQQ1x0z1U3h2J_-m30UVcf_BI4pBW6M0xl4oAkSZe8LQfgEudocBcPvCHxVsAfjX6jNW-ETyocUlAo1GqF_nGrIHIrKlS0XQ",
        category: "Autonomous Tech",
    },
    {
        title: "Beyond Simulation: The Telemetry Gap Challenge",
        excerpt:
            "How our engineering squad addressed the discrepancy between digital twin performance and physical track behavior during summer testing.",
        date: "Oct 24, 2023",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCXUaMYxwIPmlS7l_qLfnKi5AHGkzAEwQQe-1B2FSHTP8UarVSIKGncIPlU0j-VTQb6UlPc0BrCYRYTU9skoezpp-JZaZhF-mSEKweEerSApWh78EYe7D6t8R0rCACBNu7ewfbK4FkSsAkKNzJtxIKvskMLTGKVEH2c4B5ycn9ALcjR0O7TsE3fNNkYEBPYlu45lEA0QCGr2kDY4-t93V5I2J_qtBhHjUZKfPcZAXCWIDpvv-vV2cjFes2w3KZ3_SDJhPnAmmqsukk",
        category: "Engineering",
    },
    {
        title: "Podium Finish at Detroit Challenge",
        excerpt:
            "Deepspeed secures 2nd place in the high-speed autonomous challenge, showcasing our new Orin-powered perception stack.",
        date: "Oct 18, 2023",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDDx9iZcIMtFAmbUvJ-XnCOqtJOl1tnPBOu5K_YPWf1GmOyteWWNR3hKXl5uosmDajiaaNAflhE_TiyhyHeguqa2qQZDbPMBwJKteYb2z83_6rAw3jvgfLIdgIbUBejlZSWr-R2Tqx_PB0aIkpO-qFJXp3FAg742Fk35MEpFu0PFMpIlnsyy05JqEuXbN6ZGBnsAcDqJdXxg3SXNej-uLsS3Zz2BQ7IXMQTlzb9gt8W9x6iuvPvKvfrmxoLUR7CLyPRq4MLt6HiekI",
        category: "Race Updates",
    },
    {
        title: "Optimizing Python for RT-Performance",
        excerpt:
            "Techniques for multi-threaded reward calculation in F1TENTH gym environments to reduce training latency.",
        date: "Oct 12, 2023",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDk3YS6taPra_TFOW-ZwbTpMFWtw1tSslasxn8Sy9mQzxTsCe5Dkv1mEqFiuAFu9rq7pai1XcnhVDaEtqyuyubAGa8SXIIR2DWR59pkxZTfxaS7WbyFWsd82l1AtWnBqiJ-1IggXfPivW1uDsfubM441kj9xz6V5M3bs0g3XOMgwF-tRc8jGrY2WDEARZd51jFyiwQwNyCdJmQj31X9eJtPx0gVmK8ndv6HM-uYfF_IGbkRlavxkpd9YKtI9B-IoyagtD-8b_I05K4",
        category: "Autonomous Tech",
    },
    {
        title: "The Psychology of Driverless Racing",
        excerpt:
            "Exploring team dynamics and the emotional stakes in a high-intensity sport where the athlete is an algorithm.",
        date: "Oct 05, 2023",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBBUfteNTKRh1TT1kGm1F1C9BAlQGMz1odZNwQMUfhCKOjxvHDCUe2HinKg6hjN3oRLuR3PWATf3nfXfTubADATDjEboNZovdIHzX-QEZr1rKFoMZBULXB91yb-54kxQCXJ20FLtUGLUNHQiQl1fw3occ2Pr492zCoWmKExKvnvZKDseTjIZD61h4-jUx9q8G_mN3iAokQbGWbDH2b8FsrsNmhLLMqqkMtw-eTy_lPXLWePz1RaYdJFndqDCA3UC8VtxXHStGnQ1OU",
        category: "Race Updates",
    },
    {
        title: "2024 Roadmap: Swarm Intelligence",
        excerpt:
            "Our vision for multi-agent coordination in competitive environments and collaborative racing strategies.",
        date: "Sep 28, 2023",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgZbvhdyKcUohKtWhoF2c2Bh5yCBQ_unxoNnCmdrtTz-1C5Dit1C3MHgTJjLcPemNCTyJvsBd-Uue6HEE8dS-4QHIUFvpvJVcjhzNp9CvH2JsD8bLBOwNiuw8uD3mw94tBspCqNnKpq9pCOxaT5k_WuMXnH0-T9NU3SU3X0o7zicPk0zVnyBPRRUOYP0yOt6-bMgmtjdhJnosIMQtjabv_EYgs6RBX5TiTM8DHC-8FwaU-iEc-IeD8Mu905iMKw8L03iCElRWhmM",
        category: "Autonomous Tech",
    },
];

const FILTERS = [
    "All Stories",
    "Autonomous Tech",
    "Race Updates",
    "Sponsorship",
    "Engineering",
];

export function BlogGrid() {
    const [activeFilter, setActiveFilter] = useState("All Stories");

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-16 pb-8 border-b border-slate-100 dark:border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-4">
                    Filter by:
                </span>
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors ${activeFilter === filter
                            ? "bg-primary text-white"
                            : "bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
                {BLOG_ARTICLES.map((article) => (
                    <ArticleCard key={article.title} {...article} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-primary transition-colors text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center bg-primary text-white text-xs font-bold">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-primary transition-colors text-slate-600 dark:text-slate-300 text-xs font-bold">
                        2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-primary transition-colors text-slate-600 dark:text-slate-300 text-xs font-bold">
                        3
                    </button>
                </div>
                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-primary transition-colors text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
            </div>
        </div>
    );
}
