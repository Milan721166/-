export default function Testimonials() {
  const reviews = [
    { name: "সত্যজিৎ রায়", location: "কলকাতা", text: "নবদিগন্তের মাধ্যমে বাংলা বই পড়ার নতুন অভিজ্ঞতা পেলাম। সুন্দর UI এবং দারুণ কালেকশন!", rating: 5 },
    { name: "বঙ্কিম রায়", location: "ঢাকা", text: "আমি এখানে আমার প্রথম কবিতার বই প্রকাশ করেছি। পাঠকদের সাড়া পেয়ে অভিভূত!", rating: 5 },
    { name: "হিমু মণ্ডল", location: "চট্টগ্রাম", text: "সফটওয়্যারের মাধ্যমে বাংলা বই পড়ার নতুন অভিজ্ঞতা পেলাম। সুন্দর UI এবং দারুণ কালেকশন!", rating: 4 },
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <span style={styles.subtitle}>বিশিষ্ট লেখকগণ</span>
          <h2 style={styles.title}>পাঠক ও লেখক মতামত</h2>
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
          {reviews.map((rev, i) => (
            <div key={i} style={styles.card} className="animate-fade">
              <div style={styles.stars}>{"★".repeat(rev.rating)}{"☆".repeat(5-rev.rating)}</div>
              <div style={styles.quoteMark}>&ldquo;</div>
              <p style={styles.text}>{rev.text}</p>
              <div style={styles.author}>
                <div style={styles.avatar}>{rev.name[0]}</div>
                <div style={styles.meta}>
                  <span style={styles.name}>{rev.name}</span>
                  <span style={styles.location}>{rev.location}</span>
                </div>
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
    fontWeight: '600',
    letterSpacing: '2px',
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
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',
    flexWrap: 'wrap',
  },
  card: {
    background: '#FFF',
    padding: '2.5rem',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '380px',
    position: 'relative',
    boxShadow: '0 15px 40px rgba(0,0,0,0.03)',
    border: '1px solid rgba(0,0,0,0.05)',
  },
  stars: {
    color: '#FFD700',
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  quoteMark: {
    fontSize: '4rem',
    color: 'rgba(212, 175, 55, 0.1)',
    fontFamily: 'serif',
    position: 'absolute',
    right: '2rem',
    top: '1rem',
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-muted)',
    marginBottom: '2rem',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  avatar: {
    width: '50px',
    height: '50px',
    background: 'var(--dark-maroon)',
    color: '#FFF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: '700',
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
  },
  location: {
    fontSize: '0.85rem',
    color: '#888',
  }
};
