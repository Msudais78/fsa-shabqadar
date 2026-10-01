import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center no-underline",
        className,
      )}
      aria-label="FSA College System home"
    >
      <img src="/logo.png" alt="FSA College System" className="h-12 w-auto" />
    </Link>
  );
}
