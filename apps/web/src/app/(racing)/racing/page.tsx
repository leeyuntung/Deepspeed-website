import { HomeNavbar } from "../../../components/home/HomeNavbar";
import { TimelineHero } from "../../../components/racing/TimelineHero";
import { Timeline } from "../../../components/racing/Timeline";
import { HomeFooter } from "../../../components/home/HomeFooter";

export default function RacingPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <TimelineHero />
            <Timeline />
            <HomeFooter />
        </main>
    );
}
