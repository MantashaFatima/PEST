import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  { icon: "🪳", title: "Cockroach", subtitle: "Control" },
  { icon: "🐜", title: "Termite Control", subtitle: "(Deemak Treatment)" },
  { icon: "🐀", title: "Rat & Mouse", subtitle: "Control" },
  { icon: "🛏️", title: "Bed Bug Control", subtitle: "(Khatmal)" },
  { icon: "🦎", title: "Lizard Control", subtitle: "(Chhipkali)" },
  { icon: "🦟", title: "Mosquito & Fly", subtitle: "Control" },
  { icon: "🛡️", title: "General Pest", subtitle: "Control" },
  { icon: "🏠", title: "Residential & Commercial", subtitle: "Pest Management" },
];

export default function Services() {
  return (
    <section
      id="services"
      className={`${jakarta.className} relative isolate overflow-hidden bg-gradient-to-b from-[#FBFDFF] via-[#F3F9FF] to-[#FBFDFF] py-14 sm:py-20 lg:py-24`}
    >
      <div className="pointer-events-none absolute -left-28 top-16 -z-10 h-[340px] w-[340px] rounded-full bg-[#0752A0]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 -z-10 h-[340px] w-[340px] rounded-full bg-[#159B45]/[0.07] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10 xl:px-16">
        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0752A0]/15 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0752A0] shadow-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#159B45]" />
            What We Do
          </div>

          <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.025em] text-[#0B2545] sm:text-4xl lg:text-[42px]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0752A0] to-[#0A7BC8] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
            <span className="h-1 w-12 rounded-full bg-[#159B45]" />
            <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
          </div>
        </div>

        {/* Services + Promotional Panel */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] xl:gap-8">
          {/* Services Grid (8 items → clean 2×4 / 4×2 layouts) */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {services.map((service) => (
              <li key={service.title} className="flex">
                <a
                  href={
                    service.title.includes("Termite")
                      ? "#termite-treatment"
                      : "#contact"
                  }
                  className="group relative flex w-full min-h-[150px] flex-col items-center justify-center rounded-2xl border border-[#D7E8FA] bg-white px-3 py-6 text-center shadow-[0_6px_20px_-10px_rgba(7,82,160,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0752A0]/40 hover:shadow-[0_18px_34px_-14px_rgba(7,82,160,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0752A0]/25 sm:min-h-[165px] lg:min-h-[175px]"
                >
                  {/* top accent line on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-[3px] origin-center scale-x-0 rounded-b-full bg-gradient-to-r from-[#0752A0] to-[#159B45] transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <span
                    aria-hidden="true"
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E9F3FF] to-[#D3E7FC] text-[30px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 sm:h-16 sm:w-16 sm:text-[34px]"
                  >
                    {service.icon}
                  </span>

                  <h3 className="text-[13px] font-bold leading-[1.35] text-[#0B2545] sm:text-sm">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] font-medium leading-tight text-[#5A6F8A] sm:text-xs">
                    {service.subtitle}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          {/* Promotional Panel */}
          <div className="relative flex min-h-[240px] flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A4F9C] via-[#07407F] to-[#052E5E] p-7 text-white shadow-[0_24px_50px_-18px_rgba(5,46,94,0.6)] sm:p-9 lg:min-h-full">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-[#159B45]/25 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#8FD3FF]">
                <span className="h-px w-6 bg-[#4ADE80]" />
                A Healthier Home Starts Here
              </span>

              <h3 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[32px] xl:text-4xl">
                Pest-Free
                <br />
                Environment
              </h3>

              <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-[#CFE6FF]">
                Clean spaces. Comfortable living. Professional pest management.
              </p>

              <a
                href="#contact"
                className="group mt-7 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-white px-6 text-[13px] font-extrabold text-[#074787] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF4FF] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Book a Service
                <span
                  aria-hidden="true"
                  className="text-base transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 right-3 text-[110px] leading-none text-white/[0.07]"
            >
              ✳
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}