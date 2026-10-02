import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

const quick = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/fees", label: "Fees" },
  { to: "/contact", label: "Contact" },
] as const;

const extra = [
  { to: "/admission" as const, label: "Admission" },
  { to: "/programs" as const, label: "Programs" },
  { to: "/fees" as const, label: "Scholarships" },
  { to: "/contact" as const, label: "Campus visit" },
  { to: "/team" as const, label: "Team" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo className="text-cream [&_span]:text-cream" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-cream/75">
            FSA College System Shabqadar. Intermediate programmes in FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT — with separate campuses for boys and girls, structured labs, and scholarships for orphans, deserving students, and Huffaz-e-Quran.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm text-cream/80">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-cream">
              <Phone className="size-4" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-2 hover:text-cream">
              <Mail className="size-4" />
              {site.email}
            </a>
            <p className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {site.address}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold tracking-[-0.02em] text-gold">Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            {quick.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold tracking-[-0.02em] text-gold">For parents & students</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            {extra.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold tracking-[-0.02em] text-gold">Visit us</h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/80">{site.hours}</p>
          <Link
            to="/admission"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-cream"
          >
            Start admission
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FSA College System Shabqadar. All rights reserved.</p>
          <p>Learn what actually matters.</p>
        </div>
      </div>
    </footer>
  );
}
