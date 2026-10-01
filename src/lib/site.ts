export const site = {
  name: "FSA College System",
  tagline: "Learn what actually matters.",
  description:
    "FSA College System Shabqadar is an intermediate and IT college focused on practical skills, rigorous academics, and real-world preparation for 11th and 12th graders.",
  phone: "(888) 456 7890",
  phoneHref: "tel:8884567890",
  email: "admissions@fsa-college.edu",
  emailHref: "mailto:admissions@fsa-college.edu",
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
  { to: "/blog", label: "Blog" },
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

export const posts = [
  {
    slug: "preparing-little-learners",
    title: "Preparing little learners for a bright school journey",
    date: "January 19, 2026",
    author: "Alex Wright",
    role: "Co-Teacher",
    image: "/images/backpacks.jpg",
    excerpt:
      "Early preparation helps children begin school with confidence, curiosity, and excitement — without rushing childhood.",
    content: [
      "Early preparation helps children begin their school journey with confidence, curiosity, and excitement. By developing foundational skills and positive habits, children feel ready to explore, learn, and belong.",
      "A supportive start encourages independence, emotional resilience, and a love for learning, setting the stage for long-term academic and personal success.",
      "A nurturing environment allows children to feel safe while discovering new routines. Through structured activities, play, and gentle guidance, they practice communication, sharing, and self-help skills that make the first day of school feel familiar rather than frightening.",
      "These early experiences help children transition smoothly into school life with confidence and enthusiasm. Preparing little learners early is not about extra worksheets — it is about a joyful, confident, and successful beginning.",
    ],
    skills: [
      { title: "Creativity and imagination", body: "Children explore ideas freely with open-ended materials." },
      { title: "Problem-solving", body: "Learning through exploration, trial, and play." },
      { title: "Emotional confidence", body: "A positive, unhurried environment lowers stress." },
      { title: "Conflict resolution", body: "Solving problems calmly with adult coaching." },
    ],
  },
  {
    slug: "building-strong-values",
    title: "Building strong values in early childhood education",
    date: "January 19, 2026",
    author: "Estelle Sipes",
    role: "Curriculum Planner",
    image: "/images/reading.jpg",
    excerpt:
      "Kindness, courage, and care are practiced daily — in the block corner, at snack, and on the garden path.",
    content: [
      "Values are not a poster on the wall. At FSA they are practiced in the small moments: waiting for a turn, repairing a friendship, noticing a classmate who needs help.",
      "Young children build a moral vocabulary when adults name feelings, model repair, and stay nearby during hard moments. We do not expect perfection. We expect practice.",
      "Our studios use picture books, class meetings, and outdoor caretaking — watering plants, greeting the gardener — to make kindness visible and physical.",
    ],
    skills: [
      { title: "Kindness in action", body: "Daily rituals that make care concrete." },
      { title: "Repair, not shame", body: "Conflicts become chances to try again." },
    ],
  },
  {
    slug: "nurturing-through-play",
    title: "Nurturing young minds through playful learning",
    date: "January 19, 2026",
    author: "Meghan Olson",
    role: "Learning Center Instructor",
    image: "/images/blocks.jpg",
    excerpt:
      "Play is not a break from learning. For young children, play is the most serious work they do.",
    content: [
      "Watch a four-year-old in the block corner and you will see engineering, negotiation, storytelling, and stamina. That is the curriculum.",
      "Teachers at FSA prepare the environment, then protect long stretches of uninterrupted play. We document what we notice and use it to plan the next invitation.",
      "Families sometimes worry that play is “just play.” We invite them to sit on the rug and see the literacy, math, and science hiding in plain sight.",
    ],
    skills: [
      { title: "Deep play", body: "Long, protected stretches of child-led work." },
      { title: "Teacher as researcher", body: "Observation guides the next invitation." },
    ],
  },
  {
    slug: "why-social-skills-matter",
    title: "Why social skills matter in early childhood development",
    date: "January 19, 2026",
    author: "Emerson Stanton",
    role: "Early Childhood Educator",
    image: "/images/music.jpg",
    excerpt:
      "Friendship, turn-taking, and reading a room are academic skills in disguise — and they start in preschool.",
    content: [
      "A child who can enter play, share materials, and recover from disappointment is a child ready for any classroom. Social fluency is not extra. It is foundational.",
      "We coach these skills in the moment: “You look like you want a turn. Would you like the words?” Adults stay close, then step back as children grow capable.",
      "Group music, outdoor games, and mixed-age moments give children a wide social practice field, with teachers who know when to intervene and when to wait.",
    ],
    skills: [
      { title: "Coaching in the moment", body: "Language offered at the point of need." },
      { title: "Mixed-age practice", body: "Younger and older children learn from each other." },
    ],
  },
  {
    slug: "creative-art-projects",
    title: "Creative art projects to boost your child’s imagination",
    date: "January 19, 2026",
    author: "Jonathan Deckow",
    role: "Activity Coordinator",
    image: "/images/art.jpg",
    excerpt:
      "Skip the identical crafts. Open-ended materials let children invent, revise, and surprise themselves.",
    content: [
      "At FSA the art studio is a laboratory, not a factory. We offer clay, watercolor, cardboard, and fabric, then get out of the way.",
      "Process-based art builds fine motor control, planning, and the courage to try again when a piece does not go as imagined. Those are academic muscles.",
      "Try this at home: a tray, three materials, and twenty minutes of uninterrupted time. Resist the urge to make it look like something.",
    ],
    skills: [
      { title: "Process over product", body: "The making is the point." },
      { title: "Materials as language", body: "Children say things with paint they cannot yet say in words." },
    ],
  },
  {
    slug: "teaching-responsibility",
    title: "Teaching responsibility to young children through daily tasks",
    date: "January 19, 2026",
    author: "Kellie Walker",
    role: "Toddler Group Teacher",
    image: "/images/outdoor.jpg",
    excerpt:
      "Jobs like watering, sweeping, and setting snack are not chores to children. They are a chance to belong.",
    content: [
      "Young children want to contribute. When we give them real work — not toy work — they stand taller.",
      "Each studio has a job board: line leader, plant helper, snack setter, door holder. Jobs rotate so every child practices competence.",
      "At home, the same idea applies. A low hook for a coat, a cup they can pour, a cloth for spills. Responsibility is a feeling of “I can,” built in tiny repetitions.",
    ],
    skills: [
      { title: "Real work", body: "Jobs that actually matter to the classroom." },
      { title: "Independence", body: "The environment is scaled to small hands." },
    ],
  },
];

export const gallery = [
  { src: "/gallery/485003255_1821626695340631_937012269984703536_n.jpg", alt: "Student life", caption: "Campus activities" },
  { src: "/gallery/485838391_1823860921783875_6328649899520956165_n.jpg", alt: "Student life", caption: "Learning environment" },
  { src: "/gallery/486380123_1121800189959236_5640190311464730090_n.jpg", alt: "Student life", caption: "College experience" },
  { src: "/gallery/campus-1.jpg", alt: "Student life", caption: "Student interaction" },
  { src: "/gallery/campus-2.jpg", alt: "Student life", caption: "Campus events" },
  { src: "/gallery/campus-3.jpg", alt: "Student life", caption: "Extracurriculars" },
];
