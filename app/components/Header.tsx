"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "95997 52537";
const PHONE_HREF = "tel:+919599752537";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Services", href: "#services" },
  { name: "Termite Treatment", href: "#termite-treatment" },
  { name: "On-Site & Safety", href: "#work-safety" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Service Areas", href: "#areas" },
  { name: "Contact Us", href: "#contact" },
];

function PhoneIcon({ className = "h-[17px] w-[17px]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Shadow / compact style after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Auto-close the mobile menu when screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-blue-100 shadow-[0_4px_24px_-8px_rgba(7,82,160,0.25)]"
          : "border-blue-100/70 shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8 xl:h-[78px] xl:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
          aria-label="Balaji Pest Control Home"
        >
          <svg
            viewBox="0 0 76 70"
            className="h-[48px] w-[52px] sm:h-[56px] sm:w-[61px] xl:h-[62px] xl:w-[68px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 29L38 4L72 29H57L38 15L19 29H4Z" fill="#07509B" />
            <path d="M14 29H62V49L38 66L14 49V29Z" fill="#07509B" />
            <path
              d="M38 31C30 31 23 37 23 44C23 53 31 59 38 62C45 59 53 53 53 44C53 37 46 31 38 31Z"
              fill="#169B45"
            />
            <path
              d="M38 35L41 44L49 39L44 47L49 53L40 51L35 59L34 49L26 46L35 43L38 35Z"
              fill="white"
            />
          </svg>

          <div className="flex flex-col leading-none">
            <span className="text-[22px] font-extrabold tracking-[-1px] text-[#08478B] sm:text-[26px] xl:text-[30px]">
              BALAJI
            </span>
            <span className="mt-1 text-[10.5px] font-extrabold tracking-[0.2px] text-[#08478B] sm:text-[13px] xl:text-[15px]">
              PEST CONTROL
            </span>
          </div>
        </a>

        {/* Desktop Navigation (xl and up) */}
        <nav
          className="hidden items-center gap-7 xl:flex 2xl:gap-9"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#0752A0]"
                    : "text-[#101C30] hover:text-[#0752A0]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-[5px] left-0 h-[2px] w-full origin-left rounded-full bg-[#0752A0] transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Call Now: compact on phones, full on sm+ ; tap opens dialer */}
          <a
            href={PHONE_HREF}
            aria-label={`Call now ${PHONE_DISPLAY}`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0756A7] to-[#073F82] px-3.5 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 sm:h-[42px] sm:px-6"
          >
            <PhoneIcon />
            <span className="hidden min-[400px]:inline">Call Now</span>
          </a>

          {/* Hamburger (below xl) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 text-[#0752A0] transition-colors hover:bg-blue-50 active:bg-blue-100 xl:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out xl:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-blue-100 bg-white px-4 pb-5 pt-2 shadow-lg sm:max-h-[calc(100dvh-72px)] sm:px-6">
            <nav
              className="mx-auto flex max-w-xl flex-col"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border-b border-gray-100 py-3.5 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "text-[#0752A0]"
                        : "text-[#142B49] hover:text-[#0752A0]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-[#0752A0] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                );
              })}

              <a
                href={PHONE_HREF}
                tabIndex={menuOpen ? 0 : -1}
                className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0756A7] to-[#073F82] text-[15px] font-bold text-white shadow-md active:scale-[0.98]"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                Call Now: {PHONE_DISPLAY}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}