import { Button } from "@packages/ui/src/Button";

export function FeaturedPost() {
    return (
        <section className="mb-12 relative group overflow-hidden rounded-xl h-[600px] shadow-2xl">
            <img
                alt="F1TENTH Autonomous Car"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwybhuawTq51At4g5amdKN5UAvqWTLCdq5_RW_mcMBKZ5t9E0Oi7nALbIbUG-sVtMg53ELQFNupdmoG8t6XULLu99bW_PFbWwSF8s5ilcphWCnpFs-M90Pb9ntqdX-t7K_WBlMfATNLagt-j-3r9AuUbhMdk7jQY0RH-Jrmt8_Gc-hQQ1x0z1U3h2J_-m30UVcf_BI4pBW6M0xl4oAkSZe8LQfgEudocBcPvCHxVsAfjX6jNW-ETyocUlAo1GqF_nGrIHIrKlS0XQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101622e6] via-[#10162266] to-transparent flex flex-col justify-end p-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded">
                        Technical Breakthrough
                    </span>
                    <span className="text-slate-300 text-sm font-medium flex items-center gap-1">
                        <span className="material-icons text-sm">schedule</span> 8 MIN READ
                    </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-[1.1]">
                    Mastering the Hairpin: Our New RL Model for Precision Cornering
                </h2>
                <p className="text-slate-300 text-xl max-w-2xl mb-8 leading-relaxed">
                    By leveraging asynchronous reinforcement learning, we&apos;ve shaved 1.2
                    seconds off our lap times at the Montreal GP circuit.
                </p>
                <div className="flex items-center gap-6">
                    <Button
                        size="lg"
                        className="flex items-center gap-2 group/btn"
                    >
                        <span>Read Full Insight</span>
                        <span className="material-icons transition-transform group-hover/btn:translate-x-1">
                            arrow_forward
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
