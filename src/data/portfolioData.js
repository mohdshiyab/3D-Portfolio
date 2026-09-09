// Portfolio Data for Mohammad Shiyabuddeen
// Single source of truth containing all updated data, links, and assets.

import heroPortrait from '../assets/photos/hero-portrait-feathered.png';
import heroPortraitMobile from '../assets/photos/hero-portrait-mobile.png';
import skillsPortrait from '../assets/photos/skills-portrait-new.png';
import quotePortrait from '../assets/photos/quote-portrait.jpg';
import workspacePortrait from '../assets/photos/workspace-portrait.jpg';

import srinathonCert from '../assets/hackathons/srinathon-certificate.png';
import srinathonPrizes from '../assets/hackathons/srinathon-prize-envelopes.png';

import aiDocImg from '../assets/projects/AI-Doc.png';
import liveConnectImg from '../assets/projects/liveconnect-thumbnail.png';
import crowdFundingImg from '../assets/projects/crowd-funding-thumbnail.png';
import collegeCompassImg from '../assets/projects/college-compass-thumbnail.png';
import nextGenHireImg from '../assets/projects/next-gen-hire-thumbnail.png';
import serviceHubImg from '../assets/projects/service-hub-thumbnail.png';
import inventoryImg from '../assets/projects/inventory-pic.png';
import realEstateImg from '../assets/projects/RealEstate.png';
import botTradingImg from '../assets/projects/Bot-Trading.png';

export const PERSONAL_INFO = {
  name: "Mohammad Shiyabuddeen",
  shortName: "Shiyab",
  title: "Full Stack Software Developer",
  subTitle: "AI & Modern Web Applications",
  location: "Mangalore, Karnataka, India",
  email: "shihabputtur2@gmail.com",
  phone: "+91 7022645986",
  resumeUrl: "/resume/Mohammad_Shiyabuddeen_Resume.pdf",
  liveUrl: "https://shiyab.vercel.app",
  socials: {
    github: "https://github.com/mohdshiyab",
    linkedin: "https://www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b/",
    instagram: "https://www.instagram.com/mohd_shiyab?utm_source=qr",
    twitter: "https://x.com/its_shiyab?s=21",
  },
  status: "Available for Opportunities",
  availability: ["Full-Time", "Internships", "Freelance", "Remote"],
};

export const HERO_DATA = {
  roles: ["DEVELOPER", "DESIGNER", "PROBLEM SOLVER"],
  headline: {
    line1: "Turning Ideas",
    line2Prefix: "Into ",
    line2Highlight: "Real Products",
  },
  bio: "I'm Mohammad Shiyabuddeen, a developer who loves building modern web & mobile applications with a focus on clean design, real-world impact and great user experiences.",
  stats: [
    { value: "10+", label: "Projects Completed" },
    { value: "2+", label: "Years of buildibg product" },
    { value: "100%", label: "Passion for Building" },
  ],
  scriptMotto: "Build Learn Create Repeat",
  taglinePrompt: "Let's build something amazing together.",
  portrait: heroPortrait,
  portraitMobile: heroPortraitMobile,
};

