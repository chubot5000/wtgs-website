"use client";

const episodes = [
  {
    num: 1,
    title: "The Cloud Kingdom",
    desc: "Chase a lost cloud creature through marshes and moonlit orchards.",
    duration: "~35 min",
  },
  {
    num: 2,
    title: "Space Drift",
    desc: "Float through nebulae on a decommissioned research vessel.",
    duration: "~35 min",
  },
];

export default function Episodes() {
  return (
    <section
      id="episodes"
      className="relative z-10 py-24 px-6"
      style={{ backgroundColor: "#1B2838" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-black text-moon-glow text-center mb-16"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            textShadow: "0 2px 12px rgba(123, 159, 204, 0.2)",
          }}
        >
          Episodes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((ep) => (
            <div
              key={ep.num}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#1a2536",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(123, 159, 204, 0.15), 0 4px 24px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.3)";
              }}
            >
              <span className="text-sm text-twilight-blue font-bold uppercase tracking-wider">
                Episode {ep.num}
              </span>
              <h3
                className="text-2xl font-extrabold text-moon-glow mt-2 mb-3"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                {ep.title}
              </h3>
              <p
                className="text-cloud-periwinkle italic leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
              >
                {ep.desc}
              </p>
              <span className="text-sm text-soft-fog/50">{ep.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
