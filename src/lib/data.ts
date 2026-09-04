export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  long: string;
  features: string[];
  outcomes: string[];
};

// Full service catalog. Only the slugs listed in ACTIVE_SERVICES are shown on
// the site — re-add slugs here when those offerings launch.
const allServices: Service[] = [
  {
    slug: "saas-product-development",
    icon: "Rocket",
    title: "SaaS Product Development",
    short:
      "End-to-end SaaS platforms — from idea validation to a multi-tenant product your customers love.",
    long: "We take SaaS products from concept to launch and beyond. Our team designs multi-tenant architectures, subscription billing, role-based access, analytics, and everything else a modern SaaS business needs — built to scale from your first user to your millionth.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Role-based access control",
      "Usage analytics & dashboards",
      "Onboarding flows",
      "Scalable cloud infrastructure",
    ],
    outcomes: [
      "Faster time-to-market",
      "Lower infrastructure costs",
      "A product that scales with demand",
    ],
  },
  {
    slug: "custom-software-development",
    icon: "Code2",
    title: "Custom Software Development",
    short:
      "Tailor-made software that fits your business processes — not the other way around.",
    long: "Off-the-shelf tools force you to change how you work. We build software around your exact workflows, integrating with the systems you already use, so your team works faster with fewer errors.",
    features: [
      "Requirements discovery workshops",
      "Custom workflow automation",
      "Legacy system modernization",
      "Third-party integrations",
      "Secure data handling",
      "Documentation & training",
    ],
    outcomes: [
      "Software that mirrors your process",
      "Reduced manual work",
      "Full ownership of your product",
    ],
  },
  {
    slug: "web-development",
    icon: "Globe",
    title: "Web Development",
    short:
      "Fast, modern, SEO-friendly web applications built with React and Next.js.",
    long: "From marketing sites to complex web portals, we build responsive, accessible, and lightning-fast web experiences using the modern React ecosystem — optimized for search engines and conversions.",
    features: [
      "React & Next.js applications",
      "Server-side rendering & SEO",
      "Progressive web apps",
      "CMS integration",
      "Performance optimization",
      "Accessibility compliance",
    ],
    outcomes: [
      "Higher search rankings",
      "Better conversion rates",
      "Sub-second page loads",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    short:
      "Cross-platform iOS & Android apps with native performance, built with React Native.",
    long: "One codebase, two platforms. We ship polished mobile apps with offline support, push notifications, and smooth animations — released to both app stores in a fraction of the time of separate native builds.",
    features: [
      "React Native for iOS & Android",
      "Offline-first data sync",
      "Push notifications",
      "App store publishing",
      "Biometric authentication",
      "Crash & analytics monitoring",
    ],
    outcomes: [
      "One codebase, both platforms",
      "Faster releases",
      "Native-feeling UX",
    ],
  },
  {
    slug: "ai-solutions",
    icon: "Brain",
    title: "AI Solutions",
    short:
      "AI-powered features and automation — chatbots, document intelligence, and predictive insights.",
    long: "We integrate large language models and machine learning into real business workflows: intelligent assistants, document processing, recommendation systems, and analytics that turn your data into decisions.",
    features: [
      "LLM-powered assistants & chatbots",
      "Document extraction & summarization",
      "Semantic search & RAG pipelines",
      "Predictive analytics",
      "AI workflow automation",
      "Model evaluation & guardrails",
    ],
    outcomes: [
      "Hours of manual work automated",
      "Faster customer response times",
      "Smarter decisions from your data",
    ],
  },
  {
    slug: "hrms-development",
    icon: "Users",
    title: "HRMS Development",
    short:
      "Complete HR management systems — attendance, leave, payroll, and performance in one place.",
    long: "From attendance tracking with geolocation to automated payroll and salary slips, we build HRMS platforms that remove spreadsheets from HR and give leadership real-time visibility into their workforce.",
    features: [
      "Attendance & geolocation tracking",
      "Leave management workflows",
      "Payroll & salary slip automation",
      "Employee self-service portal",
      "Reports & compliance exports",
      "Multi-company support",
    ],
    outcomes: [
      "Payroll processed in minutes",
      "Zero spreadsheet HR",
      "Happier, self-served employees",
    ],
  },
  {
    slug: "erp-development",
    icon: "Boxes",
    title: "ERP Development",
    short:
      "Unified ERP systems connecting inventory, finance, projects, and operations.",
    long: "We build modular ERP platforms that bring every department onto a single source of truth — inventory, procurement, finance, projects, and reporting — customized to how your business actually runs.",
    features: [
      "Inventory & procurement modules",
      "Finance & invoicing",
      "Project & resource planning",
      "Approval workflows",
      "Custom reporting engine",
      "Role-based dashboards",
    ],
    outcomes: [
      "One source of truth",
      "Faster month-end closing",
      "Visibility across departments",
    ],
  },
  {
    slug: "cloud-applications",
    icon: "Cloud",
    title: "Cloud Applications",
    short:
      "Cloud-native applications on AWS and Azure — resilient, secure, and cost-efficient.",
    long: "We architect and deploy cloud-native systems with automated CI/CD, containerization, monitoring, and autoscaling — so your software stays fast and available while your cloud bill stays predictable.",
    features: [
      "AWS & Azure architecture",
      "Docker & container orchestration",
      "CI/CD pipelines",
      "Auto-scaling & load balancing",
      "Monitoring & alerting",
      "Cost optimization",
    ],
    outcomes: [
      "99.9%+ uptime targets",
      "Deploys in minutes, not days",
      "Lower cloud spend",
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "PenTool",
    title: "UI/UX Design",
    short:
      "Interfaces users love — research-driven design systems, prototypes, and pixel-perfect UI.",
    long: "Design is where trust begins. We run user research, map journeys, prototype rapidly, and deliver polished design systems that make your product intuitive on day one and consistent as it grows.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Responsive & mobile-first layouts",
      "Usability testing",
      "Brand & visual identity",
    ],
    outcomes: [
      "Lower user drop-off",
      "Consistent product experience",
      "Faster developer handoff",
    ],
  },
  {
    slug: "api-development",
    icon: "Braces",
    title: "API Development",
    short:
      "Robust, well-documented REST and GraphQL APIs that power your entire ecosystem.",
    long: "APIs are the backbone of modern software. We design versioned, secure, and thoroughly documented APIs with authentication, rate limiting, and monitoring built in — ready for your web, mobile, and partner integrations.",
    features: [
      "REST & GraphQL design",
      "Authentication & authorization",
      "Rate limiting & caching",
      "OpenAPI documentation",
      "Webhook systems",
      "Versioning & backwards compatibility",
    ],
    outcomes: [
      "One backend, every client",
      "Easy partner integrations",
      "Self-serve developer docs",
    ],
  },
  {
    slug: "automation-solutions",
    icon: "Workflow",
    title: "Automation Solutions",
    short:
      "Business process automation that eliminates repetitive work and human error.",
    long: "We identify the repetitive tasks draining your team's time — data entry, report generation, approvals, notifications — and automate them with reliable, monitored workflows that just run.",
    features: [
      "Workflow & approval automation",
      "Scheduled reports & alerts",
      "Data pipeline automation",
      "Email & notification systems",
      "Integration between tools",
      "Audit trails & logging",
    ],
    outcomes: [
      "Hours saved every week",
      "Fewer manual errors",
      "Processes that never sleep",
    ],
  },
  {
    slug: "maintenance-support",
    icon: "LifeBuoy",
    title: "Maintenance & Support",
    short:
      "Ongoing care for your software — updates, monitoring, fixes, and improvements.",
    long: "Software is never finished. Our support plans keep your systems secure, updated, and improving — with proactive monitoring, fast incident response, and a roadmap of continuous enhancements.",
    features: [
      "Proactive monitoring & alerts",
      "Security patches & updates",
      "Bug fixes with SLAs",
      "Performance tuning",
      "Feature enhancements",
      "Dedicated support channel",
    ],
    outcomes: [
      "Peace of mind",
      "Issues fixed before users notice",
      "Software that keeps improving",
    ],
  },
];

