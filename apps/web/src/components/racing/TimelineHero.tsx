export function TimelineHero() {
    return (
        <header className="relative overflow-hidden bg-race-dark py-20 border-b border-white/5">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0d59f2_0%,transparent_50%)]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Season 2024 Active
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-none mb-6">
                            DRIVING THE<br />
                            <span className="text-primary">FUTURE</span> OF SPEED
                        </h1>
                        <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
                            Track the evolution of the Deepspeed autonomous racing platform. From
                            raw LIDAR data to podium finishes at the global F1TENTH Grand Prix.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <span className="text-slate-500 text-xs uppercase tracking-widest block mb-2">
                                Global Ranking
                            </span>
                            <span className="text-4xl font-bold text-white">#04</span>
                            <div className="mt-2 text-emerald-400 text-xs flex items-center">
                                <span className="material-icons text-sm">trending_up</span> +2
                                slots this season
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <span className="text-slate-500 text-xs uppercase tracking-widest block mb-2">
                                Total Podiums
                            </span>
                            <span className="text-4xl font-bold text-white">12</span>
                            <div className="mt-2 text-primary text-xs flex items-center">
                                <span className="material-icons text-sm">workspace_premium</span>{" "}
                                Elite Status
                            </div>
                        </div>
                        <div className="col-span-2 bg-primary p-8 rounded-lg glow-primary">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white/80 text-xs uppercase tracking-widest font-bold">
                                    Next Grand Prix: ICRA 2024
                                </span>
                                <span className="material-icons text-white">timer</span>
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <span className="text-3xl font-bold text-white">14</span>
                                    <span className="text-white/60 text-xs ml-1 uppercase">Days</span>
                                </div>
                                <div>
                                    <span className="text-3xl font-bold text-white">08</span>
                                    <span className="text-white/60 text-xs ml-1 uppercase">Hrs</span>
                                </div>
                                <div>
                                    <span className="text-3xl font-bold text-white">42</span>
                                    <span className="text-white/60 text-xs ml-1 uppercase">Min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
