import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Uzra Khan - Frontend Developer",
  author: "Uzra Khan",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/uzra-khan-40b472272/" },
    { text: "Github", href: "https://github.com/Uzrakhan" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Uzra Khan",
    specialty: "Fullstack Developer",
    summary:
      "Aspiring Fullstack Developer focused on creating scalable, performant web applications using React, Next.js, and Node.js. Check out my hands-on projects below!",
    email: "uzrakhan539@gmail.com",
  },
  projects: [
    {
      name: "IdeaBoard: Real-Time Whiteboard",
      summary: "A highly scalable, collaborative whiteboard platform built with WebSockets, Next.js, and MongoDB.",
      linkPreview: "/projects/ideaboard",
      linkSource: "https://github.com/Uzrakhan/IdeaBoard",
      image: "/spotifu.png",
    },
    {
      name: "Tomato Food App",
      summary: "A clone of the food ordering app Zomato",
      linkPreview: "/projects/tomato-app",
      linkSource: "https://github.com/Uzrakhan/Tomato-food-app",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Uzra Khan, a passionate and dedicated self-taught Fullstack Developer. I recently focused my learning on the modern web development stack, including **React/Next.js for the frontend** and **Node.js/Express for the backend**.

      Although I don't have formal, paid work experience, I have channeled all my effort into building **real-world, hands-on projects** that demonstrate my ability to design, develop, and deploy fullstack applications.

      I thrive on turning complex problems into clean, efficient code and am eager to join a team where I can contribute my strong skills in **UI/UX implementation, API integration, and database management** while continuing to learn and grow.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
