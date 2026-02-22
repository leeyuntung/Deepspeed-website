export function TeamGrid() {
    const teamMembers = [
        {
            name: "Assoc Prof Arvind Easwaran",
            role: "Mentor",
            department: "College of Computing and Data Science",
            instagram: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUMEllFDYgvb9NmV8W0Y_nk1HqUVaG9KoS48jp5PB4zDMSGpRX3_yHEGtmpDEAY87n22dPEzdl-TvJ4J5KXLt9Ksg-sMRg8cHL0CbI0rbaAFiYSM5Oj87GYDns3VQMgEwPRICr1p2KxLQvLuaxVrEoPLG4u__YVsA8qqV7736kpVrNKESzIRSm444aQ643DPvkSPO7BfFnPF7oVMyT1j7MhdjEu77fospRY_ZWFX3Bw66FLEz3PAQIM6oNUDGF1bONm18rlV_muE",
        },
        {
            name: "Subrat Prasad Panda",
            role: "Mentor",
            department: "College of Computing and Data Science",
            instagram: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUMEllFDYgvb9NmV8W0Y_nk1HqUVaG9KoS48jp5PB4zDMSGpRX3_yHEGtmpDEAY87n22dPEzdl-TvJ4J5KXLt9Ksg-sMRg8cHL0CbI0rbaAFiYSM5Oj87GYDns3VQMgEwPRICr1p2KxLQvLuaxVrEoPLG4u__YVsA8qqV7736kpVrNKESzIRSm444aQ643DPvkSPO7BfFnPF7oVMyT1j7MhdjEu77fospRY_ZWFX3Bw66FLEz3PAQIM6oNUDGF1bONm18rlV_muE",
        },
        {
            name: "Edurado de Conto",
            role: "Mentor",
            department: "College of Computing and Data Science",
            instagram: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTtqFBMcOo_VrzVLvVj3zL0TyFFUZKC-guKdYnamamZrQUuJ0tcMry8tQqE064hiYGjY2s_x8Db5o7vQ1wS186EPfzHi3baAQl0ipoAnNU9LUui3B1b6O17Op_dr5_gigTYD-Kivt7LtnsyDxANYBbtWSi1hbTkbEWarLCj9WUX1fGz3p8AQpbDMYz8BQkM2GoZCp8nNJYJk19Y-Zanjbf5SVeNGApgZAwqewiLqLxAP6FJvA1QOckvk52dYTbGPe2eU9iyrOmRfI",
        },
        {
            name: "Lee Yun-Tung",
            role: "Member",
            department: "Computer Science",
            instagram: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt64TBH5m_fxn7meuyU0VWtiaBjIcVkPasdY2Cxv2kOFSTIXruo8pcciEch5EdF1oEhYecEjWurqkgfJbE1hoMXOXEqj9Zcf3at7C5GOCS3km54w6y8pwWIsCZNc-3ZuFzCqZ9T3OEsrKY1kBqcHEDYwSrDwPeepzvP7u0EpqaML7quAfFy-xzCOGoHCu4GkKjkNMrhm5qTJnsz2f_mB9fxYBv6m__gIZzfZ-U3HD3N3__EOXbIgcvMSt6KT_rXvqQqV6E9qXOwIY",
        },
        {
            name: "Wang Kahlok",
            role: "Member",
            department: "Electrical and Electronic Engineering",
            instagram: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-X5Y7OnUhAEDwFt4k-MUo1pIE6Fh9iiIDhy72pjNrhy4LOQRWmzKmkcRIMr3GOP5zvHOQRzMggQThcZ7GZfytYHvGrq6W8Ze58x5fGVswIJJ3NhrpbIthwnsfALFzGD1ztz7qOq7_7mjWBsj3w8pw3bQnmwTRU75UmozxpHMTPgbyf5ZTCp2i7yyUPDU1rJBK3jBqvOPoavmgUXxglodvUhTwOUU6aDmznD-lnRiOfdili5R0q403iT3mFuL_x8sR0sUYQACMT74",
        },
        {
            name: "Chen Ting-Ju",
            role: "Member",
            department: "Electrical and Electronic Engineering",
            instagram: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlxpPejZkeiLbP5iSSRUtPTXvi8YscIU56dFYNcyWG9G554Vxj4QTo0xfFxcIXi4QP2HI39euyIhsztXVFK_8o_JX9106Sb6i3xAj_rfYFWIStmftOTpYA1PZsdqQrhDMaTI-dkpzoa94iETeBf8tkkATvIaodXR4JQ6vNeVSksUE_3IFJ_ZUt4w3fLTwShkzNPOxVhA4MmelXoo8vXyzD2IIViZxSrtaTJGpMZoHNLVI5wn20-iuB4ALegFf9mQaeygrIpIRW_t4",
        },

    ];

    return (
        <section className="py-32 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl font-bold tracking-tight mb-6 uppercase">
                            Current Team
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm tracking-wider font-light">
                            We are a team of graduate and undergraduate students from the CCDS and EEE of Nanyang Technological University, Singapore.
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
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" /></svg>
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
