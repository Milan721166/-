import Image from 'next/image';

export default function Hero() {
  return (
    <section style={styles.hero} className="section-padding">
      {/* Background Overlay */}
      <div style={styles.overlay}></div>
      
      <div className="container flex-responsive" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.badge} className="animate-fade">
            ✦ বাংলা সাহিত্যের নতুন ঠিকানা ✦
          </div>
          <h1 style={styles.title} className="animate-fade">
            নবদিগন্তে স্বাগতম — <br className="hide-mobile" />
            <span style={styles.accentText}>সাহিত্য নতুন পথে</span>
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
              প্রকাশ করুন
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
        
        <div style={styles.visual} className="animate-fade hide-mobile">
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
    paddingTop: '160px',
    paddingBottom: '80px',
    position: 'relative',
    background: '#5D1010',
    backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFF',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, rgba(93, 16, 16, 0.98) 20%, rgba(93, 16, 16, 0.7) 100%)',
    zIndex: 1,
  },
  container: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  },
  content: {
    maxWidth: '750px',
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    border: '1px solid var(--accent-gold)',
    borderRadius: '100px',
    color: 'var(--accent-gold)',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    background: 'rgba(212, 175, 55, 0.1)',
  },
  title: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
  },
  accentText: {
    color: 'var(--accent-gold)',
    textShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
  },
  tagline: {
    fontSize: 'clamp(1.4rem, 4vw, 2rem)',
    color: 'var(--accent-gold)',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    opacity: 0.8,
    marginBottom: '2.5rem',
    maxWidth: '550px',
  },
  btnGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  mainBtn: {
    fontSize: '1rem',
    padding: '1rem 2.5rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
  },
  secondaryBtn: {
    fontSize: '1rem',
    padding: '1rem 2.5rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
  },
  stats: {
    display: 'flex',
    gap: 'clamp(2rem, 5vw, 4rem)',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--accent-gold)',
    marginBottom: '0.2rem',
  },
  statLabel: {
    fontSize: '0.9rem',
    opacity: 0.7,
  },
  visual: {
    position: 'relative',
    width: '450px',
    height: '600px',
    marginLeft: 'auto',
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
    transition: 'all 0.5s ease',
    background: '#FFF',
    padding: '5px',
  },
  bookCover: {
    display: 'block',
    objectFit: 'contain',
    borderRadius: '4px',
  }
};
