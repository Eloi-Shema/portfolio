import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiTailwindcss,
  SiCloudflare,
  SiCloudinary,
  SiGithub,
  SiGmail,
  SiLemonsqueezy,
  SiBetterauth,
  SiUpstash,
  SiReact,
  SiSentry,
} from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";

export interface Project {
  id: number;
  name: string;
  tagline: string;
  stack: string[];
  desc: string;
  impact: string[];
  url: string;
  screenshot: string;
  video?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  tech: string;
}

export const ICON_MAP: Record<string, { Icon: IconType; color: string }> = {
  "next.js": { Icon: SiNextdotjs, color: "#000000" },
  react: { Icon: SiReact, color: "#61DAFB" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  prisma: { Icon: SiPrisma, color: "#5a67d8" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  cloudinary: { Icon: SiCloudinary, color: "#3448C5" },
  upstash: { Icon: SiUpstash, color: "#34D399 " },
  lemonsqueezy: { Icon: SiLemonsqueezy, color: "#FFC233" },
  sentry: { Icon: SiSentry, color: "#000000" },
  betterAuth: { Icon: SiBetterauth, color: "#F38020" },
  github: { Icon: SiGithub, color: "#000000" },
  linkedin: { Icon: TfiLinkedin, color: "#000000" },
  email: { Icon: SiGmail, color: "#000000" },
};

export function resolveIcon(
  tech: string,
): { Icon: IconType; color: string } | null {
  const key = tech
    .toLowerCase()
    .split(" ")[0]
    .replace(/[^a-z.]/g, "");
  return ICON_MAP[key] ?? null;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Trapeloi",
    tagline: "Beat Store",
    stack: [
      "Next.js 15",
      "React 19",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "LemonSqueezy",
      "Cloudflare R2",
      "Upstash Redis",
      "Sentry",
      "BetterAuth",
      "And more...",
    ],
    desc: "A full-stack beat store specially designed for upcoming artists. It features two themed User-friendly Inteface, encrypted authentication, rate limited APIs, presigned file URLs, and secure payment processing via LemonSqueezy.",
    impact: [
      "Trapeloi ONLY provides High quality, Royalty-free, and Exclusive licensed beats at reasonable prices.",
      "No limited licenses, no subscriptions, just one-time payment with lifetime access.",
      "Total creative freedom without the legal stress from leases",
    ],
    url: "https://trapeloi.com",
    screenshot: "/trapeloi.png",
    video: "/trapeloi.mp4",
  },
  {
    id: 2,
    name: "Dukundekawa",
    tagline: "Musasa Coffee Cooperative",
    stack: [
      "Next.js 16",
      "Typescript",
      "MongoDB",
      "Cloudinary",
      "MailerSend",
      "NextAuth",
    ],
    desc: "Dukundekawa is a web presence of a Rwandan specialty coffee cooperative. It features a full CMS with a rich text blog editor, comment moderation, and SEO-optimized static page generation. Authentication is built on NextAuth.js, concurrent session limiting, role-based access control, and full password reset flow. Rate limiting and input sanitization are enforced across all API endpoints.",
    impact: [
      "Puts Rwanda's specialty coffee on the map with a professional, globally accessible online platform.",
      "The cooperative manages all website content; blogs, products, comments  independently, with no developer needed.",
      "SEO helps the site rank on search engines and work smoothly on low-end mobile devices.",
      "Secure admin controls ensure only the right people can publish or moderate content.",
    ],
    url: "https://dukundekawa.rw",
    screenshot: "/dukundekawa.jpg",
  },
  {
    id: 3,
    name: "Zone7.rw",
    tagline: "Real Estate Website",
    stack: ["Next.js", "Typescript", "MongoDB", "Cloudinary", "NextAuth"],
    desc: "Zone7 is a real estate platform built for the Rwandan property listings market. It features authentication, role-based access control (User/Broker/Admin), and cloud image management via Cloudinary.\n Property listings, user interests, and inquiries are all handled through a structured REST API backed by MongoDB.",
    impact: [
      "Rwandans can browse, filter, and inquire about properties to buy or rent, all in one place.",
      "Brokers and admins get a dedicated dashboard to manage listings, users, and inquiries without technical skills.",
      "Email notifications keep both buyers and agents in the loop without manual follow-ups.",
    ],
    url: "https://zone7.rw",
    screenshot: "/zone7.jpg",
  },
  {
    id: 4,
    name: "Next Project",
    tagline: "Work in Progress",
    stack: [""],
    desc: "Something new is in the works.",
    impact: [""],
    url: "#",
    screenshot: "",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:shemaeloi.dev@gmail.com",
    tech: "email",
  },
  {
    label: "Github",
    href: "https://github.com/Eloi-Shema",
    tech: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    tech: "linkedin",
  },
];
