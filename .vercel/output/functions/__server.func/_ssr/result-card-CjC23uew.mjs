import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn } from "./shell-Bh11sTZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/result-card-CjC23uew.js
var import_jsx_runtime = require_jsx_runtime();
var hsscPart1 = [
	{
		name: "Farishta Bibi",
		marks: 557,
		rollNo: "706422",
		group: "HSSC-I",
		totalMarks: 550
	},
	{
		name: "Aisha Rahmat",
		marks: 547,
		rollNo: "706445",
		group: "HSSC-I",
		totalMarks: 550
	},
	{
		name: "Manihal Iftikhar",
		marks: 542,
		rollNo: "706422",
		group: "HSSC-I",
		totalMarks: 550
	},
	{
		name: "Aleesha Iftikhar",
		marks: 541,
		rollNo: "706437",
		group: "HSSC-I",
		totalMarks: 550
	},
	{
		name: "Malika Zardin",
		marks: 539,
		rollNo: "706428",
		group: "HSSC-I",
		totalMarks: 550
	}
];
var hsscPart2 = [{
	name: "Farishta Bibi",
	marks: 1033,
	rollNo: "519193",
	group: "HSSC-II",
	totalMarks: 1100
}, {
	name: "Manahil Iftikhar",
	marks: 1015,
	rollNo: "519396",
	group: "HSSC-II",
	totalMarks: 1100
}];
var allResults = [...hsscPart2, ...hsscPart1];
function ResultCard({ student, className }) {
	const initials = student.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-[0_10px_40px_rgb(0_0_0/0.06)] border border-[rgb(0,0,0,0.04)]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-navy font-bold text-xl",
				children: initials
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-bold text-navy uppercase",
				children: student.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs font-semibold text-muted uppercase",
				children: ["ROLL NO: ", student.rollNo]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex items-baseline justify-center gap-1 text-coral",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-3xl font-bold tracking-tight",
					children: student.marks
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.7rem] font-bold uppercase tracking-widest text-muted mt-1",
				children: "Marks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy/80",
				children: student.group
			})
		]
	});
}
//#endregion
export { hsscPart2 as i, allResults as n, hsscPart1 as r, ResultCard as t };
