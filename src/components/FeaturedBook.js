import Image from 'next/image';

export default function FeaturedBook() {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container flex-responsive" style={styles.container}>
        <div style={styles.visual}>
          <div style={styles.bookStack} className="featured-book-3d">
            <div style={styles.bookMain}>
              <Image src="/1.png" alt="Featured Book" width={320} height={460} style={styles.image} />
            </div>
            <div style={styles.badge}>সেরা বাছাই</div>
          </div>
        </div>
        
        <div style={styles.content}>
          <span style={styles.subtitle}>বিশেষ সংকলন</span>
          <h2 style={styles.title}>সেরা দশ কবির প্রেমের কবিতা</h2>
          <p style={styles.description}>
            বাংলা সাহিত্যের শ্রেষ্ঠ দশজন কবির প্রেমের কবিতার এক অনবদ্য সংকলন। বিরহ, মিলন এবং ভালোবাসার নানা রঙে রঙিন এই বইটি আপনার সংগ্রহে রাখার মতো। 
          </p>
          
          <div style={styles.priceSection}>
            <span style={styles.price}>৳৪৫০</span>
            <span style={styles.discount}>২৫% ছাড়</span>
          </div>
          
          <div style={styles.btnGroup}>
            <button style={styles.buyBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              এখনই কিনুন
            </button>
            <button style={styles.detailsBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #FAF3E0 0%, #F5E6CC 100%)',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(2rem, 8vw, 6rem)',
  },
  visual: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0',
  },
  bookStack: {
    position: 'relative',
    transform: 'perspective(1000px) rotateY(-10deg)',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    maxWidth: '280px',
  },
  bookMain: {
    boxShadow: '20px 20px 60px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.1)',
    background: '#FFF',
    padding: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
  },
  badge: {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    background: 'var(--accent-gold)',
    color: 'var(--dark-maroon)',
    padding: '1rem',
    borderRadius: '50%',
    fontWeight: '700',
    fontSize: '0.85rem',
    boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    zIndex: 2,
    border: '2px solid #FFF',
  },
  content: {
    flex: 1.2,
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--accent-gold)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '1rem',
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    color: 'var(--dark-maroon)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    lineHeight: '1.8',
    marginBottom: '2.5rem',
    maxWidth: '500px',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  price: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: 'var(--dark-maroon)',
  },
  discount: {
    background: 'var(--dark-maroon)',
    color: '#FFF',
    padding: '0.4rem 1rem',
    borderRadius: '100px',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  btnGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  buyBtn: {
    background: 'var(--dark-maroon)',
    color: '#FFF',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
  },
  detailsBtn: {
    background: 'transparent',
    border: '2px solid var(--dark-maroon)',
    color: 'var(--dark-maroon)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
  }
};
