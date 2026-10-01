import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as Check } from "../_libs/lucide-react.mjs";
import { a as cn, n as ButtonLink, r as Shell, s as feePlans } from "./shell-DhV9cKVP.mjs";
import { t as Testimonials } from "./testimonials-C6d_UsAQ.mjs";
import { t as FaqList } from "./faq-Bdq7Ooih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fees-BXcR2JfB.js
var import_jsx_runtime = require_jsx_runtime();
function FeesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-14 text-center md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
					children: "FEES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mx-auto mt-3 max-w-2xl text-4xl md:text-5xl",
					children: "Clear fees. Scholarships for those who earn them — and those who need them."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-muted leading-relaxed",
					children: "Admission PKR 12,000. Monthly tuition PKR 4,000. Amounts can vary slightly by programme (FSc Pre-Medical, FSc Pre-Engineering, ICS, IT). Confirm the exact figure at admissions. Bright students can win entry scholarships; needy students, orphans, and Huffaz-e-Quran may receive fee concessions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 inline-flex rounded-pill bg-cream p-1 shadow-[inset_0_0_0_1px_rgb(18_38_90/0.08)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-pill bg-navy px-5 py-2.5 text-sm font-semibold text-cream",
						children: "This session"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site grid gap-5 pb-10 md:grid-cols-3",
			children: feePlans.map((plan) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn("flex flex-col rounded-[1.75rem] p-7", plan.featured ? "bg-navy text-cream" : "bg-cream"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: cn("text-2xl tracking-[-0.04em]", plan.featured && "text-cream"),
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-2 text-sm", plan.featured ? "text-cream/70" : "text-muted"),
							children: plan.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: cn("text-sm font-semibold", plan.featured ? "text-cream/80" : "text-muted"),
									children: [
										"PKR ",
										plan.admission.toLocaleString(),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-normal text-xs uppercase tracking-wider ml-1",
											children: "Admission"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex items-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-3xl font-extrabold tracking-[-0.04em] tabular-nums",
										children: ["PKR ", plan.monthly.toLocaleString()]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: plan.featured ? "text-cream/60" : "text-muted",
										children: "/ month"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-2 text-xs", plan.featured ? "text-cream/60" : "text-muted/70"),
									children: "Final admission and monthly fee confirmed at the office for this programme."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-6 text-sm font-semibold", plan.featured ? "text-gold" : "text-navy"),
							children: "Features included"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex-1 space-y-2.5",
							children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-gold" : "text-navy") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: plan.featured ? "text-cream/90" : "text-navy/80",
									children: f
								})]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/admission",
							variant: plan.featured ? "gold" : "primary",
							className: "mt-8 w-full",
							children: plan.featured ? "Ask about a scholarship" : "Apply now"
						})
					]
				}, plan.name);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[1.75rem] bg-navy p-8 md:p-10 text-center text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "Scholarships and fee concessions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-cream/80 max-w-3xl mx-auto leading-relaxed",
						children: "Bright students may receive special entry scholarships through FSA’s internal assessment. Fee concessions are available for needy and poor students, with reserved consideration for orphans, deserving candidates, and Huffaz-e-Quran (documents required). Ask admissions when you apply — do not assume a discount on the website price."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/admission",
						variant: "gold",
						className: "mt-6",
						children: "Talk to admissions"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid gap-10 pb-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Frequently asked questions"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
	] }) });
}
//#endregion
export { FeesPage as component };
