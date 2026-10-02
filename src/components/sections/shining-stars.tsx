import { Link } from "@tanstack/react-router";
import { allResults } from "@/lib/results";
import { ResultCard } from "@/components/ui/result-card";
import { cn } from "@/lib/utils";

export function ShiningStars() {
  // We duplicate the array to allow for a seamless infinite marquee loop.
  const marqueeCards = [...allResults, ...allResults];

  return (
    <section id="shining-stars" className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="container-site mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
          ALHAMDULILLAH
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl text-navy">Our Shining Stars</h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto">
          Top marks in HSSC Part-I and Part-II (Pre-Medical).
        </p>
      </div>

      <div className="relative flex w-full">
        {/* Optional faint edge fade for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-cream to-transparent md:w-24"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-cream to-transparent md:w-24"></div>

        <div className="marquee-track flex w-max gap-5 px-4 md:px-6">
          {marqueeCards.map((student, idx) => (
            <ResultCard
              key={`${student.rollNo}-${idx}`}
              student={student}
              className="w-[260px] shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="container-site mt-10 text-center">
        <Link
          to="/shining-stars"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-navy transition-colors"
        >
          See all results <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
