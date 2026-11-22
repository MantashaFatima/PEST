import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const PHONE_HREF = "tel:+919599752537";

const executionPoints = [
  "Complete coverage of newly plastered walls, wood joinery & skirting",
  "Prevents termite invasion, silverfish & hidden cockroach nests",
  "Multi-point quality inspection before handover",
];

const safetyBadges = [
  { title: "N95 Respirators", icon: "😷" },
  { title: "Nitrile Gloves", icon: "🧤" },
  { title: "Eye Goggles", icon: "🥽" },
  { title: "Full Coveralls", icon: "🥼" },
  { title: "Odorless Chemicals", icon: "🌿" },
  { title: "Pet & Kid Safe", icon: "🐾" },
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

function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5.5c0 4.4-2.9 8.1-7 9.5-4.1-1.4-7-5.1-7-9.5V6l7-3z"
        fill="currentColor"
        opacity=".18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 12.2l2.2 2.2 4.2-4.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M4 21V9l8-5 8 5v12M9 21v-6h6v6M3 21h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M9 3l3 2.5L15 3l5 3-2 4-2-1v12H8V9l-2 1-2-4 5-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
    </svg>
  );
}

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  accent?: "blue" | "green";
}

/* Image card: the full image is always visible (object-contain),
   a blurred copy fills leftover space, caption sits below the image. */
function ImageCard({ src, alt, title, subtitle, accent = "blue" }: ImageCardProps) {
  const dot = accent === "green" ? "bg-[#159B45]" : "bg-[#0752A0]";
  return (
    <figure className="group overflow-hidden rounded-2xl border border-[#D7E8FA] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(7,82,160,0.28)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E3EFFB]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="flex items-start gap-2.5 border-t border-[#E3EEFA] px-4 py-3">
        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot}`} />
        <span>
          <span className="block text-[13px] font-bold leading-snug text-[#0B2545] sm:text-sm">
            {title}
          </span>
          <span className="mt-0.5 block text-xs leading-snug text-[#5A6F8A]">
            {subtitle}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function OnSiteAndSafety() {
  return (
    <section
      id="work-safety"
      className={`${jakarta.className} relative isolate overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-[#F2F8FF] to-[#F8FBFF] py-14 sm:py-20 lg:py-24`}
    >
      {/* Decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[360px] w-[360px] rounded-full bg-[#0752A0]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-[360px] w-[360px] rounded-full bg-[#159B45]/[0.08] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0752A0]/15 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0752A0] shadow-sm sm:text-xs">
            <ShieldIcon className="h-4 w-4 text-[#159B45]" />
            Verified Quality &amp; Safety
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0B2545] min-[400px]:text-[32px] sm:text-4xl lg:text-[42px]">
            Real On-Site Work &amp;{" "}
            <span className="bg-gradient-to-r from-[#0752A0] to-[#0A7BC8] bg-clip-text text-transparent">
              PPE Safety Standards
            </span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
            <span className="h-1 w-12 rounded-full bg-[#159B45]" />
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
          </div>

          <p className="mt-5 text-[15px] leading-[1.75] text-[#3A4F6A] sm:text-base">
            We don&apos;t just promise quality — we deliver it with fully equipped,
            verified pest control technicians wearing medical-grade PPE kits and
            using government-approved chemicals for residential and
            post-construction sites.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          {/* LEFT: On-Site Work */}
          <article className="flex flex-col rounded-3xl border border-[#D7E8FA] bg-white p-5 shadow-[0_10px_40px_-16px_rgba(7,82,160,0.18)] sm:p-8">
            <header className="flex items-start justify-between gap-4 border-b border-[#E3EEFA] pb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0752A0] sm:text-xs">
                  On-Site Execution
                </span>
                <h3 className="mt-1.5 text-xl font-extrabold leading-tight tracking-[-0.015em] text-[#0B2545] sm:text-2xl">
                  Post-Construction &amp; Commercial Treatments
                </h3>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E4F0FF] to-[#CFE4FB] text-[#0752A0]">
                <BuildingIcon />
              </span>
            </header>

            <p className="mt-5 text-sm leading-[1.75] text-[#3A4F6A] sm:text-[15px]">
              Before moving into newly built or renovated homes, offices, or
              apartments, our team carries out thorough deep-treatment across
              wall corners, electrical conduits, door jambs, and drainage ducts
              to eliminate subterranean pests permanently.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2">
              <ImageCard
                src="/images/post-construction-pest-control-team.jpeg"
                alt="Balaji Pest Control team on site wearing PPE kits"
                title="Trained On-Site Team"
                subtitle="Equipped with motorized sprayers"
              />
              <ImageCard
                src="/images/post-construction-wall-treatment.jpeg"
                alt="Technician spraying wall for post-construction pest control"
                title="Wall & Baseboard Spraying"
                subtitle="Deep residual chemical barrier"
              />
            </div>

            <ul className="mt-6 space-y-3">
              {executionPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[13px] font-semibold leading-snug text-[#1B365D] sm:text-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#159B45] text-white">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-[#E3EEFA] pt-6">
              <a
                href="#contact"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0756A7] to-[#063F7E] px-7 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(7,82,160,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-8px_rgba(7,82,160,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0752A0]/30 sm:w-auto"
              >
                Book Post-Construction Service
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>

          {/* RIGHT: Safety */}
          <article className="flex flex-col rounded-3xl border border-[#D7E8FA] bg-white p-5 shadow-[0_10px_40px_-16px_rgba(7,82,160,0.18)] sm:p-8">
            <header className="flex items-start justify-between gap-4 border-b border-[#E3EEFA] pb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#159B45] sm:text-xs">
                  Safety Protocol
                </span>
                <h3 className="mt-1.5 text-xl font-extrabold leading-tight tracking-[-0.015em] text-[#0B2545] sm:text-2xl">
                  Complete PPE Kit &amp; Safe Procedures
                </h3>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F8EA] to-[#C9EFD6] text-[#159B45]">
                <SuitIcon />
              </span>
            </header>

            <p className="mt-5 text-sm leading-[1.75] text-[#3A4F6A] sm:text-[15px]">
              Your family&apos;s health and safety is our foremost concern. Every
              technician follows strict safety protocols, equipped with masks,
              gloves, safety goggles, suits, and safety shoes.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2">
              <ImageCard
                accent="green"
                src="/images/pest-control-safety-infographic.jpeg"
                alt="Pest control safety standards infographic"
                title="Complete PPE Kit Guidelines"
                subtitle="Protection for Home & Health"
              />
              <ImageCard
                accent="green"
                src="/images/pest-control-banner.jpeg"
                alt="Balaji Pest Control service banner"
                title="Safe • Effective • Reliable"
                subtitle="Cockroach, Termite, Ant, Fly, Rodent"
              />
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {safetyBadges.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E1EEFB] bg-[#F4F9FF] px-3 py-2.5 text-xs font-bold leading-tight text-[#0A3D75] transition-colors hover:border-[#159B45]/30 hover:bg-[#EEF9F2]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-base shadow-sm"
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-[#E3EEFA] pt-6">
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#17A94C] to-[#0F8A38] px-7 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(21,155,69,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-8px_rgba(21,155,69,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#159B45]/30 sm:w-auto"
              >
                <PhoneIcon />
                Speak With Our Safety Expert
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}