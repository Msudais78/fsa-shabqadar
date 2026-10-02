import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { campusLife } from "@/lib/site";

export const Route = createFileRoute("/campus-life")({
  component: CampusLifePage,
  head: () => ({ meta: [{ title: "Campus Life · FSA College Shabqadar" }] }),
});

function CampusLifePage() {
  return (
    <Shell>
      <main className="bg-cream py-16 md:py-24 min-h-screen">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
              CAMPUS LIFE
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl text-navy tracking-tight">
              A look inside FSA College
            </h1>
            <p className="mt-5 text-muted leading-relaxed">
              Photos from tours, seminars, and ordinary days at FSA College System Shabqadar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {campusLife.map((item) => (
              <div
                key={item.image}
                className="group flex flex-col rounded-3xl bg-white shadow-[0_1px_2px_rgb(18_38_90/0.05),0_8px_16px_rgb(18_38_90/0.03)] border border-[rgb(0,0,0,0.02)] overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy/5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[0.95rem] text-navy/85 font-medium leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Shell>
  );
}
