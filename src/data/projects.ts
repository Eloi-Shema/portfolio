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
  SiRedis,
  SiGithub,
  SiGmail,
  SiLemonsqueezy,
  SiBetterauth,
  SiGoogle,
} from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";

export interface Project {
  id: number;
  name: string;
  tagline: string;
  stack: string[];
  desc: string;
  url: string;
  screenshot: string;
}

export interface ContactLink {
  label: string;
  href: string;
  tech: string;
}

export const ICON_MAP: Record<string, { Icon: IconType; color: string }> = {
  "next.js": { Icon: SiNextdotjs, color: "#000000" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  prisma: { Icon: SiPrisma, color: "#5a67d8" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  cloudinary: { Icon: SiCloudinary, color: "#3448C5" },
  redis: { Icon: SiRedis, color: "#DC382D" },
  lemonsqueezy: { Icon: SiLemonsqueezy, color: "#FFC233" },
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
    tagline: "Beat Store Platform",
    stack: [
      "Next.js 15",
      "PostgreSQL",
      "Prisma",
      "LemonSqueezy",
      "Cloudflare R2",
      "Better Auth",
      "Arcjet",
    ],
    desc: "Full-stack e-commerce platform for music producers. Waveform audio previews, LemonSqueezy payments with webhook handling, Cloudflare R2 presigned file delivery, admin analytics dashboard, and secure authenticated downloads.",
    url: "https://trapeloi.com",
    screenshot: "/trapeloi1.png",
  },
  {
    id: 2,
    name: "Zone7.rw",
    tagline: "Real Estate Platform",
    stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    desc: "Property listing platform for Rwanda. JWT refresh token rotation with concurrency protection, role-based access (Admin / Broker / User), Cloudinary image management, and property interest tracking.",
    url: "https://zone7i.rw",
    screenshot: "/zone7.png",
  },
  {
    id: 3,
    name: "Dukundekawa",
    tagline: "Coffee Cooperative CMS",
    stack: ["Next.js 16", "MongoDB", "MailerSend", "Cloudinary", "PWA"],
    desc: "Full CMS for a Rwandan specialty coffee cooperative. Rich-text blog editor, comment moderation, JSON-LD SEO schema, Progressive Web App support, and dynamic sitemap generation.",
    url: "https://dukundekawa.rw",
    screenshot: "/dukundekawa1.png",
  },
  {
    id: 4,
    name: "Next Project",
    tagline: "Work in Progress",
    stack: [""],
    desc: "Something new is in the works.",
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
