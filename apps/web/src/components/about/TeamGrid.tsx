export function TeamGrid() {
    const teamMembers = [
        {
            name: "Assoc Prof Arvind Easwaran",
            role: "Mentor",
            department: "College of Computing and Data Science",
            linkedin: "https://www.linkedin.com/in/arvind-easwaran-8889a716/",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUMEllFDYgvb9NmV8W0Y_nk1HqUVaG9KoS48jp5PB4zDMSGpRX3_yHEGtmpDEAY87n22dPEzdl-TvJ4J5KXLt9Ksg-sMRg8cHL0CbI0rbaAFiYSM5Oj87GYDns3VQMgEwPRICr1p2KxLQvLuaxVrEoPLG4u__YVsA8qqV7736kpVrNKESzIRSm444aQ643DPvkSPO7BfFnPF7oVMyT1j7MhdjEu77fospRY_ZWFX3Bw66FLEz3PAQIM6oNUDGF1bONm18rlV_muE",
        },
        {
            name: "Subrat Prasad Panda",
            role: "Mentor",
            department: "Electrical and Electronic Engineering",
            linkedin: "https://www.linkedin.com/in/subrat-panda/",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUMEllFDYgvb9NmV8W0Y_nk1HqUVaG9KoS48jp5PB4zDMSGpRX3_yHEGtmpDEAY87n22dPEzdl-TvJ4J5KXLt9Ksg-sMRg8cHL0CbI0rbaAFiYSM5Oj87GYDns3VQMgEwPRICr1p2KxLQvLuaxVrEoPLG4u__YVsA8qqV7736kpVrNKESzIRSm444aQ643DPvkSPO7BfFnPF7oVMyT1j7MhdjEu77fospRY_ZWFX3Bw66FLEz3PAQIM6oNUDGF1bONm18rlV_muE",
        },
        {
            name: "Edurado de Conto",
            role: "Mentor",
            department: "Electrical and Electronic Engineering",
            linkedin: "https://www.linkedin.com/in/eduardo-de-conto/",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTtqFBMcOo_VrzVLvVj3zL0TyFFUZKC-guKdYnamamZrQUuJ0tcMry8tQqE064hiYGjY2s_x8Db5o7vQ1wS186EPfzHi3baAQl0ipoAnNU9LUui3B1b6O17Op_dr5_gigTYD-Kivt7LtnsyDxANYBbtWSi1hbTkbEWarLCj9WUX1fGz3p8AQpbDMYz8BQkM2GoZCp8nNJYJk19Y-Zanjbf5SVeNGApgZAwqewiLqLxAP6FJvA1QOckvk52dYTbGPe2eU9iyrOmRfI",
        },
        {
            name: "Lee Yun-Tung",
            role: "Member",
            department: "Computer Science",
            linkedin: "https://www.linkedin.com/in/yun-tung-lee/",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt64TBH5m_fxn7meuyU0VWtiaBjIcVkPasdY2Cxv2kOFSTIXruo8pcciEch5EdF1oEhYecEjWurqkgfJbE1hoMXOXEqj9Zcf3at7C5GOCS3km54w6y8pwWIsCZNc-3ZuFzCqZ9T3OEsrKY1kBqcHEDYwSrDwPeepzvP7u0EpqaML7quAfFy-xzCOGoHCu4GkKjkNMrhm5qTJnsz2f_mB9fxYBv6m__gIZzfZ-U3HD3N3__EOXbIgcvMSt6KT_rXvqQqV6E9qXOwIY",
        },
        {
            name: "Wang Kahlok",
            role: "Member",
            department: "Electrical and Electronic Engineering",
            linkedin: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-X5Y7OnUhAEDwFt4k-MUo1pIE6Fh9iiIDhy72pjNrhy4LOQRWmzKmkcRIMr3GOP5zvHOQRzMggQThcZ7GZfytYHvGrq6W8Ze58x5fGVswIJJ3NhrpbIthwnsfALFzGD1ztz7qOq7_7mjWBsj3w8pw3bQnmwTRU75UmozxpHMTPgbyf5ZTCp2i7yyUPDU1rJBK3jBqvOPoavmgUXxglodvUhTwOUU6aDmznD-lnRiOfdili5R0q403iT3mFuL_x8sR0sUYQACMT74",
        },
        {
            name: "Chen Ting-Ju",
            role: "Member",
            department: "Electrical and Electronic Engineering",
            linkedin: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlxpPejZkeiLbP5iSSRUtPTXvi8YscIU56dFYNcyWG9G554Vxj4QTo0xfFxcIXi4QP2HI39euyIhsztXVFK_8o_JX9106Sb6i3xAj_rfYFWIStmftOTpYA1PZsdqQrhDMaTI-dkpzoa94iETeBf8tkkATvIaodXR4JQ6vNeVSksUE_3IFJ_ZUt4w3fLTwShkzNPOxVhA4MmelXoo8vXyzD2IIViZxSrtaTJGpMZoHNLVI5wn20-iuB4ALegFf9mQaeygrIpIRW_t4",
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col sm:flex-row gap-8 items-start sm:items-center group"
                            >
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <img
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                                            src={member.image}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">
                                        {member.name}
                                    </h4>
                                    <p className="font-serif font-medium text-slate-600 dark:text-slate-400">
                                        {member.role}
                                    </p>
                                    <div className="h-[1px] w-8 bg-slate-300 dark:bg-slate-700 my-3"></div>
                                    <p className="font-serif text-sm text-slate-500 dark:text-slate-500">
                                        {member.department}
                                    </p>
                                    <div className="pt-2">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        </a>
                                    </div>
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
