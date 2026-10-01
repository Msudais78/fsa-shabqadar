import { ButtonLink } from "@/components/ui/button";

export function HomeHero() {
  return (
    <div className="overflow-hidden bg-paper">
      <section className="container-site grid items-center gap-8 pb-16 pt-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div className="max-w-[540px]">
          <p
            className="animate-rise text-sm font-semibold uppercase tracking-[0.16em] text-coral"
            style={{ animationDelay: "40ms" }}
          >
            FSA College System Shabqadar
          </p>
          <h1
            className="animate-rise mt-4 max-w-xl text-[2.35rem] leading-[1.05] md:text-[3.35rem]"
            style={{ animationDelay: "100ms" }}
          >
            Stop memorizing for tests and <span className="text-coral">learn what actually matters</span>.
          </h1>
          <p
            className="animate-rise mt-5 max-w-md text-base leading-relaxed text-muted md:text-[1.05rem]"
            style={{ animationDelay: "180ms" }}
          >
            Your 11th and 12th grade years are your launchpad. Dive into IT, Pre-Engineering, and Pre-Medical with hands-on labs, modern tech, and instructors who treat you like an adult.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <ButtonLink to="/programs" size="lg">
              See our Programs
            </ButtonLink>
          </div>
        </div>

        <div className="relative isolate min-w-0 lg:ml-auto">
          <div className="pointer-events-none absolute -left-10 -top-6 -z-10 h-48 w-48 rounded-full bg-leaf/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-steel/20 blur-2xl" />

          <div
            className="animate-rise relative aspect-[16/10] w-full max-w-[640px] overflow-hidden rounded-[24px] border border-navy/5 shadow-lift lg:aspect-[4/3]"
            style={{ animationDelay: "160ms" }}
          >
            <img
              src="/hero.png"
              alt="FSA College Shabqadar students"
              className="h-full w-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
