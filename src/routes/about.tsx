import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/layout/page-hero";
import { StatsRow } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { ButtonLink } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About · FSA" }] }),
});

function AboutPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="ABOUT FSA"
          title="A college Shabqadar families trust — for boards, entry tests, and what comes after."
          body="FSA College System Shabqadar is an intermediate college for FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT. Boys and girls study on separate campuses. Students work in real science and computer labs, sit a year-round test series, and get career counseling for university — with scholarships for orphans, deserving students, and Huffaz-e-Quran."
          image="/about-teachers.jpg"
          imageAlt="FSA College Shabqadar faculty"
          primaryButtonText="Explore programs"
        />

        <section className="container-site pb-16">
          <StatsRow />
        </section>

        <section className="container-site grid items-center gap-10 pb-20 md:grid-cols-2">
          <img
            src="/about-ecommerce.jpg"
            alt="E-commerce and IT workshop at FSA College Shabqadar"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">Workshops and labs — not notes copied from the board.</h2>
            <p className="mt-5 text-muted">
              The syllabus still matters. So does using it. Students practise in Physics, Chemistry, Biology, and Computer labs, and join practical sessions in IT and e-commerce so they can build skills for university, internships, and work — not only the next class test.
            </p>
            <ButtonLink to="/programs" className="mt-7">
              See our programs
            </ButtonLink>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
                LIFE AT FSA
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Tours, teachers, and results families can point to.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Educational tours that leave the classroom",
                  body: "Students travel, see institutions and workplaces up close, and come back with a clearer picture of university and career options.",
                  img: "/about-tour.jpg",
                  alt: "FSA College Shabqadar educational tour",
                  link: "/programs",
                  imgClass: "object-center",
                },
                {
                  title: "Alumni who serve — Hamza Ali, P/ASI",
                  body: "FSA is judged by what students do after college. Hamza Ali, an FSA alumnus, now serves as a Police Assistant Sub-Inspector — one example of the discipline and direction we aim to build.",
                  img: "/about-alumni-hamza.jpg",
                  alt: "Hamza Ali, FSA College alumnus, Police Assistant Sub-Inspector",
                  link: "/about",
                  imgClass: "object-top",
                },
                {
                  title: "Teachers who know the paper and the student",
                  body: "Experienced faculty who teach the BISE syllabus in depth, run labs and test series, and prepare students for MDCAT, ECAT, and university admissions — not last-month cramming.",
                  img: "/about-faculty.jpg",
                  alt: "FSA College Shabqadar teachers",
                  link: "/team",
                  imgClass: "object-top",
                },
              ].map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[1.75rem] bg-paper">
                  <img src={card.img} alt={card.alt} className={`aspect-[16/10] w-full object-cover ${card.imgClass}`} />
                  <div className="p-6">
                    <h3 className="text-xl tracking-[-0.04em] text-navy font-bold">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.body}</p>
                    <Link
                      to={card.link as any}
                      className="mt-4 inline-block text-sm font-semibold text-coral"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
    </Shell>
  );
}
