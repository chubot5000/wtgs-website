export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Moon — dimmer, smaller, more atmospheric */}
      <div
        className="absolute top-[10%] left-[14%] w-20 h-20 md:w-28 md:h-28 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #d4c9a8, #9a8860 70%, #5a4e35)",
          boxShadow:
            "0 0 50px 15px rgba(160, 140, 90, 0.2), 0 0 100px 50px rgba(160, 140, 90, 0.08)",
        }}
      />

      {/* Clouds — very faint wisps */}
      <div
        className="absolute top-[22%] left-[5%] w-72 h-20 rounded-full opacity-[0.035]"
        style={{ background: "radial-gradient(ellipse, #8a9ab0, transparent)" }}
      />
      <div
        className="absolute top-[40%] right-[6%] w-96 h-14 rounded-full opacity-[0.025]"
        style={{ background: "radial-gradient(ellipse, #6a7f9c, transparent)" }}
      />
      <div
        className="absolute bottom-[30%] left-[10%] w-80 h-12 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse, #8a9ab0, transparent)" }}
      />

      {/* Title — serif, muted, quiet */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl text-soft-fog/80 mb-4 italic font-light tracking-wide"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          textShadow: "0 2px 30px rgba(100, 120, 160, 0.15)",
          lineHeight: 1.15,
        }}
      >
        Where the Giants Sleep
      </h1>
      <p
        className="text-lg md:text-xl text-cloud-periwinkle/50 mb-12 italic font-light tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(0.75rem, 1.5vw, 1.1rem)",
          letterSpacing: "0.25em",
        }}
      >
        A sleep podcast for the waking mind
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#episodes"
          className="px-8 py-3 bg-gold/70 text-deep-night font-medium rounded-full hover:bg-gold/85 transition-all duration-500"
          style={{ fontFamily: "var(--font-cormorant), serif", letterSpacing: "0.08em" }}
        >
          Listen Now
        </a>
        <a
          href="https://patreon.com/wherethegiantssleep"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-soft-fog/20 text-soft-fog/50 rounded-full hover:border-soft-fog/40 hover:text-soft-fog/70 transition-all duration-500"
          style={{ fontFamily: "var(--font-cormorant), serif", letterSpacing: "0.08em" }}
        >
          Support on Patreon
        </a>
      </div>

      {/* Bouncing chevron */}
      <a href="#about" className="absolute bottom-8 animate-bounce">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-soft-fog opacity-30"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
