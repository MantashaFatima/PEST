import { Plus_Jakarta_Sans, Inter } from "next/font/google";

// Same font pairing as Hero, Services, Termite & On-Site: headings = Plus Jakarta Sans, body = Inter
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

const IMAGE_SRC = "/images/pest-control-technician-service.jpeg";

const benefits = [
  "Professional and reliable services",
  "Effective pest management solutions",
  "Affordable pricing",
  "Customer satisfaction is our priority",
  "Services for homes, offices and commercial properties",
];

const features = [
  { icon: "🛡️", title: "Trusted", subtitle: "Service" },
  { icon: "⚡", title: "Effective", subtitle: "Solutions" },
  { icon: "🤝", title: "Affordable", subtitle: "Pricing" },
  { icon: "😊", title: "Customer", subtitle: "Satisfaction" },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" aria-hidden="true">
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className={`${jakarta.variable} ${inter.variable} relative isolate overflow-hidden bg-gradient-to-br from-[#EAF4FF] via-[#F3F9FF] to-[#E3F0FE] py-14 font-[family-name:var(--font-body)] sm:py-20 lg:py-24`}
    >
      <div className="pointer-events-none absolute -left-28 top-10 -z-10 h-[360px] w-[360px] rounded-full bg-[#0752A0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#159B45]/10 blur-3xl" />
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

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 xl:gap-20 xl:px-16">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0752A0]/15 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0752A0] shadow-[0_4px_14px_-6px_rgba(7,82,160,0.25)] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#159B45]" />
            Our Promise
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0A1F3D] min-[400px]:text-[34px] sm:text-4xl lg:text-[40px] xl:text-[46px]">
            Why Choose
            <span className="mt-1 block bg-gradient-to-r from-[#073F82] via-[#0752A0] to-[#0A7BC8] bg-clip-text text-transparent">
              Balaji Pest Control?
            </span>
          </h2>

          <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#159B45] to-[#1DB255]" />
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
          </div>

          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-semibold leading-snug text-[#1E3A5F] shadow-[0_4px_14px_-8px_rgba(7,82,160,0.22)] backdrop-blur transition-all duration-300 hover:translate-x-1 hover:border-[#159B45]/25 hover:bg-white sm:text-[15px]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1DB255] to-[#159B45] text-white shadow-sm">
                  <CheckIcon />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          {/* Feature tiles */}
          <ul className="mt-8 grid grid-cols-2 gap-3 min-[560px]:grid-cols-4 sm:gap-4">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="group flex flex-col items-center rounded-2xl border border-[#D7E8FA] bg-white px-2 py-4 text-center shadow-[0_6px_20px_-10px_rgba(7,82,160,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0752A0]/35 hover:shadow-[0_16px_30px_-12px_rgba(7,82,160,0.35)]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E9F3FF] to-[#D3E7FC] text-[28px] ring-1 ring-inset ring-[#0752A0]/10 transition-transform duration-300 group-hover:scale-110"
                >
                  {feature.icon}
                </span>
                <p className="mt-3 font-[family-name:var(--font-heading)] text-[12.5px] font-bold leading-tight tracking-[-0.01em] text-[#0A1F3D] sm:text-[13px]">
                  {feature.title}
                  <br />
                  <span className="font-semibold text-[#159B45]">
                    {feature.subtitle}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE (visible on every device, never cropped) */}
        <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[28px] border-2 border-[#0752A0]/20 bg-gradient-to-br from-[#0752A0]/10 to-[#159B45]/10 sm:-bottom-4 sm:-right-4 sm:rounded-[36px]"
          />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border-[6px] border-white bg-[#DCEBFA] shadow-[0_30px_60px_-20px_rgba(7,60,120,0.40)] sm:rounded-[36px] sm:border-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGE_SRC}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGE_SRC}
              alt="Balaji Pest Control technician providing pest control service"
              loading="lazy"
              className="relative h-full w-full object-contain"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}