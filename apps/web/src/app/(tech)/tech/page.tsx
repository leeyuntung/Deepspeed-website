import { HomeNavbar } from "../../../components/home/HomeNavbar";
import { HomeFooter } from "../../../components/home/HomeFooter";
import { TechHero } from "../../../components/tech/TechHero";
import { TechSpecs } from "../../../components/tech/TechSpecs";
import { SimPipeline } from "../../../components/tech/SimPipeline";
import { HardwareDeepDive } from "../../../components/tech/HardwareDeepDive";

export default function TechPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main className="relative">
                <TechHero />
                <TechSpecs />
                <SimPipeline />
                <HardwareDeepDive />
            </main>
            <HomeFooter />
        </div>
    );
}
