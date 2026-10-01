import { createFileRoute, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { NotFound } from "@/components/not-found";
import { ButtonLink } from "@/components/ui/button";
import { site, team } from "@/lib/site";

export const Route = createFileRoute("/team/$slug")({
  component: TeamMemberPage,
  notFoundComponent: NotFound,
  head: ({ params }) => {
    const member = team.find((t) => t.slug === params.slug);
    return { meta: [{ title: `${member?.name ?? "Teacher"} · FSA` }] };
  },
});

function TeamMemberPage() {
  const { slug } = Route.useParams();
  const member = team.find((t) => t.slug === slug);
  if (!member) throw notFound();

  return (
    <Shell>
      <main className="container-site py-14 md:py-20">
        <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={member.image}
            alt={member.name}
            className="aspect-[3/4] w-full rounded-[2rem] object-cover object-top"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
              {member.role}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl">{member.name}</h1>
            <p className="mt-4 text-sm font-medium text-muted">{member.credentials}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">{member.bio}</p>
            <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold">Campus</dt>
                <dd className="text-muted">{site.address}</dd>
              </div>
              <div>
                <dt className="font-semibold">Let’s connect</dt>
                <dd className="text-muted">{site.email}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact">Contact the college</ButtonLink>
              <ButtonLink to="/team" variant="outline">
                All faculty
              </ButtonLink>
            </div>
          </div>
        </div>
      </main>
    </Shell>
  );
}
