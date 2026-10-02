import { a as Trigger2, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Plus } from "../_libs/lucide-react.mjs";
import { o as faqs } from "./shell-Bh11sTZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DTb19HRh.js
var import_jsx_runtime = require_jsx_runtime();
function FaqList({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		type: "single",
		collapsible: true,
		className,
		children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
			value: item.q,
			className: "border-b border-line py-1 first:border-t",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
				className: "group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-[-0.03em] text-navy",
				children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" })]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
				className: "overflow-hidden data-[state=closed]:animate-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-5 pr-8 text-[0.95rem] leading-relaxed text-muted",
					children: item.a
				})
			})]
		}, item.q))
	});
}
//#endregion
export { FaqList as t };
