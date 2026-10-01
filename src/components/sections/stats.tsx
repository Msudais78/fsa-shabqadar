import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function useCount(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    const duration = 1100;
    const t0 = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}

function Stat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const n = useCount(value, start);
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold tracking-[-0.06em] tabular-nums md:text-5xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </div>
  );
}

export function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-8 rounded-[1.75rem] bg-navy px-6 py-10 text-cream md:grid-cols-4 md:px-10"
    >
      {stats.map((s) => (
        <Stat key={s.label} {...s} start={start} />
      ))}
    </div>
  );
}
