// Chatbot Knowledge Base for Mohammad Shiyabuddeen
// Single source of truth for the conversational portfolio assistant.
// Strictly aligned with his verified background, latest resume, and official knowledge base.

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

// --- Action Buttons Helpers ---
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
  'Tell me about yourself',
  'Tell me about Stellapps internship',
  'Tell me about the AI Health project',
  'What are your technical skills?',
  'Any hackathon wins?',
  'Why should we hire you?',
];

// --- Formatted Responses ---

const formatUniversalSummary = () =>
  `Mohammad Shiyabuddeen (Shiyab) is a Full Stack Developer & Data Engineering Intern based in Bengaluru (Bangalore), Karnataka.\n\n` +
  `**Current Role:**\n` +
  `• **Data Engineering Intern** at Stellapps Technologies (Bengaluru) working on PostgreSQL, SQL optimization, Linux, Pentaho PDI ETL workflows, and cron automation.\n\n` +
  `**Key Projects:**\n` +
  `• **Automated Health Management System (Healix)**: AI Doctor with Gemini API, Vapi voice synthesis, AssemblyAI, and WebRTC video telemedicine.\n` +
  `• **NextGen-Hire**: Technical interview platform with collaborative code editor & WebRTC video.\n` +
  `• **LiveConnect (ChatPulse)**: Real-time messaging platform with Socket.IO, JWT, and Cloudinary.\n\n` +
  `**Achievements & Experience:**\n` +
  `• 2x National 1st Prize Winner at SRINATHON 2.0 against ~300 teams.\n` +
  `• 1st Place in UI/UX Design at YENSPECTRUM 2024.\n` +
  `• MERN internship at SuprMentr (25% responsiveness boost) and freelance web platform delivery at Evolbiz (UAE).\n\n` +
  `**Looking for:** Full Stack Developer, Data Engineering, and Backend/AI roles (Bengaluru office or remote).`;

const formatStellappsExperience = () =>
  `💼 **Data Engineering Intern — Stellapps Technologies Private Limited**\n` +
  `📍 Bengaluru, India · Oct 2026 – Present\n\n` +
  `**Core Responsibilities & Impact:**\n` +
  `• Engineered and maintained production PostgreSQL database schemas, tables, constraints, indexing, and relational data models on Linux servers.\n` +
  `• Authored optimized SQL queries using multi-table JOINs, filtering, sorting, and aggregations to retrieve and analyze structured dairy supply data.\n` +
  `• Executed high-volume batch data ingestion and migration using PostgreSQL \\copy utilities, validating schema consistency across datasets.\n` +
  `• Built and executed automated ETL transformation workflows with Pentaho Data Integration (PDI) to sync data between PostgreSQL databases.\n` +
  `• Configured Linux shell scripts and cron jobs to automate scheduled database routines, backups, and operational data pipelines.\n` +
  `• Worked with database connectivity, data warehousing workflows, and structured data processing.`;

const formatAllExperience = () =>
  `💼 **Professional Experience & Internships:**\n\n` +
  `1. **Stellapps Technologies Private Limited — Data Engineering Intern**\n` +
  `   • Oct 2026 – Present | Bengaluru, India\n` +
  `   • Production PostgreSQL on Linux, relational constraints, indexing, and SQL multi-table JOINs/aggregations.\n` +
  `   • High-volume CSV batch ingestion with PostgreSQL \\copy and consistency validation.\n` +
  `   • Automated ETL pipelines using Pentaho Data Integration (PDI) and scheduled Linux cron jobs.\n\n` +
  `2. **SuprMentr Technologies Pvt Ltd — Full Stack Web Development Intern (MERN)**\n` +
  `   • Jan 2026 – Apr 2026 | Remote\n` +
  `   • Built full-stack real estate platform (Aurum Estates) using React, Tailwind CSS, Node.js, Express, and MongoDB.\n` +
  `   • Developed property listings, search/filtering, JWT authentication, and responsive dashboards.\n` +
  `   • Optimized React components and state handling, achieving a 25% improvement in responsiveness.\n\n` +
  `3. **Evolbiz Technologies — Freelance Web Developer**\n` +
  `   • Jul 2026 | UAE · Remote\n` +
  `   • Redesigned company website with modern responsive UI and improved on-page SEO.\n` +
  `   • Developed backend functionality and collaborated directly with international stakeholders on requirements and revisions.`;

