import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Shell } from "@/components/layout/shell";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact · FSA" }] }),
});

const fieldClass =
  "h-12 w-full rounded-[0.9rem] bg-paper px-4 text-[0.95rem] text-navy shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.12)] outline-none transition-shadow placeholder:text-muted/70 focus:shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.45)]";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Shell showCta={false}>
      <main className="container-site grid gap-12 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Get in touch for joyful learning</h1>
          <p className="mt-4 max-w-md text-muted">
            Let’s create together. Visit the campus, write to the family team, or call the front
            desk during school hours.
          </p>
          <ul className="mt-10 space-y-5">
            <li className="flex gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-mint">
                <MapPin className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Address</span>
                <span className="text-muted">{site.address}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-lavender">
                <Mail className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Email</span>
                <a href={site.emailHref} className="text-muted hover:text-navy">
                  {site.email}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-gold">
                <Phone className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Phone</span>
                <a href={site.phoneHref} className="text-muted hover:text-navy">
                  {site.phone}
                </a>
              </span>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">{site.hours}</p>
        </div>

        {sent ? (
          <div className="rounded-[1.75rem] bg-mint p-8 md:p-10">
            <h2 className="text-2xl">Thank you. Your message is on its way.</h2>
            <p className="mt-3 text-navy/75">We will reply within two school days.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-cream p-6 md:p-8">
            <h2 className="text-2xl tracking-[-0.04em]">Let’s create together</h2>
            <div className="mt-6 grid gap-4">
              <input className={fieldClass} name="name" placeholder="Your name*" required />
              <input
                className={fieldClass}
                name="email"
                type="email"
                placeholder="Email address*"
                required
              />
              <input className={fieldClass} name="phone" placeholder="Phone number*" required />
              <input className={fieldClass} name="subject" placeholder="Subject" />
              <textarea
                className={`${fieldClass} h-32 resize-none py-3`}
                name="message"
                placeholder="Type message"
                required
              />
              <label className="flex items-start gap-3 text-sm text-muted">
                <input type="checkbox" required className="mt-1 size-4 accent-navy" />
                I agree to the terms and conditions.
              </label>
              <Button type="submit" size="lg">
                Submit message
              </Button>
            </div>
          </form>
        )}
      </main>
    </Shell>
  );
}
