import Image from 'next/image';

export default function Blog() {
  const posts = [
    { title: "রবীন্দ্রনাথের কবিতায় প্রকৃতির রূপ", category: "সাহিত্য পর্যালোচনা", date: "৩০ পৌষ, ১৪৩০", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80" },
    { title: "রবীন্দ্রনাথের কবিতায় প্রকৃতির রূপ", category: "কবিতা সমালোচনা", date: "২৮ পৌষ, ১৪৩০", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80" },
    { title: "রবীন্দ্রনাথের কবিতায় প্রকৃতির রূপ", category: "সাহিত্য পর্যালোচনা", date: "৩০ পৌষ, ১৪৩০", img: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80" },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>শিল্প ও সাহিত্য</span>
          <h2 style={styles.title}>সাহিত্য ব্লগ</h2>
          <div style={styles.separator}>
            {/* Professional Floral Divider SVG */}
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
              <div style={styles.imageBox}>
                <Image src={post.img} alt={post.title} fill style={{objectFit: 'cover'}} />
                <span style={styles.tag}>{post.category}</span>
              </div>
              <div style={styles.info}>
                <h3 style={styles.postTitle}>{post.title}</h3>
                <p style={styles.postDesc}>রবীন্দ্রনাথ ঠাকুরের কবিতায় প্রকৃতির অমোঘ টান লক্ষ করা যায়। এটি একটি সংক্ষিপ্ত বিশ্লেষণ যেখানে আমরা প্রকৃতির সাথে তাঁর আধ্যাত্মিক সংযোগ নিয়ে আলোচনা করব।</p>
                <div style={styles.meta}>
                  <span style={styles.date}>{post.date}</span>
                  <button style={styles.readMore}>
                    আরও পড়ুন 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={styles.footer}>
          <button style={styles.viewAllBtn}>
            সব প্রবন্ধ দেখুন 
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    marginBottom: '4rem',
  },
  card: {
    background: '#FFF',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  imageBox: {
    height: '240px',
    position: 'relative',
  },
  tag: {
    position: 'absolute',
    bottom: '1.2rem',
    left: '1.2rem',
    background: 'rgba(255, 255, 255, 0.95)',
    color: 'var(--dark-maroon)',
    padding: '0.3rem 1rem',
    borderRadius: '100px',
    fontSize: '0.8rem',
    fontWeight: '700',
  },
  info: {
    padding: '2rem',
  },
  postTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '1rem',
    lineHeight: '1.4',
  },
  postDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.5rem',
    borderTop: '1px solid #eee',
  },
  date: {
    fontSize: '0.85rem',
    color: '#888',
  },
  readMore: {
    background: 'transparent',
    border: 'none',
    color: 'var(--dark-maroon)',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    textAlign: 'center',
  },
  viewAllBtn: {
    background: '#FFF',
    border: '1px solid var(--dark-maroon)',
    color: 'var(--dark-maroon)',
    padding: '0.8rem 2.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
  }
};
