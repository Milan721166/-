export default function FinalCTA() {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.content}>
          <div style={styles.birds}>
            <svg width="150" height="40" viewBox="0 0 213 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="213" height="45" fill="url(#pattern_birds_white)"/>
              <defs>
                <pattern id="pattern_birds_white" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image_birds_white" transform="matrix(0.000976562 0 0 0.00456621 0 -1.6621)"/>
                </pattern>
                <image id="image_birds_white" width="1024" height="1024" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>
          </div>
          <h2 style={styles.title}>আপনার সৃষ্টি প্রকাশ করার সময় এসেছে</h2>
          <p style={styles.subtitle}>আজই নবদিগন্তে যোগ দিন এবং আপনার সাহিত্যকর্ম হাজারো পাঠকের কাছে পৌঁছে দিন</p>
          <div style={styles.btnGroup}>
            <button style={styles.primaryBtn}>লেখক হিসেবে যোগ দিন</button>
            <button style={styles.secondaryBtn}>বই ব্রাউজ করুন</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    background: '#5D1010',
    textAlign: 'center',
    color: '#FFF',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  birds: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.8,
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.8,
    marginBottom: '3rem',
    lineHeight: '1.7',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  primaryBtn: {
    background: 'var(--accent-gold)',
    color: 'var(--dark-maroon)',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  secondaryBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#FFF',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};
