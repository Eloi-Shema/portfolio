"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../app/icon.png";

type Phase = "idle" | "name" | "gap" | "title" | "subtitle" | "done";

function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute inset-0 z-10 backdrop-blur-xl" />

      <div
        className="absolute top-1/3 right-[-8%] w-170 h-170 bg-niceBlue/10"
        style={{ animation: "squareDrift1 48s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[50%] right-[-18%] w-130 h-130 bg-niceBlue/10"
        style={{ animation: "squareDrift2 58s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[8%] right-[6%] w-95 h-95 bg-niceBlue/15"
        style={{ animation: "squareDrift3 40s ease-in-out infinite" }}
      />
    </div>
  );
}

export default function HeroSection() {
  const NAME = "I'm Eloi Shema, ";
  const TITLE = "A Full Stack Developer";
  const SUBTITLE =
    "To help you build Nice looking, Performant, and Reliable fully working Web Apps.";

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
      if (i < NAME.length) t = setTimeout(tick, 90);
      else t = setTimeout(() => setPhase("gap"), 300);
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
      else t = setTimeout(() => setPhase("subtitle"), 220);
    };
    t = setTimeout(tick, 0);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "subtitle") return;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setLine3(SUBTITLE.slice(0, i));
      if (i < SUBTITLE.length) t = setTimeout(tick, 42);
      else setPhase("done");
    };
    t = setTimeout(tick, 0);
    return () => clearTimeout(t);
  }, [phase]);

  const parallax = { transform: `translateY(${scrollY * 0.12}px)` };

  return (
    <>
      <BlobBackground />

      <section className="sticky top-0 h-120 md:h-200 flex flex-col z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xs" />

        <nav className="relative max-w-7xl mx-auto z-30 flex justify-between items-center px-5 py-10 w-full">
          <div className="flex items-center gap-2 font-bold tracking-[2.5px] text-black text-sm uppercase">
            <Image src={logo} alt="EloiShema.dev" width={30} height={30} />
            <span className="hidden md:block">EloiShema.dev</span>
          </div>
          <div className="flex gap-5">
            {["Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-500  hover:text-black transition-colors duration-200 no-underline uppercase"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        <div
          className="relative z-20 flex flex-col flex-1 justify-center items-center text-center px-5 md:-mt-20"
          style={parallax}
        >
          <div className="text-[clamp(28px,9vw,80px)] md:text-[clamp(28px,7vw,80px)] font-bold leading-[0.92] tracking-[-1px] md:tracking-[-3px] lg:tracking-[-4px] text-black min-h-[1em]">
            {line1}
            {phase === "name" && (
              <span className="inline-block w-0.5 h-[0.6em] bg-black ml-1 align-middle animate-blink" />
            )}
          </div>

          <div className="text-[clamp(18px,5vw,48px)] md:text-[clamp(18px,4vw,48px)] tracking-[-0.5px] md:tracking-[-1px] italic text-niceBlue mt-3 md:mt-4 min-h-[1.2em]">
            {line2}
            {phase === "title" && (
              <span className="inline-block w-0.5 h-[0.75em] bg-niceBlue ml-1 align-middle animate-blink" />
            )}
          </div>

          <div className="text-[clamp(12px,3vw,18px)] md:text-[clamp(12px,1.6vw,18px)] text-zinc-800 mt-3 md:mt-5 min-h-[1.4em] max-w-xs md:max-w-lg xl:max-w-2xl">
            {line3}
            {(phase === "subtitle" || phase === "done") && (
              <span className="inline-block w-px h-[0.75em] bg-zinc-400 ml-0.5 align-middle animate-blink" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
