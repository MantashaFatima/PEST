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

const LOGO_SRC = "/images/logo2.jpeg";

const PHONE_NUMBER = "9599752537";
const PHONE_HREF = "tel:+919599752537";
const WHATSAPP_NUMBER = "9999651595";
const WHATSAPP_HREF = "https://wa.me/919999651595";

// TODO: apne asli social media links yahan daalo
const INSTAGRAM_HREF = "https://www.instagram.com/your_instagram_id";
const FACEBOOK_HREF = "https://www.facebook.com/your_page";
const YOUTUBE_HREF = "https://www.youtube.com/@your_channel";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Termite Treatment", href: "#termite-treatment" },
    { label: "On-Site & Safety", href: "#work-safety" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact Us", href: "#contact" },
];

const services = [
    "Termite (Deemak) Treatment",
    "Cockroach Control",
    "Ant & Fly Control",
    "Rodent Control",
    "Post-Construction Pest Control",
    "Commercial & Office Pest Control",
];

const areas = ["Delhi", "Gurugram", "Noida", "Ghaziabad"];

/* ---------- Icons ---------- */
function PhoneIcon({ className = "h-4 w-4" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
        </svg>
    );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M12.04 2a9.9 9.9 0 00-8.46 15.04L2 22l5.1-1.34A9.9 9.9 0 1012.04 2zm0 18.1c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.03.8.81-2.95-.2-.31a8.1 8.1 0 1112.97-9.55 8.1 8.1 0 01-6 13.35zm4.45-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
        </svg>
    );
}

