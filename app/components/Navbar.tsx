"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "../services-data";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`${styles.nav} glass`}>
      <div className={`container ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          <svg width="40" height="40" viewBox="0 0 100 100">
            <polygon points="50,15 90,85 10,85" fill="none" stroke="#d4af37" strokeWidth="6" />
          </svg>
          <div className={styles.logoText}>
              <span className="gold-text">TCC</span>
              <span className={styles.logoSubText}>Tradecraft</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <div className={styles.navLinkWrapper}>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
          </div>
          
          <div className={styles.dropdown}>
            <Link href="/services" className={pathname.startsWith("/services") ? styles.active : ""}>
                Services <span className={styles.chevron}>▾</span>
            </Link>
            <div className={`${styles.dropdownContent} glass`}>
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.navLinkWrapper}>
            <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
          </div>
          <div className={styles.navLinkWrapper}>
            <Link href="/careers" className={pathname === "/careers" ? styles.active : ""}>Careers</Link>
          </div>
          <div className={styles.navLinkWrapper}>
            <Link href="/contact" className={`${styles.contactCta} gold-border`}>Get In Touch</Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <div className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerOpen : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileLinks}>
          <Link href="/" onClick={toggleMobileMenu}>Home</Link>
          <div className={styles.mobileSubheading}>Services</div>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} onClick={toggleMobileMenu} className={styles.mobileSubLink}>
              {service.title}
            </Link>
          ))}
          <Link href="/about" onClick={toggleMobileMenu}>About</Link>
          <Link href="/careers" onClick={toggleMobileMenu}>Careers</Link>
          <Link href="/contact" onClick={toggleMobileMenu} className={styles.mobileContactBtn}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
