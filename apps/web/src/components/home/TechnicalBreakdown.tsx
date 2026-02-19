export function TechnicalBreakdown() {
    return (
        <section className="py-32 bg-carbon text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 carbon-pattern"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
                        Precision Engineering
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="space-y-12">
                            <div className="flex gap-6 items-start">
                                <span className="text-primary font-display text-4xl font-bold opacity-30">
                                    01
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold uppercase mb-2">
                                        LiDAR Scanning
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Hokuyo UST-10LX providing 270° of high-fidelity
                                        environmental data at 40Hz.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="text-primary font-display text-4xl font-bold opacity-30">
                                    02
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold uppercase mb-2">
                                        Edge Computing
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        NVIDIA Jetson AGX Orin delivering server-class AI
                                        performance at the edge.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="text-primary font-display text-4xl font-bold opacity-30">
                                    03
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold uppercase mb-2">
                                        Telemetry
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Real-time bi-directional data streaming for sub-second system
                                        adjustments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img
                            alt="Detailed circuit board"
                            className="rounded-xl shadow-2xl border border-white/10"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDARcqRPkSlavGkwJWLh3dyLchjhXq-4xpHK2u8XLk2MeZ-jvYCTsTVb8UWxwwBExfvpnujQQSHhZV9ULSIr9a8jGbA6q4hvIoD-FQNFJXY4HUhNx76gh2P16HGi7T9OWhlnkqS5W_UYmvuUVjLzZlZTailE5IoWJAQhCO2_p0Dms-q7lJpx7Dflw7u7qkX-CqWw6YZ69jUgGdw0niX4zjcqHk_VmkeCsMrCJSIqQJ_fWPRhy-qvRzhKUvLH_0BMmLsoNUjl42L7RE"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
