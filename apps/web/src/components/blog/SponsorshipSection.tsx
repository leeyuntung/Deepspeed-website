import { Button } from "@packages/ui/src/Button";

export function SponsorshipSection() {
    return (
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900 text-white rounded-2xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <span className="material-icons text-[400px] absolute -top-20 -right-20">handshake</span>
            </div>
            <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-primary rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Partnership Excellence</span>
                <h2 className="text-4xl font-bold mb-6">Velocity Systems Joins Deepspeed as Platinum Title Sponsor</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    A multi-year commitment to pushing the boundaries of edge-computing in high-stakes autonomous racing. Together, we&apos;re redefining what&apos;s possible on the track.
                </p>
                <div className="flex gap-4">
                    <Button className="bg-white text-slate-900 hover:bg-white/90">Read Press Release</Button>
                    <Button variant="outline">Our Partners</Button>
                </div>
            </div>
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="w-full max-w-sm aspect-square bg-white/5 rounded-full border border-white/10 p-12 flex items-center justify-center">
                    <div className="text-center">
                        <span className="material-icons text-7xl text-primary mb-4">verified</span>
                        <p className="text-2xl font-bold italic tracking-tighter uppercase">Velocity <span className="text-primary">Systems</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
