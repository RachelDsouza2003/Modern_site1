import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} ModernSite. All rights reserved.</p>
      <div style={{ marginTop: '0.5rem' }}>
        <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
