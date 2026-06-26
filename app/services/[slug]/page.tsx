import { services } from "../../services-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./service-page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* 1. Header Banner */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}>
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
            alt={service.title} 
            fill 
            style={{ objectFit: "cover" }} 
            priority 
            unoptimized 
          />
          <div className={styles.pageHeaderOverlay}></div>
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>{service.title}</h1>
        </div>
      </header>

      {/* 2. Main Content & Sidebar Grid */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.gridContainer}`}>
          
          {/* LEFT SIDEBAR */}
          <aside className={styles.sidebar}>
            {/* Service Menu */}
            <div className={styles.serviceMenu}>
              {services.map((s) => (
                <Link 
                  key={s.slug} 
                  href={`/services/${s.slug}`} 
                  className={`${styles.menuItem} ${s.slug === slug ? styles.menuItemActive : ''}`}
                >
                  &gt; {s.title}
                </Link>
              ))}
            </div>

            {/* Brochure Box */}
            <div className={styles.sidebarBox}>
              <h3>Brochure Download</h3>
              <p>Please click download button for getting brochure file</p>
              <a href="#" className={styles.btnPink}>
                DOWNLOAD PDF
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Contact Box */}
            <div className={styles.sidebarBox}>
              <h3>Contact Us</h3>
              <p>If you have any query about our service please contact with us</p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(00) 2500-123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>121 King Street, Australia</span>
                </div>
                <div className={styles.contactItem}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>example@gmail.com</span>
                </div>
              </div>
              <a href="tel:0025001234567" className={styles.btnPink}>
                CALL NOW
              </a>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <div className={styles.mainContent}>
            <div className={styles.featuredImage}>
              <Image 
                src={service.images[0] || "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800"} 
                alt={service.title} 
                fill 
                style={{ objectFit: "cover" }} 
                unoptimized
              />
            </div>
            
            <h2>{service.title}</h2>
            <p>{service.detailedDescription}</p>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative 
              approaches to corporate strategy foster collaborative thinking to further the overall value 
              proposition. Organically grow the holistic world view of disruptive innovation via workplace 
              diversity and empowerment. Capitalize on low hanging fruit to identify a ballpark value added 
              activity to beta test. Override the digital divide with additional clickthroughs.
            </p>

            {/* Benefits */}
            <div className={styles.benefitsSection}>
              <h3>Benefits</h3>
              <div className={styles.benefitsGrid}>
                {service.features.map((feature, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className={styles.faqSection}>
              <h3>Frequently Asked Question</h3>
              
              <details className={styles.faqItem} open>
                <summary className={styles.faqSummary}>
                  <div className={styles.iconWrapper}>-</div>
                  What does Enexus Consulting do?
                </summary>
                <div className={styles.faqContent}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <div className={styles.iconWrapper}>+</div>
                  How much cost for consulting service?
                </summary>
                <div className={styles.faqContent}>
                  We offer customized pricing plans based on the specific scope of your project. Our initial 
                  consultations outline all expected deliverables and timeframes.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <div className={styles.iconWrapper}>+</div>
                  How does the Consulting process work?
                </summary>
                <div className={styles.faqContent}>
                  Our process begins with a comprehensive assessment, followed by collaborative strategy building 
                  and implementation planning. We provide ongoing support throughout the execution phase.
                </div>
              </details>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
