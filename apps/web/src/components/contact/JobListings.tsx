export function JobListings() {
    const jobs = [
        {
            department: "Software",
            title: "Junior member",
            description:
                "Optimize LiDAR and camera fusion algorithms for ultra-high speed navigation.",
            location: "Remote / On-site",
        },
        {
            department: "Software",
            title: "Junior member",
            description:
                "Develop racing line optimization strategies and aggressive overtaking maneuvers.",
            location: "Berlin / Tech Lab",
        },
        {
            department: "Engineering",
            title: "Junior member",
            description:
                "Refine low-level MCU controls for millisecond response times in high-G corners.",
            location: "Engineering HQ",
        },
        {
            department: "Engineering",
            title: "Junior member",
            description:
                "Design bespoke chassis and heat management systems for 1:10 scale race cars.",
            location: "On-site Workshop",
        },
        {
            department: "Creative",
            title: "Junior member",
            description:
                "Tell the story of autonomous racing through high-impact visual narratives.",
            location: "Remote Friendly",
        },
    ];

    return (
        <>
            <div className="racing-line h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <section className="py-24 bg-white/50 dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold uppercase mb-4">
                                Current Openings
                            </h2>
                            <p className="text-slate-500 max-w-md">
                                Our garage is growing. We are looking for high-performance
                                individuals to fill key technical and strategic roles.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <span className="px-4 py-2 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/5 cursor-pointer">
                                All Departments
                            </span>
                            <span className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary/50 cursor-pointer transition-colors">
                                Engineering
                            </span>
                            <span className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary/50 cursor-pointer transition-colors">
                                Software
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <div
                                key={job.title}
                                className="group bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full group-hover:bg-primary/10 transition-colors"></div>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                    {job.department}
                                </span>
                                <h3 className="text-2xl font-bold mt-4 mb-2 group-hover:text-primary transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                                    {job.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase font-bold tracking-tighter opacity-50">
                                        {job.location}
                                    </span>
                                    <button className="flex items-center text-primary font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                                        Apply Now{" "}
                                        <span className="material-icons text-sm ml-1">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* "Build Your Own" Card */}
                        <div className="group border-2 border-dashed border-slate-200 dark:border-slate-800 p-8 rounded-xl flex flex-col justify-center items-center text-center transition-all hover:border-primary/50">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                                <span className="material-icons text-slate-400">
                                    add_reaction
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 uppercase">
                                Spontaneous Entry
                            </h3>
                            <p className="text-slate-500 text-xs mb-6">
                                Don&apos;t see your role? We&apos;re always scouting for extraordinary
                                talent.
                            </p>
                            <a
                                className="text-primary font-bold uppercase text-xs tracking-widest"
                                href="#contact"
                            >
                                Send Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
