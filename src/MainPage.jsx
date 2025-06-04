import React, { useState } from 'react';
import './Main.css'; // Your main CSS file
import Layout from './Layout';

// Import placeholder assets. You will replace these paths with your actual assets.
// Make sure to create these files (even empty ones) in src/assets for the app to run initially.
// OPTIONAL: If you choose a video background
import backgroundVideo from './assets/background-video.mp4'; // Placeholder for a background video

export const MainPage = () => {
  // IMPORTANT: Replace with your actual App Store and Play Store links
  const APP_STORE_LINK = 'https://apps.apple.com/us/app/apple-store/idYOURAPPID'; // Example, replace YOURAPPID
  const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.yourapp.package'; // Example, replace com.yourapp.package

  // You can dynamically choose your background type here if needed,
  // or just comment out the one you don't use in the JSX below.
  const useVideoBackground = true; // Set to false if you prefer image or solid color/gradient

  // Add state for CTA interaction
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [buttonGone, setButtonGone] = useState(false);

  // Optional: handle email submission
  const handleCtaClick = () => {
    setButtonGone(true);
    setTimeout(() => setShowEmailInput(true), 350); // Match CSS transition duration
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${email}`);
    setShowEmailInput(false);
    setButtonGone(false);
    setEmail('');
  };

  return (
    <Layout>
      <header className="hero-section">
        {/* Optional: App Logo - uncomment and replace 'yourAppLogo' once you have one */}
        {/* <img src={yourAppLogo} alt="Your App Logo" className="app-logo" /> */}

        <h1 className="tagline">
          Built to Break Addiction, <span className="untether-highlight">Untether</span> Your Life.
        </h1>
        <p className="sub-tagline">Sobriety is a relentless journey — let's break bad habits and build good ones together.</p>

        <div className="cta-buttons">
          <form
            className="cta-morph-form"
            action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdnSMB4aJ-78Ufa15Thln1b_SVpOT6T2KODdCGdlI_OqQoKZA/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={() => setTimeout(() => alert('Thank you for joining the waitlist!'), 100)}
          >
            <div className={`cta-morph-combo${showEmailInput ? ' morph' : ''}`}>
              {!showEmailInput ? (
                <button
                  type="button"
                  className="cta-morph-content"
                  onClick={() => setShowEmailInput(true)}
                >
                  Join Waitlist
                </button>
              ) : (
                <>
                  <input
                    type="email"
                    className="cta-morph-input"
                    placeholder="Enter your email"
                    name="entry.842039268"
                    required
                    autoFocus
                  />
                  <button type="submit" className="cta-morph-arrow" aria-label="Submit email">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </form>
          <iframe name="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe"></iframe>
        </div>
      </header>
    </Layout>
  );
};

export default MainPage;