const formatTellMeAboutYourself = () =>
  `I am a Computer Science Engineering graduate with experience in full-stack web development, AI-integrated applications, and entry-level data engineering.\n\n` +
  `Currently, I work as a **Data Engineering Intern at Stellapps Technologies** in Bengaluru, where I manage PostgreSQL databases, author complex SQL queries, and build automated ETL pipelines using Pentaho and Linux cron jobs.\n\n` +
  `Previously, I completed a MERN internship at SuprMentr Technologies—achieving a 25% boost in application responsiveness—and delivered production web platforms for Evolbiz (UAE). I enjoy solving practical problems, learning new technologies, and building reliable software.`;

const formatWhyHire = () =>
  `⭐ **Why Hire Mohammad Shiyabuddeen:**\n\n` +
  `• **Full-Stack & Backend Versatility**: Hands-on experience across JavaScript, React.js, Next.js, Node.js, Express, and MongoDB, combined with production PostgreSQL and SQL optimization.\n` +
  `• **Data Engineering & Automation**: Practical experience building automated ETL workflows with Pentaho Data Integration (PDI), batch data migration with PostgreSQL \\copy, and Linux cron jobs.\n` +
  `• **AI & Real-Time Depth**: Shipped working systems integrating the Google Gemini API, Vapi AI voice synthesis, AssemblyAI speech-to-text, and WebRTC video streaming.\n` +
  `• **Proven Track Record**: 25% measured responsiveness improvement at SuprMentr, double 1st Prize hackathon winner (SRINATHON 2.0 against ~300 teams), and 1st Prize in UI/UX at YENSPECTRUM.\n` +
  `• **Work Ethic & Ownership**: Learns rapidly, takes strong ownership of tasks, and focuses on delivering clean, maintainable software.`;

const formatHardestProject = () =>
  `🏥 **Most Challenging Project — Automated Health Management System (Healix)**\n\n` +
  `The primary challenge was orchestrating an end-to-end multi-service AI voice consultation pipeline in real time:\n` +
  `• Real-time speech-to-text conversion with high medical vocabulary accuracy using AssemblyAI.\n` +
  `• Clinical reasoning and precaution synthesis powered by the Google Gemini API.\n` +
  `• Conversational voice synthesis streamed back with minimal latency via Vapi AI.\n` +
  `• Simultaneous integration of peer-to-peer WebRTC telemedicine video calls, automated PDF medical reports, credit-based booking, and role-based access for patients, doctors, and admins.\n\n` +
  `Presented as a startup solution at the K-Tech Startup Incubation Centre in Mangalore with positive investor validation.`;

const formatAutomationExample = () =>
  `⚙️ **Example of Automation Experience:**\n\n` +
  `At **Stellapps Technologies**, Mohammad automated PostgreSQL data transfers between databases using Pentaho Data Integration (PDI) workflows.\n\n` +
  `He also configured Linux shell scripts and cron jobs to automate scheduled database routines, backups, and operational data pipelines. This eliminated repetitive manual execution, validated schema consistency, and ensured reliable, scheduled processing.`;

const formatFeaturedHealth = () =>
  `🏥 **Automated Health Management System / Healix** (Featured Capstone)\n\n` +
  `An intelligent healthcare ecosystem combining AI-driven consultations, voice synthesis, automated prescriptions, and telemedicine.\n\n` +
  `**Core Features:**\n` +
  `• **Real-Time AI Doctor**: Voice & text consultation powered by Google Gemini API, Vapi AI (voice synthesis), and AssemblyAI (speech-to-text).\n` +
  `• **Automated PDF Reports**: Generates downloadable clinical PDF summaries.\n` +
  `• **Medicine Reminders**: Scheduled alarms and medication tracking.\n` +
  `• **WebRTC Video Consultations**: Encrypted peer-to-peer consultations with verified doctors.\n` +
  `• **Role-Based Workflows**: Tailored portals for Patients, Doctors, and Admin verification approval.\n\n` +
  `**Stack**: Next.js, React, Node.js, Express, MongoDB, Clerk, Gemini API, Vapi AI, AssemblyAI, WebRTC.\n` +
  `⭐ Presented at the K-Tech Startup Incubation Centre, Mangalore with positive investor validation.`;

