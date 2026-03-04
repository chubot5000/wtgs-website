"use client";

import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <section className={styles.section}>
      <div className={styles.line} />
      <h2 className={styles.heading}>Join the Slumber</h2>
      <p className={styles.subtitle}>Receive new episodes and quiet thoughts in your inbox.</p>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="your@email.com" className={styles.input} />
        <button type="submit" className={styles.button}>Wake Me</button>
      </form>
    </section>
  );
}
