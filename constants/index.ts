import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "icons8-c++-48.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "icons8-python-48.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },

  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/mohd_shiyab?utm_source=qr",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/mohdshiyab",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Material UI",
  //   image: "mui.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  // {
  //   skill_name: "Firebase",
  //   image: "firebase.png",
  //   width: 55,
  //   height: 55,
  // },
  // {
  //   skill_name: "PostgreSQL",
  //   image: "postgresql.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Prisma",
  //   image: "prisma.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Graphql",
  //   image: "graphql.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Docker",
  //   image: "docker.png",
  //   width: 70,
  //   height: 70,
  // },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Premier pro",
    image: "icons8-adobe-premiere-pro-48.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "LiveConnect",
    description:
      'LiveConnect is a MERN-based messaging app with JWT authentication, live status, and real-time chat via Socket.io. Built with React, Tailwind CSS, Daisy UI, and Zustand, it uses Node.js, Express, MongoDB, and Cloudinary. Features include media uploads, error handling, and deployment entirely on free hosting services.',
    image: "/projects/liveconnect-thumbnail.png",
    link: "https://github.com/mohdshiyab/liveconnect",
  },
  // NOTE: The AI Healthcare Management System is intentionally excluded from
  // this grid — it is showcased separately as the Featured Project (see
  // FEATURED_PROJECT / CASE_STUDIES below) so it doesn't get lost among the
  // other project cards.
  {
    title: "Decentralized Crowdfunding Platform",
    description:
      'Developed a Web3 crowdfunding platform enabling campaign creation and donations via Ethereum. Integrated MetaMask for blockchain connectivity, with Solidity smart contracts handling real ETH transactions. Built a transparent dashboard to track funds, and designed a modern, responsive UI using React.js and Tailwind CSS for secure, decentralized peer-to-peer support.',
    image: "/projects/crowd-funding-thumbnail.png",
    link: "https://github.com/mohdshiyab/crowd-funding",
  },
  {
    title: "College-Compass",
    description:
      'College Compass is a platform connecting current students with alumni for mentorship, guidance, and knowledge sharing. It enables placement tips, project advice, and shared study materials in one space. Designed to foster collaboration, it bridges experience and learning, making college life smarter, more connected, and resource-rich for every student.',
    image: "/projects/college-compass-thumbnail.png",
    link: "https://github.com/mohdshiyab/college-compass",
  },
  {
    title: "NextGen-Hire",
    description:
      'NextGen-Hire streamlines fresher hiring with a two-sided platform. Companies post requirements, and candidates are matched to senior developers for video-call interviews with a built-in code editor. Interviews are recorded, rated, and reviewed, ensuring transparency. Feedback from seniors helps companies make informed hiring decisions quickly and efficiently.',
    image: "/projects/next-gen-hire-thumbnail.png",
    link: "https://github.com/mohdshiyab/next-gen-hire",
  },
  {
    title: "Service-Hub",
    description:
      'Service-Hub is a MERN-based platform connecting customers with local service providers for home needs. Features include secure logins, service filtering, ratings, feedback, real-time location tracking via Google Maps, and free video calls using WebRTC. Built for transparency and ease, it ensures quick access to trusted, skilled professionals.',
    image: "/projects/service-hub-thumbnail.png",
    link: "https://github.com/mohdshiyab/Service-Hub",
  },
  {
    title: "Inventory-Management-System",
    description:
      'The Inventory Management System is a full-stack web application designed to streamline product tracking, stock management, and sales monitoring for businesses. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides an intuitive interface for managing inventory efficiently, reducing human error, and ensuring real-time updates.',
    image: "/projects/inventory-pic.png",
    link: "https://github.com/mohdshiyab/Inventory-Management-System",
  },
  {
  title: "Real-Estate-Platform",
  description:
    "The Real Estate Platform is a full-stack web application that simplifies property buying, selling, and listing. It enables users to explore properties with real-time location tracking, detailed property information, and an intuitive search experience. Built with modern web technologies, it provides a secure, responsive, and user-friendly platform for both buyers and sellers.",
  image: "/projects/RealEstate.png",
  link: "https://github.com/mohdshiyab/Real-Estate-Project-Internship-",
},
{
  title: "Trading-Bot-Binance-Futures",
  description:
    "The Trading Bot is a Python-based CLI application designed to automate cryptocurrency trading on the Binance USDT-M Futures Testnet. It supports Market, Limit, and Stop-Limit orders with secure API authentication, comprehensive input validation, detailed logging, and a modular architecture for reliable, efficient, and scalable order execution.",
  image: "/projects/Bot-Trading.png",
  link: "https://github.com/mohdshiyab/trading-bot",
},
] as const;

