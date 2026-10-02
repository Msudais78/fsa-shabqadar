import { useState } from "react";
import { Star } from "lucide-react";
import { shiningStars, type ShiningStar } from "@/lib/site";
import { StudentAvatar } from "@/components/ui/student-avatar";
import { cn } from "@/lib/utils";

const boards = [shiningStars.part1, shiningStars.part2] as const;

function rankLabel(index: number) {
  if (index === 0) return "1st";
  if (index === 1) return "2nd";
  if (index === 2) return "3rd";
  return `${index + 1}th`;
}

function StarCard({ student, index }: { student: ShiningStar; index: number }) {
  const featured = index === 0;
  return (
    <article
      className={cn(
        "relative flex flex-col items-center rounded-[1.5rem] px-4 py-6 text-center shadow-soft",
        featured ? "bg-gold" : "bg-cream",
      )}
    >
      {index < 3 ? (
        <span
          className={cn(
            "absolute left-3 top-3 inline-flex items-center gap-1 rounded-pill px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-[0.08em]",
            featured ? "bg-navy text-gold" : "bg-navy/8 text-navy",
          )}
        >
          <Star className="size-3 fill-current" />
          {rankLabel(index)}
        </span>
      ) : null}
      <StudentAvatar
        gender={student.gender}
        name={student.name}
        featured={featured}
        className="size-[4.25rem]"
      />
      <h3 className="mt-4 text-[0.95rem] font-bold leading-tight tracking-[-0.03em]">
        {student.name}
      </h3>
      <p className="mt-1 text-[0.75rem] font-medium text-muted">Roll {student.roll}</p>
      <p
        className={cn(
          "mt-3 font-extrabold tabular-nums tracking-[-0.06em]",
          featured ? "text-4xl text-navy" : "text-3xl text-coral",
        )}
      >
        {student.marks}
      </p>
      <p className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy/55">
        Marks
      </p>
    </article>
  );
}

export function ShiningStars() {
  const [boardId, setBoardId] = useState<(typeof boards)[number]["id"]>("hssc-i");
  const board = boards.find((b) => b.id === boardId) ?? shiningStars.part1;

  return (
    <section id="shining-stars" className="container-site py-16 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-coral">
            <Star className="size-4 fill-gold text-gold" />
            Shining stars
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">The students who scored highest</h2>
          <p className="mt-4 text-muted">
            FSA College Shabqadar’s top board results — HSSC Part-I and Part-II. These are the names
            families in the tehsil already know.
          </p>
        </div>
        <div
          className="inline-flex self-start rounded-pill bg-cream p-1 shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.1)]"
          role="tablist"
          aria-label="Board exam"
        >
          {boards.map((b) => {
            const active = b.id === boardId;
            return (
              <button
                key={b.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setBoardId(b.id)}
                className={cn(
                  "h-11 rounded-pill px-4 text-sm font-semibold tracking-[-0.02em] transition-colors",
                  active ? "bg-navy text-cream" : "text-navy/70 hover:text-navy",
                )}
              >
                {b.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-sm font-medium text-muted">{board.subtitle}</p>

      <div
        className={cn(
          "mt-5 grid gap-4",
          board.students.length <= 4
            ? "grid-cols-2 md:grid-cols-4"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        )}
      >
        {board.students.map((student, index) => (
          <StarCard key={`${board.id}-${student.roll}-${student.name}`} student={student} index={index} />
        ))}
      </div>
    </section>
  );
}