function InstagramIcon({ className = "h-5 w-5" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon({ className = "h-5 w-5" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3z" />
        </svg>
    );
}

function YouTubeIcon({ className = "h-5 w-5" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
        </svg>
    );
}

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

/* Colorful social tiles */
const socials = [
    {
        label: "Instagram",
        href: INSTAGRAM_HREF,
        Icon: InstagramIcon,
        tile: "bg-gradient-to-tr from-[#F9A826] via-[#E1306C] to-[#833AB4]",
    },
    {
        label: "WhatsApp",
        href: WHATSAPP_HREF,
        Icon: WhatsAppIcon,
        tile: "bg-[#25D366]",
    },
    {
        label: "Facebook",
        href: FACEBOOK_HREF,
        Icon: FacebookIcon,
        tile: "bg-[#1877F2]",
    },
    {
        label: "YouTube",
        href: YOUTUBE_HREF,
        Icon: YouTubeIcon,
        tile: "bg-[#FF0000]",
    },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-extrabold tracking-[-0.01em] text-white sm:text-base">
            {children}
            <span className="mt-2.5 block h-[3px] w-10 rounded-full bg-gradient-to-r from-[#1DB255] to-[#4ADE80]" />
        </h3>
    );
}

export default async function Footer() {
    'use cache';
    const year = new Date().getFullYear();

    return (
        <footer
            className={`${jakarta.variable} ${inter.variable} relative isolate overflow-hidden bg-gradient-to-b from-[#030B17] via-[#020813] to-[#01040A] font-[family-name:var(--font-body)] text-[#B8C4D6]`}
        >
            {/* Top accent line */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0752A0] via-[#1DB255] to-[#0752A0]"
            />
            {/* Very soft glows (kept subtle so the base stays near-black navy) */}
            <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[320px] w-[320px] rounded-full bg-[#0A7BC8]/[0.07] blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[320px] w-[320px] rounded-full bg-[#159B45]/[0.06] blur-3xl" />

            <div className="mx-auto max-w-[1440px] px-4 pb-8 pt-12 sm:px-8 sm:pt-14 lg:px-10 xl:px-16">
                {/* ===== Main columns ===== */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] lg:gap-10 xl:gap-14">
                    {/* Brand */}
                    <div>
                        <a href="#home" aria-label="Balaji Pest Control - Home" className="inline-block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={LOGO_SRC}
                                alt="Balaji Pest Control Service logo"
                                width={160}
                                height={70}
                                className="h-14 w-auto rounded-xl border border-white/10 bg-black object-contain p-0.5 shadow-[0_8px_22px_-12px_rgba(0,0,0,0.8)] sm:h-16"
                            />
                        </a>

                        <p className="mt-5 max-w-[360px] text-sm leading-[1.8] text-[#B8C4D6] sm:text-[15px]">
                            Professional, safe and effective pest control for homes, offices
                            and commercial properties across Delhi NCR. Certified treatments,
                            trained technicians and long-term warranty protection.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer quick links">
                        <FooterHeading>Quick Links</FooterHeading>
                        <ul className="mt-5 space-y-0.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex min-h-[34px] items-center gap-2 text-sm font-medium text-[#B8C4D6] transition-colors duration-200 hover:text-white sm:text-[15px]"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="text-[#4ADE80] transition-transform duration-200 group-hover:translate-x-1"
                                        >
                                            →
                                        </span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Services */}
                    <div>
                        <FooterHeading>Our Services</FooterHeading>
                        <ul className="mt-5 space-y-3">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="flex items-start gap-2.5 text-sm font-medium leading-snug text-[#B8C4D6] sm:text-[15px]"
                                >
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="footer-contact">
                        <FooterHeading>Contact Us</FooterHeading>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a
                                    href={PHONE_HREF}
                                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A7BC8]/50 hover:bg-white/[0.07]"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0752A0]">
                                        <PhoneIcon className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs font-medium text-[#8796AB]">Call Us</span>
                                        <span className="block font-[family-name:var(--font-heading)] text-lg font-extrabold leading-tight tracking-tight text-white">
                                            {PHONE_NUMBER}
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={WHATSAPP_HREF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/50 hover:bg-white/[0.07]"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                                        <WhatsAppIcon className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs font-medium text-[#8796AB]">WhatsApp</span>
                                        <span className="block font-[family-name:var(--font-heading)] text-lg font-extrabold leading-tight tracking-tight text-white">
                                            {WHATSAPP_NUMBER}
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ===== Highlight panel: CTA + Follow + Areas ===== */}
                <div className="mt-12 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] sm:mt-14 sm:p-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
                        {/* Free inspection */}
                        <div className="md:pr-8">
                            <h4 className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-[-0.015em] text-white sm:text-2xl">
                                Free Inspection
                            </h4>
                            <p className="mt-2 font-[family-name:var(--font-heading)] text-sm font-bold text-[#4ADE80] sm:text-base">
                                Pest-Free Home, Guaranteed.
                            </p>
                            <p className="mt-2.5 text-sm leading-[1.75] text-[#B8C4D6] sm:text-[15px]">
                                Book a doorstep inspection today and get certified treatment
                                with warranty protection.
                            </p>
                            <div className="mt-5 flex flex-col gap-3 min-[420px]:flex-row md:flex-col lg:flex-row">
                                <a
                                    href={PHONE_HREF}
                                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 font-[family-name:var(--font-heading)] text-sm font-extrabold text-[#0752A0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF4FF] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                                >
                                    <PhoneIcon className="h-4 w-4" />
                                    Call Now
                                </a>
                                <a
                                    href={WHATSAPP_HREF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1DB255] to-[#0F9A44] px-5 font-[family-name:var(--font-heading)] text-sm font-extrabold text-white shadow-[0_12px_26px_-10px_rgba(21,155,69,0.55)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                                >
                                    <WhatsAppIcon className="h-4 w-4" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Follow */}
                        <div className="border-t border-white/[0.08] pt-8 md:border-l md:border-t-0 md:px-8 md:pt-0">
                            <h4 className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-[-0.015em] text-white sm:text-2xl">
                                Follow Balaji Pest Control
                            </h4>
                            <ul className="mt-5 grid grid-cols-1 gap-3.5 min-[420px]:grid-cols-2">
                                {socials.map(({ label, href, Icon, tile }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Follow us on ${label}`}
                                            className="group flex items-center gap-3 rounded-xl text-[15px] font-semibold text-white transition-colors hover:text-[#4ADE80] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                                        >
                                            <span
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 ${tile}`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service areas */}
                        <div className="border-t border-white/[0.08] pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                            <h4 className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-[-0.015em] text-white sm:text-2xl">
                                Service Areas
                            </h4>
                            <p className="mt-2 text-sm leading-[1.75] text-[#B8C4D6] sm:text-[15px]">
                                Serving homes and businesses across Delhi NCR.
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2.5">
                                {areas.map((area) => (
                                    <li
                                        key={area}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3.5 py-2 text-[13px] font-semibold text-white"
                                    >
                                        <PinIcon className="h-3.5 w-3.5 text-[#4ADE80]" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ===== Bottom bar ===== */}
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center text-[13px] sm:flex-row sm:text-left">
                    <p className="text-[#B8C4D6]">
                        © {year}{" "}
                        <span className="font-bold text-white">Balaji Pest Control</span>. All
                        rights reserved.
                    </p>
                    <p className="text-[#8796AB]">
                        Safe • Effective • Reliable — Delhi, Gurugram, Noida &amp; Ghaziabad
                    </p>
                </div>
            </div>
        </footer>
    );
}