const formatNextGenHire = () =>
  `💻 **NextGen-Hire — Technical Interview Platform**\n\n` +
  `A recruitment and interview platform connecting companies, interviewers, and candidates for live technical assessments.\n\n` +
  `**Key Features:**\n` +
  `• Collaborative real-time online code editor.\n` +
  `• Real-time WebRTC video interviews with screen sharing and recording.\n` +
  `• Recruiter and interviewer dashboards with standardized evaluation scorecards.\n` +
  `• Secure JWT authentication, bcrypt password hashing, and role-based access control.\n\n` +
  `**Stack**: React, React Router, Node.js, Express, MongoDB, Mongoose, WebRTC, Socket.IO, JWT.`;

const formatLiveConnect = () =>
  `💬 **LiveConnect (ChatPulse) — Real-Time Chat Application**\n\n` +
  `A responsive real-time messaging application with persistent history and live presence tracking.\n\n` +
  `**Key Features:**\n` +
  `• Bidirectional messaging powered by Socket.IO.\n` +
  `• Online/offline user presence tracking.\n` +
  `• Media and image sharing integrated with Cloudinary.\n` +
  `• Secure JWT authentication and client/server error handling.\n\n` +
  `**Stack**: React (Vite), Tailwind CSS, DaisyUI, Zustand, Socket.IO, Node.js, Express, MongoDB, Cloudinary.`;

const formatSkills = () =>
  `🛠️ **Mohammad Shiyabuddeen's Technical Stack:**\n\n` +
  `• **Languages**: JavaScript (ES6+), Python, SQL, C, C++, HTML5, CSS3\n` +
  `• **Frontend**: React.js, Next.js 14, Tailwind CSS, Redux, Zustand, DaisyUI, Bootstrap\n` +
  `• **Backend & APIs**: Node.js, Express.js, RESTful APIs, JWT Authentication, Socket.IO, WebRTC\n` +
  `• **AI Integration**: Google Gemini API, Vapi AI (Voice Synthesis), AssemblyAI (Speech-to-Text)\n` +
  `• **Databases & Data Engineering**: PostgreSQL, MongoDB, Mongoose, Pentaho Data Integration (PDI), Linux, Shell Commands, Cron Jobs, CSV Import/Export (\\copy), ETL Pipelines\n` +
  `• **Tools & DevOps**: Microsoft Excel (Advanced formulas, XLOOKUP, PivotTables), Docker, Git, GitHub, Postman, Vercel, Render, Cloudinary, Figma\n` +
  `• **Creative**: Canva, Adobe Premiere Pro, Videography, Video Editing, UI/UX Design`;

const formatHackathons = () =>
  `🏆 **Hackathon Leadership & Achievements:**\n\n` +
  `1. **SRINATHON 2.0 — Double First Prize Winner (National Level)**\n` +
  `   • National 24-hour hackathon competing against ~300 engineering teams.\n` +
  `   • Co-led Team ZOCO to 1st place in two separate themes: AI Mental Wellness Assistant and Real-Time Hospital Queue Management.\n\n` +
  `2. **K-Tech Startup Incubation Centre Presentation**\n` +
  `   • Pitched AI Healthcare startup solution at Karnataka K-Tech, receiving positive investor validation and commendation.\n\n` +
  `3. **YENSPECTRUM 2024 — 1st Prize in UI/UX Design**\n` +
  `   • Recognized for creative user flows, interactive prototyping, and design systems.\n\n` +
  `4. **Unfold 2024 — Selected Participant**\n` +
  `   • Selected to compete at Asia's premier Web3 Hackathon.\n\n` +
  `5. **21st ISTE Karnataka State Convention 2025**\n` +
  `   • Secured 2nd Place in the State-Level Startup Pitch competition.`;

const formatEducation = () =>
  `🎓 **Education & Academic Background:**\n\n` +
  `• **Bachelor of Engineering (B.E.) in Computer Science & Engineering**\n` +
  `  Yenepoya Institute of Technology (affiliated with VTU)\n` +
  `  Nov 2022 – Jul 2026\n\n` +
  `• **Pre-University Course (PCMC)**\n` +
  `  St. Philomena Pre-University College\n` +
  `  Mar 2020 – Apr 2022`;

