import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const PHONE_NUMBER = "9599752537";
const PHONE_HREF = "tel:+919599752537";
const WHATSAPP_HREF = "https://wa.me/919999651595";

const termiteFeatures = [
  {
    title: "Anti-Termite Drilling & Injection",
    subtitle: "Door Frames & Skirting Treatment",
    desc: "Specialized precision drilling and chemical injection into infested wooden frames and foundation boundaries to form an impenetrable termite barrier.",
    image: "/images/termite-drilling-treatment.jpeg",
    tag: "Advanced Method",
  },
  {
    title: "Live-In Residential Treatment",
    subtitle: "Safe for You and Your Family",
    desc: "Eco-friendly, odorless and non-toxic treatments safely conducted while your family continues living comfortably in the house.",
    image: "/images/termite-treatment-residential.jpeg",
    tag: "100% Safe",
  },
  {
    title: "Active Colony Detection",
    subtitle: "High-Accuracy Inspection",
    desc: "Comprehensive diagnosis to pinpoint hidden subterranean and drywood termite colonies before they cause irreversible structural damage.",
    image: "/images/termite-infestation-close-up.jpeg",
    tag: "Early Detection",
  },
  {
    title: "Mud Tube & Nest Eradication",
    subtitle: "Complete Deep-Root Extermination",
    desc: "Direct elimination of mud shelter tubes and subterranean queen nests to guarantee zero recurrence of Deemak infestation.",
    image: "/images/termite-damage-wood-nest.jpeg",
    tag: "Root Elimination",
  },
  {
    title: "Cleanliness Meets Care",
    subtitle: "Hygienic & Spotless Post-Care",
    desc: "Ensuring your home remains clean, healthy, and spotless after treatment. We elevate cleanliness while safeguarding your space.",
    image: "/images/termite-care-cleanliness.jpeg",
    tag: "Hygiene Guaranteed",
  },
  {
    title: "Essential Property Protection",
    subtitle: "Protect Your Expensive Interiors",
    desc: "Protecting your health, wooden furniture, wardrobes, and walls from hidden pest intrusions with long-lasting warranty protection.",
    image: "/images/termite-control-essential.jpeg",
    tag: "Long-Term Warranty",
  },
];

function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
    </svg>
  );
}

function ChatIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 1114.1 5.1L20 21l-4.1-1.1A8 8 0 014 12z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity=".15"
      />
      <path
        d="M9.2 8.8c.2-.4.5-.4.7-.4h.4c.1 0 .3 0 .4.3l.6 1.4c.1.2 0 .4-.1.5l-.4.5c.6 1.1 1.4 1.8 2.5 2.4l.5-.5c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.2.3.4 0 .5-.4 1.3-1.2 1.5-.6.2-1.5 0-2.6-.6-1.4-.7-2.5-1.8-3.2-3.2-.6-1.1-.7-2-.4-2.6.1-.2.2-.3.4-.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function TermiteTreatment() {
  return (
    <section
      id="termite-treatment"
      className={`${jakarta.className} relative isolate overflow-hidden bg-gradient-to-b from-[#F5FAFF] via-white to-[#F0F7FF] py-14 sm:py-20 lg:py-24`}
    >
      <div className="pointer-events-none absolute -right-28 top-20 -z-10 h-[360px] w-[360px] rounded-full bg-[#0752A0]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-40 -z-10 h-[360px] w-[360px] rounded-full bg-[#159B45]/[0.07] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0752A0]/15 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0752A0] shadow-sm sm:text-xs">
            <span aria-hidden="true">🐜</span> Specialized Termite Management
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0B2545] min-[400px]:text-[32px] sm:text-4xl lg:text-[42px]">
            Complete Anti-Termite &amp;{" "}
            <span className="bg-gradient-to-r from-[#0752A0] to-[#0A7BC8] bg-clip-text text-transparent">
              Deemak Treatment
            </span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
            <span className="h-1 w-12 rounded-full bg-[#159B45]" />
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
          </div>

          <p className="mt-5 text-[15px] leading-[1.75] text-[#3A4F6A] sm:text-base">
            Termites silently damage costly wooden furniture, cabinets, doors,
            and building foundations. Balaji Pest Control provides certified,
            drill-fill-seal and pipe-barrier anti-termite treatments across
            Delhi, Noida, Gurugram &amp; Ghaziabad.
          </p>
        </div>

        {/* Feature Cards */}
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {termiteFeatures.map((item) => (
            <li key={item.title} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-3xl border border-[#D7E8FA] bg-white shadow-[0_10px_36px_-16px_rgba(7,82,160,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0752A0]/30 hover:shadow-[0_24px_48px_-18px_rgba(7,82,160,0.38)]">
                {/* Image: always fully visible */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E3EFFB]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0752A0] shadow-md backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#159B45]" />
                    {item.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-extrabold leading-snug tracking-[-0.01em] text-[#0B2545] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-[#159B45]">
                    {item.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-[1.7] text-[#3A4F6A]">
                    {item.desc}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="border-t border-[#E3EEFA] pt-4">
                      <a
                        href="#contact"
                        className="inline-flex min-h-[40px] items-center gap-2 text-[13px] font-bold text-[#0752A0] transition-colors hover:text-[#053D78] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0752A0]/25"
                      >
                        Book Free Inspection
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Callout Banner */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A4F9C] via-[#07407F] to-[#052E5E] p-6 text-white shadow-[0_24px_50px_-18px_rgba(5,46,94,0.6)] sm:mt-14 sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#159B45]/25 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[720px]">
              <h3 className="text-[22px] font-extrabold leading-tight tracking-[-0.02em] sm:text-2xl lg:text-[28px]">
                Suspecting Termites in your Wooden Wardrobes or Walls?
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#CFE6FF] sm:text-[15px]">
                Don&apos;t wait until wood hollows out. Get instant doorstep
                inspection and certified warranty solutions.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 min-[480px]:flex-row lg:w-auto">
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full bg-white px-7 text-sm font-extrabold text-[#0752A0] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF4FF] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 lg:flex-none"
              >
                <PhoneIcon />
                Call: {PHONE_NUMBER}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#1FBF5B] to-[#0F9A44] px-7 text-sm font-extrabold text-white shadow-[0_12px_26px_-8px_rgba(21,155,69,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(21,155,69,0.8)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 lg:flex-none"
              >
                <ChatIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}