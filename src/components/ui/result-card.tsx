import { cn } from "@/lib/utils";
import type { StudentResult } from "@/lib/results";

export function ResultCard({
  student,
  className,
}: {
  student: StudentResult;
  className?: string;
}) {
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-[0_10px_40px_rgb(0_0_0/0.06)] border border-[rgb(0,0,0,0.04)]",
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-navy font-bold text-xl">
        {initials}
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy uppercase">{student.name}</h3>
      <p className="mt-1 text-xs font-semibold text-muted uppercase">
        ROLL NO: {student.rollNo}
      </p>
      <div className="mt-4 flex items-baseline justify-center gap-1 text-coral">
        <span className="text-3xl font-bold tracking-tight">{student.marks}</span>
      </div>
      <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted mt-1">Marks</p>
      <div className="mt-3 rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy/80">
        {student.group}
      </div>
    </div>
  );
}