const formatCertifications = () =>
  `📜 **Verified Certifications:**\n\n` +
  `• **Microsoft Certified: Azure Fundamentals** — Microsoft (Jan 2026)\n` +
  `• **Artificial Intelligence Fundamentals** — IBM (Aug 2025)\n` +
  `• **RDBMS PostgreSQL Training** — IIT Bombay (Nov 2025)\n` +
  `• **AWS & React: Auto-Scaling App with ELB** — Udemy (Aug 2024)`;

const formatCareerGoals = () =>
  `🎯 **Target Roles & Location Preferences:**\n\n` +
  `Mohammad is targeting software engineering and data roles:\n` +
  `• Full Stack Developer (React / Node / Next.js)\n` +
  `• Data Engineering Intern / Junior Data Engineer (PostgreSQL / ETL / SQL)\n` +
  `• Backend Developer (Node.js / Express / SQL)\n` +
  `• AI / Web Applications Developer\n\n` +
  `📍 **Location**: Based in Bengaluru (Bangalore), Karnataka. Open to full-time Bengaluru office roles, hybrid, and remote opportunities.\n` +
  `💰 **Salary Target**: Expected around ₹4 LPA (negotiable).\n` +
  `⏳ **Availability**: Currently an intern at Stellapps Technologies; open to discuss joining dates aligned with release/notice terms.`;

const formatContact = () =>
  `📫 **Get in Touch with Mohammad Shiyabuddeen:**\n\n` +
  `• **LinkedIn**: [LinkedIn Profile — Mohammad Shiyabuddeen](https://www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b/)\n` +
  `• **GitHub**: [GitHub Profile — @mohdshiyab](https://github.com/mohdshiyab)\n` +
  `• **Email**: [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})\n` +
  `• **Location**: Bengaluru (Bangalore), Karnataka, India\n` +
  `• **Current Role**: Data Engineering Intern at Stellapps Technologies\n` +
  `• **Status**: ${PERSONAL_INFO.status} (Open to Bengaluru Office & Remote)\n` +
  `• **Portfolio**: [shiyab.vercel.app](https://shiyab.vercel.app)`;

// --- Comprehensive Topics List ---

