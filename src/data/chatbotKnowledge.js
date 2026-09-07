// Chatbot Knowledge Base for Mohammad Shiyabuddeen
// Single source of truth for the conversational portfolio assistant.
// Answers inquiries with 100% accuracy based on his verified background,
// projects, skills, education, hackathons, and career goals.

import {
  PERSONAL_INFO,
  ABOUT_DATA,
  SKILLS_DATA,
  FEATURED_PROJECT,
  PROJECTS_LIST,
  HACKATHONS_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  TESTIMONIAL,
} from './portfolioData';

// --- Helper Formatters ---

const formatSkills = () =>
  SKILLS_DATA.map((cat) => `• ${cat.category}: ${cat.skills.join(', ')}`).join('\n');

const formatProjectsList = () => {
  const items = [
    '• Automated Health Management System — AI Doctor, Vapi Voice, Gemini API, WebRTC, Medicine Alarms',
    '• Service-Hub — MERN on-demand home services with Google Maps & WebRTC video calls',
    '• LiveConnect — Real-time chat & media platform with Socket.io, JWT & Cloudinary',
    '• NextGen-Hire — Technical interview platform with collaborative editor & WebRTC video',
    '• TaskFlow — End-to-end task workflow application built for practical production readiness',
    '• Decentralized Crowdfunding — Web3 Ethereum smart contracts & MetaMask dApp',
    '• Binance Futures Trading Bot — Python CLI bot with automated risk management',
    '• College-Compass — Student-alumni mentorship & guidance network',
    '• Real Estate Portal — Full-stack property discovery platform with JWT auth',
  ];
  return items.join('\n');
};

const formatFeaturedHealth = () =>
  `🏥 **AI-Powered Automated Health Management System** (Featured Capstone):\n\n` +
  `An end-to-end healthcare ecosystem combining AI consultation, real-time voice synthesis, automated prescriptions, and telemedicine.\n\n` +
  `**Core Features:**\n` +
  `• **Real-Time AI Doctor**: Voice & text consultation powered by Google Gemini API, Vapi AI (voice synthesis), and AssemblyAI (speech-to-text).\n` +
  `• **Automated Medical Reports**: Generates downloadable AI-summarized clinical PDF reports.\n` +
  `• **Medicine Reminder System**: Scheduled alarms and medication schedule tracking.\n` +
  `• **Real Doctor Consultations**: Doctor license verification, availability scheduling, appointment booking, and encrypted WebRTC video calls.\n` +
  `• **Role-Based Workflows**: Patients, verified Doctors, and Admin verification dashboards.\n\n` +
  `**Stack**: React, Next.js, Node.js, Express, MongoDB, Drizzle ORM, Clerk Auth, WebRTC, Docker, AWS, Vercel.\n` +
  `⭐ Presented as a startup solution at the K-Tech Startup Incubation Centre, Mangalore.`;

const formatServiceHub = () =>
  `🛠️ **Service-Hub (On-Demand Home Services Platform)**:\n\n` +
  `A full-stack MERN platform connecting homeowners directly with verified local service professionals.\n\n` +
  `**Key Highlights:**\n` +
  `• Two-sided roles: Customers and Service Providers with secure JWT authentication.\n` +
  `• Service discovery with category filtering and transparent ratings/feedback.\n` +
  `• Google Maps API integration for live service tracking and ETA calculations.\n` +
  `• Integrated WebRTC video calling for remote diagnostic assistance before in-person visits.\n\n` +
  `**Stack**: React, Node.js, Express.js, MongoDB, Tailwind CSS, Google Maps API, WebRTC, Socket.io.`;

const formatTaskFlow = () =>
  `📋 **TaskFlow**:\n\n` +
  `A production-oriented task workflow application focused on clean architectural discipline, practical end-to-end completion, and submission readiness without unnecessary technical churn. Demonstrates full-stack CRUD, state management, and reliable responsive UI.`;

const formatTinyTale = () =>
  `🎬 **TinyTale.baby (Creative AI Video Content)**:\n\n` +
  `Mohammad has engineered high-detail AI-generated short-video content for the kids-focused channel "TinyTale.baby".\n` +
  `• Designs Gemini-ready prompt workflows covering precise scene staging, character consistency, dialogue, camera directions, and storytelling.\n` +
  `• Enforces consistent brand watermarking ("tinytale.baby") and strategic distribution captions with 5 focused hashtags.`;

