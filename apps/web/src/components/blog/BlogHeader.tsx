export function BlogHeader() {
    const tabs = [
        "All Stories",
        "Autonomous Tech",
        "Race Updates",
        "Sponsorship",
        "Team Life",
    ];

    return (
        <header className="mb-12">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
                The <span className="text-primary italic">Circuit</span> Brief
            </h1>
            <div className="flex flex-wrap items-center gap-4 border-y border-primary/10 py-6">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${index === 0
                                ? "bg-primary text-white"
                                : "bg-primary/5 hover:bg-primary/10 text-slate-600 dark:text-slate-400"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </header>
    );
}
