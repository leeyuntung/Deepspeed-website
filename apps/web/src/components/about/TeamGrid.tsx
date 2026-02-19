export function TeamGrid() {
    const teamMembers = [
        {
            name: "Subrat Prasad Panda",
            role: "Managing Director",
            description:
                "Overseeing holistic integration of hardware and software pipelines for the 2024 racing season.",
            icon: "hub",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUMEllFDYgvb9NmV8W0Y_nk1HqUVaG9KoS48jp5PB4zDMSGpRX3_yHEGtmpDEAY87n22dPEzdl-TvJ4J5KXLt9Ksg-sMRg8cHL0CbI0rbaAFiYSM5Oj87GYDns3VQMgEwPRICr1p2KxLQvLuaxVrEoPLG4u__YVsA8qqV7736kpVrNKESzIRSm444aQ643DPvkSPO7BfFnPF7oVMyT1j7MhdjEu77fospRY_ZWFX3Bw66FLEz3PAQIM6oNUDGF1bONm18rlV_muE",
        },
        {
            name: "Edurado de Conto",
            role: "Technical Lead",
            description:
                "Architecting the next generation of high-speed path planning and autonomous SLAM protocols.",
            icon: "navigation",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDTtqFBMcOo_VrzVLvVj3zL0TyFFUZKC-guKdYnamamZrQUuJ0tcMry8tQqE064hiYGjY2s_x8Db5o7vQ1wS186EPfzHi3baAQl0ipoAnNU9LUui3B1b6O17Op_dr5_gigTYD-Kivt7LtnsyDxANYBbtWSi1hbTkbEWarLCj9WUX1fGz3p8AQpbDMYz8BQkM2GoZCp8nNJYJk19Y-Zanjbf5SVeNGApgZAwqewiLqLxAP6FJvA1QOckvk52dYTbGPe2eU9iyrOmRfI",
        },
        {
            name: "Lee Yun-Tung",
            role: "Operations Lead",
            description:
                "Managing strategic partnerships and global competition logistics for international circuits.",
            icon: "public",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBt64TBH5m_fxn7meuyU0VWtiaBjIcVkPasdY2Cxv2kOFSTIXruo8pcciEch5EdF1oEhYecEjWurqkgfJbE1hoMXOXEqj9Zcf3at7C5GOCS3km54w6y8pwWIsCZNc-3ZuFzCqZ9T3OEsrKY1kBqcHEDYwSrDwPeepzvP7u0EpqaML7quAfFy-xzCOGoHCu4GkKjkNMrhm5qTJnsz2f_mB9fxYBv6m__gIZzfZ-U3HD3N3__EOXbIgcvMSt6KT_rXvqQqV6E9qXOwIY",
        },
        {
            name: "Wang Kahlok",
            role: "Vision Systems",
            description:
                "Developing real-time semantic segmentation for dynamic and unpredictable race environments.",
            icon: "visibility",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB-X5Y7OnUhAEDwFt4k-MUo1pIE6Fh9iiIDhy72pjNrhy4LOQRWmzKmkcRIMr3GOP5zvHOQRzMggQThcZ7GZfytYHvGrq6W8Ze58x5fGVswIJJ3NhrpbIthwnsfALFzGD1ztz7qOq7_7mjWBsj3w8pw3bQnmwTRU75UmozxpHMTPgbyf5ZTCp2i7yyUPDU1rJBK3jBqvOPoavmgUXxglodvUhTwOUU6aDmznD-lnRiOfdili5R0q403iT3mFuL_x8sR0sUYQACMT74",
        },
        {
            name: "Chen Ting-Ju",
            role: "AI Research",
            description:
                "Pioneering reinforcement learning models for aggressive line-following and overtaking maneuvers.",
            icon: "psychology",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAlxpPejZkeiLbP5iSSRUtPTXvi8YscIU56dFYNcyWG9G554Vxj4QTo0xfFxcIXi4QP2HI39euyIhsztXVFK_8o_JX9106Sb6i3xAj_rfYFWIStmftOTpYA1PZsdqQrhDMaTI-dkpzoa94iETeBf8tkkATvIaodXR4JQ6vNeVSksUE_3IFJ_ZUt4w3fLTwShkzNPOxVhA4MmelXoo8vXyzD2IIViZxSrtaTJGpMZoHNLVI5wn20-iuB4ALegFf9mQaeygrIpIRW_t4",
        },

    ];

    return (
        <section className="py-32 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-4 mb-8 text-primary">
                            <span className="h-[1px] w-12 bg-primary"></span>
                            <span className="text-xs font-bold tracking-[0.4em] uppercase text-primary">
                                02 // Personnel
                            </span>
                        </div>
                        <h2 className="text-6xl font-bold tracking-tight mb-6 uppercase">
                            Current Team
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg uppercase tracking-wider font-light">
                            We are a team of undergraduate students from the CCDS and EEE of Nanyang Technological University, Singapore.

                        </p>
                    </div>

                </div>
                <div className="mb-16">
                    <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-12 border-b border-slate-100 dark:border-slate-800 pb-4">
                        Meet the Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white dark:bg-slate-900/50 p-8 group team-card-border border border-slate-50 dark:border-slate-800"
                            >
                                <div className="aspect-square bg-slate-100 dark:bg-slate-800 mb-8 overflow-hidden image-container relative">
                                    <img
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        src={member.image}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-2xl font-bold tracking-tight">
                                            {member.name}
                                        </h4>
                                        <span className="material-icons text-primary/30 text-sm">
                                            {member.icon}
                                        </span>
                                    </div>
                                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                                        {member.role}
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-4 border-t border-slate-50 dark:border-slate-800 mt-4">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-6 px-10 py-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                            Join the Collective Engineering Force
                        </span>
                        <span className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700"></span>
                        <a
                            className="text-primary text-xs font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
                            href="/contact"
                        >
                            View Open Positions →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
