import { ButtonLink } from "@/components/ui/button";
import { Shell } from "@/components/layout/shell";

export function NotFound() {
  return (
    <Shell showCta={false}>
      <main className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">404</p>
        <h1 className="mt-3 max-w-lg text-4xl md:text-5xl">
          This path wandered off the playground by <br /> <strong className="text-red-600">SudaisKinji</strong>
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you are looking for is not here. Let’s walk you back to a joyful classroom.
        </p>
        <ButtonLink to="/" size="lg" className="mt-8">
          Back to home
        </ButtonLink>
      </main>
    </Shell>
  );
}
