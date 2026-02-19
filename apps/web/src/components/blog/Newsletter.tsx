import { Button } from "@packages/ui/src/Button";

export function Newsletter() {
    return (
        <section className="mt-20 border-t border-primary/10 pt-20 pb-12 text-center">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-4xl font-bold mb-4 italic tracking-tighter uppercase">
                    Stay Ahead of the <span className="text-primary">Curve</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Get technical deep-dives and race updates delivered straight to your
                    inbox. No fluff, just engineering excellence.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        className="flex-1 px-6 py-4 bg-white dark:bg-slate-800 border-2 border-primary/10 rounded-lg focus:outline-none focus:border-primary transition-colors font-medium"
                        placeholder="Enter your email address"
                        type="email"
                    />
                    <Button size="lg">Subscribe</Button>
                </form>
                <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-[0.2em]">
                    Join 5,000+ AI & Racing enthusiasts
                </p>
            </div>
        </section>
    );
}
