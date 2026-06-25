import Image from "next/image";
import Link from "next/link";
import styles from "./careers.module.css";

export default function CareersPage() {
  const positions = [
    {
      title: "Master Electrician",
      location: "Upstate NY",
      type: "Full-time",
      desc: "Licensed electrician with experience in industrial power and high-end residential systems."
    },
    {
      title: "Lead Carpenter",
      location: "Upstate NY",
      type: "Full-time",
      desc: "Expert in framing and detailed finish carpentry. 10+ years experience required."
    },
    {
      title: "HVAC Technician",
      location: "Upstate NY",
      type: "Full-time",
      desc: "Specialist in heat pumps and industrial chillers. Certification required."
    }
  ];

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/careers.png" alt="TCC Team" fill style={{ objectFit: "cover" }} priority />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="gold-text">Join the Craft</h1>
          <p className={styles.subtitle}>Build your legacy with Tradecraft Consulting & Contracting.</p>
        </div>
      </header>

      <section id="why-join" className={`section-padding ${styles.whyJoin}`}>
        <div className="container">
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitText}>
                <h2>Why Work at TCC?</h2>
                <div className={styles.accentBar}></div>
                <p>
                    At TCC, we don't just hire employees; we recruit masters of tradecraft. We provide a 
                    high-stakes, high-reward environment where your skills are respected and your work 
                    contributes to architectural icons.
                </p>
                <ul className={styles.benefitList}>
                    <li>Premium Compensation Packages</li>
                    <li>Advanced Technical Training</li>
                    <li>Top-tier Safety Equipment</li>
                    <li>High-end Tool Allowance</li>
                </ul>
            </div>
            <div className={styles.benefitImage}>
                 <Image src="/service-gc.png" alt="Quality Work" width={600} height={400} style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.openings}`}>
        <div className="container">
          <h2 className="text-center gold-text">Open Positions</h2>
          <div className={styles.jobsGrid}>
            {positions.map((job, i) => (
              <div key={i} className={`${styles.jobCard} glass gold-border`}>
                <h3>{job.title}</h3>
                <div className={styles.meta}>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                </div>
                <p>{job.desc}</p>
                <a href="mailto:tradecraftTCC@gmail.com?subject=Application for Positions" className={styles.applyBtn}>
                    Apply Now &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
