import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>Where the Giants Sleep</span>
        <div className={styles.socials}>
          <a href="#" className={styles.social}>Instagram</a>
          <a href="#" className={styles.social}>Spotify</a>
          <a href="#" className={styles.social}>Apple</a>
        </div>
        <p className={styles.copy}>© 2025 Where the Giants Sleep</p>
      </div>
    </footer>
  );
}
