import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Shell } from "@/components/layout/shell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact · FSA College Shabqadar" }] }),
});

function ContactPage() {
  const whatsappMsg = encodeURIComponent(
    "Assalamualaikum, I want information about admission at FSA College Shabqadar"
  );
  const whatsappUrl = `https://wa.me/923335011415?text=${whatsappMsg}`;
  const mapsUrl =
    "https://www.google.com/maps/place/FSA+College+System+Shabqadar/@34.2185757,71.5545911,17z/data=!3m1!4b1!4m6!3m5!1s0x38d96b006d5ffcd5:0xb913d7422f215f2a!8m2!3d34.2185757!4d71.5545911!16s%2Fg%2F11y2lrpml9";

  return (
    <Shell showCta={false}>
      <main className="container-site grid gap-10 md:gap-12 py-14 md:grid-cols-[5fr_7fr] md:py-20 min-h-[calc(100vh-16rem)]">
        {/* Left Column */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
            Contact
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl text-navy">
            Visit the campus. Call or WhatsApp admissions.
          </h1>
          <p className="mt-4 max-w-md text-muted leading-relaxed">
            FSA College System Shabqadar. Come see the labs and separate campuses, or
            message us about admission, fees, and scholarships. Monday – Saturday, 8:00
            am – 2:30 pm.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4 items-start">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-mint mt-1">
                <MapPin className="size-5 text-navy" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy">Address</span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-navy hover:underline transition-colors mt-1 block leading-relaxed"
                >
                  FSA College System Shabqadar, Shabqadar, Khyber Pakhtunkhwa, Pakistan
                </a>
              </span>
            </li>
            
            <li className="flex gap-4 items-start">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-lavender mt-1">
                <Mail className="size-5 text-navy" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy">Email</span>
                <a
                  href="mailto:Fsacollegesystemshabqadar@gmail.com"
                  className="text-muted hover:text-navy hover:underline transition-colors mt-1 block"
                >
                  Fsacollegesystemshabqadar@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <div className="mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] font-semibold text-lg"
            >
              <MessageCircle className="size-6" />
              <span>
                Chat on WhatsApp
                <span className="block text-xs font-medium text-white/90">
                  0333 5011415
                </span>
              </span>
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-muted">
            Monday – Saturday, 8:00 am – 2:30 pm
          </p>
        </div>

        {/* Right Column - Map */}
        <div className="h-[320px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-soft border border-[rgb(0,0,0,0.05)] bg-cream">
          <iframe
            title="FSA College System Shabqadar location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2!2d71.5545911!3d34.2185757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d96b006d5ffcd5%3A0xb913d7422f215f2a!2sFSA%20College%20System%20Shabqadar!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </Shell>
  );
}
