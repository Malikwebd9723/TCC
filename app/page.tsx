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
          <div className={styles.heroCtas}>
            <Link href="/services" className={`${styles.cta} gold-border`}>
                Our Services
            </Link>
            <Link href="/contact" className={`${styles.ctaSecondary}`}>
                Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Service Intro */}
      <section className={`section-padding ${styles.featuredIntro}`}>
          <div className="container">
              <div className={styles.introGrid}>
                  <div className={styles.introImage}>
                      <Image src="/service-gc.png" alt="Excellence" width={600} height={500} style={{ objectFit: "cover" }} />
                  </div>
                  <div className={styles.introText}>
                      <h2 className="gold-text">Crafting Infrastructure with Precision</h2>
                      <p>
                          Tradecraft Consulting & Contracting represents the pinnacle of professional trade services. 
                          From high-voltage electrical arrays to complex HVAC climate controls, we deliver 
                          solutions that exceed standard expectations.
                      </p>
                      <Link href="/about" className={styles.linkText}>Learn about our mission &rarr;</Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className={`section-padding ${styles.services}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Specialized Solutions</h2>
          <div className={styles.serviceGrid}>
            {services.slice(0, 3).map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className={`${styles.serviceCard} glass`}>
                <div className={styles.serviceIcon}>{getIcon(service.iconName)}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className={styles.learnMore}>Explore Service &rarr;</span>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/services" className={styles.viewAll}>View All Services</Link>
          </div>
        </div>
      </section>

      {/* High-Impact Image Break */}
      <section className={styles.impactImage}>
          <Image src="/about.png" alt="Craftsmanship" fill style={{ objectFit: "cover", opacity: 0.6 }} />
          <div className={styles.impactContent}>
              <h2 className="gold-text">Built to Last.</h2>
          </div>
      </section>

      {/* Mini About/Team Section */}
      <section className={`section-padding ${styles.teamIntro}`}>
        <div className="container">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutContent}>
              <h2 className="gold-text">Danny DeSantis</h2>
              <p className={styles.mainAboutText}>
                The vision behind TCC is centered on two principles: transparency and mastery. 
                We remove the guesswork from contracting, providing a premium experience for every client.
              </p>
              <Link href="/careers" className={`${styles.cta} gold-border`}>Join the Team</Link>
            </div>
            <div className={styles.aboutVisual}>
                <Image src="/careers.png" alt="Our Team" width={500} height={400} style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
