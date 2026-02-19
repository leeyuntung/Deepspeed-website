import { HomeNavbar } from "../../../components/home/HomeNavbar";
import { HomeFooter } from "../../../components/home/HomeFooter";
import { AboutHero } from "../../../components/about/AboutHero";
import { MissionStatement } from "../../../components/about/MissionStatement";
import { GalleryGrid } from "../../../components/about/GalleryGrid";
import { VideoHub } from "../../../components/about/VideoHub";

export default function AboutPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main>
                <AboutHero />
                <MissionStatement />
                <GalleryGrid />
                <VideoHub />
            </main>
            <HomeFooter />
        </div>
    );
}