const ACTIVE_SERVICES = [
  "saas-product-development",
  "mobile-app-development",
  "hrms-development",
  "erp-development",
];

export const services: Service[] = ACTIVE_SERVICES.flatMap((slug) => {
  const service = allServices.find((s) => s.slug === slug);
  return service ? [service] : [];
});

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  status?: "in-progress";
  // App screenshots shown in the showcase carousel. Drop images into
  // public/products/<slug>/ and list them here; while the files are missing
  // the UI falls back to the gradient mock window automatically.
  screenshots?: string[];
  features: string[];
  modules: { title: string; desc: string }[];
};

export const products: Product[] = [
  {
    slug: "stafftrack-hrms",
    name: "StaffTrack HRMS",
    tagline: "Your entire HR department, in one app.",
    description:
      "A complete HR management platform covering attendance with geolocation, leave workflows, payroll automation, salary slips, travel expenses, and multi-company administration — on mobile.",
    accent: "from-[#274690] to-[#4F7FFF]",
    screenshots: [
      "/products/stafftrack-hrms/0.png",
      "/products/stafftrack-hrms/1.png",
      "/products/stafftrack-hrms/2.png",
      "/products/stafftrack-hrms/3.png",
      "/products/stafftrack-hrms/4.png",
      "/products/stafftrack-hrms/5.png",
      "/products/stafftrack-hrms/6.png",
    ],
    features: [
      "Geolocation attendance & selfie check-in",
      "Leave management with approval flows",
      "Automated payroll & salary slips",
      "Travel & expense tracking",
      "Holiday calendars & shift settings",
      "Reports, exports & multi-company support",
    ],
    modules: [
      { title: "Attendance", desc: "GPS check-in/out, late marking, and monthly summaries." },
      { title: "Report", desc: "One-click report runs with downloadable report slips." },
      { title: "Leave", desc: "Policies, balances, and multi-level approvals." },
      { title: "Admin Console", desc: "Company-wide settings, roles, and analytics." },
    ],
  },
  {
    slug: "parlour-management-system",
    name: "Glampower",
    tagline: "Total Salon Management App.",
    description:
      "Glampower is a complete salon management app built for Glampower Salon & Spa. It helps salon owners and staff manage everything from client records to billing, bookings, staff, expenses, and business reports — all from a phone or tablet.",
    accent: "from-[#7C3AED] to-[#4F7FFF]",
    screenshots: [
      "/products/parlour-management-system/1.jpeg",
      "/products/parlour-management-system/2.jpeg",
      "/products/parlour-management-system/3.jpeg",
      "/products/parlour-management-system/4.jpeg",
      "/products/parlour-management-system/5.jpeg",
      "/products/parlour-management-system/6.jpeg",
      "/products/parlour-management-system/7.jpeg",
      "/products/parlour-management-system/8.jpeg",
    ],
    features: [
      "Smart Client Alerts",
      "WhatsApp Integration",
      "Live Profit Tracking",
      "Appointment Scheduling and booking",
      "Service reminder detection",
      "Daily, weekly & monthly reports",
    ],
    modules: [
      { title: "Billing", desc: "Full billing with rate card, staff selection, discount, payment type, partial payment tracking, bill sharing on WhatsApp, and bill editing." },
      { title: "Dashboard", desc: "Sales overview (today / week / month), net profit, 6-month chart, staff-wise breakdown, pending payments list, and payment type summary." },
      { title: "Bookings", desc: "Day and week calendar view for client appointments with service selection, status tracking, and one-tap billing when a booking is marked done." },
      { title: "Rate Card Editor", desc: "Full editable Glampower service menu across 11 categories with prices, variants, and per-service reminder intervals — all changeable by the admin anytime." },
    ],
  },
  {
    slug: "mep-project-management",
    name: "MEP Project Management System",
    tagline: "Mechanical, electrical & plumbing projects — under control.",
    description:
      "Purpose-built project management for MEP contractors: site progress tracking, material requests, manpower allocation, drawings, and client billing in one coordinated system.",
    accent: "from-[#0E7490] to-[#10B981]",
    status: "in-progress",
    screenshots: [
      "/products/mep-project-management/1.png",
      "/products/mep-project-management/2.png",
      "/products/mep-project-management/3.png",
    ],
    features: [
      "Project & site progress tracking",
      "Material requests & approvals",
      "Manpower & task allocation",
      "Drawing & document management",
      "Client billing & payment stages",
      "Daily site reports with photos",
    ],
    modules: [
      { title: "Projects", desc: "Milestones, phases, and completion tracking." },
      { title: "Materials", desc: "Request, approve, and track site materials." },
      { title: "Workforce", desc: "Assign teams and track daily manpower." },
      { title: "Billing", desc: "Stage-wise invoicing tied to progress." },
    ],
  },
];

