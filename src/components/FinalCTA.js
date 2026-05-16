export default function FinalCTA() {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.card} className="animate-fade">
          <div style={styles.content}>
            <h2 style={styles.title}>আপনার লেখা এবার ডানা মেলুক</h2>
            <p style={styles.subtitle}>আজই যুক্ত হোন নবদিগন্তের সাথে এবং শুরু করুন আপনার লেখক জীবন।</p>
            
            <div style={styles.btnGroup}>
              <button style={styles.mainBtn}>লেখা জমা দিন</button>
              <button style={styles.secondaryBtn}>আমাদের লক্ষ্য জানুন</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: 'var(--bg-cream)',
  },
  card: {
    background: 'var(--dark-maroon)',
    backgroundImage: 'linear-gradient(rgba(93, 16, 16, 0.9), rgba(93, 16, 16, 0.9)), url("https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '32px',
    padding: 'clamp(3rem, 10vw, 6rem) 2rem',
    textAlign: 'center',
    color: '#FFF',
    boxShadow: '0 40px 80px rgba(93, 16, 16, 0.3)',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    opacity: 0.8,
    marginBottom: '3rem',
    lineHeight: '1.6',
  },
  btnGroup: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  mainBtn: {
    background: 'var(--accent-gold)',
    color: 'var(--dark-maroon)',
    border: 'none',
    padding: '1.2rem 3rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  secondaryBtn: {
    background: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    color: '#FFF',
    padding: '1.2rem 3rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
  }
};
