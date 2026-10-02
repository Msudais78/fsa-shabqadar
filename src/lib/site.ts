export const site = {
  name: "FSA College System",
  tagline: "Learn what actually matters.",
  description:
    "FSA College System Shabqadar is an intermediate and IT college focused on practical skills, rigorous academics, and real-world preparation for 11th and 12th graders.",
  phone: "03335011415",
  phoneHref: "tel:03335011415",
  email: "Fsacollegesystemshabqadar@gmail.com",
  emailHref: "mailto:Fsacollegesystemshabqadar@gmail.com",
  address: "Shabqadar, Khyber Pakhtunkhwa, Pakistan",
  hours: "Monday – Saturday, 8:00 am – 2:30 pm",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admission", label: "Admission" },
  { to: "/team", label: "Team" },
  { to: "/fees", label: "Fees" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/shining-stars", label: "Shining Stars" },
] as const;

export const stats = [
  { value: 18, suffix: "+", label: "Certified teachers" },
  { value: 12, suffix: "+", label: "Years of trust" },
  { value: 100, suffix: "%", label: "Parents satisfaction" },
  { value: 240, suffix: "+", label: "Students enrolled" },
] as const;

export const values = [
  {
    title: "Master the fundamentals",
    body: "Build a rock-solid foundation in math, sciences, and programming languages that you'll actually use.",
    tone: "mint" as const,
  },
  {
    title: "Hands-on IT labs",
    body: "Write code, configure networks, and build projects. We believe in learning by doing, not just reading.",
    tone: "lavender" as const,
  },
  {
    title: "Board exam prep",
    body: "Get the targeted practice and clear explanations you need to score high and secure your university spot.",
    tone: "sky" as const,
  },
];

export const schedule = [
  { time: "8:00 am – 10:30 am", title: "Core lectures & theory" },
  { time: "11:00 am – 1:00 pm", title: "IT and Science labs" },
  { time: "1:30 pm – 2:30 pm", title: "Group study & project work" },
];

export const programs = [
  {
    slug: "fsc-pre-medical",
    name: "FSc Pre-Medical",
    ages: "11th & 12th Grade",
    summary: "Rigorous biology and chemistry prep for future medical students.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    tone: "mint" as const,
    description: "Intensive coursework in Biology, Chemistry, and Physics designed to prepare you for medical college entry tests and board exams.",
    highlights: [
      "Modern biology and chemistry labs",
      "MDCAT focused preparation",
      "Expert medical faculty",
      "Regular mock assessments",
      "Career counseling for medical fields",
      "Focused study groups"
    ],
  },
  {
    slug: "fsc-pre-engineering",
    name: "FSc Pre-Engineering",
    ages: "11th & 12th Grade",
    summary: "Advanced math and physics for aspiring engineers and architects.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    tone: "lavender" as const,
    description: "Master the complex mathematics and physical sciences required to excel in engineering universities.",
    highlights: [
      "Advanced physics laboratories",
      "ECAT focused preparation",
      "Intensive mathematics training",
      "Problem-solving workshops",
      "University admission guidance",
      "Analytical skill building"
    ],
  },
  {
    slug: "ics-computer-science",
    name: "ICS (Computer Science)",
    ages: "11th & 12th Grade",
    summary: "Software, networking, and hardware for the next generation of tech leaders.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tone: "gold" as const,
    description: "Dive into coding, databases, and IT fundamentals. Built for students who want to create software, not just use it.",
    highlights: [
      "High-end computer labs",
      "Programming fundamentals (C++, Python)",
      "Database design and management",
      "Networking basics",
      "Tech industry seminars",
      "Software project development"
    ],
  },
  {
    slug: "fa-it-humanities",
    name: "F.A (IT) & Humanities",
    ages: "11th & 12th Grade",
    summary: "A balanced blend of information technology, arts, and humanities subjects.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    tone: "sky" as const,
    description: "Combine the practical skills of IT with a broad understanding of the humanities. This program prepares you for diverse university fields in both technology and the arts.",
    highlights: [
      "Foundational IT and computing skills",
      "Core humanities and arts subjects",
      "Creative and critical thinking development",
      "Diverse university admission pathways",
      "Engaging class discussions",
      "Extensive learning resources"
    ],
  },
];

export const team = [
  {
    slug: "bilal-ahmad",
    name: "Bilal Ahmad",
    role: "Principal, FSA College System Shabqadar",
    credentials: "M.Com · M.A English · 15+ years in education",
    image: "/principal.jpg",
    bio: "Principal Bilal Ahmad leads FSA College System Shabqadar — separate campuses, labs, test series, and scholarships included. He sets the academic tone for FSc Pre-Medical, FSc Pre-Engineering, ICS, and IT: serious teaching, board and entry-test results, and the discipline families in Shabqadar expect. Visit the campus and you meet him, not a call centre.",
  },
  {
    slug: "waqar-ahmad",
    name: "Waqar Ahmad",
    role: "Lecturer, Mathematics",
    credentials: "M.Phil Mathematics · 4+ years",
    image: "/faculty-waqar.jpg",
    bio: "Sir Waqar Ahmad teaches mathematics for FSc and ICS — the algebra, calculus, and problem-solving that actually appear in BISE papers and ECAT. Classes are concept-first, then drill: past papers, timed practice, and the mistakes Shabqadar students keep repeating until they stop. He is there for the board and for the university test, not only the next class quiz.",
  },
  {
    slug: "zabeehullah",
    name: "Zabeehullah",
    role: "Lecturer, Biology",
    credentials: "M.Phil Biology · 8+ years",
    image: "/faculty-zabeehullah.jpg",
    bio: "Sir Zabeehullah teaches Biology to Pre-Medical students who are aiming at BISE and MDCAT. Eight-plus years in the subject means diagrams, processes, and paper patterns taught properly — labs included — instead of notes copied in the last month. Families sending a child toward medical college can ask him what the paper actually rewards.",
  },
  {
    slug: "imtiaz-mmd",
    name: "Imtiaz Mmd",
    role: "Lecturer, Computer Science · ICS & IT",
    credentials: "Programming, Web Development, Database Systems, OOP · 2+ years",
    image: "/faculty-imtiaz.jpg",
    bio: "Sir Imtiaz Mmd teaches Computer Science for ICS and the IT / web-development track. Students write code, build pages, and use databases in the lab — not only copy theory from the board. Programming, web development, OOP, and database systems are taught so a Shabqadar student can sit the ICS paper and walk into a university CS classroom or a junior IT role without starting from zero.",
  },
];

export const faqs = [
  {
    q: "Who can apply?",
    a: "Students who have passed (or are appearing in) Matric / SSC and want FSc Pre-Medical, FSc Pre-Engineering, ICS, or IT at FSA College System Shabqadar. Boys and girls are admitted to separate campuses.",
  },
  {
    q: "Is there an entry test?",
    a: "Yes. FSA runs an internal assessment test for admission and for special entry scholarships. Bring your admit details on the test day. Final offer also depends on Matric marks and available seats.",
  },
  {
    q: "What documents are required?",
    a: "Typically: admission form, Matric result card or hope certificate, Form-B or CNIC, passport-size photographs, and — if applying for concession — orphan / deserving / Hafiz-e-Quran certificates. Confirm the latest list with admissions when you visit.",
  },
  {
    q: "Are scholarships and fee concessions available?",
    a: "Yes. Special entry scholarships are awarded through the internal assessment. Fee concessions / quota exemptions are reserved for orphans, deserving candidates, and Huffaz-e-Quran, subject to verification and seats.",
  },
  {
    q: "How do we visit the campus or get help?",
    a: "Visit Monday–Saturday during college hours, or call / email admissions. You can walk the campus, see the labs, and meet the admissions team before you decide. Phone and email stay the same as the site header.",
  },
];

export const testimonials = [
  {
    quote:
      "The IT labs are actually equipped with fast computers, and the instructors don't just read from the book. I finally understand how to write code instead of just memorizing syntax.",
    name: "Zain A.",
    role: "ICS Student",
    initial: "Z",
    tone: "mint" as const,
  },
  {
    quote:
      "FSA helped me focus completely on my Pre-Medical subjects without the usual college drama. The teachers are always available for extra help, which made a huge difference in my board exams.",
    name: "Ayesha K.",
    role: "Pre-Medical Student",
    initial: "A",
    tone: "lavender" as const,
  },
  {
    quote:
      "The Pre-Engineering faculty is top-notch. They explain complex physics concepts in a way that actually makes sense, and the mock tests prepared me perfectly for university entry tests.",
    name: "Hamza R.",
    role: "Pre-Engineering Student",
    initial: "H",
    tone: "sky" as const,
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Submit the admission form",
    body: "Fill in the student’s details, programme choice (FSc Pre-Medical, FSc Pre-Engineering, ICS, or IT), and parent/guardian contact so we can start your file.",
  },
  {
    step: "02",
    title: "Document verification",
    body: "Bring Matric / SSC result (or hope certificate), Form-B or CNIC, recent photographs, and any scholarship or Hafiz-e-Quran documents. We check the file and answer remaining questions.",
  },
  {
    step: "03",
    title: "Internal assessment",
    body: "Eligible applicants sit FSA’s internal assessment test where required. This is also the route for special entry scholarships — not a “child interaction” play session.",
  },
  {
    step: "04",
    title: "Fee, seat confirmation & enrollment",
    body: "After merit / offer, pay the fee to confirm the seat, collect the joining instructions, and enroll on the boys’ or girls’ campus for the new session.",
  },
];

export const admissionFee = 12000;
export const monthlyFee = 4000;

export const feePlans = [
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
      "Internal assessment for merit / scholarships",
    ],
    featured: false,
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
      "Separate campuses; scholarships as per policy",
    ],
    featured: true,
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
      "Concessions for eligible students",
    ],
    featured: false,
  },
];

export const campusLife = [
  {
    image: "/gallery/campus-1.jpg",
    alt: "FSA College Shabqadar campus",
    caption: "Campus aur field visits — class se bahar bhi.",
  },
  {
    image: "/gallery/485003255_1821626695340631_937012269984703536_n.jpg",
    alt: "Educational tour — FSA College bus",
    caption: "Educational tour — college bus, students, and the road out of Shabqadar.",
  },
  {
    image: "/gallery/campus-2.jpg",
    alt: "FSA College students on campus",
    caption: "Assembly and campus days. Boys’ campus, one college.",
  },
  {
    image: "/gallery/485838391_1823860921783875_6328649899520956165_n.jpg",
    alt: "E-commerce and digital marketing seminar at FSA College Shabqadar",
    caption: "One-day seminar: e-commerce and digital marketing. Certificates in hand.",
  },
  {
    image: "/gallery/campus-3.jpg",
    alt: "Students receiving certificates — FSA College seminar",
    caption: "Same seminar — students recognised for taking part.",
  },
];
