import * as React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className = "", variant = "primary", size = "md", fullWidth = false, ...props },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20",
            outline: "border border-white/20 text-white hover:bg-white/10",
            ghost: "text-slate-500 hover:text-primary hover:bg-primary/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs",
            md: "px-6 py-3 text-sm",
            lg: "px-8 py-4 text-base",
        };

        const classes = [
            baseStyles,
            variants[variant],
            sizes[size],
            fullWidth ? "w-full" : "",
            className,
        ].join(" ");

        return <button ref={ref} className={classes} {...props} />;
    }
);

Button.displayName = "Button";
