import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/galary/1.png', size: 'large' },
    { src: '/galary/2.png', size: 'small' },
    { src: '/galary/3.png', size: 'small' },
    { src: '/galary/4.png', size: 'small' },
    { src: '/galary/5.png', size: 'small' },
    { src: '/galary/6.png', size: 'large' },
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>আমাদের ইভেন্ট</span>
          <h2 style={styles.title}>ছবিতে নবদিগন্ত</h2>
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
        
        <div style={styles.masonry}>
          {images.map((img, i) => (
            <div key={i} style={{
              ...styles.imgCard,
              gridColumn: img.size === 'large' ? 'span 2' : 'span 1',
              gridRow: img.size === 'large' ? 'span 2' : 'span 1'
            }} className="gallery-item">
              <Image src={img.src} alt="Gallery" fill style={{objectFit: 'cover'}} />
              <div style={styles.hoverOverlay}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-item {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#FFF9EF',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--accent-gold)',
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    color: 'var(--dark-maroon)',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  masonry: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
    gridAutoRows: '200px',
  },
  imgCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(93, 16, 16, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  }
};
