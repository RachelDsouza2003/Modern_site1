import React from 'react';

export default function Contact() {
  return (
    <section className="section container">
      <h1 className="section-title">Contact Us</h1>
      <form style={{ maxWidth: '500px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ccc' }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ccc' }}></textarea>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </section>
  );
}