export const whyChoose = [
  {
    icon: "UsersRound",
    title: "Experienced Development Team",
    desc: "Engineers who have shipped SaaS, ERP, and mobile products end-to-end across industries.",
  },
  {
    icon: "Sparkles",
    title: "Modern Technologies",
    desc: "React, Next.js, Node.js, and cloud-native tooling — no legacy stacks, no shortcuts.",
  },
  {
    icon: "Zap",
    title: "Fast Delivery",
    desc: "Agile sprints with working software every week, not surprises at the end.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Architecture",
    desc: "Security reviews, encrypted data, and access control designed in from day one.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Systems",
    desc: "Architecture that handles your growth — from first customer to enterprise scale.",
  },
  {
    icon: "Headset",
    title: "Dedicated Support",
    desc: "A real team on call after launch — monitoring, fixes, and continuous improvement.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your business, users, and goals — and define what success looks like.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Scope, milestones, architecture, and a transparent timeline you can hold us to.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Wireframes to polished, interactive prototypes — validated before a line of code.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Agile sprints with weekly demos, clean code, and continuous integration.",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Automated and manual QA across devices, browsers, and edge cases.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Zero-downtime launches on secure, monitored cloud infrastructure.",
  },
  {
    step: "07",
    title: "Ongoing Support",
    desc: "Monitoring, maintenance, and a roadmap of improvements after launch.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "AWS",
  "Azure",
  "TypeScript",
  "Python",
  "FastAPI",
  "GitHub",
];

export const stats = [
  { value: 4, suffix: "", label: "Core Service Areas" },
  { value: 3, suffix: "", label: "Flagship Products" },
  { value: 7, suffix: "", label: "Step Delivery Process" },
  { value: 100, suffix: "%", label: "Code Ownership for Clients" },
];

export const testimonials = [
  {
    quote:
      "Spereon rebuilt our entire HR process into one app. Payroll that took three days now takes twenty minutes, and our team actually enjoys using it.",
    name: "Rajesh Kumar",
    role: "Operations Director, Manufacturing Group",
  },
  {
    quote:
      "They understood our business before writing any code. The ERP they delivered fits our workflow perfectly — and they were always one message away.",
    name: "Priya Sharma",
    role: "Founder, Retail Chain",
  },
  {
    quote:
      "From design to deployment, the quality felt like working with a much larger firm. Our SaaS launched on time and has scaled without a single hiccup.",
    name: "Ahmed Al-Farsi",
    role: "CEO, Logistics Startup",
  },
  {
    quote:
      "The mobile app they built handles thousands of daily check-ins flawlessly. Their support after launch is what makes them a long-term partner.",
    name: "Sneha Patil",
    role: "HR Head, Services Company",
  },
];

export const faqs = [
  {
    q: "How long does development take?",
    a: "It depends on scope: a focused MVP typically takes 4–8 weeks, while a full product platform runs 3–6 months. After discovery, we give you a milestone-based timeline with weekly demos, so you always know exactly where the project stands.",
  },
  {
    q: "Do you build custom software?",
    a: "Yes — custom software is our core business. We build tailor-made web applications, mobile apps, ERP and HRMS systems, and automation tools designed around your exact workflows, integrated with the tools you already use.",
  },
  {
    q: "Can you maintain existing software?",
    a: "Absolutely. We take over and maintain systems built by other teams — starting with a code and infrastructure audit, then providing monitoring, bug fixes, security updates, and a roadmap of improvements under a support plan.",
  },
  {
    q: "Do you provide cloud deployment?",
    a: "Yes. We deploy and manage applications on AWS, Azure, and other cloud platforms — with CI/CD pipelines, containerization, automated backups, monitoring, and cost optimization included.",
  },
  {
    q: "Can startups work with you?",
    a: "Definitely. We love working with startups — from validating ideas and building MVPs quickly, to scaling the product as you grow. We offer startup-friendly engagement models and can grow the system alongside your funding stages.",
  },
];

export const trustedBy = [
  "TechNova",
  "BuildCorp",
  "MediServe",
  "RetailHub",
  "LogiFleet",
  "EduSpark",
  "FinEdge",
  "AgroLink",
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$2,900",
    unit: "starting at",
    desc: "For startups validating an idea with a focused MVP.",
    features: [
      "MVP scoped in 1 discovery workshop",
      "UI/UX design included",
      "Web or mobile app",
      "4–8 week delivery",
      "30 days post-launch support",
    ],
    highlighted: false,
    cta: "Start Your MVP",
  },
  {
    name: "Growth",
    price: "$7,900",
    unit: "starting at",
    desc: "For businesses building a full product or platform.",
    features: [
      "Full product design & development",
      "Web + mobile applications",
      "API & integrations",
      "Cloud deployment & CI/CD",
      "90 days post-launch support",
      "Dedicated project manager",
    ],
    highlighted: true,
    cta: "Plan Your Product",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "tailored quote",
    desc: "For ERP, HRMS, and large-scale custom systems.",
    features: [
      "Custom ERP / HRMS / SaaS platforms",
      "Multi-team development",
      "Security & compliance reviews",
      "SLA-backed support",
      "On-going enhancement roadmap",
      "Priority response times",
    ],
    highlighted: false,
    cta: "Talk to Us",
  },
];