const TOPICS = [
  // 0. Dedicated LinkedIn Topic
  {
    id: 'linkedin',
    keywords: [
      'linkedin', 'linked in', 'linkedin link', 'linkedin profile', 'linkedin url', 'connect on linkedin', 'his linkedin', 'give his linkedin'
    ],
    response: () =>
      `You can connect with Mohammad Shiyabuddeen on LinkedIn here:\n\n` +
      `🔗 [LinkedIn Profile — Mohammad Shiyabuddeen](https://www.linkedin.com/in/mohammad-shiyabuddeen-4b183724b/)\n\n` +
      `Feel free to reach out to him there for professional networking, software engineering opportunities, or project discussions!`,
    actions: () => [
      { label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin },
      { label: 'Email Shiyab', href: `mailto:${PERSONAL_INFO.email}` },
    ],
  },

  // 0. Dedicated GitHub Topic
  {
    id: 'github',
    keywords: [
      'github', 'git hub', 'github link', 'github profile', 'github url', 'his github', 'give me his git hub', 'git repo', 'code repository', 'code repos'
    ],
    response: () =>
      `You can find all of Mohammad Shiyabuddeen's code repositories and projects on his GitHub:\n\n` +
      `🔗 [GitHub Profile — @mohdshiyab](https://github.com/mohdshiyab)\n\n` +
      `**Verified Repositories:**\n` +
      `• **Automated Health Management System**: [AutomatedHealthCare](https://github.com/mohdshiyab/AutomatedHealthCare)\n` +
      `• **NextGen-Hire**: [next-gen-hire](https://github.com/mohdshiyab/next-gen-hire)\n` +
      `• **LiveConnect**: [real-time-communication](https://github.com/mohdshiyab/real-time-communication)\n` +
      `• **Service-Hub**: [Service-Hub](https://github.com/mohdshiyab/Service-Hub)`,
    actions: () => [
      { label: 'GitHub Profile', href: PERSONAL_INFO.socials.github },
      { label: 'Healthcare GitHub', href: 'https://github.com/mohdshiyab/AutomatedHealthCare' },
    ],
  },

  // 1. Identity & Overview
  {
    id: 'about',
    keywords: [
      'who are you', 'who is', 'about shiyab', 'about you', 'introduce', 'biography', 'bio',
      'background', 'profile', 'shihab', 'overview'
    ],
    response: () => formatTellMeAboutYourself(),
    actions: resumeActions,
  },

  // 2. "Tell me about yourself" (Interview Bank)
  {
    id: 'tell-me-about-yourself',
    keywords: [
      'tell me about yourself', 'introduce yourself', 'brief introduction', 'walk me through your resume',
      'who is mohammad'
    ],
    response: () => formatTellMeAboutYourself(),
    actions: resumeActions,
  },

  // 3. "Why should we hire you?"
  {
    id: 'why-hire',
    keywords: [
      'why hire', 'why should we hire you', 'why should we hire', 'stand out', 'strengths',
      'what makes you unique', 'value', 'best candidate', 'hire for software development'
    ],
    response: () => formatWhyHire(),
    actions: resumeActions,
  },

  // 4. Stellapps Technologies (Current Role)
  {
    id: 'stellapps',
    keywords: [
      'stellapps', 'current role', 'current job', 'data engineering intern', 'data engineer',
      'data engineering', 'postgresql', 'pentaho', 'pdi', 'etl', 'cron', 'sql', 'copy'
    ],
    response: () => formatStellappsExperience(),
    actions: resumeActions,
  },

  // 5. SuprMentr Internship
  {
    id: 'suprmentr',
    keywords: [
      'suprmentr', 'mern intern', 'real estate platform', 'aurum estates', '25%', 'responsiveness',
      'performance improvement'
    ],
    response: () =>
      `🏢 **SuprMentr Technologies — Full Stack Web Development Intern (MERN)**\n` +
      `📍 Remote · Jan 2026 – Apr 2026\n\n` +
      `• Built full-stack features for a property platform (Aurum Estates) using React, Tailwind CSS, Node.js, Express, and MongoDB.\n` +
      `• Developed search/filtering, location mapping, JWT authentication, and interactive dashboards.\n` +
      `• Optimized React components and state handling, achieving a **25% improvement in application responsiveness**.\n` +
      `• Collaborated across engineering teams using Git and Agile workflows.`,
    actions: resumeActions,
  },

  // 6. Evolbiz Technologies
  {
    id: 'evolbiz',
    keywords: ['evolbiz', 'freelance', 'freelancing', 'client project', 'uae', 'seo'],
    response: () =>
      `🌐 **Evolbiz Technologies — Freelance Web Developer**\n` +
      `📍 UAE · Remote · Jul 2026\n\n` +
      `• Redesigned and enhanced company website with modern responsive UI.\n` +
      `• Implemented on-page SEO architectures (metadata, semantic structure, page speed) to boost search visibility.\n` +
      `• Maintained backend functionality and collaborated directly with international stakeholders on requirements and deliverables.`,
    actions: resumeActions,
  },

  // 7. General Experience
  {
    id: 'experience',
    keywords: [
      'experience', 'work experience', 'internship', 'internships', 'job history', 'companies'
    ],
    response: () => formatAllExperience(),
    actions: resumeActions,
  },

  // 8. Hardest Project
  {
    id: 'hardest-project',
    keywords: [
      'hardest project', 'most challenging project', 'toughest project', 'complex project',
      'challenging problem', 'most difficult'
    ],
    response: () => formatHardestProject(),
    actions: projectActions,
  },

  // 9. Example of Automation
  {
    id: 'automation-example',
    keywords: [
      'automation example', 'example of automation', 'automation experience', 'automated workflow',
      'cron job', 'pipeline automation', 'how did you automate'
    ],
    response: () => formatAutomationExample(),
  },

  // 10. Customer Support / Communication
  {
    id: 'customer-support',
    keywords: [
      'customer support', 'communication skills', 'client communication', 'handling issues',
      'customer problem', 'stakeholder'
    ],
    response: () =>
      `💬 **Customer & Technical Support Philosophy:**\n\n` +
      `• Listen calmly and acknowledge the client's or user's issue immediately.\n` +
      `• Ask focused diagnostic questions to isolate the root cause.\n` +
      `• Explain clear next steps and provide a realistic timeline for resolution.\n` +
      `• Proactively communicate progress and confirm full resolution before closing.\n` +
      `• Maintain a respectful, supportive, and professional tone throughout.`,
  },

  // 11. AI Health Management System / Healix
  {
    id: 'ai-health',
    keywords: [
      'health', 'doctor', 'medical', 'hospital', 'telemedicine', 'healix', 'automated health',
      'vapi', 'assemblyai', 'gemini api', 'ai doctor', 'medicine reminder'
    ],
    response: () => formatFeaturedHealth(),
    actions: () => [
      { label: 'Live Healthcare Demo', href: FEATURED_PROJECT.liveDemo },
      { label: 'Healthcare GitHub', href: FEATURED_PROJECT.github },
    ],
  },

  // 12. NextGen-Hire
  {
    id: 'nextgen-hire',
    keywords: [
      'nextgen', 'nextgen-hire', 'interview platform', 'technical interview', 'code editor',
      'collaborative editor', 'interviewer'
    ],
    response: () => formatNextGenHire(),
    actions: () => [
      { label: 'NextGen-Hire GitHub', href: 'https://github.com/mohdshiyab/next-gen-hire' },
    ],
  },

  // 13. LiveConnect / ChatPulse
  {
    id: 'liveconnect',
    keywords: [
      'liveconnect', 'chatpulse', 'chat app', 'real time chat', 'messaging app', 'cloudinary chat',
      'socket.io chat'
    ],
    response: () => formatLiveConnect(),
    actions: () => [
      { label: 'LiveConnect GitHub', href: 'https://github.com/mohdshiyab/real-time-communication' },
    ],
  },

  // 14. Service-Hub
  {
    id: 'service-hub',
    keywords: [
      'service hub', 'servicehub', 'home service', 'handyman', 'maps', 'local services'
    ],
    response: () =>
      `🛠️ **Service-Hub (On-Demand Home Services Platform)**\n\n` +
      `A full-stack MERN marketplace connecting homeowners with verified local service professionals.\n\n` +
      `• Two-sided roles: Customers and Service Providers with JWT authentication.\n` +
      `• Location mapping with Google Maps / Leaflet for live service tracking.\n` +
      `• Integrated WebRTC video calling for remote diagnostic consultations.\n\n` +
      `**Stack**: React, Node.js, Express.js, MongoDB, Tailwind CSS, Google Maps API, WebRTC.`,
    actions: () => [
      { label: 'Service-Hub GitHub', href: 'https://github.com/mohdshiyab/Service-Hub' },
    ],
  },

  // 15. All Projects Overview
  {
    id: 'projects',
    keywords: [
      'projects', 'portfolio projects', 'what did you build', 'what have you built',
      'applications', 'github projects', 'shipped apps', 'work samples'
    ],
    response: () =>
      `Here are the primary applications Mohammad has engineered:\n\n` +
      `• **Automated Health Management System (Healix)**: AI Doctor, Gemini API, Vapi voice, WebRTC telemedicine\n` +
      `• **NextGen-Hire**: Collaborative technical interview platform with code editor & WebRTC video\n` +
      `• **LiveConnect (ChatPulse)**: Real-time chat & media platform with Socket.IO & Cloudinary\n` +
      `• **Aurum Estates**: Full-stack real estate platform built during MERN internship\n` +
      `• **Service-Hub**: On-demand home services with location mapping & WebRTC\n` +
      `• **Binance Futures Trading Bot**: Python CLI automated order bot on USDT-M testnet\n\n` +
      `All repositories and live demos are available on his GitHub!`,
    actions: projectActions,
  },

  // 16. Technical Skills (Comprehensive)
  {
    id: 'skills',
    keywords: [
      'skill', 'skills', 'tech stack', 'technologies', 'what tech', 'stack', 'frameworks',
      'languages', 'tools'
    ],
    response: () => formatSkills(),
  },

  // 17. Databases & Data Engineering
  {
    id: 'databases',
    keywords: [
      'database', 'databases', 'mongodb', 'mongoose', 'sql', 'mysql', 'postgresql',
      'postgres', 'drizzle', 'queries', 'aggregation', 'schema', 'etl', 'pentaho', 'apache hop', 'copy'
    ],
    response: () =>
      `🗄️ **Databases & Data Engineering:**\n\n` +
      `• **PostgreSQL & SQL**: Hands-on data engineering at Stellapps Technologies—managing production relational schemas, constraints, indexing, multi-table JOINs, and batch ingestion with \\copy utilities.\n` +
      `• **ETL & Data Pipelines**: Automated workflows using Pentaho Data Integration (PDI), Linux shell scripts, and cron jobs for database sync and backups.\n` +
      `• **MongoDB**: Primary NoSQL database with Mongoose schema modeling, aggregation pipelines, and indexing.\n` +
      `• **Relational Modeling**: MySQL and Drizzle ORM experience for clean data normalization.`,
  },

  // 18. Frontend Development
  {
    id: 'frontend',
    keywords: [
      'frontend', 'front end', 'react', 'next.js', 'nextjs', 'tailwind', 'css', 'html',
      'redux', 'zustand', 'ui development'
    ],
    response: () =>
      `💻 **Frontend Architecture:**\n\n` +
      `• **Frameworks**: React.js, Next.js 14, modern JavaScript (ES6+), TypeScript.\n` +
      `• **Styling**: Tailwind CSS, DaisyUI, Bootstrap, mobile-first responsive layouts.\n` +
      `• **State Management**: Redux Toolkit, Zustand, Context API.\n` +
      `• **Real-Time UI**: Live WebSocket event updates, WebRTC video streaming renderers.`,
  },

  // 19. Backend Development & REST APIs
  {
    id: 'backend',
    keywords: [
      'backend', 'back end', 'node', 'nodejs', 'node.js', 'express', 'express.js',
      'rest api', 'apis', 'restful', 'server', 'authentication', 'jwt', 'auth'
    ],
    response: () =>
      `⚙️ **Backend Engineering & APIs:**\n\n` +
      `• **Frameworks**: Node.js & Express.js for clean RESTful APIs and microservices.\n` +
      `• **Security & Auth**: Secure JWT tokens, bcrypt password hashing, role-based access control (RBAC), and Clerk OAuth.\n` +
      `• **Real-Time Communication**: Socket.IO for persistent bidirectional messaging; WebRTC for encrypted peer-to-peer video.\n` +
      `• **Reliability**: Request validation, error-handling middleware, and structured logging.`,
  },

  // 20. Excel Skills
  {
    id: 'excel',
    keywords: ['excel', 'spreadsheet', 'vlookup', 'xlookup', 'pivot table', 'pivottable'],
    response: () =>
      `📊 **Microsoft Excel Capabilities:**\n\n` +
      `• Advanced lookup functions: XLOOKUP, VLOOKUP, INDEX, MATCH.\n` +
      `• Logic & math: SUM, AVERAGE, COUNT, COUNTA, IF, AND, OR, CONCAT, TRIM, LEN.\n` +
      `• Data management: Sorting, filtering, conditional formatting, and basic PivotTables.`,
  },

  // 21. AI & Voice Engineering
  {
    id: 'ai-voice',
    keywords: [
      'ai', 'voice ai', 'artificial intelligence', 'gemini', 'gemini api', 'llm', 'vapi',
      'assemblyai', 'speech to text', 'voice synthesis'
    ],
    response: () =>
      `🤖 **AI & Voice Integration:**\n\n` +
      `Shiyab actively integrates modern AI into practical web systems:\n` +
      `• **Google Gemini API**: Clinical reasoning engines, consultation summaries, and prompt engineering.\n` +
      `• **Vapi AI**: Natural voice synthesis allowing voice dialogue with AI agents.\n` +
      `• **AssemblyAI**: Real-time speech-to-text processing with high terminology accuracy.`,
  },

  // 22. Hackathons & Honors
  {
    id: 'hackathons',
    keywords: [
      'hackathon', 'hackathons', 'srinathon', 'yenspectrum', 'first prize', '1st place',
      'awards', 'achievements', 'competitions', 'trophy', 'k-tech'
    ],
    response: () => formatHackathons(),
  },

  // 23. Education & Qualifications
  {
    id: 'education',
    keywords: [
      'education', 'qualification', 'qualifications', 'qualified', 'college', 'university', 'degree',
      'yenepoya', 'institute of technology', 'cs engineering', 'computer science degree',
      'graduation', 'academic', 'studies', 'background'
    ],
    response: () => formatEducation(),
  },

  // 24. Certifications
  {
    id: 'certifications',
    keywords: ['certification', 'certifications', 'certificate', 'azure', 'ibm', 'iit bombay'],
    response: () => formatCertifications(),
  },

  // 25. Career Goals, Salary & Location
  {
    id: 'career-goals',
    keywords: [
      'roles', 'targeting', 'career goal', 'job', 'seeking', 'position', 'hire', 'opportunity',
      'bangalore', 'bengaluru', 'salary', 'ctc', 'expected salary', 'availability', 'notice period'
    ],
    response: () => formatCareerGoals(),
    actions: contactActions,
  },

  // 26. Honest Scope / Boundaries
  {
    id: 'honesty-check',
    keywords: ['langchain', 'spring boot', 'flutter', 'react native', 'reinforcement learning'],
    response: () =>
      `Mohammad believes in 100% transparency about his technical scope:\n\n` +
      `• His primary backend and full-stack expertise is in JavaScript/TypeScript (Node.js/Express/React) and SQL/PostgreSQL.\n` +
      `• He does not claim production Java Spring Boot, mobile app frameworks (Flutter/React Native), or LangChain/RAG agent architectures.\n` +
      `• For testing, he uses Postman, manual verification, and browser debugging rather than formal automated test suites.`,
  },

  // 27. Resume & Download
  {
    id: 'resume',
    keywords: ['resume', 'cv', 'download resume', 'pdf', 'curriculum vitae'],
    response: () =>
      `📄 **Mohammad Shiyabuddeen's Official Résumé:**\n\nYou can view or download his up-to-date resume (including his latest Stellapps Data Engineering experience) directly below:`,
    actions: resumeActions,
  },

  // 28. Contact & Socials
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'phone', 'reach', 'get in touch', 'message',
      'talk to him', 'how to reach', 'how to contact'
    ],
    response: () => formatContact(),
    actions: contactActions,
  },

  // 29. Greetings & Pleasantries
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup', 'good morning', 'good evening', 'greetings'],
    response: () =>
      `Hello! 👋 I'm Mohammad Shiyabuddeen's portfolio assistant.\n\n` +
      `I can help you explore his skills, Stellapps data engineering role, AI healthcare capstone, hackathon victories, or job availability. How can I help you today?`,
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'awesome', 'great', 'cool', 'appreciate'],
    response: () =>
      `You're very welcome! Feel free to reach out to Shiyab directly via email or LinkedIn below.`,
    actions: contactActions,
  },
];

