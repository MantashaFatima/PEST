
export default function BottomCTA() {
  return (
    <section className="bg-white px-4 pb-7 sm:px-6 sm:pb-9">
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-5 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#05264C] via-[#073B70] to-[#05264C] px-5 py-7 shadow-[0_8px_25px_rgba(5,38,76,0.15)] sm:px-8 lg:min-h-[120px] lg:flex-row lg:justify-between lg:gap-6 lg:px-8 lg:py-5">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-12 -top-16 h-44 w-44 rounded-full border-[20px] border-[#0E5689]/30" />
        <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[#0C6A9A]/20 blur-2xl" />

        {/* Left: Shield + Text */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">

          {/* Shield Icon */}
          <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border border-[#3C8B99]/30 bg-[#0B4B69]/60 shadow-inner">
            <div className="flex h-[62px] w-[54px] items-center justify-center rounded-[45%_45%_50%_50%] bg-gradient-to-br from-[#91E94A] via-[#25B83D] to-[#07852D] text-[35px] font-black text-white shadow-[0_4px_12px_rgba(21,155,69,0.4)]">
              ✓
            </div>
          </div>

          {/* Tagline */}
          <div>
            <h2 className="text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl lg:text-[21px]">
              Balaji Pest Control – Making Your Surroundings
            </h2>

            <p className="mt-1 text-xl font-extrabold leading-tight tracking-tight text-[#8BEA26] sm:text-2xl lg:text-[27px]">
              Clean, Safe & Pest-Free!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 hidden h-[62px] w-px bg-white/50 lg:block" />

        {/* Call Now Button */}
        <a
          href="tel:9599752537"
          className="relative z-10 inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#159B32] px-7 py-4 text-sm font-extrabold text-white shadow-[0_5px_15px_rgba(21,155,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#108529] hover:shadow-lg"
        >
          <span className="text-xl">☎</span>
          Call Now : 9599752537
        </a>

      </div>
    </section>
  );
}