export const ABOUT_DATA = {
  quote: "Good software solves problems. Great software feels effortless.",
  headline: "Architecting Scalable Web & AI Experiences",
  workspacePhoto: workspacePortrait,
  quotePhoto: quotePortrait,
  skillsPhoto: skillsPortrait,
  story: [
    "I am a Full Stack Software Developer with a Bachelor of Engineering in Computer Science from Yenepoya Institute of Technology. My focus is at the intersection of scalable backend systems, real-time applications, and modern AI integrations.",

    "During my MERN internship at SuprMentr Technologies, I engineered responsive full-stack solutions and improved application performance by 25%. As a freelance developer for Evolbiz Technologies (UAE), I redesigned production web platforms, implemented on-page SEO, and optimized system reliability for international audiences.",

    "When I'm not writing clean code, I lead hackathon teams—earning two national-level First Prizes, including at SRINATHON 2.0—and create cinematic visuals through videography and UI/UX design.",

  ],
  metrics: [
    { value: "25%", label: "App Speedup Achieved", context: "SuprMentr Technologies MERN internship" },
    { value: "1st × 2", label: "National Hackathon Wins", context: "SRINATHON 2.0 against 300 teams" },
    { value: "10+", label: "Full Stack & AI Projects", context: "Shipped & Open Sourced" },
  ],
};

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "Next.js 14", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Zustand", "DaisyUI", "HTML5 & CSS3"],
  },
  {
    category: "Backend & Real-Time APIs",
    icon: "Server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io (WebSockets)", "WebRTC (Video/Audio)", "JWT Authentication", "Bcrypt"],
  },
  {
    category: "AI & Voice Integration",
    icon: "Brain",
    skills: ["Google Gemini API", "Vapi AI (Voice Synthesis)", "AssemblyAI (Speech-to-Text)", "Retrieval-Augmented Generation (RAG)"],
  },
  {
    category: "Databases & ORMs",
    icon: "Database",
    skills: ["MongoDB", "Mongoose", "Drizzle ORM", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Cloud Tools",
    icon: "Cloud",
    skills: ["Docker", "Git & GitHub", "Vercel", "Netlify", "AWS (EC2, S3)", "Postman", "CI/CD"],
  },
  {
    category: "Design & Creative",
    icon: "Palette",
    skills: ["Figma (UI/UX)", "Adobe Premiere Pro", "Design Systems", "Prototyping", "Videography"],
  },
];

export const FEATURED_PROJECT = {
  badge: "Featured Capstone & Startup Solution",
  title: "Automated Health Management System",
  tagline: "AI-Powered Healthcare Platform | MERN Stack | Gemini API | Vapi AI | WebRTC",
  description: "An intelligent healthcare ecosystem that combines AI-driven medical consultations, real-time voice synthesis, automated prescription summaries, and secure telemedicine video calls to streamline clinical workflows.",
  image: aiDocImg,
  liveDemo: "https://automated-health-care-pm4k.vercel.app/",
  github: "https://github.com/mohdshiyab/AutomatedHealthCare",
  recognition: "Presented as a startup solution at the K-Tech Startup Incubation Centre, Mangalore, demonstrating AI-driven telemedicine to industry leaders.",
  architecture: [
    { step: "1", title: "Patient Interaction", desc: "User speaks or types symptoms via intuitive interface" },
    { step: "2", title: "AssemblyAI", desc: "Real-time Speech-to-Text processing with high medical term accuracy" },
    { step: "3", title: "Gemini API", desc: "Clinical reasoning engine analyzing symptoms & suggesting precautions" },
    { step: "4", title: "Vapi AI", desc: "Natural voice synthesis responding conversationally to patient" },
    { step: "5", title: "WebRTC Telemedicine", desc: "Secure video calls connecting patients directly to verified doctors" },
  ],
  keyFeatures: [
    "Real-Time AI Doctor (Voice + Text) powered by Gemini API, Vapi AI, and AssemblyAI",
    "Automated AI Medical PDF Report Generation with downloadable summaries",
    "Medicine Reminder System with scheduled alarms and medication tracking",
    "Verified Doctor Consultation with appointment booking, license verification, and reviews",
    "Secure WebRTC Video Consultations with encrypted peer-to-peer streaming",
    "Role-Based Access Control for Patients, Doctors, and Admin verification workflows",
    "Credit-Based Consultation Payment system for seamless transactions",
  ],
  tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Clerk", "Gemini API", "Vapi AI", "AssemblyAI", "WebRTC"],
};

