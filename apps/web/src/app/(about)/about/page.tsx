import { HomeNavbar } from "../../../components/home/HomeNavbar";
import { HomeFooter } from "../../../components/home/HomeFooter";
import { AboutHero } from "../../../components/about/AboutHero";
import { TeamGrid } from "../../../components/about/TeamGrid";
import { ValuesTicker } from "../../../components/about/ValuesTicker";

export default function AboutPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main>
                <AboutHero />
                <TeamGrid />
                <ValuesTicker />
            </main>
            <HomeFooter />
        </div>
    );
}
