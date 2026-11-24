import { Plus_Jakarta_Sans, Inter } from "next/font/google";

// Same font pairing as the rest of the site: headings = Plus Jakarta Sans, body = Inter
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const PHONE_NUMBER = "9599752537";
// International format: opens the dialer with the number pre-filled on every phone
const PHONE_HREF = "tel:+919599752537";

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" aria-hidden="true">
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BottomCTA() {
  return (
    <section
      className={`${jakarta.variable} ${inter.variable} bg-white px-4 pb-8 font-[family-name:var(--font-body)] sm:px-6 sm:pb-10 lg:px-10 xl:px-16`}
    >
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-[#052E5E] via-[#07407F] to-[#052E5E] px-5 py-8 shadow-[0_24px_50px_-18px_rgba(5,46,94,0.6)] ring-1 ring-inset ring-white/10 sm:px-8 sm:py-9 lg:flex-row lg:justify-between lg:gap-8 lg:px-10 lg:py-7">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-12 -top-16 h-44 w-44 rounded-full border-[20px] border-white/[0.06]" />
        <div className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[#159B45]/25 blur-3xl" />

        {/* Left: Icon + Text */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-5 sm:text-left">
          {/* Shield Icon */}
          <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-inner sm:h-[82px] sm:w-[82px]">
            <div className="flex h-[54px] w-[48px] items-center justify-center rounded-[45%_45%_50%_50%] bg-gradient-to-br from-[#4ADE80] via-[#1DB255] to-[#0F9A44] text-white shadow-[0_6px_16px_-4px_rgba(21,155,69,0.6)] sm:h-[62px] sm:w-[54px]">
              <CheckIcon />
            </div>
          </div>

          {/* Tagline */}
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-heading)] text-base font-bold leading-snug tracking-[-0.01em] text-white min-[400px]:text-lg sm:text-xl lg:text-[21px]">
              Balaji Pest Control – Making Your Surroundings
            </h2>
            <p className="mt-1 font-[family-name:var(--font-heading)] text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#4ADE80] min-[400px]:text-[22px] sm:text-2xl lg:text-[28px]">
              Clean, Safe &amp; Pest-Free!
            </p>
          </div>
        </div>

        {/* Divider (desktop only) */}
        <div className="relative z-10 hidden h-[62px] w-px bg-white/25 lg:block" aria-hidden="true" />

        {/* Call Now Button */}
        <a
          href={PHONE_HREF}
          aria-label={`Call Balaji Pest Control at ${PHONE_NUMBER}`}
          className="relative z-10 inline-flex min-h-[56px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1DB255] to-[#0F9A44] px-7 font-[family-name:var(--font-heading)] text-[15px] font-extrabold text-white shadow-[0_12px_26px_-8px_rgba(21,155,69,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(21,155,69,0.85)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 active:scale-[0.98] sm:w-auto sm:min-w-[300px] sm:text-base lg:w-auto"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
            <PhoneIcon className="h-4 w-4" />
          </span>
          Call Now : {PHONE_NUMBER}
        </a>
      </div>
    </section>
  );
}