export const PROJECTS_LIST = [
  {
    id: "liveconnect",
    title: "LiveConnect",
    subtitle: "Real-Time Chat & Media Platform",
    category: "Full Stack",
    description: "Responsive real-time messaging application with JWT authentication, persistent chat history, and live online/offline presence tracking. Features Socket.io messaging and Cloudinary media sharing.",
    image: liveConnectImg,
    github: "https://github.com/mohdshiyab/real-time-communication",
    liveDemo: null,
    tags: ["React (Vite)", "Tailwind CSS", "DaisyUI", "Zustand", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    id: "nextgen-hire",
    title: "NextGen-Hire",
    subtitle: "AI-Ready Technical Interview Platform",
    category: "Full Stack",
    description: "Two-sided recruitment platform connecting candidates with senior developers for live technical interviews. Includes collaborative code editor, real-time WebRTC video interviews with screen sharing, and recording.",
    image: nextGenHireImg,
    github: "https://github.com/mohdshiyab/next-gen-hire",
    liveDemo: null,
    tags: ["React.js", "React Router", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io", "JWT"],
  },
  {
    id: "crowdfunding",
    title: "Decentralized Crowdfunding",
    subtitle: "Web3 Ethereum Smart Contracts",
    category: "Web3 & Cloud",
    description: "Web3 crowdfunding platform enabling campaign creation and direct ETH donations. Integrated MetaMask with Solidity smart contracts for real Ethereum blockchain transactions and transparent fund tracking.",
    image: crowdFundingImg,
    github: "https://github.com/mohdshiyab/crowd-funding",
    liveDemo: null,
    tags: ["Solidity", "Ethereum", "MetaMask", "React.js", "Tailwind CSS", "Web3.js"],
  },
  {
    id: "trading-bot",
    title: "Binance Futures Trading Bot",
    subtitle: "Automated Crypto Order Execution",
    category: "AI & Tools",
    description: "Python-based CLI application designed to automate cryptocurrency trading on the Binance USDT-M Futures Testnet. Supports Market, Limit, and Stop-Limit orders with secure API authentication and risk controls.",
    image: botTradingImg,
    github: "https://github.com/mohdshiyab/trading-bot",
    liveDemo: null,
    tags: ["Python", "Binance API", "AsyncIO", "Algorithmic Trading", "Risk Management"],
  },
  {
    id: "college-compass",
    title: "College-Compass",
    subtitle: "Student-Alumni Mentorship Network",
    category: "Full Stack",
    description: "Community platform bridging current engineering students with alumni for mentorship, placement tips, project guidance, and study material exchanges in a collaborative ecosystem.",
    image: collegeCompassImg,
    github: "https://github.com/mohdshiyab/college-compass",
    liveDemo: null,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
  },
  {
    id: "real-estate",
    title: "Real Estate Portal",
    subtitle: "Property Listings & Exploration",
    category: "Full Stack",
    description: "Full-stack property platform built during internship featuring advanced search/filtering, location mapping, JWT auth, and interactive buyer/seller dashboard.",
    image: realEstateImg,
    github: "https://github.com/mohdshiyab/Real-Estate-Project-Internship-",
    liveDemo: null,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: "service-hub",
    title: "Service-Hub",
    subtitle: "Local Services & WebRTC Assistance",
    category: "Full Stack",
    description: "Platform connecting homeowners with verified local service professionals. Features Google Maps location tracking, rating reviews, and integrated WebRTC video calls.",
    image: serviceHubImg,
    github: "https://github.com/mohdshiyab/Service-Hub",
    liveDemo: null,
    tags: ["MERN Stack", "Google Maps API", "WebRTC", "Socket.io"],
  },
  {
    id: "inventory-mgmt",
    title: "Inventory Management System",
    subtitle: "Enterprise Stock & Sales Monitoring",
    category: "Full Stack",
    description: "Full-stack enterprise application designed to streamline product tracking, stock level alerts, and sales analytics with real-time updates and minimal human error.",
    image: inventoryImg,
    github: "https://github.com/mohdshiyab/Inventory-Management-System",
    liveDemo: null,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "State Management"],
  },
];

export const HACKATHONS_DATA = {
  headline: "Proven In High-Stakes Competition",
  subheadline: "Double First Prize Winner at a National 24-Hour Hackathon",
  flagshipEvent: {
    name: "SRINATHON 2.0",
    organizer: "Srinivas Institute of Technology, Mangalore",
    scale: "National 24-Hour Hackathon · ~300 Competing Teams",
    team: "Team ZOCO (Co-Led by Shiyab)",
    quote: "We never saw a loss, just another iteration. We kept pushing, kept building, and that non-stop practice earned us not one, but two victories.",
    wins: [
      {
        theme: "AI Chat Assistant for Mental Wellness",
        sponsor: "Thaniya Technologies",
        badge: "First Prize Winner",
      },
      {
        theme: "Real-Time Queue Management in Hospitals",
        sponsor: "Swizosoft",
        badge: "First Prize Winner",
      },
    ],
    photos: [
      { img: srinathonCert, caption: "Official SRINATHON 2.0 First Prize Certificate" },
      { img: srinathonPrizes, caption: "Double Victory Cash Prize Envelopes" },
    ],
  },
  otherHonors: [
    {
      title: "First Prize – UI/UX Design",
      event: "YENSPECTRUM 2024",
      org: "Yenepoya Institute of Technology",
      desc: "Awarded 1st place in UI/UX Design competition for creative interface prototyping and user-centric workflows.",
    },
    {
      title: "Selected – Unfold 2024",
      event: "Unfold 2024",
      org: "Asia's Largest Web3 Hackathon",
      desc: "Selected to compete among premier Web3 innovators across the continent.",
    },
    {
      title: "2nd Place – Startup Pitch",
      event: "21st ISTE Karnataka State Convention 2025",
      org: "ISTE Karnataka",
      desc: "Secured runner-up in startup solution pitching for scalable technological innovation.",
    },
  ],
};

export const EXPERIENCE_DATA = [
  {
    role: "Freelance Web Developer & UI/UX Designer",
    company: "Evolbiz Technologies",
    location: "UAE · Remote",
    duration: "Jul 2026",
    bullets: [
      "Redesigned and enhanced the company website with a modern, responsive UI to improve user experience.",
      "Improved on-page SEO through metadata, page structure, and performance optimizations to increase search visibility.",
      "Developed and maintained backend functionality to support website features and improve reliability.",
      "Collaborated directly with international stakeholders to gather requirements, implement changes, and deliver on schedule.",
    ],
  },
  {
    role: "Full Stack Web Development Intern (MERN)",
    company: "SuprMentr Technologies Pvt Ltd",
    location: "Remote",
    duration: "Jan 2026 – Apr 2026",
    bullets: [
      "Built a full-stack real estate platform (React, Tailwind, Node.js, Express, MongoDB) with property listings, search/filtering, JWT authentication, and responsive user dashboards.",
      "Optimized React components and state handling, improving application responsiveness by 25%.",
      "Collaborated across engineering teams using Git version control and Agile workflows to deliver capstone projects.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Yenepoya Institute of Technology",
    duration: "Nov 2022 – Jul 2026",
    status: "Graduating 2026",
  },
  {
    degree: "Pre-University Course (PCMC)",
    institution: "St. Philomena Pre-University College",
    duration: "Mar 2020 – Apr 2022",
    status: "Completed",
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    badge: "Cloud Architecture",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Aug 2025",
    badge: "AI & Machine Learning",
  },
  {
    title: "RDBMS PostgreSQL Training",
    issuer: "Indian Institute of Technology, Bombay",
    date: "Nov 2025",
    badge: "Relational Databases",
  },
  {
    title: "AWS & React: Auto-Scaling E-Commerce App",
    issuer: "Udemy",
    date: "Aug 2024",
    badge: "AWS & Load Balancing",
  },
];

export const TESTIMONIAL = {
  quote: "I've seen your projects, and I genuinely like your work. You have good potential. Let's work together to refine it further and take it to the real market in the future.",
  author: "Founder",
  organization: "Evolbiz Technologies",
};
