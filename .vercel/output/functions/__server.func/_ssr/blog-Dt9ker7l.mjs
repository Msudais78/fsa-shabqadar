import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as posts, r as Shell } from "./shell-DhV9cKVP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-Dt9ker7l.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site py-14 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
			children: "Journal"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-2xl text-4xl md:text-5xl",
			children: "Joyful journeys shared on our kindergarten blog"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-site grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3",
		children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog/$slug",
			params: { slug: post.slug },
			className: "group overflow-hidden rounded-[1.75rem] bg-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: "",
				className: "aspect-[16/10] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-muted",
						children: post.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-xl tracking-[-0.04em] group-hover:text-coral",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: post.excerpt
					})
				]
			})]
		}, post.slug))
	})] }) });
}
//#endregion
export { BlogPage as component };
