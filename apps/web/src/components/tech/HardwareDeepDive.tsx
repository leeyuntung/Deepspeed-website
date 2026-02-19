import Image from "next/image";

export function HardwareDeepDive() {
    return (
        <section className="pb-24 px-6 max-w-7xl mx-auto">
            <div className="bg-slate-950 rounded-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwfEAghF5l-AecDTpu6OalCXbwuEO_cfgm7vudcWsPQVbd1Hy7F9nksHantcIXK4-0K502PKIRzOiEm2FuG7XTzE1wgz4Zud7zBIqVw8xtO0QpCvo9_5x1hzqOhv8cendkA75_ZlayxeA1Bei1CfpdjwhYURuEhVAkpMw7xcHMWSmy6abtidMIRz9HVCjvcaETUddYQwB-qs2cBGyQlYCtE3vni61hyHDM8Z1nidAB-zSPPobR644sDB1n5d8f-sPADlbN8spSHOM"
                        alt="Abstract circuit board technology pattern"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            NVIDIA JETSON<br />
                            <span className="text-primary">AGX ORIN SERIES</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-10">
                            The heart of our car provides server-class AI performance at the edge, enabling us to run complex neural networks for object detection and real-time trajectory optimization simultaneously.
                        </p>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-white/10 pt-10">
                            <div>
                                <h5 className="text-primary font-bold text-xs uppercase mb-2">CUDA Cores</h5>
                                <p className="text-white text-3xl font-bold">2048</p>
                            </div>
                            <div>
                                <h5 className="text-primary font-bold text-xs uppercase mb-2">Memory Bandwidth</h5>
                                <p className="text-white text-3xl font-bold">204 GB/s</p>
                            </div>
                            <div>
                                <h5 className="text-primary font-bold text-xs uppercase mb-2">Power Draw</h5>
                                <p className="text-white text-3xl font-bold">15W - 60W</p>
                            </div>
                            <div>
                                <h5 className="text-primary font-bold text-xs uppercase mb-2">DL Accelerators</h5>
                                <p className="text-white text-3xl font-bold">2x NVDLA v2</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-slate-900 rounded-2xl p-4 overflow-hidden aspect-square flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk3p6vCMhx1VMtpeGQQxb4pB4ATUhC9PtfeD_BJqD7udz6u10JZE1NCkhfASmv9ZK1jl2b4lM2WPnxamZRzm05P1sLMIyAy_HdPpdmpD1MrOXq9m0-g_2vJnwqZGetabA3xnAgzCQijG5XYyKa1CGjaB3-zMVftmtmilW3G6qXPT9JeW0480PExu6QZCqM2H1XFlUsgSnCj3WZVeW8Zsjx1qm7SE830NSquJ3yA3Tpclcpok3vi484yZoP3ZIEpY7nwrMr81-kUX4"
                                    alt="Close up of a high performance microchip"
                                    fill
                                    className="object-cover rounded-xl opacity-80"
                                />
                            </div>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-color"></div>
                            {/* Scanning line effect */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-scan"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
