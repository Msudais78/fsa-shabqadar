import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as campusLife, n as Shell } from "./shell-Bh11sTZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campus-life-DepRsbAT.js
var import_jsx_runtime = require_jsx_runtime();
function CampusLifePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "bg-cream py-16 md:py-24 min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
						children: "CAMPUS LIFE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl md:text-5xl text-navy tracking-tight",
						children: "A look inside FSA College"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted leading-relaxed",
						children: "Photos from tours, seminars, and ordinary days at FSA College System Shabqadar."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
				children: campusLife.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex flex-col rounded-3xl bg-white shadow-[0_1px_2px_rgb(18_38_90/0.05),0_8px_16px_rgb(18_38_90/0.03)] border border-[rgb(0,0,0,0.02)] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] w-full overflow-hidden bg-navy/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.alt,
							className: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 md:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.95rem] text-navy/85 font-medium leading-relaxed",
							children: item.caption
						})
					})]
				}, item.image))
			})]
		})
	}) });
}
//#endregion
export { CampusLifePage as component };
