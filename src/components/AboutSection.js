import Image from 'next/image';

export default function AboutSection() {
  const stats = [
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ), 
      value: "৫০০+", 
      label: "বই প্রকাশিত" 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ), 
      value: "১২০+", 
      label: "লেখক" 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ), 
      value: "৪.৮", 
      label: "গড় রেটিং" 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ), 
      value: "৮০০০+", 
      label: "পাঠক" 
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.background}></div>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <span style={styles.subtitle}>আমাদের সম্পর্কে</span>
          <h2 style={styles.title}>প্রথমবার কেনাকাটায় ২০% ছাড়</h2>
          <div style={styles.description}>
            <p>কলেজ স্ট্রিটের যাত্রা থেকে ডিজিটাল দুনিয়ায় — বাংলা সাহিত্যকে নিয়ে যাচ্ছি নতুন প্রজন্মের কাছে। আমরা বিশ্বাস করি প্রতিটি মানুষের মধ্যে একজন লেখক আছেন।</p>
            <p>ডিজিটাল ম্যাগাজিনের সংস্কৃতি থেকে অনুপ্রাণিত হয়ে আমরা তৈরি করেছি এমন একটি প্ল্যাটফর্ম যেখানে যেকোনো লেখক তাদের সৃষ্টি প্রকাশ করতে পারবেন।</p>
          </div>
          
          <div style={styles.statsBar}>
            {stats.map((stat, i) => (
              <div key={i} style={styles.statItem}>
                <span style={styles.statIcon}>{stat.icon}</span>
                <div style={styles.statInfo}>
                  <span style={styles.statValue}>{stat.value}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={styles.visual}>
          <div style={styles.imageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80" 
              alt="Bookshelf" 
              width={450} 
              height={350} 
              style={styles.image} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    position: 'relative',
    color: '#FFF',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.2) blur(5px)',
    zIndex: 1,
  },
  container: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    gap: '5rem',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  subtitle: {
    color: 'var(--accent-gold)',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'block',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    opacity: 0.8,
    marginBottom: '3rem',
  },
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  statItem: {
    textAlign: 'center',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '0 0.5rem',
  },
  statIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5rem',
    color: 'var(--accent-gold)',
    opacity: 0.9,
  },
  statValue: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'var(--accent-gold)',
    display: 'block',
  },
  statLabel: {
    fontSize: '0.75rem',
    opacity: 0.6,
    textTransform: 'uppercase',
  },
  visual: {
    flex: 0.8,
  },
  imageWrapper: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
    border: '4px solid rgba(255,255,255,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  }
};
