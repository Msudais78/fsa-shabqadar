import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: {
    slug: string;
    image: string;
    ages: string;
    name: string;
    summary: string;
  };
  index?: number;
  className?: string;
}

export function ProgramCard({ program, index = 0, className }: ProgramCardProps) {
  return (
    <Link
      to="/programs/$slug"
      params={{ slug: program.slug }}
      className={cn(
        "group overflow-hidden rounded-[1.75rem] bg-cream shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]",
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={program.image}
        alt=""
        className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral">
          {program.ages}
        </p>
        <h3 className="mt-2 flex items-center justify-between text-xl font-semibold tracking-[-0.04em]">
          {program.name}
          <ArrowUpRight className="size-5 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{program.summary}</p>
      </div>
    </Link>
  );
}
