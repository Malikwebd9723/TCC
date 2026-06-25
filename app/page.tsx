import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { services } from "./services-data";

export default function Home() {
  const getIcon = (name: string) => {
    switch (name) {
      case "building":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "bolt":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "hammer":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3zM9 14l5-5m-9 7l9-9m-5 13l3-3l5 5l3-3" />
          </svg>
        );
      case "droplet":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case "fan":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 0l2 2m-2-2l-2 2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={`${styles.nav} glass`}>
        <div className={`container ${styles.navContent}`}>
          <div className={styles.logoSmall}>
            <svg width="30" height="30" viewBox="0 0 100 100">
              <polygon points="50,15 90,85 10,85" fill="none" stroke="#d4af37" strokeWidth="8" />
            </svg>
            <span className="gold-text">TCC</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero.png"
            alt="Premium Construction"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent} fade-in`}>
          <div className={styles.logoLarge}>
            <svg width="120" height="120" viewBox="0 0 100 100">
              <polygon points="50,15 90,85 10,85" fill="none" stroke="#d4af37" strokeWidth="4" />
            </svg>
          </div>
          <h1 className="gold-text">TCC</h1>
          <p className={styles.subheadline}>Tradecraft Consulting & Contracting</p>
          <div className={styles.divider}></div>
          <p className={styles.slogan}>
            "It's simple... You Schedule, I Install, You're Happy, I Get Paid"
          </p>
          <a href="#services" className={`${styles.cta} gold-border`}>
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`section-padding ${styles.services}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Specialized Services</h2>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className={`${styles.serviceCard} glass`}>
                <div className={styles.serviceIcon}>{getIcon(service.iconName)}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className={styles.learnMore}>Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section id="about" className={`section-padding ${styles.aboutSectionBody}`}>
        <div className="container">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutContent}>
              <h2 className="gold-text">About Tradecraft Consulting & Contracting</h2>
              <div className={styles.accentBar}></div>
              <p className={styles.mainAboutText}>
                Founded by <strong>Danny DeSantis</strong>, Tradecraft Consulting & Contracting (TCC) is a premier provider of construction and technical consulting services. With a focus on high-precision installations and industrial-grade quality, we serve the <strong>Residential, Commercial, and Industrial</strong> sectors.
              </p>
              <p className={styles.secondaryAboutText}>
                Our mission is to simplify the complex—providing clear schedules, professional installations, and guaranteed satisfaction. At TCC, we don't just build structures; we build trust through impeccable craftsmanship and transparent business practices. Whether it's a large-scale commercial HVAC overhaul or detailed residential electrical work, we bring the same level of excellence to every project.
              </p>
              <div className={styles.marketTags}>
                <span>Residential Expertise</span>
                <span>Commercial Excellence</span>
                <span>Industrial Precision</span>
              </div>
            </div>
            <div className={styles.aboutVisual}>
                <div className={`${styles.experienceBox} gold-border glass`}>
                    <span className={styles.expNumber}>20+</span>
                    <span className={styles.expLabel}>Years of Master Craftsmanship</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Contact Section */}
      <section id="contact" className={`section-padding ${styles.contactSectionBody}`}>
        <div className="container">
            <div className={`${styles.contactHero} glass gold-border`}>
                <h2 className="gold-text">Get In Touch</h2>
                <p>Available for consultations and estimates for your next high-priority project.</p>
                <div className={styles.contactDetailsGrid}>
                    <div className={styles.contactMethod}>
                        <strong>Call or Text</strong>
                        <a href="tel:3158794625" className={styles.contactLink}>(315) 879-4625</a>
                    </div>
                    <div className={styles.contactMethod}>
                        <strong>Email Address</strong>
                        <a href="mailto:tradecraftTCC@gmail.com" className={styles.contactLink}>tradecraftTCC@gmail.com</a>
                    </div>
                    <div className={styles.contactMethod}>
                        <strong>Business Direction</strong>
                        <span>Licensed & Insured Professional Services</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <p>&copy; {new Date().getFullYear()} Tradecraft Consulting & Contracting. All rights reserved.</p>
            <p>Quality Workmanship | Professional Service</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
