import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { services } from "./services-data";

export default function Home() {
  const getIcon = (name: string) => {
    switch (name) {
      case "building":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "bolt":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "hammer":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3zM9 14l5-5m-9 7l9-9m-5 13l3-3l5 5l3-3" />
          </svg>
        );
      case "droplet":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case "fan":
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 0l2 2m-2-2l-2 2" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Mapper to serve premium AI-style Unsplash photos for each service
  const getServiceImage = (slug: string) => {
    switch (slug) {
      case "general-contracting":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600";
      case "electrical":
        return "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600";
      case "carpentry":
        return "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600";
      case "plumbing":
        return "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600";
      case "hvac":
        return "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600";
      case "residential-commercial-industrial":
        return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600";
      default:
        return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600";
    }
  };

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero-bg.png"
            alt="Tradecraft Consulting and Contracting project site"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent} fade-in`}>
          <span className={styles.heroTag}>Residential / Commercial / Industrial</span>
          <h1>Tradecraft Consulting & Contracting</h1>
          <p className={styles.heroDescription}>
            Sleek project planning and skilled trade execution across general contracting,
            licensed electrical, carpentry, plumbing, sewer, water, HVAC, heat pumps,
            and chillers.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/services" className={styles.ctaPrimary}>
              Explore Services
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Book A Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className={`section-padding ${styles.aboutSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextContent}>
              <span className={styles.sectionBadge}>Who We Are</span>
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

              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/about" className={styles.btnSolid}>
                  Learn About Our Mission
                </Link>
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
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services / Capabilities Section */}
      <section className={`section-padding ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Capabilities</span>
            <h2 className={styles.sectionTitle}>We Provide Best Service For Your Business</h2>
            <div className={styles.sectionLine}></div>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image 
                    src={getServiceImage(service.slug)} 
                    alt={service.title} 
                    width={380} 
                    height={220} 
                    style={{ objectFit: "cover" }} 
                    unoptimized 
                  />
                </div>
                <div className={styles.serviceBody}>
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIconContainer}>{getIcon(service.iconName)}</div>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className={styles.serviceLink}>
                    Explore Service &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Dark Banner Strip */}
          <div className={styles.bannerStrip}>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
              <h3>GET BEST BUSINESS SOLUTION</h3>
              <p>Work directly with Danny DeSantis to engineer and construct your next infrastructure project.</p>
              <div className={styles.bannerPhone}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Us Today: (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Expert Team Section */}
      <section className={`section-padding ${styles.teamSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Expert Tradesmen</span>
            <h2 className={styles.sectionTitle}>Meet Our Professional Team</h2>
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

      {/* 5. Stats & Callback Form Section */}
      <section className={`section-padding ${styles.callbackSection}`}>
        <div className="container">
          <div className={styles.callbackGrid}>
            {/* Stats Left */}
            <div className={styles.statsLeft}>
              <span className={styles.sectionBadge}>TCC Numbers</span>
              <h2 className={styles.statsHeader}>See Our Funfacts</h2>
              <p className={styles.statsText}>
                We track our benchmarks rigorously to verify we maintain standard trade 
                compliance, client satisfaction, and quality installations.
              </p>

              <div className={styles.statsCounterGrid}>
                <div className={styles.statBox}>
                  <div className={styles.statIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3>1450</h3>
                  <p>Completed Projects</p>
                </div>

                <div className={styles.statBox}>
                  <div className={styles.statIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3>1864</h3>
                  <p>Happy Clients</p>
                </div>

                <div className={styles.statBox}>
                  <div className={styles.statIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3>1280</h3>
                  <p>Verified Compliances</p>
                </div>

                <div className={styles.statBox}>
                  <div className={styles.statIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="30" height="30">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707.707" />
                    </svg>
                  </div>
                  <h3>678</h3>
                  <p>Consultation Reviews</p>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className={styles.formRight}>
              <div className={styles.callbackCard}>
                <h3>Request A Call Back</h3>
                <p>Fill out the form below and Danny or an engineer will contact you shortly.</p>
                <form className={styles.callbackForm}>
                  <div className={styles.formGroup}>
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className={styles.formGroup}>
                    <select defaultValue="" required>
                      <option value="" disabled>Select Needed Service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className={styles.formSubmit}>Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Latest News / Blog Section */}
      <section className={`section-padding ${styles.newsSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Company Insights</span>
            <h2 className={styles.sectionTitle}>Let's Checkout our All Current News</h2>
            <div className={styles.sectionLine}></div>
          </div>

          <div className={styles.newsGrid}>
            <div className={styles.newsCard}>
              <div className={styles.newsImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600" 
                  alt="Smart Electrical Panels" 
                  width={380} 
                  height={240} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.newsBody}>
                <div className={styles.newsMeta}>
                  <span>Admin</span>
                  <span>•</span>
                  <span>June 20, 2026</span>
                </div>
                <h3>The Future of Smart Electrical Arrays in Commercial Properties</h3>
                <p>Discover how modern smart panels reduce power footprints and protect commercial assets from load strain.</p>
                <Link href="/about" className={styles.newsLink}>Read More &rarr;</Link>
              </div>
            </div>

            <div className={styles.newsCard}>
              <div className={styles.newsImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600" 
                  alt="Framing Materials Wood" 
                  width={380} 
                  height={240} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.newsBody}>
                <div className={styles.newsMeta}>
                  <span>Admin</span>
                  <span>•</span>
                  <span>June 15, 2026</span>
                </div>
                <h3>Understanding Structural Hardwood Framing Guidelines</h3>
                <p>Framing is the backbone of any building. We review load distribution and compliance rules for general wood structures.</p>
                <Link href="/about" className={styles.newsLink}>Read More &rarr;</Link>
              </div>
            </div>

            <div className={styles.newsCard}>
              <div className={styles.newsImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600" 
                  alt="HVAC Energy Pumps" 
                  width={380} 
                  height={240} 
                  style={{ objectFit: "cover" }} 
                  unoptimized 
                />
              </div>
              <div className={styles.newsBody}>
                <div className={styles.newsMeta}>
                  <span>Admin</span>
                  <span>•</span>
                  <span>June 10, 2026</span>
                </div>
                <h3>HVAC Energy Savings: Heat Pump Engineering Explained</h3>
                <p>How residential heat pumps leverage thermodynamic pressure cycles to drastically slash heating bills compared to boilers.</p>
                <Link href="/about" className={styles.newsLink}>Read More &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Partner / Compliance Logos Section */}
      <section className={styles.logosRowSection}>
        <div className="container">
          <div className={styles.logosRow}>
            <div className={styles.logoItem}>OSHA CERTIFIED</div>
            <div className={styles.logoItem}>EPA LEAD-SAFE</div>
            <div className={styles.logoItem}>ENERGY STAR</div>
            <div className={styles.logoItem}>LICENSED BUILDER</div>
            <div className={styles.logoItem}>TCC ASSURED</div>
          </div>
        </div>
      </section>
    </main>
  );
}
