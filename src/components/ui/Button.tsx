import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  external?: boolean;
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25",
  secondary: "bg-white text-primary hover:bg-surface border border-primary/20",
  outline: "border-2 border-white text-white hover:bg-white/10",
  accent: "bg-accent text-primary hover:bg-accent-dark shadow-lg shadow-accent/25",
  ghost: "text-primary hover:bg-primary/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
      {children}
    </button>
  );
}
