import Link from "next/link";
import { services } from "../services-data";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <svg width="50" height="50" viewBox="0 0 100 100">
              <polygon points="50,15 90,85 10,85" fill="none" stroke="#d4af37" strokeWidth="6" />
            </svg>
            <h2 className="gold-text">TCC</h2>
          </div>
          <p className={styles.slogan}>
            "It's simple... You Schedule, I Install, You're Happy, I Get Paid"
          </p>
          <div className={styles.details}>
            <p>Tradecraft Consulting & Contracting</p>
            <p>Danny DeSantis | Upstate NY</p>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3>Navigation</h3>
          <ul className={styles.simpleLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>Expertise</h3>
          <ul className={styles.simpleLinks}>
            {services.map(s => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h3>Get In Touch</h3>
          <div className={styles.contactItem}>
            <strong>Direct Line</strong>
            <a href="tel:3158794625" className="gold-text">(315) 879-4625</a>
          </div>
          <div className={styles.contactItem}>
            <strong>Email Info</strong>
            <a href="mailto:tradecraftTCC@gmail.com">tradecraftTCC@gmail.com</a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} Tradecraft Consulting & Contracting. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative large logo background */}
      <div className={styles.footerBgLogo}>
        <svg width="600" height="600" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="none" stroke="rgba(212, 175, 55, 0.03)" strokeWidth="0.5" />
        </svg>
      </div>
    </footer>
  );
}
