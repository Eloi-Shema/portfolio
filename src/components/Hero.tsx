"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Phase = "idle" | "name" | "gap" | "title" | "done";

function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-linear-to-br from-[#eaf1ff] via-[#f4f7ff] to-[#e8efff]">
      <div className="backdrop-blur-md absolute inset-0 z-10" />
      <div
        className="absolute top-1/3 right-[-8%] w-170 h-170 bg-[rgba(175,205,255,0.32)]"
        style={{ animation: "blob1 14s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[50%] right-[-18%] w-130 h-130 bg-[rgba(115,145,255,0.15)]"
        style={{ animation: "blob2 19s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[8%] right-[6%] w-95 h-95 bg-[rgba(210,228,255,0.45)]"
        style={{ animation: "blob3 11s ease-in-out infinite" }}
      />
    </div>
  );
}

export default function HeroSection() {
  const NAME = "I'm Eloi Shema, ";
  const TITLE = "A Full Stack Developer";
  const SUBTITLE = "For nice looking, Performant, and Reliable Web Apps.";

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPhase("name"), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "name") return;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setLine1(NAME.slice(0, i));
      if (i < NAME.length) t = setTimeout(tick, 105);
      else t = setTimeout(() => setPhase("gap"), 340);
    };
    t = setTimeout(tick, 0);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "gap") return;
    const t = setTimeout(() => setPhase("title"), 0);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "title") return;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setLine2(TITLE.slice(0, i));
      if (i < TITLE.length) t = setTimeout(tick, 65);
      else t = setTimeout(() => setPhase("done"), 200);
    };
    t = setTimeout(tick, 0);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setLine3(SUBTITLE.slice(0, i));
      if (i < SUBTITLE.length) t = setTimeout(tick, 65);
    };
    t = setTimeout(tick, 0);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <>
      <BlobBackground />

      <section className="sticky top-0 h-200 max-w-7xl mx-auto px-5 flex flex-col z-10 overflow-hidden">
        <nav className="relative z-30 flex justify-between items-center py-8">
          <span className="font-bold tracking-[2.5px] text-black">
            Eloi.dev
          </span>
          <div className="flex gap-9">
            {["Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-zinc-500 hover:text-black tracking-wide transition-colors duration-200 no-underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        <div
          className="relative z-20 flex flex-col flex-1 justify-center items-center -mt-20"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          <div className="text-7xl font-bold leading-[0.92] tracking-[-4px] text-black min-h-[1em]">
            {line1}
            {phase === "name" && (
              <span className="inline-block w-0.5 h-[0.6em] bg-black ml-1.5 align-middle animate-blink" />
            )}
          </div>

          <div className="text-[clamp(26px,3.2vw,52px)] tracking-[-1px] italic text-niceBlue mt-4 min-h-[1.2em]">
            {line2}
            {phase === "title" && (
              <span className="inline-block w-0.5 h-[0.75em] bg-niceBlue ml-1.5 align-middle animate-blink" />
            )}
          </div>

          <div className="text-lg text-zinc-600 mt-6 min-h-[1.2em]">
            {line3}
            {phase === "done" && (
              <span className="inline-block w-px h-[0.75em] bg-zinc-600 align-middle animate-blink" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
