import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Shell } from "@/components/layout/shell";
import { NotFound } from "@/components/not-found";
import { ButtonLink } from "@/components/ui/button";
import { programs } from "@/lib/site";

export const Route = createFileRoute("/programs/$slug")({
  component: ProgramDetail,
  notFoundComponent: NotFound,
  head: ({ params }) => {
    const program = programs.find((p) => p.slug === params.slug);
    return { meta: [{ title: `${program?.name ?? "Program"} · FSA` }] };
  },
});

function ProgramDetail() {
  const { slug } = Route.useParams();
  const program = programs.find((p) => p.slug === slug);
  if (!program) throw notFound();

  return (
    <Shell>
      <main className="container-site grid items-start gap-12 py-14 md:grid-cols-2 md:py-20">
        <img
          src={program.image}
          alt=""
          className="aspect-[4/5] w-full rounded-[2rem] object-cover"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
            {program.ages}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">{program.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{program.description}</p>
          <ul className="mt-8 space-y-3">
            {program.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[0.95rem]">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-mint">
                  <Check className="size-3.5" />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/admission" size="lg">
              Apply for admission
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline" size="lg">
              Ask a question
            </ButtonLink>
          </div>
        </div>
      </main>
    </Shell>
  );
}
