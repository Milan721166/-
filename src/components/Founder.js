import Image from 'next/image';

export default function Founder() {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>স্বপ্ন থেকে সৃষ্টি</span>
          <h2 style={styles.title}>প্রতিষ্ঠাতা ও প্রকাশনা পরিচিতি</h2>
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
        
        <div style={styles.contentWrapper}>
          <div style={styles.imageCol}>
            <div style={styles.imageFrame}>
              <div style={styles.cornerTop}></div>
              <div style={styles.cornerBottom}></div>
              <div style={styles.imgInner}>
                <Image src="/founder.png" alt="Founder" width={400} height={450} style={styles.image} />
              </div>
            </div>
          </div>
          
          <div style={styles.textCol}>
            <h3 style={styles.contentTitle}>আমাদের পথচলা</h3>
            <p style={styles.quote}>এক স্বপ্ন, এক সংগ্রাম, এক নতুন দিগন্ত</p>
            
            <h4 style={styles.authorName}>আকাশ চক্রবর্তী</h4>
            <div style={styles.description}>
              <p>আকাশ চক্রবর্তীর বেড়ে ওঠা শহরে নয়, বরং এক সাধারণ মফস্বলে। ছোটবেলা থেকেই বইয়ের পাতায় মজে থাকা এই তরুণ স্বপ্ন দেখতেন নিজের একটি প্রকাশনীর। সেই স্বপ্নই আজ রূপ নিয়েছে &lsquo;নবদিগন্ত&rsquo;-এ। সাহিত্য ও প্রকাশনার জগতে আরও এগিয়ে যাওয়ার লক্ষ্য নিয়ে তিনি নিরলসভাবে কাজ করে চলেছেন।</p>
              <p>বাংলার হারানো সাহিত্যিক মর্যাদা পুনরুদ্ধার এবং নতুন কলমের খোঁজে এই যাত্রা অবিরাম।</p>
            </div>
            
            <button className="btn-outline-gold" style={styles.moreBtn}>
              বিস্তারিত জানুন 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
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
    backgroundColor: '#FAF3E0',
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
    fontSize: '2.8rem',
    color: 'var(--dark-maroon)',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  contentWrapper: {
    display: 'flex',
    gap: '5rem',
    alignItems: 'center',
    background: '#FFF9EF',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
  },
  imageCol: {
    flex: 1,
  },
  imageFrame: {
    position: 'relative',
    padding: '15px',
  },
  imgInner: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
  },
  cornerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '60px',
    height: '60px',
    borderTop: '3px solid var(--accent-gold)',
    borderLeft: '3px solid var(--accent-gold)',
    zIndex: 2,
  },
  cornerBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60px',
    height: '60px',
    borderBottom: '3px solid var(--accent-gold)',
    borderRight: '3px solid var(--accent-gold)',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  textCol: {
    flex: 1.2,
  },
  contentTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '1rem',
  },
  quote: {
    fontSize: '1.1rem',
    color: 'var(--accent-gold)',
    fontWeight: '500',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  authorName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'var(--dark-maroon)',
    marginBottom: '1.2rem',
  },
  description: {
    color: 'var(--text-muted)',
    lineHeight: '1.8',
    fontSize: '1.05rem',
    marginBottom: '2rem',
  },
  moreBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.8rem 2rem',
  }
};
