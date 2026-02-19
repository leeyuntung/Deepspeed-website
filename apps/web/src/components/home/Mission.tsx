export function Mission() {
    return (
        <section className="py-32 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                        <h2 className="text-5xl font-bold leading-tight mb-8">
                            The Future of <span className="text-primary">Autonomous</span>{" "}
                            Performance.
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Deepspeed is a elite racing collective dedicated to mastering the
                            F1TENTH platform. We push the boundaries of perception, planning,
                            and control to build machines that think faster than humans react.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">
                                    2.4<span className="text-xl">s</span>
                                </div>
                                <div className="text-xs uppercase tracking-widest font-bold opacity-60">
                                    0-60 Velocity
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">
                                    150<span className="text-xl">hz</span>
                                </div>
                                <div className="text-xs uppercase tracking-widest font-bold opacity-60">
                                    Control Frequency
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <img
                            alt="Technical engineering lab"
                            className="relative rounded-xl shadow-2xl z-10"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcu8jzf8Vzlqv8He1GPAv1cUfLs66G3m4fJlxOAXTP0O_XtZ_wr8iMRCOJT-_yIEpirsjIFfC_QtMd1ulTOHpqyzyp_JZoQbRc3H2JJF88aUEbs1uh02Wz8AegYkFkhRn_oDgKO0jqS6-qLAFn-YjdJvIGBEXsiqWXBwiGSf8MtqRZLgIEaCzQmLTA0fpn2SmTmvc9IlHtkqe89-nL1DNmZR5d4sdVpZ-76ExRjLo4-ETla8Q05Gt_uUxo78KKzwDvs2AyF9JtVoE"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
