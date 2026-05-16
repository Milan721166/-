export default function DiscountBanner() {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.banner}>
          <div style={styles.content}>
            <span style={styles.badge}>বিশেষ অফার</span>
            <h2 style={styles.title}>প্রথমবার কেনাকাটায় ২০% ছাড়</h2>
            <p style={styles.coupon}>কোড ব্যবহার করুন: <span style={styles.code}>NABADIGONTO20</span></p>
            <button style={styles.btn}>
              এখনই কিনুন 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '10px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          <div style={styles.visual}>
            <div style={styles.quoteIcon}>&ldquo;</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#FAF3E0',
  },
  banner: {
    background: '#5D1010',
    borderRadius: '20px',
    padding: '4rem 5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(93, 16, 16, 0.2)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
  badge: {
    color: 'var(--accent-gold)',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'block',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  coupon: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.1rem',
    marginBottom: '2.5rem',
  },
  code: {
    color: 'var(--accent-gold)',
    fontWeight: '700',
  },
  btn: {
    background: 'var(--accent-gold)',
    color: 'var(--dark-maroon)',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },
  visual: {
    position: 'relative',
    zIndex: 1,
  },
  quoteIcon: {
    fontSize: '12rem',
    color: 'rgba(255, 255, 255, 0.1)',
    fontFamily: 'serif',
    lineHeight: '1',
    position: 'absolute',
    right: '-2rem',
    top: '-4rem',
  }
};
