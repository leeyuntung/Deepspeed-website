import { Card } from "@packages/ui/src/Card";
import { Button } from "@packages/ui/src/Button";

interface TimelineEvent {
    id: string; // Add id
    type: "upcoming" | "win" | "milestone" | "past";
    date: string;
    title: string;
    location?: string;
    description?: string;
    content: React.ReactNode;
    icon: string;
}

export function Timeline() {
    const events: TimelineEvent[] = [
        {
            id: "icra-2024",
            type: "upcoming",
            date: "Upcoming",
            title: "ICRA 2024 Grand Prix",
            location: "Yokohama, Japan",
            icon: "flag",
            content: (
                <Card variant="glass" className="border-primary/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded overflow-hidden bg-slate-200">
                            <img
                                alt="Japan circuit map"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5isYwEjk7Mw8o884YRgKYQj0zJ8DlXH7c5aHAdpsu2FaBTr58o303TCbyfXlFVahO1KEBqeqKHL794PfKNj5tf-jXRXGJmcJwmrnIq0eQKU-ITtyLypzKdonPtPr3YXiKc6VlfNR7Y791gdRYGA-M2TlqPGXvUG5QcR3l5QVsd5Zm7VVPLXXszS6mLMK_1d6DvLvjoyj_rPpljRFqOqjgX4VRVYK8hAwXl4MlEJrAzPYcFNA3F3EC0kwA7yAxR_7fUqA2ijnY8no"
                            />
                        </div>
                        <div>
                            <span className="text-xs text-primary font-bold uppercase">
                                May 13-17, 2024
                            </span>
                            <h4 className="font-bold">Circuit Strategy Finalized</h4>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        Our team is deploying the new Path-Optimized Neural Planner for the
                        complex chicane sequences of the Yokohama track.
                    </p>
                    <div className="flex gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                            Software
                        </span>
                        <span className="bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                            High Intensity
                        </span>
                    </div>
                </Card>
            ),
        },
        {
            id: "us-open-2023",
            type: "win",
            date: "October 2023",
            title: "Detroit, Michigan",
            location: "Intelligent Systems Conference",
            icon: "workspace_premium",
            content: (
                <Card
                    variant="dark"
                    className="relative overflow-hidden group hover:border-primary/50 transition-colors"
                >
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <span className="text-primary font-bold text-xs uppercase tracking-tighter">
                                Event Winner
                            </span>
                            <h3 className="text-2xl font-bold text-white mt-1">
                                F1TENTH US Open
                            </h3>
                        </div>
                        <div className="w-12 h-12 bg-yellow-500/20 rounded flex items-center justify-center">
                            <span className="material-icons text-yellow-500">
                                emoji_events
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 p-4 rounded">
                            <p className="text-white/40 text-[10px] uppercase font-bold">
                                Top Speed
                            </p>
                            <p className="text-lg font-bold text-white">4.2 m/s</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded">
                            <p className="text-white/40 text-[10px] uppercase font-bold">
                                Lap Variance
                            </p>
                            <p className="text-lg font-bold text-white">±0.04s</p>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Secured P1 after a flawless 20-lap stint. The vehicle demonstrated
                        superior overtaking logic in the final sector.
                    </p>
                    <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                        View Race Telemetry
                    </Button>
                </Card>
            ),
        },
        {
            id: "lidar-v2",
            type: "milestone",
            date: "Engineering Release",
            title: "Lidar Fusion v2.0",
            location: "Perception Stack Upgrade",
            icon: "settings_input_component",
            content: (
                <div className="border border-slate-200 dark:border-white/10 p-6 rounded-xl bg-white dark:bg-white/5">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <span className="material-icons text-xs text-primary">circle</span>
                        SLAM Integration
                    </h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Mapping Accuracy</span>
                            <span className="font-bold text-primary">99.2%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-full w-[92%]"
                                style={{ width: "92%" }}
                            ></div>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Transitioned to a real-time particle filter localization system,
                            reducing CPU overhead by 25%.
                        </p>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <main className="max-w-7xl mx-auto px-6 pb-24 relative mt-24">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2">
                <div className="w-full h-3/4 timeline-line"></div>
            </div>
            <div className="space-y-24 relative">
                {events.map((event, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={event.id}
                            className={`flex flex-col md:flex-row items-center justify-between w-full ${!isLeft ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div
                                className={`w-full md:w-5/12 hidden md:block ${isLeft ? "text-right" : "text-left pl-12"
                                    }`}
                            >
                                <div className={!isLeft ? "pl-0" : ""}>
                                    <span className="text-primary font-bold text-sm uppercase tracking-widest leading-none block">
                                        {event.date}
                                    </span>
                                    <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                                    {event.location && (
                                        <p className="text-slate-500 text-sm mt-2">{event.location}</p>
                                    )}
                                </div>
                            </div>
                            <div className="z-10 w-12 h-12 rounded-full bg-primary border-4 border-background-light dark:border-background-dark flex items-center justify-center shadow-lg shrink-0 my-6 md:my-0">
                                <span className="material-icons text-white text-xl">
                                    {event.icon}
                                </span>
                            </div>
                            <div className="w-full md:w-5/12">
                                {event.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
