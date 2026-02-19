interface ArticleCardProps {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    categoryColor?: string;
}

export function ArticleCard({ title, excerpt, date, readTime, image, category, categoryColor = "bg-black/60" }: ArticleCardProps) {
    return (
        <article className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-xl mb-4">
                <img
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                />
                <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 ${categoryColor} backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded`}>
                        {category}
                    </span>
                </div>
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {title}
            </h4>
            <p className="text-slate-500 text-sm line-clamp-2">
                {excerpt}
            </p>
            <div className="mt-4 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>{date}</span>
                <span>{readTime}</span>
            </div>
        </article>
    );
}
