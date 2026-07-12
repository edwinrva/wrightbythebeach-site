import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-ocean-800 text-sand-50 hover:bg-ocean-900",
  secondary: "bg-sand-50 text-ocean-900 border border-ocean-800 hover:bg-sand-100",
  ghost: "bg-transparent text-ocean-900 hover:bg-sand-100",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function CtaButton({ href, variant = "primary", className = "", children, ...rest }: Props) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
