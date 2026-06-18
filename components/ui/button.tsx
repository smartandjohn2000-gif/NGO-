import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#F4B400] text-[#0F4C81] hover:bg-[#f7c233] focus-visible:ring-[#F4B400]",
  secondary:
    "bg-[#0F4C81] text-white hover:bg-[#123f69] focus-visible:ring-[#0F4C81]",
  ghost:
    "bg-white text-[#0F4C81] border border-[#0F4C81]/20 hover:border-[#0F4C81] focus-visible:ring-[#0F4C81]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  size = "md",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