export const EXPERIENCE = [
  {
    year: "2023",
    title: "Freelance Web Developer and Designer",
    company: "Self-Employed",
    location: "Remote",
    duration: "Jan 2023 – Present",
    points: [
      "Collaborated on developing responsive websites using the MERN stack, driving a 15% improvement in client conversion rates and expanding online visibility.",
      "Designed interactive UIs tailored to client needs and improved performance, reducing average load time by 30%.",
      "Partnered with clients to design and deliver solutions that enhanced user engagement.",
    ],
  },
  {
    year: "2026",
    title: "Full Stack Web Development Intern (MERN)",
    company: "SuprMentr Technologies Pvt Ltd",
    location: "Remote",
    duration: "Jan 2026 – Apr 2026",
    points: [
      "Developed full-stack MERN applications with responsive UI and REST API integration.",
      "Improved application performance and usability through optimized components and efficient data handling.",
      "Collaborated using Git and agile workflows to deliver industry-standard capstone projects.",
    ],
  },
  {
    year: "Present",
    title: "Open to Work",
    company: "Full-Time · Internship · Freelance",
    location: "Remote / Hybrid",
    duration: "Available Now",
    points: [
      "Actively looking for full-time, internship, and freelance opportunities as a Full Stack (MERN) Developer.",
      "Currently deepening DevOps and cloud deployment skills to ship production-ready applications end to end.",
    ],
  },
] as const;

export const EDUCATION = [
  {
    institution: "Yenepoya Institute of Technology",
    course: "Bachelor of Engineering in Computer Science",
    duration: "Nov 2022 – Jul 2026",
  },
  {
    institution: "St. Philomena Pre-University College",
    course: "Pre-University Course (PCMC)",
    duration: "Mar 2020 – Apr 2022",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "Winner – SRINATHON 2.0",
    description:
      "Won 2 national hackathons at Srinivas Institute of Technology, SRINATHON 2.0.",
  },
  {
    title: "First Prize – YENSPECTRUM 2024",
    description:
      "First Prize in UI/UX Design (YENSPECTRUM 2024) at Yenepoya Institute of Technology.",
  },
  {
    title: "Selected – Unfold 2024",
    description: "Selected for Unfold 2024, Asia's largest Web3 hackathon.",
  },
  {
    title: "2nd Place – Startup Pitch",
    description:
      "2nd Place, Startup Pitch, 21st ISTE Karnataka State Level Student Convention 2025.",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      // {
      //   name: "YouTube",
      //   icon: FaYoutube,
      //   link: "https://youtube.com",
      // },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/mohdshiyab",
      },
      // {
      //   name: "Discord",
      //   icon: RxDiscordLogo,
      //   link: "https://discord.com",
      // },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/mohd_shiyab?utm_source=qr",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/its_shiyab?s=21",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b",
      },
    ],
  },
  {
    title: "About",
    data: [
      // {
      //   name: "Become Sponsor",
      //   icon: null,
      //   link: "https://youtube.com",
      // },
      // {
      //   name: "Learning about me",
      //   icon: null,
      //   link: "https://example.com",
      // },
    {
  name: "Contact Me",
  icon: null,
  link: "mailto:shihabputtur2@gmail.com",
},
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/mohdshiyab",
};

export const RESUME_LINK = "/resume/Mohammad_Shiyabuddeen_Resume.pdf";

export const HERO_STATS = [
  { value: "5+", label: "Hackathons" },
  { value: "10+", label: "Projects" },
  { value: "1", label: "Internship" },
  { value: "2", label: "Freelance Clients" },
  { value: "3+", label: "Years Coding" },
] as const;

// ---------------------------------------------------------------------------
// Featured Project (shown large, right above the regular projects grid)
// ---------------------------------------------------------------------------
export const FEATURED_PROJECT = {
  badge: "Featured Project",
  title: "Automated Health Management System for Seamless Clinical Workflow",
  tagline: "AI-Powered Healthcare Platform | MERN Stack | AI | WebRTC | Startup Project",
  description:
    "An intelligent healthcare platform that combines AI-powered medical assistance, medication management, and telemedicine to improve healthcare accessibility and streamline clinical workflows. Patients can interact with an AI Doctor using voice or text, receive AI-generated medical reports, schedule medicine reminders, and consult verified doctors through secure video calls.",
  image: "/projects/AI-Doc.png",
  liveDemo: "https://jolly-moxie-c83c07.netlify.app/",
  github: "https://github.com/mohdshiyab/AI-final-year-project",
  caseStudySlug: "health-system",
  problem:
    "Traditional healthcare systems often involve long waiting times, manual appointment booking, limited access to preliminary medical guidance, poor medication adherence, and fragmented patient communication.",
  solution:
    "Built a scalable AI-powered healthcare platform that enables instant AI-assisted consultations, automated medicine reminders, online appointment scheduling, and secure doctor-patient video consultations — all within a unified system.",
  architecture: [
    "Patient",
    "Voice / Text",
    "AssemblyAI (Speech → Text)",
    "Gemini API (AI Processing)",
    "Vapi AI (Text → Voice)",
    "AI Medical Report",
    "Appointment System",
    "WebRTC Video Consultation",
    "Doctor",
  ],
  features: [
    "🤖 Real-Time AI Doctor powered by Gemini API, Vapi AI, and AssemblyAI for voice and text consultations.",
    "📄 AI Medical Report Generation with conversation summaries, symptom analysis, suggested medications, and downloadable PDF reports.",
    "💊 Medicine Reminder System with scheduled alarms and medication tracking.",
    "👨‍⚕️ Verified Doctor Consultation with appointment booking, doctor verification, ratings, and availability management.",
    "🎥 Secure WebRTC Video Calls for one-to-one online consultations.",
    "🛡 Role-Based Access Control for Patients, Doctors, and Admins.",
    "💳 Credit-Based Consultation System for seamless payments between patients and doctors.",
  ],
  techStack: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Drizzle ORM",
    "Gemini API",
    "Vapi AI",
    "AssemblyAI",
    "WebRTC",
    "Clerk Authentication",
    "Docker",
    "AWS",
    "Vercel",
  ],
  recognition:
    "Presented as a startup solution at the K-Tech Startup Incubation Centre, Mangalore, showcasing the potential of AI-driven healthcare and telemedicine to improve patient accessibility and clinical efficiency.",
} as const;

