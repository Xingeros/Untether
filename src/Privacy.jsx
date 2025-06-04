import React from 'react';
import UntetherLogoNBG from './assets/UntetherLogoNBG.png';

const Privacy = () => (
  <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'relative', color: '#fff', overflowY: 'auto' }}>
    <a href="/" style={{ position: 'absolute', top: 0, left: 0, padding: '1.5rem', display: 'inline-block' }}>
      <img src={UntetherLogoNBG} alt="Untether Logo" style={{ width: '64px', height: 'auto', display: 'block' }} />
    </a>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 1.5rem 3rem', lineHeight: '1.7' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Privacy Policy of Untether</h1>
      <p><strong style={{ color: '#bbb' }}>Last updated on May 27, 2025</strong></p>

      <p>
        Thank you for using Untether ("Company", "we", "us", "our"). This Privacy Policy explains how we collect, use, and protect your personal information when you use our app and related services ("Services").
      </p>
      <p>
        If you do not agree with this Privacy Policy, please do not use our Services. If you have any questions, contact us at <a href="mailto:support@untether.app" style={{ color: '#66f' }}>support@untether.app</a>.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Information you provide directly, such as your name, email, or when submitting journal entries or tracking progress in the app.</li>
        <li>Usage data, like app interactions and basic device info, to help improve performance.</li>
      </ul>
      <p>We do not access your email inbox, contact list, or personal files.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and improve our Services</li>
        <li>Help you track progress in your recovery journey</li>
        <li>Respond to support requests</li>
        <li>Analyze usage trends</li>
      </ul>
      <p>We do <strong>not</strong> sell your data or share it with advertisers.</p>

      <h2>3. Data Sharing</h2>
      <p>We only share your data when:</p>
      <ul>
        <li>Required by law</li>
        <li>Necessary to run core app services (e.g., with secure cloud providers)</li>
        <li>You give us explicit permission</li>
      </ul>

      <h2>4. Data Retention and Deletion</h2>
      <p>
        We keep your data only as long as needed for your use of the app. You can delete your account at any time, and we will delete your data within 30 days.
      </p>

      <h2>5. Security</h2>
      <p>
        We use secure cloud services and encryption to protect your data. No system is 100% secure, but we work hard to safeguard your information.
      </p>

      <h2>6. Your Choices</h2>
      <ul>
        <li>Access, update, or delete your data</li>
      </ul>

      <h2>7. Updates</h2>
      <p>
        We may update this Privacy Policy. If changes are made, we'll update the date at the top. Continued use means you accept the revised policy.
      </p>

      <h2>8. Contact Us</h2>
      <p>📩 <a href="mailto:support@untether.app" style={{ color: '#66f' }}>support@untether.app</a></p>
    </div>
  </div>
);

export default Privacy;