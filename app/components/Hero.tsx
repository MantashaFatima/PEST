import { Plus_Jakarta_Sans, Inter } from "next/font/google";

// Headings: geometric, confident. Body: neutral & highly readable.
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

const IMAGE_SRC = "/images/post-construction-spraying.jpeg";

const audiences = ["Homes", "Offices", "Shops", "Restaurants", "Industries"];

export default function Hero() {
  return (
    <section
      id="home"
      className={`${jakarta.variable} ${inter.variable} relative isolate overflow-hidden bg-gradient-to-br from-[#F2F8FF] via-white to-[#EAF3FF] font-[family-name:var(--font-body)]`}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-[#0752A0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#159B45]/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(#0752A0 0.6px, transparent 0.6px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 30%, transparent)",
        }}
      />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-10 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-10 lg:py-16 xl:gap-16 xl:px-16 xl:py-20">
        {/* LEFT CONTENT */}
        <div className="relative z-10 order-2 lg:order-1">
          {/* Badge */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#0752A0]/15 bg-white/90 py-1.5 pl-1.5 pr-4 shadow-[0_4px_14px_-6px_rgba(7,82,160,0.25)] backdrop-blur sm:mb-6">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1DB255] to-[#0F7F36] text-[13px] font-bold text-white">
              ✓
            </span>
            <span className="text-[11.5px] font-semibold tracking-wide text-[#0A3D75] sm:text-[13px]">
              Complete Pest Control Solutions – Delhi NCR
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[680px] font-[family-name:var(--font-heading)] text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0A1F3D] min-[400px]:text-[38px] sm:text-5xl lg:text-[50px] xl:text-[60px]">
            Welcome to
            <span className="mt-1 block bg-gradient-to-r from-[#073F82] via-[#0752A0] to-[#0A7BC8] bg-clip-text text-transparent">
              Balaji Pest Control
            </span>
          </h1>

          {/* Accent line */}
          <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#159B45] to-[#1DB255]" />
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
          </div>

          {/* Description */}
          <div className="mt-5 max-w-[600px] space-y-4 text-[15px] leading-[1.8] text-[#475569] sm:text-base">
            <p>
              Balaji Pest Control is a trusted pest management service provider
              offering professional and effective pest control solutions for{" "}
              <span className="font-semibold text-[#0A1F3D]">
                homes, offices, shops, restaurants, commercial spaces
              </span>{" "}
              and industries.
            </p>
            <p>
              Our goal is to provide a clean, hygienic and pest-free
              environment through reliable service, proper treatment and
              customer satisfaction.
            </p>
          </div>

          {/* Audience chips */}
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="We serve">
            {audiences.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#0752A0]/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0A3D75] shadow-[0_2px_8px_-3px_rgba(7,82,160,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#159B45]/40 hover:shadow-md sm:text-[13px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#159B45]" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:items-center sm:gap-4">
            <a
              href="#services"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0756A7] to-[#063F7E] px-8 font-[family-name:var(--font-heading)] text-[15px] font-bold text-white shadow-[0_10px_24px_-6px_rgba(7,82,160,0.5)] ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-6px_rgba(7,82,160,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0752A0]/30"
            >
              Our Services
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-[#0752A0] bg-white px-8 font-[family-name:var(--font-heading)] text-[15px] font-bold text-[#0752A0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0752A0] hover:text-white hover:shadow-[0_10px_24px_-8px_rgba(7,82,160,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0752A0]/30"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 mx-auto w-full max-w-[640px] lg:order-2 lg:max-w-none">
          {/* Offset decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[28px] border-2 border-[#0752A0]/20 bg-gradient-to-br from-[#0752A0]/10 to-[#159B45]/10 sm:-bottom-4 sm:-right-4 sm:rounded-[36px]"
          />

          {/* Image card: photo fills the whole frame edge to edge (no side gaps) */}
          <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-[28px] border-[6px] border-white bg-[#DCEBFA] shadow-[0_30px_60px_-20px_rgba(7,60,120,0.45)] sm:rounded-[36px] sm:border-8 lg:aspect-[1/1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGE_SRC}
              alt="Professional Balaji Pest Control technician in PPE kit spraying walls"
              className="absolute inset-0 h-full w-full object-cover object-[center_55%]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Soft bottom shade + inner ring for a premium finish */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#06223F]/25 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5" />
          </div>

          {/* Safety shield badge */}
          <div className="absolute -left-2 top-4 z-10 flex h-[104px] w-[96px] flex-col items-center justify-center text-center text-white drop-shadow-xl min-[400px]:-left-3 sm:-left-6 sm:top-8 sm:h-[140px] sm:w-[130px] lg:-left-8 xl:-left-10 xl:h-[155px] xl:w-[142px]">
            <svg
              viewBox="0 0 140 155"
              className="absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1DB255" />
                  <stop offset="1" stopColor="#0F7F36" />
                </linearGradient>
              </defs>
              <path
                d="M70 5 L130 29 L124 88 Q116 127 70 150 Q24 127 16 88 L10 29 Z"
                fill="url(#shieldGrad)"
                stroke="white"
                strokeWidth="5"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              <svg
                viewBox="0 0 48 48"
                className="mb-0.5 h-7 w-7 sm:mb-1 sm:h-10 sm:w-10 xl:h-12 xl:w-12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M24 5L29 10H36V17L42 22L38 29L39 37L30 38L24 44L18 38L9 37L10 29L6 22L12 17V10H19L24 5Z"
                  fill="white"
                  opacity=".95"
                />
                <path
                  d="M15 24L21 30L33 18"
                  stroke="#159B3D"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-[family-name:var(--font-heading)] text-[10px] font-extrabold leading-tight sm:text-[13px] xl:text-[15px]">
                Clean · Safe
                <br />
                Pest-Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}