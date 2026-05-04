import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import ProjectsSection from "@/components/ProjectSection";

const BASE_URL = "https://eloishema.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eloi Shema",
  url: BASE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack web developer building fast, secure, and production-ready web applications with React and Node.js frameworks, TypeScript, PostgreSQL, MongoDB and more.",
  email: "shemaeloi.dev@gmail.com",
  sameAs: [
    "https://github.com/Eloi-Shema",
    "https://www.linkedin.com/in/eloishema",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Node.js",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
