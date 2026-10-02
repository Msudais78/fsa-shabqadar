import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as team, n as Shell, t as ButtonLink, u as site } from "./shell-Bh11sTZ2.mjs";
import { n as Route } from "./router-BOWUnLyl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team._slug-B4NTeTm_.js
var import_jsx_runtime = require_jsx_runtime();
function TeamMemberPage() {
	const { slug } = Route.useParams();
	const member = team.find((t) => t.slug === slug);
	if (!member) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-site py-14 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: member.image,
				alt: member.name,
				className: "aspect-[3/4] w-full rounded-[2rem] object-cover object-top"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
					children: member.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl md:text-5xl",
					children: member.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-medium text-muted",
					children: member.credentials
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-muted",
					children: member.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid gap-3 text-sm sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold",
						children: "Campus"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted",
						children: site.address
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold",
						children: "Let’s connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted",
						children: site.email
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/contact",
						children: "Contact the college"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/team",
						variant: "outline",
						children: "All faculty"
					})]
				})
			] })]
		})
	}) });
}
//#endregion
export { TeamMemberPage as component };
