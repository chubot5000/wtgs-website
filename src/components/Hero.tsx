import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Drift into the Void</h1>
        <p className={styles.subtitle}>
          Audio landscapes designed for deep rest. Stories from the edge of consciousness, narrated for the weary mind.
        </p>
        <a href="#" className={styles.cta}>
          <span className={styles.playIcon}>▶</span>
          Start Listening
        </a>
      </div>

      <div className={styles.moonWrap}>
        <div className={styles.atmosphere} />
        <div className={styles.moon} />
      </div>

      <div className={styles.scroll}>
        <span>Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
