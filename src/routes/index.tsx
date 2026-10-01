import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartHandshake, Palette, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Shell } from "@/components/layout/shell";
import { HomeHero } from "@/components/sections/home-hero";
import { StatsRow } from "@/components/sections/stats";
import { ShiningStars } from "@/components/sections/shining-stars";
import { Testimonials } from "@/components/sections/testimonials";
import { ButtonLink } from "@/components/ui/button";
import { ProgramCard } from "@/components/ui/program-card";
import { gallery, programs, schedule } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({ meta: [{ title: "FSA College System — Learn what actually matters." }] }),
});

function Home() {
  return (
    <Shell>
      <main>
        <HomeHero />

        <section className="container-site py-12 md:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
                WHY FSA
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                A campus families trust. An education universities notice.
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              Separate buildings for boys and girls, real science and computer labs, a dedicated test-prep series, and scholarships for those who need them — this is FSA College Shabqadar.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl bg-emerald-100 p-7">
              <h3 className="text-xl font-bold tracking-[-0.04em] text-navy">Separate campuses, same high standard</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Boys and girls study in dedicated buildings so the environment matches regional values, without compromising labs, teaching, or results.
              </p>
            </article>
            <article className="rounded-3xl bg-violet-100 p-7">
              <h3 className="text-xl font-bold tracking-[-0.04em] text-navy">Labs, test series &amp; university counseling</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Fully structured science and computer laboratories, a dedicated board and entry-test preparation series, plus active career counseling for university placements.
              </p>
            </article>
            <article className="rounded-3xl bg-sky-100 p-7">
              <h3 className="text-xl font-bold tracking-[-0.04em] text-navy">Scholarships that actually open doors</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Special entry scholarships through internal assessment tests, plus reserved fee concessions for orphans, deserving students, and Huffaz-e-Quran.
              </p>
            </article>
          </div>
        </section>

        <section className="container-site pb-8">
          <StatsRow />
        </section>

        <ShiningStars />


        <section className="bg-cream py-16 md:py-24">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
                Academics
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Courses that get you ready for what’s next
              </h2>
              <p className="mt-4 text-muted">
                From Computer Science to Pre-Medical and Pre-Engineering, our curriculum is designed to challenge you and prepare you for university admissions.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((p, i) => (
                <ProgramCard key={p.slug} program={p} index={i} className="animate-rise" />
              ))}
            </div>
          </div>
        </section>

        <section className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
              HOW WE TEACH
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Less cramming. More concepts. Stronger results.
            </h2>
            <p className="mt-5 text-muted">
              Too many intermediate colleges still mean copied notes and last-month panic. At FSA College Shabqadar we teach the FSc and ICS syllabus so students actually understand it — then we lock it in with structured labs and a year-round test series for BISE, MDCAT, and ECAT.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.25rem] bg-mint p-5">
                <p className="flex items-center gap-2 font-semibold">
                  <HeartHandshake className="size-4" /> Teachers who prepare both papers
                </p>
                <p className="mt-1 text-sm text-navy/75">
                  Faculty who know the BISE syllabus in depth, explain concepts clearly, and train you for board exams and university entry tests — not just the next class test.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-blush p-5">
                <p className="flex items-center gap-2 font-semibold">
                  <Target className="size-4" /> Labs and a dedicated test series
                </p>
                <p className="mt-1 text-sm text-navy/75">
                  Fully structured Physics, Chemistry, Biology, and Computer laboratories, plus a dedicated test-preparation series so practice happens all year, not only before the board.
                </p>
              </div>
            </div>
            <ButtonLink to="/programs" className="mt-8">
              View all courses
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/classroom.jpg"
              alt="FSA College Shabqadar science and computer labs"
              className="mt-8 aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
            <img
              src="/test.jpg"
              alt="FSA College Shabqadar classroom and test preparation"
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        <section className="container-site py-8 md:py-12">
          <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-10 text-cream md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              A day at FSA
            </p>
            <h2 className="mt-3 max-w-xl text-3xl text-cream md:text-4xl">
              A schedule that respects your time
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {schedule.map((s) => (
                <div
                  key={s.time}
                  className="rounded-[1.25rem] bg-cream/8 px-5 py-6 shadow-[inset_0_0_0_1px_rgb(255_253_248/0.08)]"
                >
                  <p className="text-sm font-semibold text-gold">{s.time}</p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-cream">
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm text-cream/70">
              Balance your core subjects with hands-on lab time, giving you the knowledge and experience to excel in exams and beyond.
            </p>
          </div>
        </section>

        <section className="container-site py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
                Student life
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl">Where ambition meets opportunity</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-[1.25rem]">
                <img src={g.src} alt={g.alt} className="aspect-[4/3] w-full object-cover" />
              </figure>
            ))}
          </div>
        </section>

        <Testimonials />
      </main>
    </Shell>
  );
}
