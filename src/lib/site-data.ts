export const siteConfig = {
  name: "ConsultWeb",
  domain: "consultweb.in",
  url: "https://consultweb.in",
  email: "sales@consultweb.in",
  phone: "+91 98765 43210",
  address: "Mumbai, India",
  tagline: "Web products that move businesses forward.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const services = [
  {
    title: "Startup MVP & Proof of Concept",
    shortDescription:
      "Fast, focused product development for early-stage ideas and investor-ready validation.",
    description:
      "We design and build lean MVPs to validate product-market fit, test assumptions quickly, and create a scalable foundation for growth.",
    benefits: [
      "Reduced time to first launch",
      "Clear product validation path",
      "Scalable architecture for future growth",
    ],
    deliverables: [
      "User flows and UX direction",
      "Clickable prototypes and MVP build",
      "Deployment guidance and iteration roadmap",
    ],
    useCases: ["Startup validation", "Pilot programs", "Investor demos"],
  },
  {
    title: "SaaS Application Development",
    shortDescription:
      "Custom software products that serve customers, automate operations, and unlock recurring revenue.",
    description:
      "ConsultWeb builds SaaS experiences from the user interface through authentication, billing, data models, and operational workflows that support real businesses.",
    benefits: [
      "Streamlined customer journeys",
      "Operational visibility",
      "Long-term product extensibility",
    ],
    deliverables: [
      "Product architecture",
      "Core feature development",
      "Analytics, permissions, and rollout support",
    ],
    useCases: ["Subscription products", "B2B platforms", "Workflow tools"],
  },
  {
    title: "E-commerce Websites",
    shortDescription:
      "Retail experiences built for conversion, trust, and smooth operations.",
    description:
      "Whether you need a SaaS storefront or a bespoke commerce platform, we design online sales experiences that match your business model and operational processes.",
    benefits: [
      "Improved customer conversion",
      "Flexible catalogs and pricing",
      "Clear operational workflows",
    ],
    deliverables: [
      "Storefront design and implementation",
      "Product and inventory flows",
      "Checkout and fulfillment integrations",
    ],
    useCases: ["Retail launches", "D2C brands", "B2B catalogs"],
  },
  {
    title: "Appointment & Reservation Systems",
    shortDescription:
      "Booking experiences that reduce friction and keep your calendar running smoothly.",
    description:
      "We create scheduling systems for clinics, coaches, service providers, and teams that need reliable booking workflows across time zones and rules.",
    benefits: [
      "Lower admin overhead",
      "Better customer experience",
      "Clear scheduling and reminders",
    ],
    deliverables: [
      "Booking workflows and calendar logic",
      "Customer-facing scheduling experience",
      "Notifications and staff management tools",
    ],
    useCases: ["Clinics", "Salons", "Consultancy booking"],
  },
  {
    title: "Custom Web Apps & Dashboards",
    shortDescription:
      "Operational platforms that connect teams, data, and decisions in one place.",
    description:
      "From CRMs and admin dashboards to internal tools and customer portals, we build tailored systems for businesses that need more than a template.",
    benefits: [
      "Better operational visibility",
      "Reduced manual work",
      "Greater team productivity",
    ],
    deliverables: [
      "Custom dashboard design",
      "Role-based access and reporting",
      "API-backed data workflows",
    ],
    useCases: ["CRMs", "Admin tools", "Customer portals"],
  },
  {
    title: "Business Automation & API Integrations",
    shortDescription:
      "Connect your tools, data, and processes into a coherent operating system.",
    description:
      "We connect your stack with reliable integrations to reduce manual work, sync customer data, and create consistent workflows across services and systems.",
    benefits: [
      "Fewer manual tasks",
      "More reliable data flow",
      "Faster business decision-making",
    ],
    deliverables: [
      "System mapping and architecture",
      "Automations and integration builds",
      "Monitoring and support guidance",
    ],
    useCases: ["CRM syncing", "Payments", "Marketing tools"],
  },
  {
    title: "Business Websites & Landing Pages",
    shortDescription:
      "Professional digital presence designed to communicate value and convert demand.",
    description:
      "We create polished business websites and conversion-focused landing pages that clearly present your offer and support your next phase of growth.",
    benefits: [
      "Stronger brand positioning",
      "Clear messaging and conversions",
      "Responsive experiences across devices",
    ],
    deliverables: [
      "Website strategy and messaging",
      "Responsive UI implementation",
      "Launch support and optimization",
    ],
    useCases: ["Agency sites", "Service websites", "Campaign pages"],
  },
  {
    title: "Marketplaces & Subscription Platforms",
    shortDescription:
      "Scalable transaction systems for multi-vendor, membership, or recurring revenue models.",
    description:
      "For digital commerce and service ecosystems, we build platforms that support vendor onboarding, subscriptions, multi-role access, and operational scale.",
    benefits: [
      "Support for growth and complexity",
      "Clear user segmentation and roles",
      "Revenue model flexibility",
    ],
    deliverables: [
      "Marketplace architecture",
      "Vendor and customer accounts",
      "Billing and subscription workflows",
    ],
    useCases: ["Marketplaces", "Membership portals", "B2B platforms"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We understand your goals, constraints, users, and the practical outcomes your product needs to support.",
  },
  {
    title: "Build",
    description: "We turn the plan into a well-structured product with clear priorities, strong UX, and reliable engineering.",
  },
  {
    title: "Launch",
    description: "We validate the experience, ensure deployment readiness, and support a clean handoff to your business operations.",
  },
];

export const whyChoose = [
  "Business-first thinking with practical product strategy",
  "Clean, scalable engineering built for long-term maintainability",
  "Transparent communication and clear milestones",
  "Interfaces that feel premium without sacrificing performance",
];

export const faqs = [
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "Yes. We help early-stage teams validate ideas and also support established businesses with internal tools, digital storefronts, and service automation.",
  },
  {
    question: "Can you build custom platforms beyond templates?",
    answer:
      "Absolutely. We regularly build custom web applications, dashboards, portals, integrations, and product experiences tailored to the business need.",
  },
  {
    question: "What is the typical project engagement model?",
    answer:
      "It depends on scope, complexity, and timeline. We commonly work in a discovery phase followed by design and build, with regular checkpoints and iteration.",
  },
  {
    question: "Do you help with deployment and launch support?",
    answer:
      "Yes. We can support implementation planning, deployment readiness, and post-launch refinement to make the product easier to maintain and grow.",
  },
];

