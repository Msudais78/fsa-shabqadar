import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ButtonLink } from "./shell-Bh11sTZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CadCJtMI.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow = "FSA", title, body, image, imageAlt, primaryButtonText = "Explore programs" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site grid items-center gap-10 py-12 md:grid-cols-2 md:gap-14 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-rise",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-xl text-[2.15rem] leading-[1.08] md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-relaxed text-muted",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/programs",
						size: "lg",
						children: primaryButtonText
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 -z-10 rotate-[-2deg] rounded-[2rem] bg-gold/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt,
				className: "aspect-[5/4] w-full rounded-[1.75rem] object-cover"
			})]
		})]
	});
}
//#endregion
export { PageHero as t };
