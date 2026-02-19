import { HomeNavbar } from "../../components/home/HomeNavbar";
import { HomeFooter } from "../../components/home/HomeFooter";
import { BlogHero } from "../../components/blog/BlogHero";
import { BlogGrid } from "../../components/blog/BlogGrid";

export default function BlogPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main>
                <BlogHero />
                <BlogGrid />
            </main>
            <HomeFooter />
        </div>
    );
}