export const featuredProjects = [
  {
    title: "LumaFlow CRM",
    description:
      "A custom client operations dashboard for a growing service business to manage leads, tasks, and follow-ups from a single interface.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    label: "Demo Project",
  },
  {
    title: "Northstar Commerce",
    description:
      "A conversion-focused storefront and catalog experience for a modern home goods brand with layered product and ordering flows.",
    stack: ["Shopify", "React", "UX Design"],
    label: "Demo Project",
  },
  {
    title: "Harbor Booking",
    description:
      "An appointment booking platform with calendar logic, staff scheduling, and automated reminders for service operations.",
    stack: ["Next.js", "Stripe", "API Integrations"],
    label: "Demo Project",
  },
];

export const comparisonRows = [
  {
    label: "Best for",
    custom: "Unique operations, complex workflows, custom logic",
    saas: "Fast setup and standard business processes",
  },
  {
    label: "Flexibility",
    custom: "High, tailored to exact requirements",
    saas: "Moderate, limited by platform conventions",
  },
  {
    label: "Ownership",
    custom: "Full control over product and data flow",
    saas: "Shared platform constraints and third-party dependencies",
  },
  {
    label: "Typical fit",
    custom: "MVPs, internal tools, portals, differentiated products",
    saas: "Simple stores, standard booking, straightforward services",
  },
];
