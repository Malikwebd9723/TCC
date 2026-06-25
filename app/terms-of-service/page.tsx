import styles from "../legal-page.module.css";

export default function TermsOfService() {
  return (
    <main className={styles.container}>
      <span className={styles.lastUpdated}>Last Updated: June 2026</span>
      <h1 className={`${styles.title} gold-text`}>Terms of Service</h1>
      
      <div className={styles.content}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing the website at Tradecraft Consulting & Contracting, you are agreeing to be bound by these terms of service, 
          all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on TCC's website 
          for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on TCC's website are provided on an 'as is' basis. TCC makes no warranties, expressed or implied, 
          and hereby disclaims and negates all other warranties including, without limitation, implied warranties or 
          conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall TCC or its suppliers be liable for any damages (including, without limitation, damages for 
          loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
          materials on TCC's website, even if TCC or a TCC authorized representative has been notified orally or 
          in writing of the possibility of such damage.
        </p>

        <h2>5. Project Estimates</h2>
        <p>
          All estimates provided via communication channels listed on this site are preliminary and subject to 
          on-site inspection and formal contract agreement. No professional obligation is formed until a 
          contract is signed by Danny DeSantis and the client.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of New York, USA, 
          and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </main>
  );
}
