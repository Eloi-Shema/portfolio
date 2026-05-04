import type { Metadata } from "next";
import { SUSE_Mono } from "next/font/google";
import "./globals.css";

const suse = SUSE_Mono({
  variable: "--font-suse-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://eloishema.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Full Stack Web Developer • Eloi Shema",
    template: "%s | Eloi Shema",
  },
  description:
    "Eloi Shema is a full-stack web developer based in Rwanda, building fast, secure, and production-ready web applications with React and Node.js frameworks, TypeScript, PostgreSQL, MongoDB and more.",

  keywords: [
    "Eloi Shema",
    "Full-Stack Developer",
    "Full-Stack Web Developer",
    "Full-Stack Engineer",
    "Next.js Developer",
    "Node.js Developer",
    "Rwandan Developer",
    "Web Developer Portfolio",
    "TypeScript",
    "React",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Prisma",
    "Supabase",
    "Vercel",
    "GitHub",
    "Trapeloi",
    "Dukundekawa",
    "Zone7",
  ],

  authors: [{ name: "Eloi Shema", url: BASE_URL }],
  creator: "Eloi Shema",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Eloi Shema",
    title: "Full Stack Web Developer • Eloi Shema",
    description:
      "Full-stack web developer building fast, secure, and production-ready web applications with React and Node.js frameworks, TypeScript, PostgreSQL, MongoDB and more.",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Eloi Shema • Full-Stack Web Developer Portfolio",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eloi Shema • Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, secure, and production-ready web applications.",
    images: ["/open-graph.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${suse.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
