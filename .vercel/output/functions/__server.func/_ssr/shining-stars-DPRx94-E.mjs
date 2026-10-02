import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Shell } from "./shell-Bh11sTZ2.mjs";
import { i as hsscPart2, r as hsscPart1, t as ResultCard } from "./result-card-CjC23uew.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shining-stars-DPRx94-E.js
var import_jsx_runtime = require_jsx_runtime();
function ShiningStarsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "bg-cream py-16 md:py-24 min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
							children: "ALHAMDULILLAH"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl md:text-5xl text-navy",
							children: "Our Shining Stars"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted leading-relaxed",
							children: "Exceptional HSSC Part-I and Part-II results from FSA College System Shabqadar. We are proud of these students — and of the work behind the marks."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 md:mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-navy mb-8 border-b-4 border-coral pb-2 inline-block",
						children: "HSSC Part-I (Pre-Medical)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
						children: hsscPart1.slice().sort((a, b) => b.marks - a.marks).map((student) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, { student }, student.rollNo))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-navy mb-8 border-b-4 border-coral pb-2 inline-block",
						children: "HSSC Part-II (Pre-Medical)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
						children: hsscPart2.slice().sort((a, b) => b.marks - a.marks).map((student) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, { student }, student.rollNo))
					})]
				})
			]
		})
	}) });
}
//#endregion
export { ShiningStarsPage as component };
