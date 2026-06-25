import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/about.png" alt="TCC Office" fill style={{ objectFit: "cover" }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="gold-text">Our Legacy</h1>
          <p className={styles.subtitle}>Precision. Integrity. Craftsmanship.</p>
        </div>
      </header>

      <section className={`section-padding ${styles.history}`}>
        <div className="container">
          <div className={styles.historyGrid}>
            <div className={styles.historyText}>
              <h2>The TCC Story</h2>
              <div className={styles.accentBar}></div>
              <p>
                Founded by Danny DeSantis, Tradecraft Consulting & Contracting was born from a vision to bring 
                unrivaled precision to the construction industry. With over two decades of hands-on experience 
                in complex structural projects, Danny established TCC as a boutique firm where quality never 
                takes a backseat to quantity.
              </p>
              <p>
                Today, TCC stands as a multi-disciplinary powerhouse, handling everything from high-voltage 
                industrial electrical systems to the fine finish carpentry of luxury penthouses. Our reputation 
                is built on the foundation of transparency, meticulous planning, and a relentless pursuit of excellence.
              </p>
            </div>
            <div className={`${styles.values} glass gold-border`}>
              <h3>Core Values</h3>
              <ul>
                <li><strong>Impeccable Standards:</strong> We do it right the first time, every time.</li>
                <li><strong>Direct Communication:</strong> You speak directly with the masters of the craft.</li>
                <li><strong>Safety First:</strong> Every job site is managed with the highest safety protocols.</li>
                <li><strong>Innovation:</strong> Integrating modern technology with traditional tradecraft.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.founderCard}>
            <div className={styles.founderImage}>
                <Image src="/careers.png" alt="Danny DeSantis Team" width={500} height={400} style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.founderText}>
              <h2 className="gold-text">The Mastermind</h2>
              <h3>Danny DeSantis, Founder</h3>
              <p>
                "Construction is not just about assembling materials; it's about engineering solutions that 
                last generations. My goal for TCC is to ensure that every client feels the weight of our 
                commitment from the first handshake to the final walkthrough."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
