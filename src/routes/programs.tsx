import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/layout/shell";
import { FaqList } from "@/components/sections/faq";
import { ProgramCard } from "@/components/ui/program-card";
import { programs, schedule } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({ meta: [{ title: "Programs · FSA" }] }),
});

function ProgramsPage() {
  return (
    <Shell>
      <main>
        <section className="container-site pb-16 pt-12 md:pt-16">
          <h1 className="mb-8 text-4xl md:text-5xl">Academic Programs & Disciplines</h1>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <ProgramCard key={p.slug} program={p} index={i} className="animate-rise" />
          ))}
          </div>
        </section>

        <section className="container-site pb-16">
          <div className="rounded-[2rem] bg-navy px-6 py-10 text-cream md:px-12">
            <h2 className="text-3xl text-cream">Engaging young minds from morning to evening</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {schedule.map((s) => (
                <div key={s.time} className="rounded-[1.25rem] bg-cream/8 p-5">
                  <p className="text-sm font-semibold text-gold">{s.time}</p>
                  <p className="mt-2 font-semibold">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site grid gap-10 pb-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">FAQ</p>
            <h2 className="mt-3 text-3xl">Questions from curious young families</h2>
            <p className="mt-4 text-muted">
              If you do not see your question, write to us — we answer every family personally.
            </p>
          </div>
          <FaqList />
        </section>
      </main>
    </Shell>
  );
}
