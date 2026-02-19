export function ContactHero() {
    return (
        <header className="relative pt-40 pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 dark:opacity-20 pointer-events-none">
                    <img
                        className="w-full h-full object-cover"
                        alt="Abstract technical circuit board pattern"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCXLVOVLoId9OKXJHASAq2_y4H3wjXWw83UPBPcuz4TRJ2VhFhsk_bBkWUNHWwbb_QAWwXhOSG3lKemjno91n0wpiNszO68ocjUD3TnxXd17BWE4OJ0SfcUQugR3FQAMqjazzWaJRCCo6n8SoaUhBFjReVCWYF5Z1XkO0meANbgvPii4UgGcH2mqTwqP8T0iPMFfjaUxePiPIDT91RnW4q1kWuOnSjd7W8mC9laC1YBj1zOzUnNQkq-0i08nXIlTsZFMo_xP2ECMs"
                    />
                </div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center space-x-2 mb-6 text-primary">
                        <span className="w-12 h-[2px] bg-primary"></span>
                        <span className="uppercase tracking-[0.3em] font-bold text-sm">
                            Autonomous Excellence
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-8">
                        Join the <span className="text-primary italic">Pursuit</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                        We&apos;re building the future of F1TENTH autonomous racing. Join a collective
                        of elite engineers, designers, and visionaries pushing the limits of
                        speed and software.
                    </p>
                </div>
            </div>
        </header>
    );
}
