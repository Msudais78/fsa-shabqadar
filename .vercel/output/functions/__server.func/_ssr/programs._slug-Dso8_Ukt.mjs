import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Check } from "../_libs/lucide-react.mjs";
import { c as programs, n as Shell, t as ButtonLink } from "./shell-Bh11sTZ2.mjs";
import { r as Route$1 } from "./router-BOWUnLyl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs._slug-Dso8_Ukt.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramDetail() {
	const { slug } = Route$1.useParams();
	const program = programs.find((p) => p.slug === slug);
	if (!program) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-site grid items-start gap-12 py-14 md:grid-cols-2 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: program.image,
			alt: "",
			className: "aspect-[4/5] w-full rounded-[2rem] object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
				children: program.ages
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl md:text-5xl",
				children: program.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg leading-relaxed text-muted",
				children: program.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-3",
				children: program.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 text-[0.95rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-mint",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					}), h]
				}, h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/admission",
					size: "lg",
					children: "Apply for admission"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/contact",
					variant: "outline",
					size: "lg",
					children: "Ask a question"
				})]
			})
		] })]
	}) });
}
//#endregion
export { ProgramDetail as component };
