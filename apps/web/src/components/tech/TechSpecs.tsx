import Image from "next/image";

export function TechSpecs() {
    return (
        <section className="bg-white dark:bg-slate-900 border-y border-primary/10 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Column 1: Perception */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <span className="material-icons text-primary">visibility</span>
                        <h3 className="text-xl font-bold tracking-tight uppercase">
                            Perception Stack
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border-l-4 border-primary">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
                                SLAM & Mapping
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Iterative Closest Point (ICP) based mapping for high-fidelity track modeling.
                            </p>
                        </div>
                        <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border-l-4 border-primary/40">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
                                Dynamic Obstacle Detection
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Bayesian filtering for multi-agent tracking and velocity estimation.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="code-block bg-slate-950 text-slate-300 p-4 rounded-xl text-xs overflow-hidden relative font-mono">
                            <div className="flex justify-between mb-2 text-slate-500 font-sans border-b border-slate-800 pb-2">
                                <span>lidar_filter.cpp</span>
                                <span className="material-icons text-xs">code</span>
                            </div>
                            <pre className="whitespace-pre-wrap">
                                <code>
                                    {`void processScan(const ScanPtr& msg) {
  auto filtered = filterNoise(msg);
  auto clusters = dbScan(filtered);
  // Publish obstacle poses
  publishTrackers(clusters);
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Column 2: Planning */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <span className="material-icons text-primary">psychology</span>
                        <h3 className="text-xl font-bold tracking-tight uppercase">
                            Planning Engine
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border-l-4 border-primary">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
                                Trajectory Optimization
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Sequential Quadratic Programming (SQP) for minimum-time racing lines.
                            </p>
                        </div>
                        <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border-l-4 border-primary/40">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
                                Reactive Planners
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Gap Follower and Pure Pursuit fallback modes for high-speed evasion.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 tech-grid opacity-20"></div>
                        <div className="relative w-full h-full">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF1f4WOu8pAjrq1zhP2jbg3imGXEQeav66O_8V5pZPgZR3KSA_laRlRJdoxb5lXSCZUphsBtCKY9d23nWugSeyuIkKoKRy_l3TOg7sx80aHaSzvZZKSz53hkXkRFDraPk2qi1BXD3KnMflO3zKcnrHtppMJ-7Vmw_sjRelJ2iJ3Azz_gW6P78rHeQ_iEWHDjU3hRbJa2DYiUMzJKxONeQMVZEE0bLoOfODXRDHzuMwQYnX1QN5JZPlj-Uzjz_DFj_mlRThpL2tqiE"
                                alt="Data visualization of a racing trajectory"
                                fill
                                className="object-cover rounded-lg mix-blend-multiply dark:mix-blend-overlay"
                            />
                        </div>
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl m-2 pointer-events-none"></div>
                    </div>
                </div>

                {/* Column 3: Control */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <span className="material-icons text-primary">
                            settings_input_component
                        </span>
                        <h3 className="text-xl font-bold tracking-tight uppercase">
                            Control System
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border-l-4 border-primary">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
                                Model Predictive Control
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Non-linear MPC incorporating tire slip and weight transfer models.
                            </p>
                        </div>
                        <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border-l-4 border-primary/40">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">
                                Low-Level Feedback
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                VESC-integrated PID loops for precise RPM and current control.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="text-[10px] text-slate-400 uppercase tracking-tighter mb-1">
                                Update rate
                            </div>
                            <div className="text-xl font-bold font-mono">1.0kHz</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="text-[10px] text-slate-400 uppercase tracking-tighter mb-1">
                                Slip Angle
                            </div>
                            <div className="text-xl font-bold font-mono">2.4°</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="text-[10px] text-slate-400 uppercase tracking-tighter mb-1">
                                CPU Load
                            </div>
                            <div className="text-xl font-bold font-mono">14.2%</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="text-[10px] text-slate-400 uppercase tracking-tighter mb-1">
                                Max Current
                            </div>
                            <div className="text-xl font-bold font-mono">60A</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
