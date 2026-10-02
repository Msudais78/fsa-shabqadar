import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as programs, l as schedule, n as Shell } from "./shell-Bh11sTZ2.mjs";
import { t as FaqList } from "./faq-DTb19HRh.mjs";
import { t as ProgramCard } from "./program-card-Hk-ZqAlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-BcV52bvT.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site pb-16 pt-12 md:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-8 text-4xl md:text-5xl",
				children: "Academic Programs & Disciplines"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: programs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, {
					program: p,
					index: i,
					className: "animate-rise"
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[2rem] bg-navy px-6 py-10 text-cream md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl text-cream",
					children: "Engaging young minds from morning to evening"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: schedule.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.25rem] bg-cream/8 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-gold",
							children: s.time
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-semibold",
							children: s.title
						})]
					}, s.time))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid gap-10 pb-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl",
					children: "Questions from curious young families"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "If you do not see your question, write to us — we answer every family personally."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})]
		})
	] }) });
}
//#endregion
export { ProgramsPage as component };
