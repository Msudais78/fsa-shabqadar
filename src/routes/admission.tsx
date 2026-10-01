import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/layout/page-hero";
import { FaqList } from "@/components/sections/faq";
import { StatsRow } from "@/components/sections/stats";
import { Button } from "@/components/ui/button";
import { admissionSteps } from "@/lib/site";

export const Route = createFileRoute("/admission")({
  component: AdmissionPage,
  head: () => ({ meta: [{ title: "Admission · FSA" }] }),
});

const fieldClass =
  "h-12 w-full rounded-[0.9rem] bg-paper px-4 text-[0.95rem] text-navy shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.12)] outline-none transition-shadow placeholder:text-muted/70 focus:shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.45)]";

function AdmissionPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="ADMISSION"
          title="Apply for FSc, ICS, and IT — this session at FSA Shabqadar."
          body="Admissions are open for FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT. Submit your form, complete document verification, sit the internal assessment where required, and confirm your seat. Separate campuses for boys and girls. Scholarships for high scorers, orphans, deserving students, and Huffaz-e-Quran."
          image="/admission-hero.jpg"
          imageAlt="Students at FSA College System Shabqadar"
          primaryButtonText="Start your application"
        />

        <section className="container-site grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s) => (
            <article key={s.step} className="rounded-[1.5rem] bg-cream p-6">
              <p className="text-sm font-bold text-coral">{s.step}</p>
              <h2 className="mt-2 text-xl tracking-[-0.04em]">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </article>
          ))}
        </section>

        <section className="container-site pb-16">
          <StatsRow />
        </section>

        <section className="container-site grid gap-12 pb-20 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
              Apply
            </p>
            <h2 className="mt-3 text-3xl">Guiding you through the admission journey</h2>
            <p className="mt-4 text-muted">
              Share your details below and our admissions office will contact you to confirm the next steps.
            </p>
          </div>

          {sent ? (
            <div className="rounded-[1.75rem] bg-mint p-8">
              <h3 className="text-2xl">Thank you. Your submission has been received.</h3>
              <p className="mt-3 text-navy/75">
                The admissions office will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 rounded-[1.75rem] bg-cream p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={fieldClass} name="first" placeholder="First name*" required />
                <input className={fieldClass} name="last" placeholder="Last name*" required />
                <input className={fieldClass} name="phone" placeholder="Phone number*" required />
                <input
                  className={fieldClass}
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <input className={fieldClass} name="age" placeholder="Child’s age" />
                <input className={fieldClass} name="guardian" placeholder="Guardian’s name*" required />
              </div>
              <select className={fieldClass} name="gender" defaultValue="">
                <option value="" disabled>
                  Gender
                </option>
                <option>Boy</option>
                <option>Girl</option>
                <option>Prefer not to say</option>
              </select>
              <input className={fieldClass} name="address" placeholder="Full address" />
              <input
                className={fieldClass}
                name="previous"
                placeholder="Previous school / daycare (if applicable)"
              />
              <input className={fieldClass} name="start" placeholder="Preferred start date" />
              <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
                Apply for admission
              </Button>
            </form>
          )}
        </section>

        <section className="container-site grid gap-10 pb-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Frequently asked questions</h2>
            <p className="mt-4 text-muted">For students and parents applying to FSA College Shabqadar.</p>
          </div>
          <FaqList />
        </section>
      </main>
    </Shell>
  );
}
