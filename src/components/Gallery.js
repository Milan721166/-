import Image from 'next/image';

export default function Gallery() {
  const images = [
    "/galary/1.png",
    "/galary/2.png",
    "/galary/3.png",
    "/galary/4.png",
    "/galary/5.png",
    "/galary/6.png",
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>স্মৃতির পাতায় নবদিগন্ত</span>
          <h2 style={styles.title}>ফটো গ্যালারি</h2>
          <div style={styles.separator}>
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 20C100 20 90 10 80 10C70 10 60 20 60 20C60 20 70 30 80 30C90 30 100 20 100 20Z" stroke="var(--accent-gold)" strokeWidth="2"/>
              <path d="M100 20C100 20 110 10 120 10C130 10 140 20 140 20C140 20 130 30 120 30C110 30 100 20 100 20Z" stroke="var(--accent-gold)" strokeWidth="2"/>
              <path d="M20 20H60" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M140 20H180" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="100" cy="20" r="3" fill="var(--accent-gold)"/>
            </svg>
          </div>
        </div>
        
        <div style={styles.grid}>
          {images.map((url, i) => (
            <div key={i} style={styles.imgCard} className="gallery-item">
              <Image src={url} alt={`Gallery ${i + 1}`} fill style={{objectFit: 'cover'}} />
            </div>
          ))}
        </div>
        
        <div style={styles.footer}>
          <button style={styles.moreBtn}>
            আরও ছবি দেখুন 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '10px'}}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#FAF3E0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--accent-gold)',
    display: 'block',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.8rem',
    color: 'var(--dark-maroon)',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  imgCard: {
    height: '300px',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '4px solid #FFF',
  },
  footer: {
    textAlign: 'center',
  },
  moreBtn: {
    background: '#FFF',
    border: '1px solid var(--dark-maroon)',
    color: 'var(--dark-maroon)',
    padding: '0.8rem 2.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    transition: 'all 0.2s ease',
  }
};
