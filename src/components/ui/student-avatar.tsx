import { cn } from "@/lib/utils";
import type { StudentGender } from "@/lib/site";

function MaleSilhouette() {
  return (
    <svg viewBox="0 0 80 80" className="h-[86%] w-[86%] fill-navy" aria-hidden="true">
      <circle cx="40" cy="29.5" r="13.5" />
      <ellipse cx="25.5" cy="31" rx="3.4" ry="4.4" />
      <ellipse cx="54.5" cy="31" rx="3.4" ry="4.4" />
      <path d="M14.5 72.5c2.8-12.8 13.6-21 25.5-21s22.7 8.2 25.5 21C59.8 76.8 50.6 79 40 79s-19.8-2.2-25.5-6.5Z" />
    </svg>
  );
}

function FemaleSilhouette() {
  return (
    <svg viewBox="0 0 80 80" className="h-[90%] w-[90%] fill-navy" aria-hidden="true">
      <path d="M40 11c-12.4 0-21.5 9.6-21.5 22.2 0 6.4 2.4 11.2 5.6 14.4-2.6 2.2-5.4 6.4-5.4 11.2 0 2.4.6 4.6 1.5 6.4 4.2-4.6 11.8-7.6 19.8-7.6s15.6 3 19.8 7.6c.9-1.8 1.5-4 1.5-6.4 0-4.8-2.8-9-5.4-11.2 3.2-3.2 5.6-8 5.6-14.4C61.5 20.6 52.4 11 40 11Z" />
      <circle cx="40" cy="30" r="11.5" />
      <path d="M14.5 72.5c2.8-12.8 13.6-21 25.5-21s22.7 8.2 25.5 21C59.8 76.8 50.6 79 40 79s-19.8-2.2-25.5-6.5Z" />
    </svg>
  );
}

export function StudentAvatar({
  gender,
  name,
  featured = false,
  className,
}: {
  gender: StudentGender;
  name: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-paper",
        featured
          ? "shadow-[0_0_0_3px_rgb(18_38_90)]"
          : "shadow-[0_0_0_2px_rgb(18_38_90/0.12)]",
        className,
      )}
      role="img"
      aria-label={`${name}, ${gender} student`}
    >
      {gender === "female" ? <FemaleSilhouette /> : <MaleSilhouette />}
    </span>
  );
}
