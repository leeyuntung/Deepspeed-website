export function PerformanceGrid() {
    const techs = [
        {
            title: "Neural Perception",
            icon: "visibility",
            desc: "Custom object detection pipelines optimized for sub-millisecond latency on embedded hardware.",
        },
        {
            title: "Carbon Chassis",
            icon: "settings_input_component",
            desc: "Ultra-lightweight 1:10 scale structural design utilizing aerospace-grade carbon fiber composites.",
        },
        {
            title: "Kinematic MPC",
            icon: "route",
            desc: "Predictive control algorithms that account for non-linear tire dynamics and track surface friction.",
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-[#0a0f1a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">
                            Engineering Excellence
                        </span>
                        <h2 className="text-4xl font-bold mt-2">Core Technologies</h2>
                    </div>
                    <div className="text-gray-500 max-w-sm text-sm uppercase tracking-wider">
                        Powered by cutting-edge NVIDIA Jetson architectures and LiDAR SLAM
                        algorithms.
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {techs.map((tech) => (
                        <div
                            key={tech.title}
                            className="group bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/5 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-icons text-primary group-hover:text-white">
                                    {tech.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
                                {tech.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {tech.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
