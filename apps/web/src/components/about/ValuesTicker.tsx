export function ValuesTicker() {
    return (
        <div className="bg-slate-900 border-t border-slate-800 py-6 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
                <div className="flex gap-12 px-6">
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                        AUTONOMOUS RACING EXCELLENCE // DEEPSPEED F1TENTH
                    </span>
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                        PERCEPTION // PLANNING // CONTROL
                    </span>
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                        AUTONOMOUS RACING EXCELLENCE // DEEPSPEED F1TENTH
                    </span>
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                        PERCEPTION // PLANNING // CONTROL
                    </span>
                    {/* Duplicate for seamless scrolling effect */}
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                        AUTONOMOUS RACING EXCELLENCE // DEEPSPEED F1TENTH
                    </span>
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
                        PERCEPTION // PLANNING // CONTROL
                    </span>
                </div>
            </div>
        </div>
    );
}
