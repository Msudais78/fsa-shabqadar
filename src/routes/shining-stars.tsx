import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { hsscPart1, hsscPart2 } from "@/lib/results";
import { ResultCard } from "@/components/ui/result-card";

export const Route = createFileRoute("/shining-stars")({
  component: ShiningStarsPage,
  head: () => ({ meta: [{ title: "Shining Stars | FSA College Shabqadar" }] }),
});

function ShiningStarsPage() {
  return (
    <Shell>
      <main className="bg-cream py-16 md:py-24 min-h-screen">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
              ALHAMDULILLAH
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl text-navy">
              Our Shining Stars
            </h1>
            <p className="mt-5 text-muted leading-relaxed">
              Exceptional HSSC Part-I and Part-II results from FSA College System Shabqadar. We are proud of these students — and of the work behind the marks.
            </p>
          </div>

          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl font-bold text-navy mb-8 border-b-4 border-coral pb-2 inline-block">
              HSSC Part-I (Pre-Medical)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Ensure sorted descending, although the list is already sorted */}
              {hsscPart1
                .slice()
                .sort((a, b) => b.marks - a.marks)
                .map((student) => (
                  <ResultCard key={student.rollNo} student={student} />
                ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold text-navy mb-8 border-b-4 border-coral pb-2 inline-block">
              HSSC Part-II (Pre-Medical)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {hsscPart2
                .slice()
                .sort((a, b) => b.marks - a.marks)
                .map((student) => (
                  <ResultCard key={student.rollNo} student={student} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </Shell>
  );
}
