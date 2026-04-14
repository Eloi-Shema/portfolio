import { CONTACT_LINKS, resolveIcon } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/icon.png";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-20 backdrop-blur-2xl border-t border-white/70"
    >
      <div className="max-w-7xl mx-auto px-5 pt-16 sm:pt-20">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span
            className="text-[10px] sm:text-xs font-bold text-black/50
                           tracking-[2.5px] uppercase whitespace-nowrap"
          >
            Get in Touch
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
          <h2 className="text-[clamp(40px,7vw,80px)] font-extrabold text-black tracking-[-2px] leading-[1.02] shrink-0">
            Let&apos;s build
            <br />
            <span className="text-niceBlue">something</span>
            <br />
            together.
          </h2>

          <div className="flex flex-row flex-wrap gap-4 sm:gap-6 lg:justify-end">
            {CONTACT_LINKS.map(({ label, href, tech }) => {
              const match = resolveIcon(tech);
              const Icon = match?.Icon;
              return (
                <Link
                  key={label}
                  title={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4  rounded-xl border border-black/10 hover:scale-110 hover:shadow-md backdrop-blur-sm transition-all duration-300 no-underline"
                >
                  {Icon && (
                    <Icon
                      size={25}
                      color={match!.color}
                      className="sm:w-9 sm:h-9"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 py-10 border-t border-black/10 flex gap-2 items-center xs:justify-center md:justify-end text-xs text-black/50">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="grayscale opacity-80"
          />
          EloiShema.dev &copy; {new Date().getFullYear()} • Kigali, Rwanda
        </div>
      </div>
    </section>
  );
}
