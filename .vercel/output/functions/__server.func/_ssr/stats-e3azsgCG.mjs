import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as stats } from "./shell-DhV9cKVP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stats-e3azsgCG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCount(target, start) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!start) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(target);
			return;
		}
		const duration = 1100;
		const t0 = performance.now();
		let frame = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - t0) / duration);
			const eased = 1 - (1 - p) ** 3;
			setValue(Math.round(target * eased));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [start, target]);
	return value;
}
function Stat({ value, suffix, label, start }) {
	const n = useCount(value, start);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-4xl font-extrabold tracking-[-0.06em] tabular-nums md:text-5xl",
			children: [n, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm font-medium text-muted",
			children: label
		})]
	});
}
function StatsRow() {
	const ref = (0, import_react.useRef)(null);
	const [start, setStart] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setStart(true);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "grid grid-cols-2 gap-8 rounded-[1.75rem] bg-navy px-6 py-10 text-cream md:grid-cols-4 md:px-10",
		children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
			...s,
			start
		}, s.label))
	});
}
//#endregion
export { StatsRow as t };
