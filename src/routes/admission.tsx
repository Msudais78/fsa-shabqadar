import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { PageHero } from "@/components/layout/page-hero";
import { FaqList } from "@/components/sections/faq";
import { StatsRow } from "@/components/sections/stats";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { admissionSteps } from "@/lib/site";

export const Route = createFileRoute("/admission")({
  component: AdmissionPage,
  head: () => ({ meta: [{ title: "Admission · FSA" }] }),
});

const fieldClass =
  "h-12 w-full rounded-[0.9rem] bg-paper px-4 text-[0.95rem] text-navy shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.12)] outline-none transition-shadow placeholder:text-muted/70 focus:shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.45)]";

function AdmissionPage() {
  // No form state needed anymore


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

        <section className="container-site grid gap-12 pb-20 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
              APPLY · داخلہ
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              Admission ke liye form nahi — seedha rabta karein.
            </h2>
            <p className="mt-2 text-xl text-navy/80 font-medium">
              WhatsApp or email. Admissions will guide the next step.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              FSc Pre-Medical, FSc Pre-Engineering, ICS, aur IT ke liye admissions open hain. Apna naam, Matric result, aur program likh kar WhatsApp karein, ya email bhej dein. Office se jawab milega — documents, internal assessment, fees (admission PKR 12,000, monthly PKR 4,000), aur scholarship / concession ke bare mein.
            </p>
            <p className="mt-4 text-[1.1rem] text-muted font-medium" dir="rtl" style={{ fontFamily: '"Noto Nastaliq Urdu", "Noto Sans Arabic", system-ui, sans-serif' }}>
              داخلہ کے لیے واٹس ایپ یا ای میل کریں۔ فارم یہاں بھرنے کی ضرورت نہیں۔
            </p>
          </div>

          {/* Right Column - Contact Card */}
          <div className="rounded-[1.75rem] bg-cream p-6 md:p-8 shadow-[0_10px_40px_rgb(0_0_0/0.06)] border border-[rgb(0,0,0,0.04)]">
            <h3 className="text-2xl font-bold text-navy tracking-[-0.02em]">
              Rabta / Contact admissions
            </h3>
            <p className="mt-1 text-muted">
              Message bhejein — office confirm karega.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://wa.me/923335011415?text=Assalamualaikum%2C%20mujhe%20FSA%20College%20Shabqadar%20admission%20ki%20maloomat%20chahiye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-4 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg leading-tight">WhatsApp on 0333 5011415</div>
                  <div className="text-sm font-medium text-white/90">Chat on WhatsApp · داخلہ کی معلومات</div>
                </div>
              </a>

              <a
                href="mailto:Fsacollegesystemshabqadar@gmail.com?subject=Admission%20inquiry%20-%20FSA%20College%20Shabqadar"
                className="flex items-center gap-4 rounded-2xl border-2 border-navy/10 bg-transparent p-4 text-navy transition-all hover:bg-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/5">
                  <Mail className="h-5 w-5 currentColor" />
                </div>
                <div>
                  <div className="font-semibold text-lg leading-tight break-all">Fsacollegesystemshabqadar@gmail.com</div>
                  <div className="text-sm font-medium opacity-80">Send an email · ای میل بھیجیں</div>
                </div>
              </a>
            </div>

            <div className="mt-6 border-t border-navy/10 pt-5">
              <p className="text-sm font-medium text-muted">
                Monday – Saturday, 8:00 am – 2:30 pm.
              </p>
              <p className="mt-1 text-sm font-medium text-muted" dir="rtl" style={{ fontFamily: '"Noto Nastaliq Urdu", "Noto Sans Arabic", system-ui, sans-serif' }}>
                السلام علیکم لکھ کر اپنا نام اور پروگرام ضرور بھیجیں۔
              </p>
              <ul className="mt-4 space-y-2 text-sm text-navy/75">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                  <span>Program likhein: Pre-Medical / Pre-Engineering / ICS / IT</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                  <span>Boys’ ya girls’ campus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                  <span>Scholarship / Hafiz / needy concession ho to likh dein</span>
                </li>
              </ul>
            </div>
          </div>
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
