"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "../services-data";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.headerScrolled : ""}`}>
      {/* Premium Top Bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarContent}`}>
          <div className={styles.topbarInfo}>
            <span className={styles.infoItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (555) 123-4567
            </span>
            <span className={styles.infoItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              danny@tradecraftcc.com
            </span>
            <span className={styles.infoItemMobileHide}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon - Sat: 8:00 AM - 6:00 PM
            </span>
          </div>
          <div className={styles.topbarCta}>
            <Link href="/contact" className={styles.topCtaLink}>Get Free Quote</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          <Link href="/" className={styles.logo}>
            <svg width="36" height="36" viewBox="0 0 100 100" className={styles.logoSvg}>
              <polygon points="50,15 90,85 10,85" fill="none" stroke="#c5a028" strokeWidth="8" />
            </svg>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>TCC</span>
              <span className={styles.logoSubText}>Tradecraft Consulting</span>
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
              <div className={`${styles.dropdownContent} glass-light`}>
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
          <button className={styles.closeBtn} onClick={toggleMobileMenu} aria-label="Close Menu">
            &times;
          </button>
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
    </header>
  );
}
