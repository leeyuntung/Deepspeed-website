import Link from "next/link";

export function HomeFooter() {
    return (
        <footer className="bg-carbon py-20 border-t border-white/5 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <span className="material-icons text-white text-xl">speed</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tighter uppercase text-white">
                                DEEPSPEED
                            </span>
                        </div>
                        <p className="text-gray-500 max-w-sm mb-8">
                            The elite autonomous racing project pushing the boundaries of
                            artificial intelligence and high-performance robotics.
                        </p>
                        <div className="flex gap-4">
                            {["twitter", "github", "linkedin"].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                                >
                                    <span className="material-icons text-sm">{icon === "twitter" ? "share" : icon === "github" ? "code" : "email"}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">
                            Navigation
                        </h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Specifications
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Engineering Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Track Records
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Team Members
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">
                            Resources
                        </h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Sponsorship Kit
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Open Source Code
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Media Assets
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-gray-600">
                    <p>© 2024 DEEPSPEED AUTONOMOUS RACING. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