const formatExperience = () =>
  `💼 **Professional Experience & Internships:**\n\n` +
  `1. **SuprMentr Technologies — MERN Stack Developer Intern**\n` +
  `   • Engineered responsive full-stack features using React, Node.js, and MongoDB.\n` +
  `   • Improved application performance by approximately 25% through query tuning and frontend optimization.\n` +
  `   • Integrated RESTful APIs and improved overall application responsiveness.\n\n` +
  `2. **Evolbiz Technologies (UAE) — Freelance Software Developer**\n` +
  `   • Redesigned production web platforms for international clients.\n` +
  `   • Implemented on-page SEO architectures and optimized system reliability.`;

const formatHackathons = () =>
  `🏆 **Hackathon Leadership & National Victories:**\n\n` +
  `Shiyab has led teams to **two national-level First Prize victories**:\n\n` +
  `1. **SRINATHON 2.0 — 1st Prize Winner (National Level)**\n` +
  `   • Competed against 300+ engineering teams nationwide.\n` +
  `   • Led architecture and full-stack development of innovative real-time AI solutions.\n\n` +
  `2. **YENSPECTRUM 2024 — 1st Place (UI/UX Category)**\n` +
  `   • Yenepoya Institute of Technology (29 November 2024).\n` +
  `   • Recognized for top-tier visual hierarchy, interaction design, and design systems.\n\n` +
  `Also secured Top 10 Finalist honors at Sahyadri College of Engineering.`;

const formatEducation = () =>
  `🎓 **Education:**\n\n` +
  `• **Bachelor of Engineering (B.E.) in Computer Science**\n` +
  `• **Institution**: Yenepoya Institute of Technology, Mangalore, Karnataka\n` +
  `• **Focus**: Data Structures & Algorithms, Scalable Backend Systems, Web Engineering, AI & Real-Time Networks.`;

const formatContact = () =>
  `📫 **Get in Touch with Mohammad Shiyabuddeen:**\n\n` +
  `• **Email**: ${PERSONAL_INFO.email}\n` +
  `• **Phone**: ${PERSONAL_INFO.phone}\n` +
  `• **Location**: ${PERSONAL_INFO.location} (Open to Bangalore office roles & Remote)\n` +
  `• **Status**: ${PERSONAL_INFO.status} (${PERSONAL_INFO.availability.join(', ')})\n` +
  `• **Portfolio**: https://shiyab.vercel.app\n` +
  `• **LinkedIn**: linkedin.com/in/mohammad-shiyabuddeen-4b183724b\n` +
  `• **GitHub**: github.com/mohdshiyab`;

// Action buttons helpers
const contactActions = () => [
  { label: 'Email Shiyab', href: `mailto:${PERSONAL_INFO.email}` },
  { label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin },
  { label: 'GitHub', href: PERSONAL_INFO.socials.github },
  { label: 'Download Résumé', href: PERSONAL_INFO.resumeUrl },
];

const projectActions = () => [
  { label: 'GitHub Repositories', href: PERSONAL_INFO.socials.github },
  { label: 'Featured Health Demo', href: FEATURED_PROJECT.liveDemo },
  { label: 'Get in Touch', href: `mailto:${PERSONAL_INFO.email}` },
];

const resumeActions = () => [
  { label: 'Download Résumé (PDF)', href: PERSONAL_INFO.resumeUrl },
  { label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin },
];

export const SUGGESTED_QUESTIONS = [
  'Tell me about your background',
  'Tell me about the AI Health project',
  'Tell me about Service-Hub',
  'What are your technical skills?',
  'Any hackathon wins?',
  'What roles are you looking for?',
];

// --- Comprehensive Topics Covering All 32 Profile Sections ---

