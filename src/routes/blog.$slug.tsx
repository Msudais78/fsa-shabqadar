import { createFileRoute, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { NotFound } from "@/components/not-found";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  notFoundComponent: NotFound,
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return { meta: [{ title: `${post?.title ?? "Story"} · FSA` }] };
  },
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw notFound();

  return (
    <Shell>
      <article className="container-site max-w-3xl py-14 md:py-20">
        <p className="text-sm font-medium text-muted">
          {post.date} · {post.author}, {post.role}
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl">{post.title}</h1>
        <img
          src={post.image}
          alt=""
          className="mt-10 aspect-[16/9] w-full rounded-[1.75rem] object-cover"
        />
        <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-navy/85">
          {post.content.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {post.skills.map((s) => (
            <li key={s.title} className="rounded-[1.25rem] bg-cream p-5">
              <p className="font-semibold tracking-[-0.03em]">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ul>
      </article>
    </Shell>
  );
}
