const features = [
  {
    title: "Guided Wind-Down",
    desc: "10 minutes of breathing exercises and body scan to ease you from wakefulness into rest.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-cloud-periwinkle mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4C14 4 8 14 8 24s6 20 16 20" strokeLinecap="round" />
        <path d="M24 4c4 6 6 12 6 20s-2 14-6 20" strokeLinecap="round" />
        <path d="M10 16h28M10 32h28" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Immersive Stories",
    desc: "25 minutes of poetic, first-person journeys through dreamlike landscapes.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-cloud-periwinkle mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6h14c2 0 4 2 4 4v30c0-2-2-4-4-4H8V6z" strokeLinejoin="round" />
        <path d="M40 6H26c-2 0-4 2-4 4v30c0-2 2-4 4-4h14V6z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Science-Backed",
    desc: "Techniques drawn from sleep research — cognitive shuffling, progressive relaxation, and more.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-cloud-periwinkle mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="18" r="10" />
        <path d="M18 28c-4 2-8 6-8 12h28c0-6-4-10-8-12" strokeLinejoin="round" />
        <path d="M20 14c1-2 3-3 4-3s3 1 4 3" strokeLinecap="round" />
        <circle cx="21" cy="17" r="1" fill="currentColor" />
        <circle cx="27" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
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
          What is this?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              {f.icon}
              <h3
                className="text-xl font-extrabold text-soft-fog mb-3"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                {f.title}
              </h3>
              <p
                className="text-cloud-periwinkle leading-relaxed italic"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
