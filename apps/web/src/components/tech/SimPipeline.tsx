export function SimPipeline() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase">
                    Sim-To-Real Pipeline
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto italic">
                    Closing the gap through high-fidelity physics and hardware-in-the-loop validation.
                </p>
            </div>
            <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 -translate-y-1/2 hidden lg:block"></div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-primary/10 shadow-sm z-10">
                        <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6 mx-auto">
                            <span className="material-icons">view_in_ar</span>
                        </div>
                        <h4 className="text-center font-bold uppercase text-sm mb-2">
                            Digital Twin
                        </h4>
                        <p className="text-center text-xs text-slate-500">
                            Photogrammetry-based track scans in Unity & Gazebo.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-primary/10 shadow-sm z-10">
                        <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6 mx-auto">
                            <span className="material-icons">terminal</span>
                        </div>
                        <h4 className="text-center font-bold uppercase text-sm mb-2">
                            Algorithm Training
                        </h4>
                        <p className="text-center text-xs text-slate-500">
                            Massively parallel reinforcement learning via AWS clusters.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-primary/10 shadow-sm z-10">
                        <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6 mx-auto">
                            <span className="material-icons">memory</span>
                        </div>
                        <h4 className="text-center font-bold uppercase text-sm mb-2">
                            HIL Validation
                        </h4>
                        <p className="text-center text-xs text-slate-500">
                            Hardware-in-the-loop testing on the Jetson edge compute.
                        </p>
                    </div>
                    {/* Step 4 */}
                    <div className="relative bg-primary p-8 rounded-2xl shadow-xl shadow-primary/20 z-10">
                        <div className="w-10 h-10 bg-white/20 text-white flex items-center justify-center rounded-lg mb-6 mx-auto">
                            <span className="material-icons">sports_score</span>
                        </div>
                        <h4 className="text-center font-bold uppercase text-sm text-white mb-2">
                            Race Track
                        </h4>
                        <p className="text-center text-xs text-white/80">
                            Real-world deployment with zero-day hardware calibration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
