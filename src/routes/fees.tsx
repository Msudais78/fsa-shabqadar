import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Shell } from "@/components/layout/shell";
import { FaqList } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { ButtonLink } from "@/components/ui/button";
import { feePlans } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/fees")({
  component: FeesPage,
  head: () => ({ meta: [{ title: "Fees · FSA College Shabqadar" }] }),
});

function FeesPage() {
  return (
    <Shell>
      <main>
        <section className="container-site py-14 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">FEES</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl md:text-5xl">
            Clear fees. Scholarships for those who earn them — and those who need them.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">
            Admission PKR 12,000. Monthly tuition PKR 4,000. Amounts can vary slightly by programme (FSc Pre-Medical, FSc Pre-Engineering, ICS, IT). Confirm the exact figure at admissions. Bright students can win entry scholarships; needy students, orphans, and Huffaz-e-Quran may receive fee concessions.
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-pill bg-cream p-1 shadow-[inset_0_0_0_1px_rgb(18_38_90/0.08)]">
            <span className="rounded-pill bg-navy px-5 py-2.5 text-sm font-semibold text-cream">
              This session
            </span>
          </div>
        </section>

        <section className="container-site grid gap-5 pb-10 md:grid-cols-3">
          {feePlans.map((plan) => {
            return (
              <article
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-[1.75rem] p-7",
                  plan.featured ? "bg-navy text-cream" : "bg-cream",
                )}
              >
                <h2
                  className={cn(
                    "text-2xl tracking-[-0.04em]",
                    plan.featured && "text-cream",
                  )}
                >
                  {plan.name}
                </h2>
                <p className={cn("mt-2 text-sm", plan.featured ? "text-cream/70" : "text-muted")}>
                  {plan.blurb}
                </p>
                <div className="mt-6">
                  <p className={cn("text-sm font-semibold", plan.featured ? "text-cream/80" : "text-muted")}>
                    PKR {plan.admission.toLocaleString()} <span className="font-normal text-xs uppercase tracking-wider ml-1">Admission</span>
                  </p>
                  <p className="mt-1 flex items-end gap-1">
                    <span className="text-3xl font-extrabold tracking-[-0.04em] tabular-nums">
                      PKR {plan.monthly.toLocaleString()}
                    </span>
                    <span className={plan.featured ? "text-cream/60" : "text-muted"}>/ month</span>
                  </p>
                  <p className={cn("mt-2 text-xs", plan.featured ? "text-cream/60" : "text-muted/70")}>
                    Final admission and monthly fee confirmed at the office for this programme.
                  </p>
                </div>
                <p
                  className={cn(
                    "mt-6 text-sm font-semibold",
                    plan.featured ? "text-gold" : "text-navy",
                  )}
                >
                  Features included
                </p>
                <ul className="mt-3 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-gold" : "text-navy")} />
                      <span className={plan.featured ? "text-cream/90" : "text-navy/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  to="/admission"
                  variant={plan.featured ? "gold" : "primary"}
                  className="mt-8 w-full"
                >
                  {plan.featured ? "Ask about a scholarship" : "Apply now"}
                </ButtonLink>
              </article>
            );
          })}
        </section>

        <section className="container-site pb-16">
          <div className="rounded-[1.75rem] bg-navy p-8 md:p-10 text-center text-cream">
            <h2 className="text-2xl font-bold">Scholarships and fee concessions</h2>
            <p className="mt-3 text-cream/80 max-w-3xl mx-auto leading-relaxed">
              Bright students may receive special entry scholarships through FSA’s internal assessment. Fee concessions are available for needy and poor students, with reserved consideration for orphans, deserving candidates, and Huffaz-e-Quran (documents required). Ask admissions when you apply — do not assume a discount on the website price.
            </p>
            <ButtonLink to="/admission" variant="gold" className="mt-6">
              Talk to admissions
            </ButtonLink>
          </div>
        </section>

        <section className="container-site grid gap-10 pb-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Frequently asked questions</h2>
          </div>
          <FaqList />
        </section>

        <Testimonials />
      </main>
    </Shell>
  );
}