const TOPICS = [
  // 1. Identity, Bio, About
  {
    id: 'about',
    keywords: [
      'who are you', 'who is', 'about shiyab', 'about you', 'introduce', 'biography', 'bio',
      'tell me about yourself', 'background', 'profile', 'shihab', 'overview'
    ],
    response: () =>
      `I am a Full Stack Software Developer with a Bachelor of Engineering in Computer Science from Yenepoya Institute of Technology. My focus is at the intersection of scalable backend systems, real-time applications, and modern AI integrations.\n\n` +
      `I have built end-to-end platforms including an AI-powered healthcare ecosystem and real-time communication systems, completed a MERN internship with 25% measured performance gains at SuprMentr, delivered production freelance platforms for Evolbiz (UAE), and won two national-level hackathons including SRINATHON 2.0.`,
    actions: resumeActions,
  },

  // 2. AI Health Management System / AI Doctor
  {
    id: 'ai-health',
    keywords: [
      'health', 'doctor', 'medical', 'hospital', 'telemedicine', 'automated health', 'vapi',
      'assemblyai', 'gemini api', 'ai doctor', 'medicine reminder', 'prescription', 'consultation'
    ],
    response: () => formatFeaturedHealth(),
    actions: () => [
      { label: 'Live Healthcare Demo', href: FEATURED_PROJECT.liveDemo },
      { label: 'Healthcare GitHub', href: FEATURED_PROJECT.github },
    ],
  },

  // 3. Service-Hub Project
  {
    id: 'service-hub',
    keywords: [
      'service hub', 'servicehub', 'home service', 'home-services', 'handyman', 'maps',
      'google maps', 'provider', 'customer platform', 'local services'
    ],
    response: () => formatServiceHub(),
    actions: () => [
      { label: 'Service-Hub GitHub', href: 'https://github.com/mohdshiyab/Service-Hub' },
    ],
  },

  // 4. TaskFlow Project
  {
    id: 'taskflow',
    keywords: ['taskflow', 'task flow', 'task management', 'todo app', 'submission ready'],
    response: () => formatTaskFlow(),
    actions: projectActions,
  },

  // 5. TinyTale.baby Content Creation
  {
    id: 'tinytale',
    keywords: [
      'tinytale', 'tiny tale', 'baby channel', 'video prompt', 'short video', 'kids content',
      'video generation', 'watermark'
    ],
    response: () => formatTinyTale(),
  },

  // 6. All Projects Overview
  {
    id: 'projects',
    keywords: [
      'projects', 'portfolio projects', 'what did you build', 'what have you built',
      'applications', 'github projects', 'shipped apps', 'work samples'
    ],
    response: () =>
      `Here are the key applications Mohammad has designed and engineered:\n\n${formatProjectsList()}\n\nAll source code is available on his GitHub.`,
    actions: projectActions,
  },

  // 7. Experience / Internships / Freelance
  {
    id: 'experience',
    keywords: [
      'experience', 'work experience', 'internship', 'intern', 'suprmentr', 'evolbiz',
      'freelance', 'job history', 'company', 'client', 'performance improvement', '25%'
    ],
    response: () => formatExperience(),
    actions: resumeActions,
  },

  // 8. Hackathons & Achievements
  {
    id: 'hackathons',
    keywords: [
      'hackathon', 'hackathons', 'srinathon', 'yenspectrum', 'first prize', '1st place',
      'awards', 'achievements', 'competitions', 'trophy', 'national level'
    ],
    response: () => formatHackathons(),
  },

  // 9. Education
  {
    id: 'education',
    keywords: [
      'education', 'college', 'university', 'degree', 'yenepoya', 'institute of technology',
      'cs engineering', 'computer science degree', 'graduation', 'academic', 'studies'
    ],
    response: () => formatEducation(),
  },

  // 10. Technical Skills (Comprehensive)
  {
    id: 'skills',
    keywords: [
      'skill', 'skills', 'tech stack', 'technologies', 'what tech', 'stack', 'frameworks',
      'libraries', 'tools', 'languages'
    ],
    response: () =>
      `Here is Mohammad's complete verified technical stack:\n\n${formatSkills()}`,
  },

  // 11. Frontend Development (React / Next.js / Tailwind)
  {
    id: 'frontend',
    keywords: [
      'frontend', 'front end', 'react', 'next.js', 'nextjs', 'tailwind', 'css', 'html',
      'redux', 'zustand', 'responsive', 'ui development'
    ],
    response: () =>
      `💻 **Frontend Architecture & React / Next.js:**\n\n` +
      `Mohammad builds modular, accessible, and high-performance interfaces from scratch:\n` +
      `• **Frameworks**: React.js, Next.js 14 (App Router), TypeScript, modern JavaScript (ES6+).\n` +
      `• **Styling & UI**: Tailwind CSS, DaisyUI, CSS3 animations, Lucide icons, responsive mobile-first layouts.\n` +
      `• **State & Data**: Redux Toolkit, Zustand, Context API, optimistic UI updates, resilient error/loading states.\n` +
      `• **Integration**: Direct REST API integration, WebSocket subscriptions, and WebRTC video rendering.`,
  },

  // 12. Backend Development & REST APIs
  {
    id: 'backend',
    keywords: [
      'backend', 'back end', 'node', 'nodejs', 'node.js', 'express', 'express.js',
      'rest api', 'apis', 'restful', 'server', 'authentication', 'jwt', 'auth'
    ],
    response: () =>
      `⚙️ **Backend Engineering & REST APIs:**\n\n` +
      `Mohammad specializes in designing scalable, secure backend systems:\n` +
      `• **Frameworks**: Node.js & Express.js for clean RESTful microservices and monoliths.\n` +
      `• **Authentication**: Secure JWT tokens, Bcrypt password hashing, role-based access control (RBAC), and Clerk OAuth.\n` +
      `• **Real-Time Communication**: Socket.io for persistent bidirectional messaging and WebRTC for peer-to-peer video/audio calls.\n` +
      `• **Reliability**: Robust error-handling middleware, request validation schemas, and rate-limiting.`,
  },

  // 13. Databases (MongoDB & SQL)
  {
    id: 'databases',
    keywords: [
      'database', 'databases', 'mongodb', 'mongoose', 'sql', 'mysql', 'postgresql',
      'postgres', 'drizzle', 'orm', 'queries', 'aggregation', 'schema'
    ],
    response: () =>
      `🗄️ **Databases & ORMs:**\n\n` +
      `• **MongoDB**: Primary production database. Experienced in schema modeling with Mongoose, complex aggregation pipelines, indexing, and CRUD optimization.\n` +
      `• **SQL & Relational Databases**: Solid grounding in PostgreSQL and MySQL fundamentals—joins, indexing, transactions, filtering, and normalization.\n` +
      `• **ORMs**: Hands-on experience with Drizzle ORM for type-safe database access.`,
  },

  // 14. Programming Languages & Upfront Honesty on Go
  {
    id: 'languages',
    keywords: [
      'programming language', 'languages', 'java', 'python', 'javascript', 'typescript',
      'golang', 'go language', 'go developer'
    ],
    response: () =>
      `📝 **Programming Languages:**\n\n` +
      `• **JavaScript & TypeScript**: Strongest practical and production expertise (MERN, Next.js, full-stack).\n` +
      `• **Java**: Strong understanding of OOP, exception handling, collections, and backend development principles.\n` +
      `• **Python**: Experienced in API automation, scripting, and CLI bot development (e.g. Binance Futures Trading Bot).\n` +
      `• **Honesty on Go**: His primary backend experience is Node.js/Express rather than Go; he does not falsely claim production Go experience.`,
  },

  // 15. Data Structures & Algorithms (DSA)
  {
    id: 'dsa',
    keywords: [
      'dsa', 'data structures', 'algorithms', 'problem solving', 'leetcode', 'trees',
      'linked list', 'sorting', 'searching', 'stacks', 'queues'
    ],
    response: () =>
      `🧠 **Data Structures & Algorithms (DSA):**\n\n` +
      `Mohammad has a strong foundational understanding of:\n` +
      `• Arrays, Strings, Linked Lists, Stacks, Queues, Binary Trees, Searching, and Sorting algorithms.\n` +
      `• His primary strength lies in applying algorithmic thinking to optimize real-world software—such as boosting application performance by 25% at SuprMentr.`,
  },

  // 16. AI & Voice Engineering
  {
    id: 'ai-voice',
    keywords: [
      'ai', 'voice ai', 'artificial intelligence', 'gemini', 'gemini api', 'llm', 'vapi',
      'assemblyai', 'speech to text', 'voice synthesis', 'rag'
    ],
    response: () =>
      `🤖 **AI & Voice Integration:**\n\n` +
      `Shiyab actively builds production applications integrating modern AI technologies:\n` +
      `• **Google Gemini API**: Clinical reasoning engines, automatic consultation summaries, and intelligent prompt pipelines.\n` +
      `• **Vapi AI**: Conversational voice synthesis allowing natural spoken dialogue with AI agents.\n` +
      `• **AssemblyAI**: Real-time speech-to-text processing with high medical terminology accuracy.\n` +
      `• **RAG & Context Windows**: Structuring application context for reliable generative responses.`,
  },

  // 17. Real-Time Communication & WebRTC
  {
    id: 'webrtc',
    keywords: [
      'webrtc', 'real time', 'realtime', 'socket.io', 'video call', 'video consultation',
      'audio call', 'peer to peer', 'streaming'
    ],
    response: () =>
      `📡 **Real-Time Communication & WebRTC:**\n\n` +
      `Mohammad has implemented real-time infrastructure across multiple platforms:\n` +
      `• **WebRTC**: Peer-to-peer encrypted telemedicine video consultations in his Healthcare platform, remote diagnostics in Service-Hub, and code-collaboration in NextGen-Hire.\n` +
      `• **Socket.io**: Real-time bidirectional messaging, live user presence indicators, and instant event broadcasting in LiveConnect.`,
  },

  // 18. UI/UX Design & Videography
  {
    id: 'ui-ux',
    keywords: [
      'ui', 'ux', 'design', 'ui/ux', 'figma', 'creative', 'videography', 'video editing',
      'premiere pro', 'visual design', 'cinematic'
    ],
    response: () =>
      `🎨 **UI/UX Design & Visual Creativity:**\n\n` +
      `Mohammad bridges the gap between engineering and aesthetics:\n` +
      `• **1st Place Winner** in UI/UX at YENSPECTRUM 2024.\n` +
      `• Proficient in **Figma** for wireframing, interactive prototyping, and design systems.\n` +
      `• Experienced in **Adobe Premiere Pro** for videography and cinematic visual storytelling.`,
  },

  // 19. Cloud, DevOps & Tools
  {
    id: 'devops',
    keywords: [
      'devops', 'docker', 'aws', 'cloud', 'vercel', 'git', 'github', 'ci/cd', 'deployment',
      'hosting', 'postman'
    ],
    response: () =>
      `☁️ **Cloud Infrastructure & DevOps:**\n\n` +
      `• **Containerization**: Docker for creating consistent, portable development and production environments.\n` +
      `• **Cloud Services**: AWS (EC2, S3), Vercel, Netlify, and Firebase for serverless deployments.\n` +
      `• **Version Control & CI/CD**: Git, GitHub workflows, and Postman for API testing.`,
  },

  // 20. Career Goals & Target Roles
  {
    id: 'career-goals',
    keywords: [
      'roles', 'targeting', 'career goal', 'job', 'seeking', 'position', 'hire', 'opportunity',
      'bangalore', 'relocate', 'work from office', 'wfo', 'remote', 'open to'
    ],
    response: () =>
      `🎯 **Target Roles & Career Focus:**\n\n` +
      `Mohammad is actively seeking software engineering opportunities in:\n` +
      `• Full Stack Developer\n` +
      `• Backend Developer (Node.js / Express / Java)\n` +
      `• Software Developer / Software Engineer\n` +
      `• React / Next.js Developer\n` +
      `• AI / Full Stack Developer\n\n` +
      `📍 **Location**: Based in Mangalore, India. **Actively open to full-time work-from-office roles in Bangalore, hybrid, or remote positions.**`,
    actions: contactActions,
  },

  // 21. "Why Should We Hire You?" / Key Differentiators
  {
    id: 'why-hire',
    keywords: [
      'why hire', 'why should we hire', 'stand out', 'differentiator', 'strengths',
      'best qualities', 'what makes you unique', 'value'
    ],
    response: () =>
      `⭐ **Key Differentiators:**\n\n` +
      `1. **Full-Stack + AI Depth**: Experienced in modern MERN/Next.js combined with live AI & Voice integrations (Gemini, Vapi, AssemblyAI).\n` +
      `2. **Real-World Impact**: Proven 25% application performance gain at SuprMentr and production platform redesigns at Evolbiz (UAE).\n` +
      `3. **Hackathon Champion**: Led teams to two national-level 1st Prize victories (including SRINATHON 2.0 against 300+ teams).\n` +
      `4. **Real-Time Systems Experience**: Hands-on implementation of WebRTC peer-to-peer video streaming and Socket.io.\n` +
      `5. **Design Sensibility**: 1st Place in UI/UX at YENSPECTRUM 2024—writes clean backend code without sacrificing user experience.`,
    actions: resumeActions,
  },

  // 22. AI Usage Philosophy
  {
    id: 'ai-usage',
    keywords: [
      'ai usage', 'did you use ai', 'ai assistance', 'chatgpt', 'copilot', 'ai generated code',
      'code philosophy'
    ],
    response: () =>
      `🤖 **AI Usage Philosophy:**\n\n` +
      `"AI was used as a development aid for brainstorming, debugging, documentation, and reviewing code. I personally designed, implemented, tested, and integrated the core features and remain fully responsible for the delivered codebase."`,
  },

  // 23. Recruiter Applications (Citi, ClearFeed, etc.)
  {
    id: 'applications',
    keywords: ['citi', 'clearfeed', 'questionnaire', 'wellfound', 'interview', 'recruiter'],
    response: () =>
      `Mohammad actively communicates with recruiters and engineering hiring teams (including applications with Citi for Java Backend and ClearFeed via Wellfound), providing clear technical context, verified project demonstrations, and immediate interview availability.`,
    actions: contactActions,
  },

  // 24. Resume & Download
  {
    id: 'resume',
    keywords: ['resume', 'cv', 'download resume', 'pdf', 'curriculum vitae'],
    response: () =>
      `📄 **Mohammad Shiyabuddeen's Résumé:**\n\nYou can view and download his complete, up-to-date resume directly below:`,
    actions: resumeActions,
  },

  // 25. Contact & Socials
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'phone', 'reach', 'get in touch', 'linkedin', 'github', 'message',
      'whatsapp', 'talk to him'
    ],
    response: () => formatContact(),
    actions: contactActions,
  },

  // 26. Greetings & Casual Pleasantries
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup', 'good morning', 'good evening', 'greetings'],
    response: () =>
      `Hello! 👋 I'm Mohammad Shiyabuddeen's portfolio assistant. I can answer any questions about his skills, AI healthcare capstone, Service-Hub project, MERN experience, hackathon wins, or job availability. How can I help you?`,
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'awesome', 'great', 'cool', 'appreciate'],
    response: () =>
      `You're very welcome! If you'd like to discuss an opportunity or project, feel free to reach out to Shiyab directly via email or LinkedIn below.`,
    actions: contactActions,
  },
];

