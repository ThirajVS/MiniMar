import { FaShoppingCart } from 'react-icons/fa';

export default function About() {
  return (
    <main style={{
      padding: '3rem 2rem',
      backgroundColor: '#f9fafb',
      fontFamily: 'Inter, sans-serif',
      color: '#1f2937',
      lineHeight: '1.75',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <FaShoppingCart size={48} style={{ color: '#FF6B35' }} />
        <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>About MiniMar</h1>
      </div>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        <strong>MiniMar</strong> is your intelligent shopping assistant designed to make your online purchases smarter and faster.
        We bring together deals from <strong>Amazon</strong>, <strong>Flipkart</strong>, <strong>Myntra</strong> and many more, all in one beautifully curated place.
      </p>
      <p style={{ fontSize: '1.1rem' }}>
        Compare products, filter by discounts, and check out with confidence – MiniMar is all about saving you time and money while shopping across India.
      </p>
    </main>
  );
}
