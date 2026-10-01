import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as admissionSteps, r as Shell, t as Button } from "./shell-DhV9cKVP.mjs";
import { t as PageHero } from "./page-hero-C9QB3nO2.mjs";
import { t as StatsRow } from "./stats-e3azsgCG.mjs";
import { t as FaqList } from "./faq-Bdq7Ooih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admission-CC24497_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "h-12 w-full rounded-[0.9rem] bg-paper px-4 text-[0.95rem] text-navy shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.12)] outline-none transition-shadow placeholder:text-muted/70 focus:shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.45)]";
function AdmissionPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "ADMISSION",
			title: "Apply for FSc, ICS, and IT — this session at FSA Shabqadar.",
			body: "Admissions are open for FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT. Submit your form, complete document verification, sit the internal assessment where required, and confirm your seat. Separate campuses for boys and girls. Scholarships for high scorers, orphans, deserving students, and Huffaz-e-Quran.",
			image: "/admission-hero.jpg",
			imageAlt: "Students at FSA College System Shabqadar",
			primaryButtonText: "Start your application"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4",
			children: admissionSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-[1.5rem] bg-cream p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-coral",
						children: s.step
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-xl tracking-[-0.04em]",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: s.body
					})
				]
			}, s.step))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsRow, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid gap-12 pb-20 md:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
					children: "Apply"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl",
					children: "Guiding you through the admission journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Share your details below and our admissions office will contact you to confirm the next steps."
				})
			] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[1.75rem] bg-mint p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl",
					children: "Thank you. Your submission has been received."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-navy/75",
					children: "The admissions office will reach out to you shortly."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid gap-4 rounded-[1.75rem] bg-cream p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								name: "first",
								placeholder: "First name*",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								name: "last",
								placeholder: "Last name*",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								name: "phone",
								placeholder: "Phone number*",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								name: "email",
								type: "email",
								placeholder: "Email*",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								name: "age",
								placeholder: "Child’s age"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								name: "guardian",
								placeholder: "Guardian’s name*",
								required: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: fieldClass,
						name: "gender",
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Gender"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Boy" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Girl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Prefer not to say" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						name: "address",
						placeholder: "Full address"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						name: "previous",
						placeholder: "Previous school / daycare (if applicable)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						name: "start",
						placeholder: "Preferred start date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-2 w-full sm:w-auto",
						children: "Apply for admission"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid gap-10 pb-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Frequently asked questions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "For students and parents applying to FSA College Shabqadar."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})]
		})
	] }) });
}
//#endregion
export { AdmissionPage as component };
