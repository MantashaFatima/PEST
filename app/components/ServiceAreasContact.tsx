import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const PHONE_NUMBER = "9599752537";
const PHONE_HREF = "tel:+919599752537";
const WHATSAPP_NUMBER = "9999651595";
const WHATSAPP_HREF = "https://wa.me/919999651595";

const areas = [
  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Noida",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Ghaziabad",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=700&q=85",
  },
];

function PinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 005 9.5C5 14.9 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
    </svg>
  );
}

function ChatIcon({ className = "h-5 w-5" }) {
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

export default function ServiceAreasContact() {
  return (
    <section
      id="areas"
      className={`${jakarta.className} relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F5FAFF] to-white py-14 sm:py-20`}
    >
      <div className="pointer-events-none absolute -right-28 top-0 -z-10 h-[340px] w-[340px] rounded-full bg-[#0752A0]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-[340px] w-[340px] rounded-full bg-[#159B45]/[0.07] blur-3xl" />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1fr_360px] lg:gap-10 lg:px-10 xl:grid-cols-[1fr_400px] xl:gap-14 xl:px-16">
        {/* SERVICE AREAS */}
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0752A0]/15 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0752A0] shadow-sm sm:text-xs">
              <PinIcon className="h-3.5 w-3.5 text-[#159B45]" />
              Delhi NCR Coverage
            </div>

            <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.025em] text-[#0B2545] sm:text-3xl lg:text-[36px]">
              Our{" "}
              <span className="bg-gradient-to-r from-[#0752A0] to-[#0A7BC8] bg-clip-text text-transparent">
                Service Areas
              </span>
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
              <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
              <span className="h-1 w-12 rounded-full bg-[#159B45]" />
              <span className="h-1 w-3 rounded-full bg-[#0752A0]/40" />
            </div>

            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[#3A4F6A] sm:text-base">
              Delhi, Gurugram, Noida, Ghaziabad and surrounding Delhi NCR areas.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-4">
            {areas.map((area) => (
              <li
                key={area.name}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border-[3px] border-white bg-[#DCEBFA] shadow-[0_10px_30px_-12px_rgba(7,82,160,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_-12px_rgba(7,82,160,0.45)] sm:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={area.image}
                  alt={`${area.name} city view`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041F43]/90 via-[#041F43]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 p-3 text-white sm:p-4">
                  <PinIcon className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                  <h3 className="text-sm font-bold tracking-wide sm:text-[15px]">
                    {area.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div
          id="contact"
          className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A4F9C] via-[#07407F] to-[#052E5E] p-6 text-white shadow-[0_24px_50px_-18px_rgba(5,46,94,0.6)] sm:p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#159B45]/25 blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-2xl font-extrabold tracking-[-0.02em] sm:text-[28px]">
              Contact Us
            </h2>
            <p className="mt-1.5 text-sm font-bold tracking-[0.14em] text-[#8FD3FF] sm:text-base">
              BALAJI PEST CONTROL
            </p>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#4ADE80]" aria-hidden="true" />
          </div>

          <div className="relative mt-6 space-y-3">
            {/* Phone */}
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0752A0] shadow-md">
                <PhoneIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-[#BFDFFF] sm:text-[13px]">
                  Contact Number:
                </span>
                <span className="block text-[22px] font-extrabold leading-tight tracking-tight sm:text-2xl">
                  {PHONE_NUMBER}
                </span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
                <ChatIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-[#BFDFFF] sm:text-[13px]">
                  WhatsApp Number:
                </span>
                <span className="block text-[22px] font-extrabold leading-tight tracking-tight sm:text-2xl">
                  {WHATSAPP_NUMBER}
                </span>
              </span>
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#1FBF5B] to-[#0F9A44] px-6 text-sm font-bold text-white shadow-[0_12px_26px_-8px_rgba(21,155,69,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(21,155,69,0.8)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            <ChatIcon className="h-5 w-5" />
            Chat on WhatsApp
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}