export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Moon */}
      <div
        className="absolute top-[8%] left-[12%] w-28 h-28 md:w-40 md:h-40 rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #f5e6c8, #C4A66A 60%, #8a7340)",
          boxShadow:
            "0 0 60px 20px rgba(196, 166, 106, 0.35), 0 0 120px 60px rgba(196, 166, 106, 0.15)",
        }}
      />

      {/* Clouds */}
      <div
        className="absolute top-[22%] left-[5%] w-64 h-16 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #B8CCE2, transparent)" }}
      />
      <div
        className="absolute top-[35%] right-[8%] w-80 h-12 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #7B9FCC, transparent)" }}
      />
      <div
        className="absolute bottom-[25%] left-[15%] w-96 h-14 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #B8CCE2, transparent)" }}
      />

      <h1
        className="font-[var(--font-nunito)] text-5xl md:text-7xl lg:text-8xl font-black text-moon-glow mb-6"
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          textShadow: "0 2px 20px rgba(123, 159, 204, 0.3)",
        }}
      >
        Where the Giants Sleep
      </h1>
      <p
        className="text-xl md:text-2xl text-soft-fog mb-10 italic font-light"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        A sleep podcast for the waking mind
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#episodes"
          className="px-8 py-3 bg-gold text-deep-night font-bold rounded-full hover:brightness-110 transition"
          style={{ fontFamily: "var(--font-nunito), sans-serif" }}
        >
          Listen Now
        </a>
        <a
          href="https://patreon.com/wherethegiantssleep"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border-2 border-moon-glow text-moon-glow rounded-full hover:bg-moon-glow/10 transition"
          style={{ fontFamily: "var(--font-nunito), sans-serif" }}
        >
          Support on Patreon
        </a>
      </div>

      {/* Bouncing chevron */}
      <a href="#about" className="absolute bottom-8 animate-bounce">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-soft-fog opacity-60"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
