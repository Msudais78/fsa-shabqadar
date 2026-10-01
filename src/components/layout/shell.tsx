import type { ReactNode } from "react";
import { CtaBanner } from "@/components/layout/cta-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function Shell({
  children,
  showCta = true,
}: {
  children: ReactNode;
  showCta?: boolean;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-ivory text-navy">
      <Header />
      <div className="flex-1">{children}</div>
      {showCta ? <CtaBanner /> : null}
      <Footer />
    </div>
  );
}
