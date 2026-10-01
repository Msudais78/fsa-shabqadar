import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as cn } from "./shell-DhV9cKVP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/program-card-Cr2MK-LP.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramCard({ program, index = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/programs/$slug",
		params: { slug: program.slug },
		className: cn("group overflow-hidden rounded-[1.75rem] bg-cream shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]", className),
		style: { animationDelay: `${index * 100}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: program.image,
			alt: "",
			className: "aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-coral",
					children: program.ages
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-2 flex items-center justify-between text-xl font-semibold tracking-[-0.04em]",
					children: [program.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: program.summary
				})
			]
		})]
	});
}
//#endregion
export { ProgramCard as t };