// --- Smart Universal Fallback ---
// When a query does not directly match standard keywords, the bot NEVER gives
// a dead-end "I don't know" answer. Instead, it provides a smart, comprehensive
// answer about Mohammad with helpful context and action buttons.

const getUniversalAnswer = (query) => {
  const q = query.trim();
  return {
    text:
      `Mohammad Shiyabuddeen is a Full Stack Software Developer (B.E. Computer Science from Yenepoya Institute of Technology) specializing in scalable backend systems, MERN/Next.js platforms, and real-time AI solutions.\n\n` +
      `**Quick Highlights:**\n` +
      `• **Flagship Project**: Automated Health Management System (AI Doctor, Gemini, Vapi voice, WebRTC telemedicine).\n` +
      `• **On-Demand Platform**: Service-Hub with Google Maps location tracking and WebRTC.\n` +
      `• **Proven Impact**: Improved app performance by 25% at SuprMentr; delivered production solutions for Evolbiz (UAE).\n` +
      `• **Achievements**: 2x National Hackathon 1st Prize Winner (SRINATHON 2.0 & YENSPECTRUM UI/UX).\n` +
      `• **Availability**: Actively open to Full Stack, Backend (Node/Express/Java), and AI developer roles (Bangalore office or remote).\n\n` +
      `Feel free to ask about his specific skills, projects, or connect directly below!`,
    actions: contactActions(),
  };
};