// ---------------------------------------------------------------------------
// Full Case Study content (rendered on /case-study/[slug])
// ---------------------------------------------------------------------------
export const CASE_STUDIES = [
  {
    slug: "health-system",
    title: "Automated Health Management System",
    tagline: "AI-Powered Healthcare Platform | MERN Stack | AI | WebRTC | Startup Project",
    heroImage: "/projects/AI-Doc.png",
    liveDemo: "https://jolly-moxie-c83c07.netlify.app/",
    github: "https://github.com/mohdshiyab/AI-final-year-project",
    overview:
      "The Automated Health Management System is an AI-powered healthcare platform designed to improve accessibility to healthcare services through intelligent virtual consultations, medicine reminders, and secure online doctor appointments. The project was developed as a final-year capstone and later presented at the K-Tech Startup Incubation Centre, Mangalore.",
    problems: [
      "Long waiting times in hospitals",
      "Manual appointment booking",
      "Limited access to doctors in remote areas",
      "Lack of instant medical guidance",
      "Patients forgetting medication schedules",
      "Difficulty maintaining centralized medical records",
    ],
    solution:
      "We designed an AI-powered healthcare platform that combines artificial intelligence, voice technology, telemedicine, and appointment automation into a single ecosystem — letting patients talk to an AI Doctor, receive AI-generated health reports, set medicine reminders, book verified doctors online, and attend secure video consultations.",
    architecture: [
      "Patient",
      "Voice / Text",
      "AssemblyAI (Speech → Text)",
      "Gemini API (AI Processing)",
      "Vapi AI (Text → Voice)",
      "AI Medical Report",
      "Appointment System",
      "WebRTC Video Consultation",
      "Doctor",
    ],
    contributions: [
      "Developing the MERN-based application architecture",
      "Integrating Gemini API for AI conversations",
      "Implementing Vapi AI and AssemblyAI for voice interactions",
      "Building role-based authentication for Patients, Doctors, and Admins",
      "Developing the appointment booking workflow",
      "Implementing WebRTC-based video consultations",
      "Designing responsive dashboards",
      "Integrating AI-generated PDF medical reports",
    ],
    challenges: [
      {
        title: "Real-Time AI Conversation",
        challenge: "Creating natural voice conversations with an AI Doctor.",
        solution:
          "Integrated AssemblyAI for speech recognition, Gemini API for AI responses, and Vapi AI for natural voice synthesis.",
      },
      {
        title: "Doctor Verification",
        challenge: "Preventing fake doctors from joining the platform.",
        solution:
          "Implemented an admin approval workflow where licenses and credentials are manually verified before activation.",
      },
      {
        title: "Appointment Scheduling",
        challenge: "Avoiding double bookings.",
        solution: "Designed a real-time slot management system based on doctor availability.",
      },
      {
        title: "AI Report Generation",
        challenge: "Patients often forget consultation details.",
        solution:
          "Generated downloadable PDF reports containing conversation summaries, symptoms, AI observations, and suggested medications.",
      },
      {
        title: "Video Consultation",
        challenge: "Providing secure online consultations.",
        solution: "Integrated one-to-one WebRTC video calling between patients and doctors.",
      },
    ],
    features: [
      "🤖 AI Doctor (Voice + Text)",
      "📄 AI Medical Reports (PDF)",
      "💊 Medicine Reminder",
      "👨‍⚕️ Verified Doctor Platform",
      "📅 Appointment Booking",
      "🎥 WebRTC Video Calls",
      "🛡 Role-Based Authentication",
      "💳 Credit-Based Consultation System",
    ],
    techStack: {
      Frontend: ["React.js", "Next.js", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB", "Drizzle ORM"],
      AI: ["Gemini API", "Vapi AI", "AssemblyAI"],
      Authentication: ["Clerk"],
      "Real-Time": ["WebRTC"],
      Deployment: ["Docker", "AWS", "Vercel"],
    },
    recognition:
      "The project was presented at the K-Tech Startup Incubation Centre, Mangalore, where the team showcased how AI and telemedicine can improve healthcare accessibility and streamline clinical workflows.",
    results: [
      "AI-powered preliminary health guidance",
      "Reduced manual appointment scheduling",
      "Improved accessibility through online consultations",
      "Centralized patient records and reports",
      "Secure role-based healthcare platform",
      "Scalable MERN architecture with AI integration",
    ],
    lessons: [
      "Building scalable MERN applications",
      "Integrating multiple AI services into one workflow",
      "Implementing secure authentication and authorization",
      "Working with real-time communication using WebRTC",
      "Managing complex multi-role systems",
      "Designing AI-powered user experiences",
      "Collaborating in a team to deliver a production-scale capstone project",
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// Currently Learning
// ---------------------------------------------------------------------------
export const CURRENTLY_LEARNING = [
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "AWS" },
  { name: "CI/CD" },
  { name: "System Design" },
] as const;

// ---------------------------------------------------------------------------
// Certifications (best 6 — full list on LinkedIn)
// ---------------------------------------------------------------------------
export const CERTIFICATIONS_LINK =
  "https://www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b/details/certifications/";

export const CERTIFICATIONS = [
  { name: "AWS" },
  { name: "React" },
  { name: "UI/UX" },
  { name: "Java" },
  { name: "Machine Learning" },
  { name: "Ethical Hacking" },
] as const;

// ---------------------------------------------------------------------------
// Hackathon Gallery
// ---------------------------------------------------------------------------
export const HACKATHON_GALLERY = {
  event: "SRINATHON 2.0",
  subtitle: "24-Hour Hackathon · Srinivas Institute of Technology, Mangalore",
  team: "Team ZOCO",
  quote:
    "We never saw a loss, just another iteration. We kept pushing, kept building, and today, that non-stop practice earned us not one, but two victories.",
  story:
    "Against nearly 300 teams, Team ZOCO achieved a double victory — securing First Prize in two different themes at SRINATHON 2.0, after numerous attempts across various hackathons over the past year.",
  wins: [
    { theme: "AI Chat Assistant for Mental Wellness", sponsor: "Thaniya Technologies" },
    { theme: "Real-Time Queue Management in Hospitals", sponsor: "Swizosoft" },
  ],
  images: {
    certificate: "/hackathons/srinathon-certificate.png",
    prize: "/hackathons/srinathon-prize-envelopes.png",
  },
  hashtags: [
    "HackathonWinner",
    "SRINATHON2.0",
    "AI",
    "MentalWellness",
    "HealthTech",
    "Innovation",
    "TeamWork",
  ],
} as const;

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    quote:
      "I've seen your projects, and I genuinely like your work. You have good potential. Let's work together to refine it further and take it to the real market in the future.",
    name: "Founder",
    role: "EvolBiz",
  },
] as const;

// ---------------------------------------------------------------------------
// Why Hire Me
// ---------------------------------------------------------------------------
export const WHY_HIRE_ME = [
  "MERN Stack Developer",
  "Internship Experience",
  "Freelance Experience",
  "Hackathon Winner",
  "Strong UI/UX Skills",
  "Fast Learner",
] as const;

// ---------------------------------------------------------------------------
// Availability (Contact section)
// ---------------------------------------------------------------------------
export const AVAILABLE_FOR = ["Internships", "Full-Time", "Freelance", "Remote"] as const;

export const CONTACT_INFO = {
  email: "shihabputtur2@gmail.com",
  phone: "+91 7022645986",
  location: "Puttur, Karnataka",
  linkedin: "https://www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b/",
  github: "https://github.com/mohdshiyab",
} as const;
