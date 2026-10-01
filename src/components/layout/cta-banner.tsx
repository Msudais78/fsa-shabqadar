import { ButtonLink } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="container-site py-8 md:py-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-12 text-cream md:px-14 md:py-16">
        <div className="absolute -right-10 -top-10 size-56 rounded-full bg-gold/20" />
        <div className="absolute -bottom-16 left-20 size-40 rounded-full bg-pink/20" />
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              ADMISSIONS OPEN
            </p>
            <h2 className="mt-3 text-3xl text-cream md:text-4xl">
              A college Shabqadar families can trust — this session.
            </h2>
            <p className="mt-4 max-w-lg text-cream/75">
              FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT. Separate campuses, real labs, a year-round test series, and scholarships for deserving students. Visit us, meet Principal Bilal Ahmed, and see the campus before you decide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/admission" variant="gold" size="lg">
                Start your application
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="outline"
                size="lg"
                className="text-cream shadow-[inset_0_0_0_1.5px_rgb(255_253_248/0.28)] hover:shadow-[inset_0_0_0_1.5px_rgb(255_253_248/0.7)]"
              >
                Contact admissions
              </ButtonLink>
            </div>
          </div>
          
          <div className="md:col-span-5 lg:col-span-5">
            <img
              src="/principal.jpg"
              alt="Bilal Ahmed, Principal, FSA College System Shabqadar"
              className="w-full aspect-square md:aspect-[4/5] lg:aspect-square object-cover object-top rounded-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
