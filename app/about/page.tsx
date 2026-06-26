import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* 1. Header Banner */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}>
          <Image 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200" 
            alt="About Us Banner" 
            fill 
            style={{ objectFit: "cover" }} 
            priority 
            unoptimized 
          />
          <div className={styles.pageHeaderOverlay}></div>
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>ABOUT US ONE</h1>
        </div>
      </header>

      {/* 2. Who We Are / About Our Company */}
      <section className={`section-padding ${styles.aboutSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextContent}>
              <span className={styles.sectionBadge}>About Our Company</span>
              <h2 className={styles.sectionTitleLeft}>
                We are a dynamic team of <span>creatives development</span>
              </h2>
              <p className={styles.aboutLead}>
                With decades of collective experience, Tradecraft Consulting & Contracting 
                embodies absolute mastery across the building and electrical trades.
              </p>
              
              <div className={styles.checkmarksGrid}>
                <div className={styles.checkmarkItem}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Transparent Pricing</h4>
                    <p>Clear, direct invoicing without hidden fees or surprise upcharges.</p>
                  </div>
                </div>
                <div className={styles.checkmarkItem}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Master Craftsmanship</h4>
                    <p>Rigorous construction and wiring standards executing top-tier finishes.</p>
                  </div>
                </div>
                <div className={styles.checkmarkItem}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Fully Licensed & Insured</h4>
                    <p>Danny DeSantis and all TCC tradesmen operate under full regulatory licenses.</p>
                  </div>
                </div>
                <div className={styles.checkmarkItem}>
                  <div className={styles.checkIcon}>✓</div>
                  <div>
                    <h4>Timely Project Delivery</h4>
                    <p>Efficient project management keeping timelines strict and targets met.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aboutCollage}>
              <div className={styles.collageMain}>
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" 
                  alt="Collaborative office design" 
                  width={450} 
                  height={550} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.collageSecondary}>
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600" 
                  alt="Construction job site" 
                  width={300} 
                  height={250} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.experienceBadge}>
                <div className={styles.expNumber}>35</div>
                <div className={styles.expText}>YEARS OF EXPERIENCES</div>
              </div>
            </div>
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
            <span className={styles.sectionBadge}>Meet Our Team</span>
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
                <p>Principal Contractor & Founder</p>
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
