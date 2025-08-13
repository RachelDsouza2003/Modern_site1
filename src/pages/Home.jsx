import React from 'react';

export default function Home() {
  return (
    <div>
      <section className="section" style={{ textAlign: 'center' }}>
        <h1 className="section-title">Ready to Get Started?</h1>
        <p>Let's work together to bring your vision to life. Contact us today for a free consultation.</p>
        <div style={{ marginTop: '2rem' }}>
          <button className="btn" style={{ marginRight: '1rem' }}>Start Your Project</button>
          <button className="btn" style={{ background: 'transparent', border: '1px solid #fff' }}>Schedule a Call</button>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Our Features</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div style={{ background: 'var(--secondary-color)', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
            <h3>⚡ Lightning Fast</h3>
            <p>Built with modern technologies for optimal performance and speed.</p>
          </div>
          <div style={{ background: 'var(--secondary-color)', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
            <h3>🔒 Secure & Reliable</h3>
            <p>Enterprise-grade security with 99.9% uptime guarantee.</p>
          </div>
          <div style={{ background: 'var(--secondary-color)', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
            <h3>🎨 Beautiful Design</h3>
            <p>Stunning, responsive designs that work perfectly on all devices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
