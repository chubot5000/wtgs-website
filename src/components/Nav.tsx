import styles from "./Nav.module.css";

const links = ["Episodes", "About", "Listen", "Shop"];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>Where the Giants Sleep</span>
      <div className={styles.links}>
        {links.map((l) => (
          <a key={l} href="#" className={styles.link}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
