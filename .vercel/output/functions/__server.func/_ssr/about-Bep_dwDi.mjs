import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ButtonLink, r as Shell } from "./shell-DhV9cKVP.mjs";
import { t as PageHero } from "./page-hero-C9QB3nO2.mjs";
import { t as StatsRow } from "./stats-e3azsgCG.mjs";
import { t as Testimonials } from "./testimonials-C6d_UsAQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Bep_dwDi.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "ABOUT FSA",
			title: "A college Shabqadar families trust — for boards, entry tests, and what comes after.",
			body: "FSA College System Shabqadar is an intermediate college for FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT. Boys and girls study on separate campuses. Students work in real science and computer labs, sit a year-round test series, and get career counseling for university — with scholarships for orphans, deserving students, and Huffaz-e-Quran.",
			image: "/about-teachers.jpg",
			imageAlt: "FSA College Shabqadar faculty",
			primaryButtonText: "Explore programs"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsRow, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid items-center gap-10 pb-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/about-ecommerce.jpg",
				alt: "E-commerce and IT workshop at FSA College Shabqadar",
				className: "aspect-[4/3] w-full rounded-[2rem] object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl",
					children: "Workshops and labs — not notes copied from the board."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: "The syllabus still matters. So does using it. Students practise in Physics, Chemistry, Biology, and Computer labs, and join practical sessions in IT and e-commerce so they can build skills for university, internships, and work — not only the next class test."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/programs",
					className: "mt-7",
					children: "See our programs"
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
						children: "LIFE AT FSA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl",
						children: "Tours, teachers, and results families can point to."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: [
						{
							title: "Educational tours that leave the classroom",
							body: "Students travel, see institutions and workplaces up close, and come back with a clearer picture of university and career options.",
							img: "/about-tour.jpg",
							alt: "FSA College Shabqadar educational tour",
							link: "/programs",
							imgClass: "object-center"
						},
						{
							title: "Alumni who serve — Hamza Ali, P/ASI",
							body: "FSA is judged by what students do after college. Hamza Ali, an FSA alumnus, now serves as a Police Assistant Sub-Inspector — one example of the discipline and direction we aim to build.",
							img: "/about-alumni-hamza.jpg",
							alt: "Hamza Ali, FSA College alumnus, Police Assistant Sub-Inspector",
							link: "/about",
							imgClass: "object-top"
						},
						{
							title: "Teachers who know the paper and the student",
							body: "Experienced faculty who teach the BISE syllabus in depth, run labs and test series, and prepare students for MDCAT, ECAT, and university admissions — not last-month cramming.",
							img: "/about-faculty.jpg",
							alt: "FSA College Shabqadar teachers",
							link: "/team",
							imgClass: "object-top"
						}
					].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-[1.75rem] bg-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: card.img,
							alt: card.alt,
							className: `aspect-[16/10] w-full object-cover ${card.imgClass}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl tracking-[-0.04em] text-navy font-bold",
									children: card.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: card.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: card.link,
									className: "mt-4 inline-block text-sm font-semibold text-coral",
									children: "Read more"
								})
							]
						})]
					}, card.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
	] }) });
}
//#endregion
export { AboutPage as component };
