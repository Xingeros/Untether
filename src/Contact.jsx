import React from 'react';
import Layout from './Layout';

const Contact = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '60vh',
        paddingLeft: 0,
        marginLeft: 0,
        paddingTop: '8rem',
        width: 'fit-content'
      }}
    >
      <span
        style={{
          fontSize: '1.2rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#3e2717',
          letterSpacing: '0.03em'
        }}
      >
        
      </span>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <a
          href="https://www.linkedin.com/company/untetherapp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            style={{ width: '30px', height: '30px', display: 'block' }}
          />
        </a>
        <a
          href="https://x.com/appuntether"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            alt="X.com"
            style={{ width: '30px', height: '30px', display: 'block' }}
          />
        </a>
      </div>
    </div>
  </Layout>
);

export default Contact; 