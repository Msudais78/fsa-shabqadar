import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, d as ArrowUpRight, o as Menu, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-DhV9cKVP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var variants = {
	primary: "bg-navy text-cream hover:bg-navy-deep shadow-[0_8px_20px_rgb(18_38_90/0.18)]",
	coral: "bg-coral text-cream hover:brightness-110 shadow-[0_8px_20px_rgb(255_71_29/0.25)]",
	gold: "bg-gold text-navy hover:brightness-105",
	outline: "bg-transparent text-navy shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.16)] hover:shadow-[inset_0_0_0_1.5px_rgb(18_38_90/0.4)]",
	ghost: "bg-transparent text-navy hover:bg-navy/5"
};
var sizes = {
	md: "h-11 px-5 text-[0.9375rem]",
	lg: "h-12 px-6 text-[0.975rem]"
};
function classes(variant, size, className) {
	return cn("inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-[-0.02em]", "transition-[transform,background-color,box-shadow,filter] duration-150 ease-out", "active:not-disabled:scale-[0.96] disabled:opacity-50", variants[variant], sizes[size], className);
}
function Button({ variant = "primary", size = "md", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: classes(variant, size, className),
		...props
	});
}
function ButtonLink({ variant = "primary", size = "md", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		className: classes(variant, size, className),
		...props
	});
}
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-site py-8 md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[2rem] bg-navy px-8 py-12 text-cream md:px-14 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 size-56 rounded-full bg-gold/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-16 left-20 size-40 rounded-full bg-pink/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-[0.16em] text-gold",
								children: "ADMISSIONS OPEN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl text-cream md:text-4xl",
								children: "A college Shabqadar families can trust — this session."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-cream/75",
								children: "FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT. Separate campuses, real labs, a year-round test series, and scholarships for deserving students. Visit us, meet Principal Bilal Ahmed, and see the campus before you decide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
									to: "/admission",
									variant: "gold",
									size: "lg",
									children: "Start your application"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
									to: "/contact",
									variant: "outline",
									size: "lg",
									className: "text-cream shadow-[inset_0_0_0_1.5px_rgb(255_253_248/0.28)] hover:shadow-[inset_0_0_0_1.5px_rgb(255_253_248/0.7)]",
									children: "Contact admissions"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-5 lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/principal.jpg",
							alt: "Bilal Ahmed, Principal, FSA College System Shabqadar",
							className: "w-full aspect-square md:aspect-[4/5] lg:aspect-square object-cover object-top rounded-[1.5rem]"
						})
					})]
				})
			]
		})
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: cn("inline-flex items-center no-underline", className),
		"aria-label": "FSA College System home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "FSA College System",
			className: "h-12 w-auto"
		})
	});
}
var site = {
	name: "FSA College System",
	tagline: "Learn what actually matters.",
	description: "FSA College System Shabqadar is an intermediate and IT college focused on practical skills, rigorous academics, and real-world preparation for 11th and 12th graders.",
	phone: "(888) 456 7890",
	phoneHref: "tel:8884567890",
	email: "admissions@fsa-college.edu",
	emailHref: "mailto:admissions@fsa-college.edu",
	address: "Shabqadar, Khyber Pakhtunkhwa, Pakistan",
	hours: "Monday – Saturday, 8:00 am – 2:30 pm"
};
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/admission",
		label: "Admission"
	},
	{
		to: "/team",
		label: "Team"
	},
	{
		to: "/fees",
		label: "Fees"
	},
	{
		to: "/blog",
		label: "Blog"
	}
];
var stats = [
	{
		value: 18,
		suffix: "+",
		label: "Certified teachers"
	},
	{
		value: 12,
		suffix: "+",
		label: "Years of trust"
	},
	{
		value: 100,
		suffix: "%",
		label: "Parents satisfaction"
	},
	{
		value: 240,
		suffix: "+",
		label: "Students enrolled"
	}
];
var schedule = [
	{
		time: "8:00 am – 10:30 am",
		title: "Core lectures & theory"
	},
	{
		time: "11:00 am – 1:00 pm",
		title: "IT and Science labs"
	},
	{
		time: "1:30 pm – 2:30 pm",
		title: "Group study & project work"
	}
];
var programs = [
	{
		slug: "fsc-pre-medical",
		name: "FSc Pre-Medical",
		ages: "11th & 12th Grade",
		summary: "Rigorous biology and chemistry prep for future medical students.",
		image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
		tone: "mint",
		description: "Intensive coursework in Biology, Chemistry, and Physics designed to prepare you for medical college entry tests and board exams.",
		highlights: [
			"Modern biology and chemistry labs",
			"MDCAT focused preparation",
			"Expert medical faculty",
			"Regular mock assessments",
			"Career counseling for medical fields",
			"Focused study groups"
		]
	},
	{
		slug: "fsc-pre-engineering",
		name: "FSc Pre-Engineering",
		ages: "11th & 12th Grade",
		summary: "Advanced math and physics for aspiring engineers and architects.",
		image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
		tone: "lavender",
		description: "Master the complex mathematics and physical sciences required to excel in engineering universities.",
		highlights: [
			"Advanced physics laboratories",
			"ECAT focused preparation",
			"Intensive mathematics training",
			"Problem-solving workshops",
			"University admission guidance",
			"Analytical skill building"
		]
	},
	{
		slug: "ics-computer-science",
		name: "ICS (Computer Science)",
		ages: "11th & 12th Grade",
		summary: "Software, networking, and hardware for the next generation of tech leaders.",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
		tone: "gold",
		description: "Dive into coding, databases, and IT fundamentals. Built for students who want to create software, not just use it.",
		highlights: [
			"High-end computer labs",
			"Programming fundamentals (C++, Python)",
			"Database design and management",
			"Networking basics",
			"Tech industry seminars",
			"Software project development"
		]
	},
	{
		slug: "fa-it-humanities",
		name: "F.A (IT) & Humanities",
		ages: "11th & 12th Grade",
		summary: "A balanced blend of information technology, arts, and humanities subjects.",
		image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
		tone: "sky",
		description: "Combine the practical skills of IT with a broad understanding of the humanities. This program prepares you for diverse university fields in both technology and the arts.",
		highlights: [
			"Foundational IT and computing skills",
			"Core humanities and arts subjects",
			"Creative and critical thinking development",
			"Diverse university admission pathways",
			"Engaging class discussions",
			"Extensive learning resources"
		]
	}
];
var team = [
	{
		slug: "bilal-ahmad",
		name: "Bilal Ahmad",
		role: "Principal, FSA College System Shabqadar",
		credentials: "M.Com · M.A English · 15+ years in education",
		image: "/principal.jpg",
		bio: "Principal Bilal Ahmad leads FSA College System Shabqadar — separate campuses, labs, test series, and scholarships included. He sets the academic tone for FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT: serious teaching, board and entry-test results, and the discipline families in Shabqadar expect. Visit the campus and you meet him, not a call centre."
	},
	{
		slug: "waqar-ahmad",
		name: "Waqar Ahmad",
		role: "Lecturer, Mathematics",
		credentials: "M.Phil Mathematics · 4+ years",
		image: "/faculty-waqar.jpg",
		bio: "Sir Waqar Ahmad teaches mathematics for FSc and ICS — the algebra, calculus, and problem-solving that actually appear in BISE papers and ECAT. Classes are concept-first, then drill: past papers, timed practice, and the mistakes Shabqadar students keep repeating until they stop. He is there for the board and for the university test, not only the next class quiz."
	},
	{
		slug: "zabeehullah",
		name: "Zabeehullah",
		role: "Lecturer, Biology",
		credentials: "M.Phil Biology · 8+ years",
		image: "/faculty-zabeehullah.jpg",
		bio: "Sir Zabeehullah teaches Biology to Pre-Medical students who are aiming at BISE and MDCAT. Eight-plus years in the subject means diagrams, processes, and paper patterns taught properly — labs included — instead of notes copied in the last month. Families sending a child toward medical college can ask him what the paper actually rewards."
	},
	{
		slug: "imtiaz-mmd",
		name: "Imtiaz Mmd",
		role: "Lecturer, Computer Science · ICS & IT",
		credentials: "Programming, Web Development, Database Systems, OOP · 2+ years",
		image: "/faculty-imtiaz.jpg",
		bio: "Sir Imtiaz Mmd teaches Computer Science for ICS and the IT / web-development track. Students write code, build pages, and use databases in the lab — not only copy theory from the board. Programming, web development, OOP, and database systems are taught so a Shabqadar student can sit the ICS paper and walk into a university CS classroom or a junior IT role without starting from zero."
	}
];
var faqs = [
	{
		q: "Who can apply?",
		a: "Students who have passed (or are appearing in) Matric / SSC and want FSc Pre-Medical, FSc Pre-Engineering, ICS, or IT at FSA College System Shabqadar. Boys and girls are admitted to separate campuses."
	},
	{
		q: "Is there an entry test?",
		a: "Yes. FSA runs an internal assessment test for admission and for special entry scholarships. Bring your admit details on the test day. Final offer also depends on Matric marks and available seats."
	},
	{
		q: "What documents are required?",
		a: "Typically: admission form, Matric result card or hope certificate, Form-B or CNIC, passport-size photographs, and — if applying for concession — orphan / deserving / Hafiz-e-Quran certificates. Confirm the latest list with admissions when you visit."
	},
	{
		q: "Are scholarships and fee concessions available?",
		a: "Yes. Special entry scholarships are awarded through the internal assessment. Fee concessions / quota exemptions are reserved for orphans, deserving candidates, and Huffaz-e-Quran, subject to verification and seats."
	},
	{
		q: "How do we visit the campus or get help?",
		a: "Visit Monday–Saturday during college hours, or call / email admissions. You can walk the campus, see the labs, and meet the admissions team before you decide. Phone and email stay the same as the site header."
	}
];
var testimonials = [
	{
		quote: "The IT labs are actually equipped with fast computers, and the instructors don't just read from the book. I finally understand how to write code instead of just memorizing syntax.",
		name: "Zain A.",
		role: "ICS Student",
		initial: "Z",
		tone: "mint"
	},
	{
		quote: "FSA helped me focus completely on my Pre-Medical subjects without the usual college drama. The teachers are always available for extra help, which made a huge difference in my board exams.",
		name: "Ayesha K.",
		role: "Pre-Medical Student",
		initial: "A",
		tone: "lavender"
	},
	{
		quote: "The Pre-Engineering faculty is top-notch. They explain complex physics concepts in a way that actually makes sense, and the mock tests prepared me perfectly for university entry tests.",
		name: "Hamza R.",
		role: "Pre-Engineering Student",
		initial: "H",
		tone: "sky"
	}
];
var admissionSteps = [
	{
		step: "01",
		title: "Submit the admission form",
		body: "Fill in the student’s details, programme choice (FSc Pre-Medical, FSc Pre-Engineering, ICS, or IT), and parent/guardian contact so we can start your file."
	},
	{
		step: "02",
		title: "Document verification",
		body: "Bring Matric / SSC result (or hope certificate), Form-B or CNIC, recent photographs, and any scholarship or Hafiz-e-Quran documents. We check the file and answer remaining questions."
	},
	{
		step: "03",
		title: "Internal assessment",
		body: "Eligible applicants sit FSA’s internal assessment test where required. This is also the route for special entry scholarships — not a “child interaction” play session."
	},
	{
		step: "04",
		title: "Fee, seat confirmation & enrollment",
		body: "After merit / offer, pay the fee to confirm the seat, collect the joining instructions, and enroll on the boys’ or girls’ campus for the new session."
	}
];
var admissionFee = 12e3;
var monthlyFee = 4e3;
var feePlans = [
	{
		name: "FSc Pre-Medical & Pre-Engineering",
		blurb: "For students targeting BISE, MDCAT, and ECAT — labs included.",
		admission: admissionFee,
		monthly: monthlyFee,
		features: [
			"Physics, Chemistry, and Biology or Maths as per group",
			"Structured science laboratories",
			"Board + entry-test preparation series",
			"Career counseling for university",
			"Separate boys’ and girls’ campuses",
			"Internal assessment for merit / scholarships"
		],
		featured: false
	},
	{
		name: "ICS (Intermediate in Computer Science)",
		blurb: "Computer Science with the same college discipline as FSc — not a tuition academy.",
		admission: admissionFee,
		monthly: monthlyFee,
		features: [
			"Computer Science + supporting subjects",
			"Computer laboratory access",
			"Programming practice, not notes only",
			"Board exam preparation",
			"Path toward BS Computer Science / IT",
			"Separate campuses; scholarships as per policy"
		],
		featured: true
	},
	{
		name: "IT & Web Development",
		blurb: "Practical IT and web skills alongside intermediate study.",
		admission: admissionFee,
		monthly: monthlyFee,
		features: [
			"IT / web-development track",
			"Lab work: sites, code, and computer practicals",
			"Foundation for internships and further study",
			"Test series and academic support",
			"Separate boys’ and girls’ campuses",
			"Concessions for eligible students"
		],
		featured: false
	}
];
var posts = [
	{
		slug: "preparing-little-learners",
		title: "Preparing little learners for a bright school journey",
		date: "January 19, 2026",
		author: "Alex Wright",
		role: "Co-Teacher",
		image: "/images/backpacks.jpg",
		excerpt: "Early preparation helps children begin school with confidence, curiosity, and excitement — without rushing childhood.",
		content: [
			"Early preparation helps children begin their school journey with confidence, curiosity, and excitement. By developing foundational skills and positive habits, children feel ready to explore, learn, and belong.",
			"A supportive start encourages independence, emotional resilience, and a love for learning, setting the stage for long-term academic and personal success.",
			"A nurturing environment allows children to feel safe while discovering new routines. Through structured activities, play, and gentle guidance, they practice communication, sharing, and self-help skills that make the first day of school feel familiar rather than frightening.",
			"These early experiences help children transition smoothly into school life with confidence and enthusiasm. Preparing little learners early is not about extra worksheets — it is about a joyful, confident, and successful beginning."
		],
		skills: [
			{
				title: "Creativity and imagination",
				body: "Children explore ideas freely with open-ended materials."
			},
			{
				title: "Problem-solving",
				body: "Learning through exploration, trial, and play."
			},
			{
				title: "Emotional confidence",
				body: "A positive, unhurried environment lowers stress."
			},
			{
				title: "Conflict resolution",
				body: "Solving problems calmly with adult coaching."
			}
		]
	},
	{
		slug: "building-strong-values",
		title: "Building strong values in early childhood education",
		date: "January 19, 2026",
		author: "Estelle Sipes",
		role: "Curriculum Planner",
		image: "/images/reading.jpg",
		excerpt: "Kindness, courage, and care are practiced daily — in the block corner, at snack, and on the garden path.",
		content: [
			"Values are not a poster on the wall. At FSA they are practiced in the small moments: waiting for a turn, repairing a friendship, noticing a classmate who needs help.",
			"Young children build a moral vocabulary when adults name feelings, model repair, and stay nearby during hard moments. We do not expect perfection. We expect practice.",
			"Our studios use picture books, class meetings, and outdoor caretaking — watering plants, greeting the gardener — to make kindness visible and physical."
		],
		skills: [{
			title: "Kindness in action",
			body: "Daily rituals that make care concrete."
		}, {
			title: "Repair, not shame",
			body: "Conflicts become chances to try again."
		}]
	},
	{
		slug: "nurturing-through-play",
		title: "Nurturing young minds through playful learning",
		date: "January 19, 2026",
		author: "Meghan Olson",
		role: "Learning Center Instructor",
		image: "/images/blocks.jpg",
		excerpt: "Play is not a break from learning. For young children, play is the most serious work they do.",
		content: [
			"Watch a four-year-old in the block corner and you will see engineering, negotiation, storytelling, and stamina. That is the curriculum.",
			"Teachers at FSA prepare the environment, then protect long stretches of uninterrupted play. We document what we notice and use it to plan the next invitation.",
			"Families sometimes worry that play is “just play.” We invite them to sit on the rug and see the literacy, math, and science hiding in plain sight."
		],
		skills: [{
			title: "Deep play",
			body: "Long, protected stretches of child-led work."
		}, {
			title: "Teacher as researcher",
			body: "Observation guides the next invitation."
		}]
	},
	{
		slug: "why-social-skills-matter",
		title: "Why social skills matter in early childhood development",
		date: "January 19, 2026",
		author: "Emerson Stanton",
		role: "Early Childhood Educator",
		image: "/images/music.jpg",
		excerpt: "Friendship, turn-taking, and reading a room are academic skills in disguise — and they start in preschool.",
		content: [
			"A child who can enter play, share materials, and recover from disappointment is a child ready for any classroom. Social fluency is not extra. It is foundational.",
			"We coach these skills in the moment: “You look like you want a turn. Would you like the words?” Adults stay close, then step back as children grow capable.",
			"Group music, outdoor games, and mixed-age moments give children a wide social practice field, with teachers who know when to intervene and when to wait."
		],
		skills: [{
			title: "Coaching in the moment",
			body: "Language offered at the point of need."
		}, {
			title: "Mixed-age practice",
			body: "Younger and older children learn from each other."
		}]
	},
	{
		slug: "creative-art-projects",
		title: "Creative art projects to boost your child’s imagination",
		date: "January 19, 2026",
		author: "Jonathan Deckow",
		role: "Activity Coordinator",
		image: "/images/art.jpg",
		excerpt: "Skip the identical crafts. Open-ended materials let children invent, revise, and surprise themselves.",
		content: [
			"At FSA the art studio is a laboratory, not a factory. We offer clay, watercolor, cardboard, and fabric, then get out of the way.",
			"Process-based art builds fine motor control, planning, and the courage to try again when a piece does not go as imagined. Those are academic muscles.",
			"Try this at home: a tray, three materials, and twenty minutes of uninterrupted time. Resist the urge to make it look like something."
		],
		skills: [{
			title: "Process over product",
			body: "The making is the point."
		}, {
			title: "Materials as language",
			body: "Children say things with paint they cannot yet say in words."
		}]
	},
	{
		slug: "teaching-responsibility",
		title: "Teaching responsibility to young children through daily tasks",
		date: "January 19, 2026",
		author: "Kellie Walker",
		role: "Toddler Group Teacher",
		image: "/images/outdoor.jpg",
		excerpt: "Jobs like watering, sweeping, and setting snack are not chores to children. They are a chance to belong.",
		content: [
			"Young children want to contribute. When we give them real work — not toy work — they stand taller.",
			"Each studio has a job board: line leader, plant helper, snack setter, door holder. Jobs rotate so every child practices competence.",
			"At home, the same idea applies. A low hook for a coat, a cup they can pour, a cloth for spills. Responsibility is a feeling of “I can,” built in tiny repetitions."
		],
		skills: [{
			title: "Real work",
			body: "Jobs that actually matter to the classroom."
		}, {
			title: "Independence",
			body: "The environment is scaled to small hands."
		}]
	}
];
var gallery = [
	{
		src: "/gallery/485003255_1821626695340631_937012269984703536_n.jpg",
		alt: "Student life",
		caption: "Campus activities"
	},
	{
		src: "/gallery/485838391_1823860921783875_6328649899520956165_n.jpg",
		alt: "Student life",
		caption: "Learning environment"
	},
	{
		src: "/gallery/486380123_1121800189959236_5640190311464730090_n.jpg",
		alt: "Student life",
		caption: "College experience"
	},
	{
		src: "/gallery/campus-1.jpg",
		alt: "Student life",
		caption: "Student interaction"
	},
	{
		src: "/gallery/campus-2.jpg",
		alt: "Student life",
		caption: "Campus events"
	},
	{
		src: "/gallery/campus-3.jpg",
		alt: "Student life",
		caption: "Extracurriculars"
	}
];
var quick = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/fees",
		label: "Fees"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var extra = [
	{
		to: "/admission",
		label: "Admission"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/fees",
		label: "Scholarships"
	},
	{
		to: "/contact",
		label: "Campus visit"
	},
	{
		to: "/team",
		label: "Team"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid gap-10 py-16 md:grid-cols-12 md:gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-cream [&_span]:text-cream" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xs text-[0.95rem] leading-relaxed text-cream/75",
							children: "FSA College System Shabqadar. Intermediate programmes in FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT — with separate campuses for boys and girls, structured labs, and scholarships for orphans, deserving students, and Huffaz-e-Quran."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2.5 text-sm text-cream/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.phoneHref,
									className: "inline-flex items-center gap-2 hover:text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), site.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.emailHref,
									className: "inline-flex items-center gap-2 hover:text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), site.email]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "inline-flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0" }), site.address]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold tracking-[-0.02em] text-gold",
						children: "Quick links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm text-cream/80",
						children: quick.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "hover:text-cream",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold tracking-[-0.02em] text-gold",
						children: "For parents & students"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm text-cream/80",
						children: extra.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "hover:text-cream",
							children: item.label
						}) }, item.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold tracking-[-0.02em] text-gold",
							children: "Visit us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-cream/80",
							children: site.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admission",
							className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-cream",
							children: ["Start admission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site flex flex-col gap-2 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" FSA College System Shabqadar. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Learn what actually matters." })]
			})
		})]
	});
}
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled || open ? "bg-ivory/95 shadow-[0_1px_0_rgb(18_38_90/0.08)] backdrop-blur-md" : "bg-ivory"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-b border-line bg-navy text-cream lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site flex h-10 items-center justify-between text-[0.8rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium tracking-[-0.01em]",
						children: "Follow us on campus visits this spring"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.phoneHref,
							className: "inline-flex items-center gap-1.5 opacity-90 hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), site.phone]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.emailHref,
							className: "inline-flex items-center gap-1.5 opacity-90 hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), site.email]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site flex h-16 items-center justify-between gap-4 md:h-[4.5rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Primary",
						children: navLinks.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-pill px-3 py-2 text-[0.9375rem] font-medium tracking-[-0.02em] transition-colors", active ? "bg-navy/5 text-navy" : "text-navy/70 hover:text-navy"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/contact",
							size: "md",
							className: "hidden sm:inline-flex",
							children: "Contact us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-pill text-navy lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line bg-ivory lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "container-site flex flex-col gap-1 py-4",
					"aria-label": "Mobile",
					children: [
						navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-lg px-3 py-3 text-base font-semibold text-navy",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/contact",
							className: "mt-2 w-full",
							children: "Contact us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							className: "mt-3 px-3 text-sm text-muted",
							children: site.phone
						})
					]
				})
			}) : null
		]
	});
}
function Shell({ children, showCta = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-ivory text-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			showCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { cn as a, gallery as c, schedule as d, site as f, testimonials as h, admissionSteps as i, posts as l, team as m, ButtonLink as n, faqs as o, stats as p, Shell as r, feePlans as s, Button as t, programs as u };
