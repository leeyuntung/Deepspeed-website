export function BlogHero() {
    return (
        <header className="relative w-full h-[600px] overflow-hidden bg-background-dark">
            <img
                alt="F1TENTH Autonomous Racing Lab"
                className="absolute right-0 top-0 w-2/3 h-full object-cover grayscale opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwybhuawTq51At4g5amdKN5UAvqWTLCdq5_RW_mcMBKZ5t9E0Oi7nALbIbUG-sVtMg53ELQFNupdmoG8t6XULLu99bW_PFbWwSF8s5ilcphWCnpFs-M90Pb9ntqdX-t7K_WBlMfATNLagt-j-3r9AuUbhMdk7jQY0RH-Jrmt8_Gc-hQQ1x0z1U3h2J_-m30UVcf_BI4pBW6M0xl4oAkSZe8LQfgEudocBcPvCHxVsAfjX6jNW-ETyocUlAo1GqF_nGrIHIrKlS0XQ"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0bcc] to-transparent"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
                        Editorial Intelligence
                    </span>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                        Insights &amp;
                        <br />
                        <span className="text-primary">News</span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
                        The technical frontier of autonomous racing. In-depth analysis, telemetry
                        breakthroughs, and mission updates from the Deepspeed engineering lab.
                    </p>
                    <div className="relative group max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-500 text-xl">
                                search
                            </span>
                        </div>
                        <input
                            className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-lg backdrop-blur-sm placeholder:text-slate-600"
                            placeholder="Search the technical archive..."
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