// --- Smart Universal Fallback ---
const getUniversalAnswer = (query) => {
  return {
    text: formatUniversalSummary(),
    actions: contactActions(),
  };
};

// Word boundary override for short words to prevent substring collisions
const WORD_BOUNDARY_OVERRIDE = new Set(['java', 'go', 'git', 'aws', 'sql', 'css', 'ui', 'ux', 'dsa', 'api', 'app', 'bio']);

function scoreTopic(input, topic) {
  let score = 0;
  for (const kw of topic.keywords) {
    const trimmed = kw.trim();
    const isShortSingleWord = !trimmed.includes(' ') && trimmed.length <= 4;

    if (isShortSingleWord || WORD_BOUNDARY_OVERRIDE.has(trimmed)) {
      const pattern = new RegExp(`\\b${trimmed}\\b`, 'i');
      if (pattern.test(input)) score += 3;
    } else if (input.includes(trimmed)) {
      score += trimmed.split(' ').length * 2;
    }
  }
  return score;
}

/**
 * Returns the best answer for any user inquiry with guaranteed formatting and accuracy.
 * @param {string} userInput
 * @returns {{ text: string, actions: Array<{label: string, href: string}> }}
 */
export function getAnswer(userInput) {
  if (!userInput || !userInput.trim()) {
    return getUniversalAnswer('');
  }

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

  return getUniversalAnswer(userInput);
}