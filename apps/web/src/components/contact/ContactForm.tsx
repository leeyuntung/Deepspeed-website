import { Button } from "@packages/ui/src/Button";

export function ContactForm() {
    return (
        <section className="py-24 relative" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                        <h2 className="text-5xl font-bold uppercase mb-8 leading-tight">
                            Connect with the <span className="italic text-primary">Pit Crew</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                            Whether you&apos;re looking to join the team, partner with us, or just
                            talk tech, our lines are always open.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-icons text-xl">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest">
                                        Base of Operations
                                    </h4>
                                    <p className="text-slate-500 text-sm">
                                        Hardware and Embedded Systems Lab (HESL)
                                        College of Computing and Data Science
                                        Nanyang Technological University
                                        50 Nanyang Avenue, Singapore 639798
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-icons text-xl">
                                        alternate_email
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest">
                                        Inquiries
                                    </h4>
                                    <p className="text-slate-500 text-sm">race@deepspeed.ai</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 h-64 rounded-xl overflow-hidden grayscale opacity-80 border border-slate-200 dark:border-slate-800">
                            <img
                                className="w-full h-full object-cover"
                                alt="Modern architecture high-tech office building"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrqprPfIgk93ZAJsBBQkX9eoy0IPgT6iw4xAkAiti9osMCZhBSaphixnxFc3HEpjUxu5kNgevMNNH4dVqkCetc-2wVNQ2oxQ_TrAanCmIpfQVuAn07fI9HP09b5J0Ua8tBZf3mTNEl-Pb1KqHILJ99OXCGBZrqQkRo5MNOuEFZym-A0lmPV8vySrX-O6QRBF0skBcD6yQJ8v6bqNQXf2QCjevKrZWM9aX20rUE0lHCaUEashCQojSrrmdkPyNVCtbmXRBUWeWqGuc"
                            />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-2xl shadow-primary/5 border border-slate-100 dark:border-slate-800">
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                        Your Name
                                    </label>
                                    <input
                                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded p-4 focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                                        placeholder="John V"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                        Email Address
                                    </label>
                                    <input
                                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded p-4 focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                                        placeholder="john@speed.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    LinkedIn Profile URL
                                </label>
                                <input
                                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded p-4 focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                                    placeholder="linkedin.com/in/username"
                                    type="url"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    Message / Portfolio Brief
                                </label>
                                <textarea
                                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded p-4 focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"
                                    placeholder="How do you push the limits?"
                                    rows={4}
                                ></textarea>
                            </div>
                            <Button fullWidth className="py-4 text-base space-x-2">
                                <span>Submit Application</span>
                                <span className="material-icons">send</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
