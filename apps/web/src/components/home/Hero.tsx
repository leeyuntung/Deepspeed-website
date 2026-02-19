import { Button } from "@packages/ui/src/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-carbon flex items-center">
            <div className="absolute inset-0 z-0">
                <img
                    alt="High-speed racing motion blur"
                    className="w-full h-full object-cover opacity-50 grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDinG2FWrwaJ_AXVMtSSg3oJpdT8gMW4EiqALjqzcJIrf1EsjKu1hGGHwEQgxAZ10iBCUZCexqGIAMHONj8JHShUiULyape9tSox3cKI1E9yMRhJ1btVEu6-Y6ogKnuJodu1bPnCRVdS504MDRUJcXTh8TjmZJJAcwFkfsfi7-_Z1fBk1m-9Wcjl-BHjmQH6Q16ys-AY6jjhfV0IKWhLvNJ69IU9J9cM39iXQLVOBFuweYqvGAhltUkSkSqTcuMDWk1tC5xuhgJC3M"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/40"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="flex flex-col gap-2">
                    <span className="text-primary font-bold tracking-[0.5em] uppercase text-sm">
                        Autonomous Division
                    </span>
                    <h1 className="text-8xl md:text-[10rem] font-bold italic leading-none tracking-tighter text-white">
                        DEEP<br />
                        <span className="text-outline">SPEED</span>
                    </h1>
                    <p className="max-w-xl text-xl text-gray-400 mt-8 font-light">
                        Redefining the limits of F1TENTH. Where advanced neural networks
                        meet high-performance engineering on the asphalt.
                    </p>
                    <div className="flex gap-4 mt-12">
                        <Link href="/tech">
                            <Button
                                size="lg"
                                className="hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                <span>Explore Technology</span>
                                <span className="material-icons text-sm">arrow_forward</span>
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg">
                            Watch Reveal
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 right-0 w-1/2 hidden lg:block transform translate-x-20">
                <img
                    alt="F1 racing car prototype"
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(13,89,242,0.3)]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2NIJV1NRLX0mcB6c4XSzL9CFAuykJeTeJ9atHiz6F9IelxfyDPUe62mDRi1G4ZeiGGOpVdb3zfaK-Hf3n25I703CDrTcWZUVTtPY5jyJFBaxV696V8vUdm_-L1fYjkWmbLkcxp3xhehml9lXI7WWpF-NNTV6W-g_VhrFRIu3WF1ESe_uHDD7GcLBCnG4pGbp4gHKDU_izqK9sPwmxJT1aRiydqPAOkFj2bP_JrfcUk5Si7JxTFeULktWMFGp1mOXv0bDoPnPgFR0"
                />
            </div>
        </section>
    );
}
