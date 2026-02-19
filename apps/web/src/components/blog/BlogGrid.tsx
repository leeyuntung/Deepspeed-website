import Link from "next/link";
import { Button } from "@packages/ui/src/Button";

export function BlogGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
            {/* News Card 1 */}
            <div className="md:col-span-8 group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6">
                    <img
                        alt="Team working in lab"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXUaMYxwIPmlS7l_qLfnKi5AHGkzAEwQQe-1B2FSHTP8UarVSIKGncIPlU0j-VTQb6UlPc0BrCYRYTU9skoezpp-JZaZhF-mSEKweEerSApWh78EYe7D6t8R0rCACBNu7ewfbK4FkSsAkKNzJtxIKvskMLTGKVEH2c4B5ycn9ALcjR0O7TsE3fNNkYEBPYlu45lEA0QCGr2kDY4-t93V5I2J_qtBhHjUZKfPcZAXCWIDpvv-vV2cjFes2w3KZ3_SDJhPnAmmqsukk"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest rounded">
                            Team Update
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3 text-xs font-bold text-primary tracking-widest uppercase">
                    <span>OCTOBER 24, 2023</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>ENGINEERING</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Beyond Simulation: The Challenges of Real-World Telemetry Gap
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    How we addressed the discrepancy between our digital twin performance
                    and physical track behavior during the summer testing phase.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-primary group-hover:gap-4 transition-all"
                >
                    Explore Article <span className="material-icons text-sm">east</span>
                </Link>
            </div>

            {/* News Card 2 - Sidebar Style */}
            <div className="md:col-span-4 space-y-8">
                <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20 speed-pattern">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                        <span className="material-icons text-lg">electric_bolt</span> Fast
                        Track News
                    </h4>
                    <ul className="space-y-6">
                        <li className="border-b border-primary/10 pb-6 last:border-0 last:pb-0">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                Live Results
                            </span>
                            <Link
                                href="#"
                                className="block font-bold hover:text-primary transition-colors mt-1"
                            >
                                Podium Finish at the Detroit Autonomous Challenge
                            </Link>
                        </li>
                        <li className="border-b border-primary/10 pb-6 last:border-0 last:pb-0">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                Hardware
                            </span>
                            <Link
                                href="#"
                                className="block font-bold hover:text-primary transition-colors mt-1"
                            >
                                Integrating the new NVIDIA Orin for Low-Latency Perception
                            </Link>
                        </li>
                        <li className="border-b border-primary/10 pb-6 last:border-0 last:pb-0">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                Community
                            </span>
                            <Link
                                href="#"
                                className="block font-bold hover:text-primary transition-colors mt-1"
                            >
                                Deepspeed Open Source: Contributing to F1TENTH Libs
                            </Link>
                        </li>
                    </ul>
                    <Button fullWidth className="mt-8" variant="outline">
                        View All Headlines
                    </Button>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                    <img
                        alt="Lidar Visualization"
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDx9iZcIMtFAmbUvJ-XnCOqtJOl1tnPBOu5K_YPWf1GmOyteWWNR3hKXl5uosmDajiaaNAflhE_TiyhyHeguqa2qQZDbPMBwJKteYb2z83_6rAw3jvgfLIdgIbUBejlZSWr-R2Tqx_PB0aIkpO-qFJXp3FAg742Fk35MEpFu0PFMpIlnsyy05JqEuXbN6ZGBnsAcDqJdXxg3SXNej-uLsS3Zz2BQ7IXMQTlzb9gt8W9x6iuvPvKvfrmxoLUR7CLyPRq4MLt6HiekI"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-white font-bold text-2xl uppercase italic tracking-tighter">
                            Visualizing Speed
                        </span>
                        <p className="text-white/80 text-xs mt-1 uppercase tracking-widest font-medium">
                            The Art of Perception Data
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
