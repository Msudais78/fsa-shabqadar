import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as posts, r as Shell } from "./shell-DhV9cKVP.mjs";
import { i as Route$2 } from "./router-C1yttoVh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Dnrp1LyX.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { slug } = Route$2.useParams();
	const post = posts.find((p) => p.slug === slug);
	if (!post) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container-site max-w-3xl py-14 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium text-muted",
				children: [
					post.date,
					" · ",
					post.author,
					", ",
					post.role
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl md:text-5xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: "",
				className: "mt-10 aspect-[16/9] w-full rounded-[1.75rem] object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-5 text-[1.05rem] leading-relaxed text-navy/85",
				children: post.content.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para.slice(0, 24)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-4 sm:grid-cols-2",
				children: post.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[1.25rem] bg-cream p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold tracking-[-0.03em]",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: s.body
					})]
				}, s.title))
			})
		]
	}) });
}
//#endregion
export { BlogPostPage as component };
