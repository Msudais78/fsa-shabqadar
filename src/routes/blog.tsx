import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({ meta: [{ title: "Blog · FSA" }] }),
});

function BlogPage() {
  return (
    <Shell>
      <main>
        <section className="container-site py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">Journal</p>
          <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">
            Joyful journeys shared on our kindergarten blog
          </h1>
        </section>
        <section className="container-site grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group overflow-hidden rounded-[1.75rem] bg-cream"
            >
              <img src={post.image} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-medium text-muted">{post.date}</p>
                <h2 className="mt-2 text-xl tracking-[-0.04em] group-hover:text-coral">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </Shell>
  );
}
