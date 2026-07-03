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
  title: "AI-Healthcare-Management-System",
  description:
    "The AI Healthcare Management System is a full-stack web application designed to simplify healthcare services through AI-powered diagnosis, appointment scheduling, and real-time doctor–patient communication. Built with modern web technologies, it enables patients, doctors, and administrators to manage consultations, medical records, and healthcare workflows efficiently with a secure and user-friendly experience.",
  image: "/projects/AI-Doc.png",
  link: "https://github.com/mohdshiyab/AI-final-year-project",
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
    title: "Projects",
    link: "#projects",
  },




] as const;

export const LINKS = {
  sourceCode: "https://github.com/mohdshiyab",
};
