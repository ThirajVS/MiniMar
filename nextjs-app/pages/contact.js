import { FaEnvelope, FaPhoneAlt, FaHeadset } from 'react-icons/fa';

export default function Contact() {
  return (
    <main style={{
      padding: '3rem 2rem',
      backgroundColor: '#f9fafb',
      fontFamily: 'Inter, sans-serif',
      color: '#1f2937',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <FaHeadset size={48} style={{ color: '#FF6B35' }} />
        <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Contact Us</h1>
        <p style={{ color: '#6b7280' }}>We’re here to help you 24/7!</p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        fontSize: '1.1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <FaEnvelope size={20} style={{ color: '#f97316' }} />
          <span>Email: <a href="mailto:support@minimar.in" style={{ color: '#f97316', textDecoration: 'none' }}>support@minimar.in</a></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <FaPhoneAlt size={20} style={{ color: '#f97316' }} />
          <span>Phone: <a href="tel:+919876543210" style={{ color: '#f97316', textDecoration: 'none' }}>+91 98765 43210</a></span>
        </div>
      </div>
    </main>
  );
}
