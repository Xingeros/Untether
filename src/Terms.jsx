import React from 'react';
import UntetherLogoNBG from './assets/UntetherLogoNBG.png';

const Terms = () => (
  <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'relative', color: '#fff', overflowY: 'auto' }}>
    <a href="/" style={{ position: 'absolute', top: 0, left: 0, padding: '1.5rem', display: 'inline-block' }}>
      <img src={UntetherLogoNBG} alt="Untether Logo" style={{ width: '64px', height: 'auto', display: 'block' }} />
    </a>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 1.5rem 3rem', lineHeight: '1.7' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Terms of Use for Untether</h1>
      <p><strong>Last Updated: May 27, 2025</strong></p>

      <p>
        Welcome to Untether! These Terms of Use ("Terms") are a legal agreement between you and Untether ("Untether," "we," "our," or "us") and govern your use of our mobile app and all related services (collectively, the "Services").
      </p>

      <p>
        Please read these Terms carefully. By accessing or using Untether, you agree to be bound by these Terms. If you do not agree, you must stop using the Services immediately.
      </p>

      <h2>1. Who Can Use Untether</h2>
      <p>You must be at least 18 years old and legally able to enter into contracts to use our Services. By using Untether, you represent and warrant that you meet these requirements.</p>

      <h2>2. What Untether Does</h2>
      <p>
        Untether helps you manage and support your addiction recovery journey by offering tools for journaling, progress tracking, motivational insights, and personal growth. We do not provide medical advice, therapy, or emergency services.
      </p>

      <h2>3. Your Account</h2>
      <p>To use some features, you may need to create an account. You agree to:</p>
      <ul>
        <li>Provide accurate and current information</li>
        <li>Keep your login credentials secure</li>
        <li>Notify us promptly at <a href="mailto:support@untether.app" style={{ color: '#66f' }}>support@untether.app</a> if you suspect unauthorized access</li>
      </ul>
      <p>You are responsible for all activity that occurs under your account.</p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use Untether for unlawful or harmful purposes</li>
        <li>Disrupt or interfere with the functionality of the Services</li>
        <li>Use bots or automated tools to access the app</li>
        <li>Reverse engineer or attempt to bypass security systems</li>
      </ul>
      <p>We may suspend or terminate your account if you violate these Terms.</p>

      <h2>5. Data Usage</h2>
      <p>
        We only collect and use data necessary to provide our Services, such as entries you submit, app usage data, and anonymized analytics. For full details, please refer to our <a href="/privacy" style={{ color: '#66f' }}>Privacy Policy</a>.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, design, code, and branding within Untether are owned by us or licensed to us. You may use the Services for personal, non-commercial purposes only.
      </p>
      <p>You may not copy, modify, or redistribute any part of the Services without our permission.</p>

      <h2>7. Service Changes</h2>
      <p>We may update, remove, or discontinue parts of the app at any time without notice. We are not liable for any interruptions or changes.</p>

      <h2>8. Disclaimer</h2>
      <p>
        Untether is provided "as is" and "as available." We do not guarantee the accuracy of content or availability of features. We disclaim all warranties to the fullest extent allowed by law.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Untether is not liable for indirect, incidental, or consequential damages. Our total liability will not exceed $100 or the amount you paid us (if any), whichever is less.
      </p>

      <h2>10. Termination</h2>
      <p>You may stop using Untether at any time. We reserve the right to suspend or terminate your access if you breach these Terms.</p>

      <h2>11. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the State of California. Any disputes will be resolved through binding arbitration in San Francisco, California, under the rules of the American Arbitration Association (AAA).
      </p>
      <p>By using the Services, you waive your right to a jury trial and participation in class actions.</p>

      <h2>12. Updates to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will revise the "Last Updated" date at the top when we do. Your continued use of the Services means you accept the updated Terms.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have any questions or concerns, contact us at:{" "}
        <a href="mailto:support@untether.app" style={{ color: '#66f' }}>support@untether.app</a>
      </p>
    </div>
  </div>
);

export default Terms;
