import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as team, r as Shell } from "./shell-DhV9cKVP.mjs";
import { t as PageHero } from "./page-hero-C9QB3nO2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-uOQVrsx8.js
var import_jsx_runtime = require_jsx_runtime();
function TeamPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "OUR TEAM",
		title: "Teachers who prepare the paper — and the student.",
		body: "FSA College Shabqadar is led by Principal Bilal Ahmad and a small faculty who teach FSc, ICS, and IT in depth: BISE boards, MDCAT and ECAT, labs, and the habits students need after college. Meet the people in the classroom — not a list of kindergarten carers.",
		image: "/principal.jpg",
		imageAlt: "Bilal Ahmad, Principal, FSA College System Shabqadar",
		primaryButtonText: "See our programs"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: team.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/team/$slug",
				params: { slug: member.slug },
				className: "group overflow-hidden rounded-[1.75rem] bg-cream flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: member.image,
					alt: member.name,
					className: "aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 flex flex-col flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl tracking-[-0.04em] font-bold text-navy",
							children: member.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted font-medium",
							children: member.role
						}),
						member.credentials && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted/80",
							children: member.credentials
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-navy/80 leading-relaxed flex-1",
							children: member.bio
						})
					]
				})]
			}, member.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-12 text-center text-sm text-muted",
			children: "Faculty list is for the current session. For subject allocation, visiting hours, or a campus meeting with the Principal, contact admissions."
		})]
	})] }) });
}
//#endregion
export { TeamPage as component };
