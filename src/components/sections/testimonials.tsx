import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const tones = {
  mint: "bg-mint",
  lavender: "bg-lavender",
  sky: "bg-sky",
} as const;

export function Testimonials() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">Families</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Words from parents who walk our halls</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className={cn(
              "flex flex-col rounded-[1.75rem] p-7 shadow-[var(--shadow-soft)]",
              tones[t.tone],
            )}
          >
            <blockquote className="text-[0.98rem] leading-relaxed text-navy/85">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-cream">
                {t.initial}
              </span>
              <span>
                <span className="block font-semibold tracking-[-0.03em]">{t.name}</span>
                <span className="text-sm text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
