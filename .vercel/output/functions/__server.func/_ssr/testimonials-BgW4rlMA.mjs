import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, p as testimonials } from "./shell-Bh11sTZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-BgW4rlMA.js
var import_jsx_runtime = require_jsx_runtime();
var tones = {
	mint: "bg-mint",
	lavender: "bg-lavender",
	sky: "bg-sky"
};
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
				children: "Families"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl md:text-4xl",
				children: "Words from parents who walk our halls"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-5 md:grid-cols-3",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: cn("flex flex-col rounded-[1.75rem] p-7 shadow-[var(--shadow-soft)]", tones[t.tone]),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "text-[0.98rem] leading-relaxed text-navy/85",
					children: [
						"“",
						t.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-8 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-cream",
						children: t.initial
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold tracking-[-0.03em]",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: t.role
					})] })]
				})]
			}, t.name))
		})]
	});
}
//#endregion
export { Testimonials as t };
