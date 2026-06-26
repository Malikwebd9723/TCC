import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import { services } from "../services-data";

export default function ServicesPage() {
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
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
    }
  };

  return (
    <main className={styles.main}>
      {/* 1. Header Banner */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}>
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
            alt="All Services" 
            fill 
            style={{ objectFit: "cover" }} 
            priority 
            unoptimized 
          />
          <div className={styles.pageHeaderOverlay}></div>
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>ALL SERVICES</h1>
          {/* Breadcrumbs removed as per user instruction */}
        </div>
      </header>

      {/* 2. Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIcon}>
                    {getIcon(service.iconName)}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className={styles.readMore}>
                    Read More &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dark Stats Banner */}
      <section className={styles.statsBanner}>
        <div className={styles.statsBannerOverlay}></div>
        <div className="container">
          <div className={styles.statsBannerHeader}>
            <span className={styles.sectionBadgeLight}>We Provide Best Service For Your Business</span>
          </div>
          <div className={styles.statsCounterGrid}>
            <div className={styles.statBox}>
              <div className={styles.statIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3>1450</h3>
              <p>Projects Succeed</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>1864</h3>
              <p>Peoples Likes</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>1280</h3>
              <p>Awards Achieved</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707.707" />
                </svg>
              </div>
              <h3>678</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Team Section */}
      <section className={`section-padding ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadgeLight} style={{color: '#666'}}>Meet Our Team</span>
            <h2 className={styles.sectionTitle}>We Provide Best Service For Your Business</h2>
            <div className={styles.sectionLine}></div>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" 
                  alt="Danny DeSantis" 
                  width={280} 
                  height={320} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>Danny DeSantis</h4>
                <p>Principal Contractor</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" 
                  alt="Sarah Jenkins" 
                  width={280} 
                  height={320} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>Sarah Jenkins</h4>
                <p>Lead Project Manager</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" 
                  alt="Matthew Kowalski" 
                  width={280} 
                  height={320} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>Matthew Kowalski</h4>
                <p>Master Carpenter</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" 
                  alt="David Chen" 
                  width={280} 
                  height={320} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>David Chen</h4>
                <p>Lead Systems Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Creative Business Consulting Service Provider</h2>
            <Link href="/contact" className={styles.btnCta}>
              BECOME A CLIENT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
