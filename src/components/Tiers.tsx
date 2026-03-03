const tiers = [
  {
    name: "Drifter",
    price: "Free",
    icon: "★",
    desc: "Free episodes, weekly release",
    popular: false,
  },
  {
    name: "Dreamer",
    price: "$5/mo",
    icon: "☽",
    desc: "Early access, bonus content, ad-free",
    popular: true,
  },
  {
    name: "Giant",
    price: "$15/mo",
    icon: "◉",
    desc: "Custom story submissions, name in credits, exclusive episodes",
    popular: false,
  },
];

export default function Tiers() {
  return (
    <section
      className="relative z-10 py-24 px-6"
      style={{ backgroundColor: "#151f2d" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-black text-moon-glow mb-16"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            textShadow: "0 2px 12px rgba(123, 159, 204, 0.2)",
          }}
        >
          Support the Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <a
              key={tier.name}
              href="https://patreon.com/wherethegiantssleep"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 no-underline"
              style={{
                backgroundColor: "#1a2536",
                boxShadow: tier.popular
                  ? "0 0 24px rgba(196, 166, 106, 0.2), 0 4px 24px rgba(0,0,0,0.3)"
                  : "0 4px 24px rgba(0,0,0,0.3)",
                border: tier.popular ? "1px solid rgba(196, 166, 106, 0.3)" : "1px solid transparent",
              }}
            >
              {tier.popular && (
                <span className="absolute -top-3 bg-gold text-deep-night text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <span
                className="text-4xl mb-4"
                style={{
                  color: tier.name === "Giant" ? "#C4A66A" : undefined,
                  textShadow:
                    tier.name === "Giant"
                      ? "0 0 12px rgba(196, 166, 106, 0.5)"
                      : undefined,
                }}
              >
                {tier.icon}
              </span>
              <h3
                className="text-xl font-extrabold text-moon-glow mb-1"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                {tier.name}
              </h3>
              <span className="text-gold font-bold text-lg mb-4">{tier.price}</span>
              <p
                className="text-cloud-periwinkle italic leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.05rem" }}
              >
                {tier.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
