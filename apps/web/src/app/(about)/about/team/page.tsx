"use client";

import { HomeNavbar } from "../../../../components/home/HomeNavbar";
import { HomeFooter } from "../../../../components/home/HomeFooter";
import { TeamGrid } from "../../../../components/about/TeamGrid";
import { TeamHero } from "../../../../components/about/TeamHero";

export default function TeamPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main>
                <TeamHero />
                <TeamGrid />
            </main>
            <HomeFooter />
        </div>
    );
}
