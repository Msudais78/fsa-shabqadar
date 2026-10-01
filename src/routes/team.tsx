import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/layout/page-hero";
import { team } from "@/lib/site";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [{ title: "Team · FSA College Shabqadar" }],
  }),
});

function TeamPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="OUR TEAM"
          title="Teachers who prepare the paper — and the student."
          body="FSA College Shabqadar is led by Principal Bilal Ahmad and a small faculty who teach FSc, ICS, and IT in depth: BISE boards, MDCAT and ECAT, labs, and the habits students need after college. Meet the people in the classroom — not a list of kindergarten carers."
          image="/principal.jpg"
          imageAlt="Bilal Ahmad, Principal, FSA College System Shabqadar"
          primaryButtonText="See our programs"
        />

        <section className="container-site pb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Link
                key={member.slug}
                to="/team/$slug"
                params={{ slug: member.slug }}
                className="group overflow-hidden rounded-[1.75rem] bg-cream flex flex-col"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl tracking-[-0.04em] font-bold text-navy">{member.name}</h2>
                  <p className="mt-1 text-sm text-muted font-medium">{member.role}</p>
                  {member.credentials && (
                    <p className="mt-1 text-xs text-muted/80">{member.credentials}</p>
                  )}
                  <p className="mt-4 text-sm text-navy/80 leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            Faculty list is for the current session. For subject allocation, visiting hours, or a campus meeting with the Principal, contact admissions.
          </p>
        </section>
      </main>
    </Shell>
  );
}
