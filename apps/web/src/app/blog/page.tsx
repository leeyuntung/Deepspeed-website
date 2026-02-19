import { HomeNavbar } from "../../components/home/HomeNavbar";
import { HomeFooter } from "../../components/home/HomeFooter";
import { BlogHeader } from "../../components/blog/BlogHeader";
import { FeaturedPost } from "../../components/blog/FeaturedPost";
import { BlogGrid } from "../../components/blog/BlogGrid";
import { SponsorshipSection } from "../../components/blog/SponsorshipSection";
import { ArticleCard } from "../../components/blog/ArticleCard";
import { Newsletter } from "../../components/blog/Newsletter";

export default function BlogPage() {
    const articles = [
        {
            title: "Optimizing Python for RT-Performance",
            excerpt:
                "Our latest contribution to the F1TENTH gym environment focuses on multi-threaded reward calculation.",
            date: "Oct 12, 2023",
            readTime: "4 Min Read",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDk3YS6taPra_TFOW-ZwbTpMFWtw1tSslasxn8Sy9mQzxTsCe5Dkv1mEqFiuAFu9rq7pai1XcnhVDaEtqyuyubAGa8SXIIR2DWR59pkxZTfxaS7WbyFWsd82l1AtWnBqiJ-1IggXfPivW1uDsfubM441kj9xz6V5M3bs0g3XOMgwF-tRc8jGrY2WDEARZd51jFyiwQwNyCdJmQj31X9eJtPx0gVmK8ndv6HM-uYfF_IGbkRlavxkpd9YKtI9B-IoyagtD-8b_I05K4",
            category: "Open Source",
            categoryColor: "bg-black/60",
        },
        {
            title: "The Psychology of No-Driver Racing",
            excerpt:
                "Exploring the team dynamics and emotional stakes in a sport where the athlete is an algorithm.",
            date: "Oct 05, 2023",
            readTime: "6 Min Read",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBBUfteNTKRh1TT1kGm1F1C9BAlQGMz1odZNwQMUfhCKOjxvHDCUe2HinKg6hjN3oRLuR3PWATf3nfXfTubADATDjEboNZovdIHzX-QEZr1rKFoMZBULXB91yb-54kxQCXJ20FLtUGLUNHQiQl1fw3occ2Pr492zCoWmKExKvnvZKDseTjIZD61h4-jUx9q8G_mN3iAokQbGWbDH2b8FsrsNmhLLMqqkMtw-eTy_lPXLWePz1RaYdJFndqDCA3UC8VtxXHStGnQ1OU",
            category: "Behind Scenes",
            categoryColor: "bg-black/60",
        },
        {
            title: "2024 Roadmap: Swarm Intelligence",
            excerpt:
                "Our vision for multi-agent coordination in competitive autonomous racing environments.",
            date: "Sep 28, 2023",
            readTime: "10 Min Read",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgZbvhdyKcUohKtWhoF2c2Bh5yCBQ_unxoNnCmdrtTz-1C5Dit1C3MHgTJjLcPemNCTyJvsBd-Uue6HEE8dS-4QHIUFvpvJVcjhzNp9CvH2JsD8bLBOwNiuw8uD3mw94tBspCqNnKpq9pCOxaT5k_WuMXnH0-T9NU3SU3X0o7zicPk0zVnyBPRRUOYP0yOt6-bMgmtjdhJnosIMQtjabv_EYgs6RBX5TiTM8DHC-8FwaU-iEc-IeD8Mu905iMKw8L03iCElRWhmM",
            category: "Future Tech",
            categoryColor: "bg-black/60",
        },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
            <HomeNavbar />
            <main className="max-w-7xl mx-auto px-6 py-12 pt-28">
                <BlogHeader />
                <FeaturedPost />
                <BlogGrid />
                <SponsorshipSection />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {articles.map((article) => (
                        <ArticleCard key={article.title} {...article} />
                    ))}
                </div>
                <Newsletter />
            </main>
            <HomeFooter />
        </div>
    );
}
