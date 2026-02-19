import { HomeNavbar } from "../../../components/home/HomeNavbar";
import { HomeFooter } from "../../../components/home/HomeFooter";
import { ContactHero } from "../../../components/contact/ContactHero";
import { JobListings } from "../../../components/contact/JobListings";

export default function RecruitPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main>
                <ContactHero />
                <JobListings />
            </main>
            <HomeFooter />
        </div>
    );
}
