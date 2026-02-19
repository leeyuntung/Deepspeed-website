export function AboutHero() {
    return (
        <section className="relative py-32 overflow-hidden border-b border-primary/10">
            <div className="absolute inset-0 technical-grid pointer-events-none opacity-20"></div>
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-primary"></span>
                            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">
                                01 // Foundation
                            </span>
                        </div>
                        <h1 className="text-7xl font-bold leading-[0.9] tracking-tighter mb-8">
                            WHAT IS <br />
                            <span className="italic text-primary">F1TENTH?</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-lg">
                            F1TENTH is an international community of researchers, engineers, and
                            autonomous systems enthusiasts. At 1/10th scale, we race at speeds
                            up to 40mph, requiring sub-millisecond perception and millimetric
                            precision.
                        </p>
                        <div className="grid grid-cols-2 gap-8 border-t border-slate-100 dark:border-slate-800 pt-10">
                            <div>
                                <span className="material-icons text-primary mb-2">
                                    settings_input_component
                                </span>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-1">
                                    Standard Chassis
                                </h4>
                                <p className="text-xs text-slate-500 uppercase tracking-tighter">
                                    1:10 Traxxas Rally Base
                                </p>
                            </div>
                            <div>
                                <span className="material-icons text-primary mb-2">
                                    precision_manufacturing
                                </span>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-1">
                                    Compute Core
                                </h4>
                                <p className="text-xs text-slate-500 uppercase tracking-tighter">
                                    NVIDIA Orin / Xavier Series
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800 relative overflow-hidden group border border-slate-200 dark:border-slate-800">
                            <img
                                alt="Cinematic F1TENTH Race"
                                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuY6gAwkNMzdJ-y7WmYjEDUKIK8dguyEEF03_dLpD6XcJ7HI7E5Li2Nv2NFcZNEV9EKoew_43eODV_M2nnHcB7lQvq0fXqPMe48ymGzqRzZXLH-fNHbD3cePSf2y7ogK5B0HHxeFBgJ0rtR5vc6U4B7hHuiESGoErwOXsGBo4t5R3BTCyAKR7T4buQIUAX6LHliP3sF8VbSgL1B4X8IaDAVkLvYB9ZgJIzwyrdbxPBOqZ9Sv1lvmgXvFqshE0CZfpvSRFIHVL9DCc"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer">
                                    <span className="material-icons text-white text-4xl">
                                        play_arrow
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-64 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl hidden lg:block">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">
                                Architecture v4.2
                            </p>
                            <div className="space-y-3">
                                <div className="h-1 bg-slate-100 dark:bg-slate-800 w-full overflow-hidden">
                                    <div className="h-full bg-primary w-2/3"></div>
                                </div>
                                <div className="h-1 bg-slate-100 dark:bg-slate-800 w-full overflow-hidden">
                                    <div className="h-full bg-primary w-1/2"></div>
                                </div>
                                <div className="h-1 bg-slate-100 dark:bg-slate-800 w-full overflow-hidden">
                                    <div className="h-full bg-primary w-5/6"></div>
                                </div>
                            </div>
                            <p className="mt-4 text-[9px] text-slate-400 font-mono">
                                ESTIMATED LATENCY: 0.018ms
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
