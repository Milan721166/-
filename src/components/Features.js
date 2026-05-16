export default function Categories() {
  const categories = [
    { 
      title: "উপন্যাস", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ), 
      count: "২৪৫+ টি", 
      color: "#F5F5F5" 
    },
    { 
      title: "কবিতা", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ), 
      count: "২৪৫+ টি", 
      color: "#F5F5F5" 
    },
    { 
      title: "গল্প", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ), 
      count: "২৪৫+ টি", 
      color: "#F5F5F5" 
    },
    { 
      title: "শিশুতোষ", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ), 
      count: "২৪৫+ টি", 
      color: "#F5F5F5" 
    },
    { 
      title: "ভ্রমণ", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ), 
      count: "২৪৫+ টি", 
      color: "#F5F5F5" 
    },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>সকল ধরনের বই</span>
          <h2 style={styles.title}>বিভাগসমূহ</h2>
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
          {categories.map((cat, index) => (
            <div key={index} style={styles.card} className="animate-fade">
              <div style={{...styles.iconWrapper, backgroundColor: cat.color}}>
                <span style={styles.icon}>{cat.icon}</span>
              </div>
              <h3 style={styles.cardTitle}>{cat.title}</h3>
              <p style={styles.count}>{cat.count}</p>
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
    textAlign: 'center',
  },
  header: {
    marginBottom: '4rem',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--accent-gold)',
    fontWeight: '500',
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
    marginBottom: '1rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  card: {
    width: '180px',
    background: '#FFFFFF',
    padding: '2.5rem 1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 1.5rem',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.05)',
    color: 'var(--dark-maroon)',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    marginBottom: '0.8rem',
    color: 'var(--text-dark)',
  },
  count: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    background: '#FFF9E5',
    padding: '0.2rem 0.8rem',
    borderRadius: '100px',
    display: 'inline-block',
  }
};
