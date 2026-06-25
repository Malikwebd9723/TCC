import styles from "../legal-page.module.css";

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>
      <span className={styles.lastUpdated}>Last Updated: June 2026</span>
      <h1 className={`${styles.title} gold-text`}>Privacy Policy</h1>
      
      <div className={styles.content}>
        <p>
          At Tradecraft Consulting & Contracting (TCC), one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by TCC and how we use it.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
          will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you such as your name, 
          email address, phone number, the contents of the message and/or attachments you may send us, 
          and any other information you may choose to provide.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Communicate with you regarding project estimates and infrastructure services</li>
          <li>Send you emails for professional coordination</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>3. Log Files</h2>
        <p>
          TCC follows a standard procedure of using log files. These files log visitors when they visit websites. 
          The information collected by log files include internet protocol (IP) addresses, browser type, 
          Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have additional questions or require more information about our Privacy Policy, 
          do not hesitate to contact us at <strong>tradecraftTCC@gmail.com</strong>.
        </p>
      </div>
    </main>
  );
}
