"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, resolveIcon, type Project } from "@/data/projects";

function ProjectCard({
  project,
  isExpanded,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  isExpanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const hasImage = project.screenshot !== "";

  return (
    <div
      className="flex-1 min-w-0 overflow-hidden border border-white/80 bg-white transition-shadow duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="aspect-video relative overflow-hidden">
        {hasImage ? (
          <Image
            src={project.screenshot}
            alt={project.name}
            fill
            className={`object-cover object-top transition-transform duration-500 ease-out ${isExpanded ? "scale-[1.04]" : "scale-100"}`}
            sizes="(max-width: 1024px) 50vw, 460px"
          />
        ) : (
          <Image
            src="/soon.jpg"
            alt="Coming Soon"
            fill
            className={`object-cover object-top transition-transform duration-500 ease-out ${isExpanded ? "scale-[1.04]" : "scale-100"}`}
            sizes="(max-width: 1024px) 50vw, 460px"
          />
        )}

        <div
          className={`absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-5 transition-opacity duration-350 ${isExpanded ? "opacity-0" : "opacity-100"}`}
        >
          <p className="text-[10px] font-bold text-zinc-200 tracking-[2.5px] uppercase mb-1">
            {project.tagline}
          </p>
          <h3 className="text-white font-bold leading-tight">{project.name}</h3>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          transition: "grid-template-rows 420ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pt-5 pb-6">
            <p className="text-[10px] font-bold text-black tracking-[2.5px] uppercase mb-1.5">
              {project.tagline}
            </p>
            <h3 className="text-black font-extrabold text-lg tracking-tight mb-3">
              {project.name}
            </h3>

            <p className="text-zinc-800 text-sm leading-[1.85] mb-5">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => {
                const match = resolveIcon(tech);
                const Icon = match?.Icon;
                return (
                  <span
                    key={tech}
                    className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-wide text-zinc-600 ${Icon && "border"} border-zinc-400 px-2.5 py-1`}
                  >
                    {Icon && <Icon size={20} color={match!.color} />}
                    {tech}
                  </span>
                );
              })}
            </div>

            {project.url !== "#" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold hover:text-niceBlue no-underline tracking-wide text-zinc-600 transition-colors duration-200"
              >
                Visit site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const enter = (id: number) => setHoveredId(id);
  const leave = () => setHoveredId(null);

  const row1 = PROJECTS.slice(0, 2);
  const row2 = PROJECTS.slice(2, 4);

  return (
    <section id="projects" className="relative z-20 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-bold text-black/50 tracking-[2.5px] uppercase whitespace-nowrap">
            Projects
          </span>
          <div className="flex-1 h-px bg-[#2f2f9d]/10" />
        </div>

        <div className="flex gap-3 items-start mb-3">
          {row1.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              isExpanded={hoveredId === p.id}
              onMouseEnter={() => enter(p.id)}
              onMouseLeave={leave}
            />
          ))}
        </div>

        <div className="flex gap-3 items-start">
          {row2.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              isExpanded={hoveredId === p.id}
              onMouseEnter={() => enter(p.id)}
              onMouseLeave={leave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
