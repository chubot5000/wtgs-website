const links = [
  { label: "Apple Podcasts", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Patreon", href: "https://patreon.com/wherethegiantssleep" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-16 px-6 text-center"
      style={{ backgroundColor: "#0f1720" }}
    >
      <p
        className="text-lg font-extrabold text-soft-fog mb-6"
        style={{ fontFamily: "var(--font-nunito), sans-serif" }}
      >
        Where the Giants Sleep
      </p>
      <nav className="flex flex-wrap justify-center gap-6 mb-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cloud-periwinkle hover:text-moon-glow transition text-sm"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <p
        className="text-soft-fog/40 italic"
        style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
      >
        Sleep well, dreamer.
      </p>
    </footer>
  );
}
