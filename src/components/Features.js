export default function Categories() {
  const categories = [
    { name: "কবিতা", count: "১২০+", icon: "✍️" },
    { name: "উপন্যাস", count: "৮৫+", icon: "📚" },
    { name: "ছোটগল্প", count: "১৫০+", icon: "📖" },
    { name: "প্রবন্ধ", count: "৪৫+", icon: "🖋️" },
    { name: "নাটক", count: "৩০+", icon: "🎭" },
    { name: "অনুবাদ", count: "২৫+", icon: "🌐" },
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.grid}>
          {categories.map((cat, i) => (
            <div key={i} style={styles.card} className="animate-fade">
              <div style={styles.icon}>{cat.icon}</div>
              <h3 style={styles.name}>{cat.name}</h3>
              <p style={styles.count}>{cat.count}টি বই</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 0',
    backgroundColor: 'var(--bg-cream)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
  },
  card: {
    background: '#FFF',
    padding: '1.5rem',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
    border: '1px solid rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--dark-maroon)',
    marginBottom: '0.4rem',
  },
  count: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  }
};
