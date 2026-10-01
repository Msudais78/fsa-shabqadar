import { ButtonLink } from "@/components/ui/button";

export function PageHero({
  eyebrow = "FSA",
  title,
  body,
  image,
  imageAlt,
  primaryButtonText = "Explore programs",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  primaryButtonText?: string;
}) {
  return (
    <section className="container-site grid items-center gap-10 py-12 md:grid-cols-2 md:gap-14 md:py-16">
      <div className="animate-rise">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">{eyebrow}</p>
        <h1 className="mt-3 max-w-xl text-[2.15rem] leading-[1.08] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{body}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink to="/programs" size="lg">
            {primaryButtonText}
          </ButtonLink>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-3 -z-10 rotate-[-2deg] rounded-[2rem] bg-gold/80" />
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[5/4] w-full rounded-[1.75rem] object-cover"
        />
      </div>
    </section>
  );
}
