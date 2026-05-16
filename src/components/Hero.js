import Image from 'next/image';

export default function Hero() {
  return (
    <section style={styles.hero}>
      {/* Background Overlay */}
      <div style={styles.overlay}></div>
      
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.badge} className="animate-fade">
            ✦ বাংলা সাহিত্যের নতুন ঠিকানা ✦
          </div>
          <h1 style={styles.title} className="animate-fade">
            নবদিগন্তে স্বাগতম — <span style={styles.accentText}>সাহিত্য নতুন পথে</span>
          </h1>
          <h2 style={styles.tagline} className="animate-fade">পড়ুন, লিখুন, প্রকাশ করুন</h2>
          <p style={styles.subtitle} className="animate-fade">
            শুধু বই নয়, এক নতুন সাহিত্য আন্দোলন। আপনার গল্প এবার সবার কাছে পৌঁছাক। পাঠকের সাথে লেখকের সেতুবন্ধন।
          </p>
          
          <div style={styles.btnGroup} className="animate-fade">
            <button className="btn-red" style={styles.mainBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              বই কিনুন
            </button>
            <button className="btn-outline-gold" style={styles.secondaryBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              আপনার বই প্রকাশ করুন
            </button>
          </div>
          
          <div style={styles.stats} className="animate-fade">
            <div style={styles.statItem}>
              <span style={styles.statValue}>৫০০+</span>
              <span style={styles.statLabel}>বই</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statValue}>১২০+</span>
              <span style={styles.statLabel}>লেখক</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statValue}>৮০০০+</span>
              <span style={styles.statLabel}>পাঠক</span>
            </div>
          </div>
        </div>
        
        <div style={styles.visual} className="animate-fade">
          <div style={styles.bookGrid}>
            <div style={{...styles.bookWrapper, top: '0', left: '0', zIndex: 1, transform: 'rotate(-10deg)'}}>
              <Image src="/1.png" alt="Book 1" width={180} height={260} style={styles.bookCover} priority />
            </div>
            <div style={{...styles.bookWrapper, top: '40px', left: '210px', zIndex: 3, transform: 'rotate(5deg)'}}>
              <Image src="/2.png" alt="Book 2" width={180} height={260} style={styles.bookCover} priority />
            </div>
            <div style={{...styles.bookWrapper, top: '280px', left: '20px', zIndex: 2, transform: 'rotate(8deg)'}}>
              <Image src="/3.png" alt="Book 3" width={180} height={260} style={styles.bookCover} />
            </div>
            <div style={{...styles.bookWrapper, top: '320px', left: '230px', zIndex: 4, transform: 'rotate(-5deg)'}}>
              <Image src="/4.png" alt="Book 4" width={180} height={260} style={styles.bookCover} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    paddingTop: '180px',
    paddingBottom: '100px',
    position: 'relative',
    background: '#5D1010',
    backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFF',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(93, 16, 16, 0.95) 30%, rgba(93, 16, 16, 0.6) 100%)',
    zIndex: 1,
  },
  container: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    maxWidth: '700px',
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1.2rem',
    border: '1px solid var(--accent-gold)',
    borderRadius: '100px',
    color: 'var(--accent-gold)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '2rem',
    background: 'rgba(212, 175, 55, 0.1)',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '1rem',
  },
  accentText: {
    color: 'var(--accent-gold)',
    textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
  },
  tagline: {
    fontSize: '1.8rem',
    color: 'var(--accent-gold)',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    opacity: 0.9,
    marginBottom: '2.5rem',
    maxWidth: '550px',
  },
  btnGroup: {
    display: 'flex',
    gap: '1.2rem',
    marginBottom: '4rem',
  },
  mainBtn: {
    fontSize: '1rem',
    padding: '1rem 2.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  secondaryBtn: {
    fontSize: '1rem',
    padding: '1rem 2.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  stats: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--accent-gold)',
    marginBottom: '0.2rem',
  },
  statLabel: {
    fontSize: '1rem',
    opacity: 0.8,
  },
  visual: {
    position: 'relative',
    width: '500px',
    height: '650px',
  },
  bookGrid: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  bookWrapper: {
    position: 'absolute',
    borderRadius: '8px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    background: '#FFF',
    padding: '5px',
  },
  bookCover: {
    display: 'block',
    objectFit: 'contain',
    borderRadius: '4px',
  }
};
