import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/hero.png" alt="Contact TCC" fill style={{ objectFit: "cover" }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="gold-text">Get In Touch</h1>
          <p className={styles.subtitle}>Let's discuss your next project.</p>
        </div>
      </header>

      <section className={`section-padding ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Contact Danny DeSantis</h2>
              <div className={styles.accentBar}></div>
              <p>
                Tradecraft Consulting & Contracting is currently taking on high-priority residential 
                and industrial projects in Upstate New York and surrounding areas.
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.method}>
                    <strong>Call or Text</strong>
                    <a href="tel:3158794625" className="gold-text">(315) 879-4625</a>
                </div>
                <div className={styles.method}>
                    <strong>Email</strong>
                    <a href="mailto:tradecraftTCC@gmail.com">tradecraftTCC@gmail.com</a>
                </div>
                <div className={styles.method}>
                    <strong>Location</strong>
                    <span>Serving Residential, Commercial, and Industrial Infrastructure</span>
                </div>
              </div>
            </div>
            
            <div className={styles.mapContainer}>
                <div className={`${styles.mapPlaceholder} glass gold-border`}>
                    <Image src="/about.png" alt="Service Area Map" fill style={{ objectFit: "cover", opacity: 0.5 }} />
                    <div className={styles.mapOverlay}>
                        <h3 className="gold-text">Regional Service Map</h3>
                        <p>Currently serving NY - (315) Area Code</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
