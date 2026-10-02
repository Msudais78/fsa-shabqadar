import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Target, u as HeartHandshake } from "../_libs/lucide-react.mjs";
import { c as programs, i as campusLife, l as schedule, n as Shell, t as ButtonLink } from "./shell-Bh11sTZ2.mjs";
import { t as StatsRow } from "./stats-BAdZZt6F.mjs";
import { t as Testimonials } from "./testimonials-BgW4rlMA.mjs";
import { t as ProgramCard } from "./program-card-Hk-ZqAlZ.mjs";
import { n as allResults, t as ResultCard } from "./result-card-CjC23uew.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cj-trK5r.js
var import_jsx_runtime = require_jsx_runtime();
function HomeHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid items-center gap-8 pb-16 pt-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[540px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-rise text-sm font-semibold uppercase tracking-[0.16em] text-coral",
						style: { animationDelay: "40ms" },
						children: "FSA College System Shabqadar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "animate-rise mt-4 max-w-xl text-[2.35rem] leading-[1.05] md:text-[3.35rem]",
						style: { animationDelay: "100ms" },
						children: [
							"Stop memorizing for tests and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-coral",
								children: "learn what actually matters"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-rise mt-5 max-w-md text-base leading-relaxed text-muted md:text-[1.05rem]",
						style: { animationDelay: "180ms" },
						children: "Your 11th and 12th grade years are your launchpad. Dive into IT, Pre-Engineering, and Pre-Medical with hands-on labs, modern tech, and instructors who treat you like an adult."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-rise mt-8 flex flex-wrap gap-3",
						style: { animationDelay: "240ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/programs",
							size: "lg",
							children: "See our Programs"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative isolate min-w-0 lg:ml-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-10 -top-6 -z-10 h-48 w-48 rounded-full bg-leaf/25 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-steel/20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-rise relative aspect-[16/10] w-full max-w-[640px] overflow-hidden rounded-[24px] border border-navy/5 shadow-lift lg:aspect-[4/3]",
						style: { animationDelay: "160ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/hero.png",
							alt: "FSA College Shabqadar students",
							className: "h-full w-full object-cover object-[center_30%]"
						})
					})
				]
			})]
		})
	});
}
function ShiningStars() {
	const marqueeCards = [...allResults, ...allResults];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "shining-stars",
		className: "bg-cream py-16 md:py-20 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site mb-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
						children: "ALHAMDULILLAH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl text-navy",
						children: "Our Shining Stars"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted max-w-2xl mx-auto",
						children: "Top marks in HSSC Part-I and Part-II (Pre-Medical)."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-cream to-transparent md:w-24" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-cream to-transparent md:w-24" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track flex w-max gap-5 px-4 md:px-6",
						children: marqueeCards.map((student, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, {
							student,
							className: "w-[260px] shrink-0"
						}, `${student.rollNo}-${idx}`))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-site mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shining-stars",
					className: "inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-navy transition-colors",
					children: ["See all results ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "→"
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-12 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
						children: "WHY FSA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl text-navy",
						children: "A campus families trust. An education universities notice."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-muted",
					children: "Separate buildings for boys and girls, real science and computer labs, a dedicated test-prep series, and scholarships for those who need them — this is FSA College Shabqadar."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl bg-emerald-100 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold tracking-[-0.04em] text-navy",
							children: "Separate campuses, same high standard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
							children: "Boys and girls study in dedicated buildings so the environment matches regional values, without compromising labs, teaching, or results."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl bg-violet-100 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold tracking-[-0.04em] text-navy",
							children: "Labs, test series & university counseling"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
							children: "Fully structured science and computer laboratories, a dedicated board and entry-test preparation series, plus active career counseling for university placements."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl bg-sky-100 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold tracking-[-0.04em] text-navy",
							children: "Scholarships that actually open doors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
							children: "Special entry scholarships through internal assessment tests, plus reserved fee concessions for orphans, deserving students, and Huffaz-e-Quran."
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsRow, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShiningStars, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
							children: "Academics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-4xl",
							children: "Courses that get you ready for what’s next"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "From Computer Science to Pre-Medical and Pre-Engineering, our curriculum is designed to challenge you and prepare you for university admissions."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
					children: programs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, {
						program: p,
						index: i,
						className: "animate-rise"
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
					children: "HOW WE TEACH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl",
					children: "Less cramming. More concepts. Stronger results."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: "Too many intermediate colleges still mean copied notes and last-month panic. At FSA College Shabqadar we teach the FSc and ICS syllabus so students actually understand it — then we lock it in with structured labs and a year-round test series for BISE, MDCAT, and ECAT."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.25rem] bg-mint p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "size-4" }), " Teachers who prepare both papers"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-navy/75",
							children: "Faculty who know the BISE syllabus in depth, explain concepts clearly, and train you for board exams and university entry tests — not just the next class test."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.25rem] bg-blush p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" }), " Labs and a dedicated test series"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-navy/75",
							children: "Fully structured Physics, Chemistry, Biology, and Computer laboratories, plus a dedicated test-preparation series so practice happens all year, not only before the board."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/programs",
					className: "mt-8",
					children: "View all courses"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/classroom.jpg",
					alt: "FSA College Shabqadar science and computer labs",
					className: "mt-8 aspect-[3/4] w-full rounded-[1.5rem] object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/test.jpg",
					alt: "FSA College Shabqadar classroom and test preparation",
					className: "aspect-[3/4] w-full rounded-[1.5rem] object-cover"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site py-8 md:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-[2rem] bg-navy px-6 py-10 text-cream md:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-gold",
						children: "A day at FSA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl text-3xl text-cream md:text-4xl",
						children: "A schedule that respects your time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: schedule.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[1.25rem] bg-cream/8 px-5 py-6 shadow-[inset_0_0_0_1px_rgb(255_253_248/0.08)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-gold",
								children: s.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg font-semibold tracking-[-0.03em] text-cream",
								children: s.title
							})]
						}, s.time))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-sm text-cream/70",
						children: "Balance your core subjects with hands-on lab time, giving you the knowledge and experience to excel in exams and beyond."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-cream py-16 md:py-20 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.16em] text-coral",
						children: "Campus Life"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted max-w-2xl mx-auto text-lg",
						children: "Tours, seminars, and days on campus — FSA College Shabqadar."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-cream to-transparent md:w-24" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-cream to-transparent md:w-24" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-track flex w-max gap-5 px-4 md:px-6",
							children: [...campusLife, ...campusLife].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/campus-life",
								className: "group flex flex-col w-[260px] md:w-[280px] shrink-0 rounded-3xl bg-white shadow-[0_1px_2px_rgb(18_38_90/0.05),0_8px_16px_rgb(18_38_90/0.03)] border border-[rgb(0,0,0,0.02)] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgb(18_38_90/0.05),0_12px_24px_rgb(18_38_90/0.08)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[4/3] w-full overflow-hidden bg-navy/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.alt,
										className: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-navy/85 font-medium leading-relaxed line-clamp-2",
										children: item.caption
									})
								})]
							}, `${item.image}-${idx}`))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-site mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/campus-life",
						className: "inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-navy transition-colors",
						children: ["See more campus life ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
	] }) });
}
//#endregion
export { Home as component };
