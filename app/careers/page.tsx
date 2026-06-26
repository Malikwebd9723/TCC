import Image from "next/image";
import Link from "next/link";
import styles from "./careers.module.css";

const positions = [
  {
    title: "Master Electrician",
    location: "Upstate NY",
    type: "Full-time",
    description:
      "Licensed electrician with field leadership experience across residential, commercial, and industrial systems.",
  },
  {
    title: "Lead Carpenter",
    location: "Upstate NY",
    type: "Full-time",
    description:
      "Finish-focused carpenter comfortable leading framing, trim, cabinetry, and site coordination work.",
  },
  {
    title: "HVAC Technician",
    location: "Upstate NY",
    type: "Full-time",
    description:
      "Certified HVAC specialist with experience in heat pumps, forced-air systems, service calls, and diagnostics.",
  },
];

const benefits = [
  {
    title: "Premium Compensation",
    description: "Competitive pay for skilled tradespeople who take pride in exacting work.",
  },
  {
    title: "Modern Equipment",
    description: "Quality tools, safety gear, and jobsite support so crews can work cleanly.",
  },
  {
    title: "Technical Growth",
    description: "Exposure to complex builds, specialty systems, and experienced field leadership.",
  },
  {
    title: "Respectful Crews",
    description: "A practical team culture built around clear communication and finished results.",
  },
];

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}>
          <Image
            src="/careers.png"
            alt="TCC careers banner"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.pageHeaderOverlay}></div>
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>CAREERS</h1>
        </div>
      </header>

      <section className={`section-padding ${styles.cultureSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.cultureGrid}>
            <div className={styles.cultureText}>
              <span className={styles.sectionBadge}>Join The Craft</span>
              <h2 className={styles.sectionTitleLeft}>
                Build lasting work with a team that <span>values the trade</span>
              </h2>
              <p className={styles.leadText}>
                Tradecraft Consulting & Contracting hires people who care about precision,
                clean execution, and dependable communication. Our crews support demanding
                residential, commercial, and industrial projects across Upstate New York.
              </p>

              <div className={styles.checkmarksGrid}>
                {benefits.map((benefit) => (
                  <div key={benefit.title} className={styles.checkmarkItem}>
                    <div className={styles.checkIcon}>&#10003;</div>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cultureImageWrap}>
              <div className={styles.cultureImage}>
                <Image
                  src="/career-team.png"
                  alt="TCC field team"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.experienceBadge}>
                <div className={styles.expNumber}>35</div>
                <div className={styles.expText}>YEARS OF EXPERIENCE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.openingsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Open Positions</span>
            <h2 className={styles.sectionTitle}>Grow Your Career With TCC</h2>
            <div className={styles.sectionLine}></div>
          </div>

          <div className={styles.jobsGrid}>
            {positions.map((job) => (
              <article key={job.title} className={styles.jobCard}>
                <div className={styles.jobIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 6h6m-7 4h8m-9 4h10M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <div className={styles.jobMeta}>
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <a
                  href={`mailto:tradecraftTCC@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className={styles.applyLink}
                >
                  Apply Now &gt;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processBanner}>
        <div className={styles.processBannerOverlay}></div>
        <div className="container">
          <div className={styles.processHeader}>
            <span className={styles.sectionBadgeLight}>How We Hire</span>
            <h2>Focused crews, clear expectations, strong follow-through</h2>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span>01</span>
              <h3>Send Your Details</h3>
              <p>Share your trade background, certifications, and the role that fits your experience.</p>
            </div>
            <div className={styles.processItem}>
              <span>02</span>
              <h3>Meet The Team</h3>
              <p>Talk through your field experience, work standards, schedule, and jobsite expectations.</p>
            </div>
            <div className={styles.processItem}>
              <span>03</span>
              <h3>Start The Work</h3>
              <p>Join a crew where craftsmanship, safety, and accountability are taken seriously.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to bring your tradecraft to TCC?</h2>
            <Link href="/contact" className={styles.btnCta}>
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
