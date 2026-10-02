import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow] duration-200",
        scrolled || open
          ? "bg-ivory/95 shadow-[0_1px_0_rgb(18_38_90/0.08)] backdrop-blur-md"
          : "bg-ivory",
      )}
    >
      <div className="hidden border-b border-line bg-navy text-cream lg:block">
        <div className="container-site flex h-10 items-center justify-between text-[0.8rem]">
          <p className="font-medium tracking-[-0.01em]">Follow us on campus visits this spring</p>
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
            >
              <Phone className="size-3.5" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
            >
              <Mail className="size-3.5" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            
            const commonClasses = cn(
              "rounded-pill px-3 py-2 text-[0.9375rem] font-medium tracking-[-0.02em] transition-colors",
              active ? "bg-navy/5 text-navy" : "text-navy/70 hover:text-navy",
            );

            if (item.to.includes("#")) {
              return (
                <a key={item.to} href={item.to} className={commonClasses}>
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to as any}
                className={commonClasses}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink to="/contact" size="md" className="hidden sm:inline-flex">
            Contact us
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-pill text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-ivory lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((item) => {
              if (item.to.includes("#")) {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-navy"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to as any}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink to="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Contact us
            </ButtonLink>
            <a href={site.phoneHref} className="mt-3 px-3 text-sm text-muted">
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