export const jobs = [
  {
    title: "Full-Stack Developer (React / Node.js)",
    type: "Full-time",
    location: "Remote / Hybrid",
    desc: "Build SaaS products and custom platforms end-to-end with React, Next.js, and Node.js.",
  },
  {
    title: "React Native Developer",
    type: "Full-time",
    location: "Remote / Hybrid",
    desc: "Ship polished cross-platform mobile apps used daily by thousands of employees.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    desc: "Design intuitive interfaces and design systems for SaaS, ERP, and mobile products.",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "On-site",
    desc: "Help businesses discover how custom software can transform their operations.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-custom-hrms-beats-spreadsheets",
    title: "Why a Custom HRMS Beats Spreadsheets Every Time",
    excerpt:
      "Spreadsheets got your HR this far — but attendance errors, payroll delays, and compliance risks grow with your team. Here's when it's time to switch.",
    date: "2026-06-18",
    category: "HRMS",
    readTime: "5 min read",
    content: [
      "Every growing company hits the same wall: the spreadsheet that ran HR at 10 employees becomes a liability at 50. Attendance is disputed, leave balances drift out of sync, and payroll becomes a monthly fire drill.",
      "A purpose-built HRMS replaces that fragility with a single source of truth. Geolocation check-ins remove attendance disputes. Leave policies enforce themselves. Payroll runs from real data instead of copy-pasted cells.",
      "The switch pays for itself fastest in payroll hours saved and compliance risk avoided — most of our clients recover the investment within the first year.",
    ],
  },
  {
    slug: "mvp-in-8-weeks",
    title: "How We Ship Production-Ready MVPs in 8 Weeks",
    excerpt:
      "Speed doesn't have to mean shortcuts. Our sprint structure, scope discipline, and weekly demos keep MVPs fast and solid.",
    date: "2026-05-30",
    category: "Process",
    readTime: "4 min read",
    content: [
      "The biggest MVP killer isn't technology — it's scope. Our discovery workshop ruthlessly separates 'must validate' from 'nice to have', producing a build plan measured in weeks.",
      "From there, weekly sprints each end with a working demo. Stakeholders see real software every Friday, so course corrections happen in days rather than months.",
      "By week eight you have a deployed, monitored product with real users — and a data-informed roadmap for what to build next.",
    ],
  },
];

export const siteConfig = {
  name: "Spereon.codes",
  email: "spereon.code@gmail.com",
  phone: "+91 8432333377",
  address: "Pune, Maharashtra, India",
  social: {
    linkedin: "https://linkedin.com/company/spereon",
    twitter: "https://twitter.com/spereoncodes",
    instagram: "https://www.instagram.com/spereon.codes?igsh=MWR2cDY2eDN4dGs4dw%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1DH8tGCVhb/?mibextid=wwXIfr",
  },
};
