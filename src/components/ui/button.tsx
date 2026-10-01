import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy text-cream hover:bg-navy-deep shadow-[0_8px_20px_rgb(18_38_90/0.18)]",
  coral: "bg-coral text-cream hover:brightness-110 shadow-[0_8px_20px_rgb(255_71_29/0.25)]",
  gold: "bg-gold text-navy hover:brightness-105",
  outline:
    "bg-transparent text-navy shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.16)] hover:shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.4)]",
  ghost: "bg-transparent text-navy hover:bg-navy/5",
} as const;

const sizes = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-[0.975rem]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

function classes(variant: Variant, size: Size, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-[-0.02em]",
    "transition-[transform,background-color,box-shadow,filter] duration-150 ease-out",
    "active:not-disabled:scale-[0.96] disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return <button className={classes(variant, size, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={classes(variant, size, className)} {...props} />;
}
