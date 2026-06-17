"use client";

import { useT } from "@/lib/i18n";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/LipDev-sudo",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lip.devbr/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamilton-felipe-875054383/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
  {
    label: "Email",
    href: "mailto:hamiltonfelipe019@gmail.com",
    path: "M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.523-.75 7.348 6.123a1 1 0 0 0 1.258 0L19.977 4.5H4.023Zm16.977 2.197-7.09 5.908a2.5 2.5 0 0 1-3.82 0L3 6.697V18.75c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V6.697Z",
  },
];

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 540 360"
      role="img"
      aria-label="Ilustração de desenvolvedor usando notebook"
      className="w-full max-w-[520px]"
    >
      <path d="M89 313h407" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <path d="M310 68c-16-15-43-9-48 12-4 17 5 33 21 37 18 4 34-5 39-22 3-10-2-21-12-27Z" fill="#111" />
      <path d="M289 94c-4 20 5 38 24 42 20 4 36-8 42-29 4-17-2-35-20-43" fill="#fff" stroke="#111" strokeWidth="3" />
      <path d="M292 91c17 5 35 1 47-10 5 12 17 19 30 22-1-28-20-47-48-51-26-3-46 10-51 32 5 4 12 6 22 7Z" fill="#111" />
      <path d="M323 134c-3 27-8 50-17 68" stroke="#fff" strokeWidth="3" />
      <path d="M252 143c-40 13-67 50-76 105l83 29c17-54 28-101 30-141-13 0-25 2-37 7Z" fill="#111" />
      <path d="M331 142c56 12 89 54 105 125l-88 29c-18-61-24-111-17-154Z" fill="#111" />
      <path d="M303 139c-12 36-21 76-26 120 33 10 61 10 91 0-6-45-16-85-29-120-11 4-23 4-36 0Z" fill="#111" />
      <path d="M302 146c12 9 25 9 38 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M371 168c25 16 44 41 58 78" stroke="#fff" strokeWidth="2" opacity=".8" />
      <path d="M387 206c18 7 38 13 58 17" stroke="#fff" strokeWidth="2" opacity=".8" />
      <path d="M238 164c-14 30-24 65-30 105" stroke="#fff" strokeWidth="2" opacity=".8" />
      <path d="M274 254h-162l-50-98h166l46 98Z" fill="#fff" stroke="#111" strokeWidth="4" />
      <path d="M116 254h210c13 0 23 10 23 23H128c-7 0-12-5-12-12v-11Z" fill="#fff" stroke="#111" strokeWidth="4" />
      <circle cx="161" cy="197" r="8" fill="#111" />
      <path d="M274 254c20 7 42 6 66-3" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <path d="M351 277c26 23 38 55 35 96H250c-7-39 1-70 24-93" fill="#fff" stroke="#111" strokeWidth="4" />
      <path d="M386 278c31 23 46 55 45 95H326c-8-36 1-67 27-93" fill="#fff" stroke="#111" strokeWidth="4" />
      <path d="M266 277c-15 17-25 39-31 66" stroke="#111" strokeWidth="3" />
      <path d="M352 280c-14 17-23 38-27 63" stroke="#111" strokeWidth="3" />
      <path d="M299 91c8 9 21 10 36 3" stroke="#111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Hero() {
  const t = useT();

  return (
    <section id="hero" className="template-hero bg-white pt-24 text-black">
      <div className="mx-auto grid min-h-[560px] max-w-[1080px] grid-cols-1 items-center gap-12 px-5 py-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="text-[2rem] font-normal leading-[1.25] tracking-[-0.04em] text-black sm:text-[2.7rem]">
            {t.hero.hello}{" "}
            <span className="font-black">{t.hero.name}</span>
          </h1>
          <h2 className="mt-2 text-[2.15rem] font-black leading-[1.08] tracking-[-0.04em] text-black sm:text-[3rem]">
            {t.hero.roleMain}{" "}
            <span className="text-outline">{t.hero.roleOutline}</span>
          </h2>
          <h3 className="mt-2 text-[2rem] font-normal leading-[1.15] tracking-[-0.04em] text-black sm:text-[2.75rem]">
            {t.hero.location}
          </h3>
          <p className="mt-7 max-w-[520px] text-[0.85rem] font-medium leading-relaxed text-black/45">
            {t.hero.description}
          </p>

          <div className="mt-16 flex items-center gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className={`flex h-10 w-10 items-center justify-center border-2 border-black transition-colors hover:bg-black hover:text-white ${
                  index === 0 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
