import { services } from "../../services-data";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    <main className={styles.container}>
      <nav className={styles.backNav}>
        <Link href="/" className={styles.backLink}>
          <span>&larr;</span> Back to Home
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.iconWrapper}>{getIcon(service.iconName)}</div>
        <h1 className="gold-text">{service.title}</h1>
        <div className={styles.divider}></div>
      </section>

      <div className={styles.contentGrid}>
        <section className={`${styles.description} glass`}>
          <h2>Service Overview</h2>
          <p>{service.detailedDescription}</p>
        </section>

        <section className={styles.features}>
          <h2>Core Capabilities</h2>
          <ul>
            {service.features.map((feature, i) => (
              <li key={i} className="gold-border">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className={`${styles.ctaSection} glass gold-border`}>
        <h3>Need {service.title} expertise?</h3>
        <p>Contact Danny DeSantis for a detailed consultation and estimate.</p>
        <div className={styles.ctaContact}>
          <a href="tel:3158794625" className="gold-text">(315) 879-4625</a>
          <a href="mailto:tradecraftTCC@gmail.com">tradecraftTCC@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
