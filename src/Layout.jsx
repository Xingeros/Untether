import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import backgroundVideo from './assets/background-video.mp4';
import UntetherLogoNBG from './assets/UntetherLogoNBG.png';

const Layout = ({ children }) => {
  const useVideoBackground = true;
  return (
    <div className="landing-page-container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={UntetherLogoNBG} alt="Untether Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-list">
          {/* Logo Section */}
          {/* TODO: Add logo */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="background-element">
        {useVideoBackground && (
          <>
            <video autoPlay loop muted playsInline className="background-video">
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="background-overlay"></div>
          </>
        )}
      </div>
      {children}
      <footer className="footer">
        <p style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
          <span>Copyright &copy; 2025 <span className="untether-highlight">Untether</span>. All rights reserved.</span>
          <a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: '#fff' }}>|</span>
          <a href="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms</a>
        </p>
        {/* Add links to Privacy Policy, Terms of Service etc. here */}
        {/* <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div> */}
      </footer>
    </div>
  );
};

export default Layout; 