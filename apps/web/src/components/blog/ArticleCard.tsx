interface ArticleCardProps {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
}

export function ArticleCard({
    title,
    excerpt,
    date,
    image,
    category,
}: ArticleCardProps) {
    return (
        <article className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-slate-100">
                <img
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={image}
                />
            </div>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                        {category}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <time className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                        {date}
                    </time>
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {excerpt}
                </p>
                <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 border-b-2 border-primary/20 group-hover:border-primary transition-all">
                        Read Insight
                    </span>
                </div>
            </div>
        </article>
    );
}
