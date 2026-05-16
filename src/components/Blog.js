import Image from 'next/image';

export default function Blog() {
  const posts = [
    {
      title: "রবীন্দ্রনাথের ছোটগল্পে নারী চরিত্র: এক অনন্য বিশ্লেষণ",
      author: "ডঃ অনিমেষ রায়",
      date: "১৫ মে, ২০২৬",
      category: "প্রবন্ধ",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80"
    },
    {
      title: "আধুনিক বাংলা কবিতায় ছন্দের বিবর্তন ও বর্তমান ধারা",
      author: "কবিতা সেন",
      date: "১২ মে, ২০২৬",
      category: "আলোচনা",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80"
    },
    {
      title: "পাণ্ডুলিপি থেকে বই: নতুন লেখকদের জন্য পূর্ণাঙ্গ গাইড",
      author: "সম্পাদক প্যানেল",
      date: "১০ মে, ২০২৬",
      category: "নির্দেশিকা",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>সাহিত্যের আঙিনায়</span>
          <h2 style={styles.title}>ব্লগ ও নিবন্ধ</h2>
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
          {posts.map((post, i) => (
            <div key={i} style={styles.card} className="animate-fade">
              <div style={styles.imgWrapper}>
                <Image src={post.img} alt={post.title} fill style={{objectFit: 'cover'}} />
                <span style={styles.catBadge}>{post.category}</span>
              </div>
              <div style={styles.content}>
                <div style={styles.meta}>
                  <span>{post.author}</span>
                  <span style={styles.dot}>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 style={styles.postTitle}>{post.title}</h3>
                <button style={styles.readMore}>
                  পড়ুন 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#FAF5F0',
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
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    background: '#FFF',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  imgWrapper: {
    height: '220px',
    position: 'relative',
  },
  catBadge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    background: 'var(--dark-maroon)',
    color: '#FFF',
    padding: '0.3rem 1rem',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  content: {
    padding: '1.5rem',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginBottom: '1rem',
  },
  dot: {
    color: 'var(--accent-gold)',
  },
  postTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  readMore: {
    background: 'none',
    border: 'none',
    color: 'var(--dark-maroon)',
    fontWeight: '700',
    fontSize: '0.95rem',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  }
};
