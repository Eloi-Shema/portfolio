"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS, resolveIcon, type Project } from "@/data/projects";
import Link from "next/link";

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);
  return isTouch;
}

function ProjectCard({
  project,
  onActivate,
  featured = false,
  isTouch,
}: {
  project: Project;
  onActivate: (project: Project, el: HTMLDivElement) => void;
  featured?: boolean;
  isTouch: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const [hinted, setHinted] = useState(false);
  const hasImage = project.screenshot !== "";

  const handleClick = () => {
    clearTimeout(hoverTimer.current);
    if (ref.current) onActivate(project, ref.current);
  };

  const handleMouseEnter = () => {
    if (isTouch) return;
    setHinted(true);

    hoverTimer.current = setTimeout(() => {
      if (ref.current) onActivate(project, ref.current);
    }, 1500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setHinted(false);
  };

  const handleTouchStart = () => {};

  const handleTouchEnd = () => {};

  return (
    <div className={`${featured ? "md:scale-75" : "scale-100"}`}>
      <div
        ref={ref}
        className={`group relative overflow-hidden cursor-pointer aspect-video`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {project.video ? (
          project.video.endsWith(".gif") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.video}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          )
        ) : hasImage ? (
          <Image
            src={project.screenshot}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <Image
            src="/soon.jpg"
            alt="Coming soon"
            fill
            className="object-cover object-top"
            sizes="33vw"
          />
        )}

        {!isTouch && (
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/70 transition-opacity duration-300 ${hinted ? "opacity-100" : "opacity-0"}`}
          >
            <span
              className={`text-white ${featured ? "text-xl px-10 py-5" : "text-xs px-4 py-2"} font-semibold uppercase border border-white `}
            >
              View
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 px-0.5">
        <h3
          className={`font-bold text-black leading-tight ${featured ? "md:text-2xl" : "text-base"}`}
        >
          {project.name}
        </h3>
        <p
          className={`${featured ? "xs:text-[10px] md:text-base" : "text-[10px]"} text-zinc-700 tracking-[2px] uppercase mt-0.5`}
        >
          {project.tagline}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const isTouch = useIsTouch();

  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [closedTransform, setClosedTransform] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const openOverlay = (project: Project, cardEl: HTMLDivElement) => {
    clearTimeout(closeTimer.current);

    const rect = cardEl.getBoundingClientRect();
    const modalWidth = Math.min(600, window.innerWidth - 32);
    const tx = rect.left + rect.width / 2 - window.innerWidth / 2;
    const ty = rect.top + rect.height / 2 - window.innerHeight / 2;
    const s = rect.width / modalWidth;

    setClosedTransform(`translate(${tx}px, ${ty}px) scale(${s})`);
    setActive(project);
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  };

  const doClose = () => {
    clearTimeout(closeTimer.current);
    setOpen(false);
    setTimeout(() => setActive(null), 380);
  };

  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <>
      <section id="projects" className="relative z-20 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <span className="text-[10px] md:text-xs font-bold text-black/50 tracking-[2.5px] uppercase whitespace-nowrap">
              Projects
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="mb-6">
            <ProjectCard
              project={featured}
              onActivate={openOverlay}
              featured
              isTouch={isTouch}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
            {rest.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onActivate={openOverlay}
                isTouch={isTouch}
              />
            ))}
          </div>
        </div>
      </section>

      {active && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: "rgba(0,0,0,0.55)",
              opacity: open ? 1 : 0,
              transition: open ? "opacity 360ms ease" : "opacity 300ms ease",
            }}
            onClick={doClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 md:p-6">
            <div
              className="pointer-events-auto w-full max-w-150 max-h-[88vh] overflow-y-auto bg-white shadow-2xl"
              style={{
                transform: open
                  ? "translate(0px,0px) scale(1)"
                  : closedTransform,
                opacity: open ? 1 : 0,
                transition: open
                  ? "transform 440ms cubic-bezier(0.34,1.1,0.64,1), opacity 280ms ease"
                  : "transform 340ms cubic-bezier(0.4,0,0.8,0.5), opacity 260ms ease",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {active.screenshot && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={active.screenshot}
                    alt={active.name}
                    fill
                    className="object-cover object-top"
                    sizes="600px"
                  />
                </div>
              )}

              <div className="p-5">
                <p className="text-[9px] text-zinc-600 tracking-[2.5px] uppercase mb-2">
                  {active.tagline}
                </p>
                <h3 className="text-black font-extrabold text-2xl tracking-tight mb-5">
                  {active.name}
                </h3>
                <p className="text-zinc-800 font-medium text-sm mb-5 whitespace-pre-line">
                  {active.desc}
                </p>

                {active.impact && (
                  <ul className="mb-10 space-y-4">
                    {active.impact.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-medium text-zinc-800 text-sm"
                      >
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-niceBlue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {active.stack
                    .filter((t) => t.trim() !== "")
                    .map((tech) => {
                      const match = resolveIcon(tech);
                      const Icon = match?.Icon;
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 text-[10px] text-black border border-zinc-200 px-2.5 py-1"
                        >
                          {Icon && <Icon size={20} color={match!.color} />}
                          {tech}
                        </span>
                      );
                    })}
                </div>

                <div className="flex items-center justify-between">
                  {active.url !== "#" ? (
                    <Link
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-black no-underline tracking-wide hover:text-niceBlue transition-colors duration-200"
                    >
                      Visit site ↗
                    </Link>
                  ) : (
                    <span />
                  )}
                  <button
                    onClick={doClose}
                    className="text-[10px] text-black/40 hover:text-black tracking-[2px] uppercase transition-colors duration-200 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
