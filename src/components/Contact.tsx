import { CONTACT_LINKS, resolveIcon } from "@/data/projects";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-20 backdrop-blur-2xl border-t border-white/70"
    >
      <div className="max-w-7xl mx-auto px-5 pt-20">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-bold text-black/50 tracking-[2.5px] uppercase whitespace-nowrap">
            Get in Touch
          </span>
          <div className="flex-1 h-px bg-[#2f2f9d]/10" />
        </div>

        <div className="flex pr-20 justify-between items-center">
          <h2 className="text-7xl font-extrabold text-black">
            Let&apos;s build
            <br />
            <span className="text-niceBlue">something</span>
            <br />
            together.
          </h2>

          <div className="flex items-center gap-5">
            {CONTACT_LINKS.map(({ label, href, tech }) => {
              const match = resolveIcon(tech);
              const Icon = match?.Icon;
              return (
                <Link
                  title={label}
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 no-underline p-4 backdrop-blur-xl hover:scale-110 transition-all duration-500"
                >
                  <span key={tech}>
                    {Icon && <Icon size={35} color={match!.color} />}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-20 py-10 border-t border-black/15 flex justify-e text-xs text-black/60">
          Eloi-Shema © {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
