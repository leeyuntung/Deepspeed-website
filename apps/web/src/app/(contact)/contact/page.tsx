import { HomeNavbar } from "../../../components/home/HomeNavbar";
import { HomeFooter } from "../../../components/home/HomeFooter";
import { ContactForm } from "../../../components/contact/ContactForm";
import { ContactSponsors } from "../../../components/contact/ContactSponsors";

export default function ContactPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main>
                <ContactForm />
                <ContactSponsors />
            </main>
            <HomeFooter />
        </div>
    );
}