// Word boundary override for short words to prevent substring collisions
const WORD_BOUNDARY_OVERRIDE = new Set(['java', 'go', 'git', 'aws', 'sql', 'css', 'ui', 'ux', 'dsa', 'api', 'app']);

function scoreTopic(input, topic) {
  let score = 0;
  for (const kw of topic.keywords) {
    const trimmed = kw.trim();
    const isShortSingleWord = !trimmed.includes(' ') && trimmed.length <= 4;

    if (isShortSingleWord || WORD_BOUNDARY_OVERRIDE.has(trimmed)) {
      const pattern = new RegExp(`\\b${trimmed}\\b`, 'i');
      if (pattern.test(input)) score += 3;
    } else if (input.includes(trimmed)) {
      // Multi-word phrases get significantly higher weight for intent precision
      score += trimmed.split(' ').length * 2;
    }
  }
  return score;
}

/**
 * Returns the best answer for any user inquiry.
 * Guarantees a relevant, comprehensive, and non-empty answer every single time.
 * @param {string} userInput
 * @returns {{ text: string, actions: Array<{label: string, href: string}> }}
 */
export function getAnswer(userInput) {
  if (!userInput || !userInput.trim()) {
    return getUniversalAnswer('');
  }

  // Normalize input string
  const normalized = ' ' + userInput.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';

  let best = null;
  let bestScore = 0;

  for (const topic of TOPICS) {
    const s = scoreTopic(normalized, topic);
    if (s > bestScore) {
      bestScore = s;
      best = topic;
    }
  }

  if (best && bestScore >= 2) {
    return {
      text: typeof best.response === 'function' ? best.response() : best.response,
      actions: best.actions ? best.actions() : [],
    };
  }

  // Universal smart fallback - ensures the bot answers no matter what
  return getUniversalAnswer(userInput);
}
