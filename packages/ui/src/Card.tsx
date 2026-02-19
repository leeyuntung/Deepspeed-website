import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "glass" | "dark" | "default";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = "", variant = "default", ...props }, ref) => {
        const variants = {
            glass: "glass-card",
            dark: "dark-card bg-race-dark border border-white/10",
            default: "bg-white dark:bg-background-dark border border-primary/5 shadow-sm",
        };

        const classes = [
            "rounded-xl p-6 transition-all",
            variants[variant],
            className,
        ].join(" ");

        return <div ref={ref} className={classes} {...props} />;
    }
);

Card.displayName = "Card";
