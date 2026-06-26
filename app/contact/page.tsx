import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

const contactMethods = [
  {
    label: "Call or Text",
    value: "(315) 879-4625",
    href: "tel:3158794625",
  },
  {
    label: "Email",
    value: "tradecraftTCC@gmail.com",
    href: "mailto:tradecraftTCC@gmail.com",
  },
  {
    label: "Service Area",
    value: "Residential, commercial, and industrial infrastructure",
    href: null,
  },
];

const projectTypes = [
  "General Contracting",
  "Electrical Systems",
  "Carpentry & Framing",
  "Plumbing & Water",
  "HVAC & Climate Control",
  "Professional Consulting",
];

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}>
          <Image
            src="/hero.png"
            alt="Contact Tradecraft Consulting and Contracting"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.pageHeaderOverlay}></div>
        </div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>CONTACT US</h1>
        </div>
      </header>

      <section className={`section-padding ${styles.contactSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <span className={styles.sectionBadge}>Get In Touch</span>
              <h2 className={styles.sectionTitleLeft}>
                Talk with Danny DeSantis about your <span>next project</span>
              </h2>
              <p className={styles.leadText}>
                TCC is currently taking on high-priority residential, commercial,
                and industrial work throughout Upstate New York and surrounding
                service areas. Reach out for scheduling, project scoping, or a
                direct trade consultation.
              </p>

              <div className={styles.contactMethods}>
                {contactMethods.map((method) => (
                  <div key={method.label} className={styles.methodCard}>
                    <div className={styles.methodIcon}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 8h10M7 12h6m-6 4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>{method.label}</strong>
                      {method.href ? (
                        <a href={method.href}>{method.value}</a>
                      ) : (
                        <span>{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.requestCard}>
              <h3>Request A Consultation</h3>
              <p>Send a few project details and the TCC team will follow up directly.</p>
              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="(315) 000-0000" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Needed Service</label>
                  <select id="service" name="service" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about the site, scope, and timing."
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.serviceAreaSection}`}>
        <div className="container">
          <div className={styles.serviceAreaGrid}>
            <div className={styles.serviceImageWrap}>
              <Image
                src="/about.png"
                alt="Tradecraft Consulting service area"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.serviceImageOverlay}>
                <h3>Upstate NY</h3>
                <p>Primary service region</p>
              </div>
            </div>

            <div className={styles.serviceAreaContent}>
              <span className={styles.sectionBadge}>Service Coverage</span>
              <h2 className={styles.sectionTitleLeft}>
                Field support for complex residential and commercial work
              </h2>
              <div className={styles.serviceCards}>
                <div className={styles.serviceCard}>
                  <h4>Residential</h4>
                  <p>Renovations, electrical upgrades, carpentry, mechanical work, and repairs.</p>
                </div>
                <div className={styles.serviceCard}>
                  <h4>Commercial</h4>
                  <p>Fit-outs, system upgrades, maintenance planning, and coordinated trade work.</p>
                </div>
                <div className={styles.serviceCard}>
                  <h4>Industrial</h4>
                  <p>Infrastructure support, diagnostics, installation planning, and field execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need a contractor who can scope and execute the work?</h2>
            <Link href="tel:3158794625" className={styles.btnCta}>
              CALL NOW
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
