import Navbar from '@/components/Navbar';

export default function PublishPage() {
  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <Navbar />
      <main style={styles.main}>
        <div className="container">
          <div style={styles.grid}>
            <div style={styles.content}>
              <h1 style={styles.title}>আপনার পাণ্ডুলিপি জমা দিন</h1>
              <p style={styles.description}>
                আপনার সৃজনশীলতাকে বিশ্বের দরবারে পৌঁছে দিতে নবদিগন্ত সর্বদা পাশে আছে। আপনার লেখা গল্প, কবিতা বা উপন্যাস আমাদের পাঠান।
              </p>
              
              <form style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>লেখকের নাম</label>
                  <input type="text" style={styles.input} placeholder="আপনার পূর্ণ নাম" />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>ইমেইল</label>
                  <input type="email" style={styles.input} placeholder="আপনার ইমেইল ঠিকানা" />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>লেখার ধরন</label>
                  <select style={styles.input}>
                    <option>উপন্যাস</option>
                    <option>কবিতা</option>
                    <option>ছোটগল্প</option>
                    <option>প্রবন্ধ</option>
                  </select>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>পাণ্ডুলিপি আপলোড করুন (PDF)</label>
                  <input type="file" style={styles.input} />
                </div>
                <button type="submit" style={styles.submitBtn}>জমা দিন</button>
              </form>
            </div>
            
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>কেন আমাদের মাধ্যমে প্রকাশ করবেন?</h3>
              <ul style={styles.ul}>
                <li>✓ দ্রুত প্রকাশনা প্রক্রিয়া</li>
                <li>✓ আকর্ষণীয় রয়্যালটি</li>
                <li>✓ দক্ষ সম্পাদনা প্যানেল</li>
                <li>✓ দেশব্যাপী বিপণন নেটওয়ার্ক</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <footer style={styles.footer}>
        <div className="container">
          <p style={{ textAlign: 'center', opacity: 0.5 }}>© ২০২৬ নবদিগন্ত। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  main: {
    paddingTop: 'clamp(120px, 20vw, 160px)',
    paddingBottom: '80px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 'clamp(2rem, 5vw, 4rem)',
    alignItems: 'start',
  },
  title: {
    fontSize: 'clamp(2rem, 8vw, 3rem)',
    color: 'var(--dark-maroon)',
    fontWeight: '800',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    lineHeight: '1.8',
    marginBottom: '3rem',
  },
  form: {
    background: '#FFF',
    padding: 'clamp(1.5rem, 5vw, 3rem)',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
    border: '1px solid rgba(0,0,0,0.05)',
  },
  inputGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.6rem',
    fontWeight: '600',
    color: 'var(--dark-maroon)',
    fontSize: '0.95rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    background: '#F9FAFB',
  },
  submitBtn: {
    width: '100%',
    padding: '1.1rem',
    background: 'var(--dark-maroon)',
    color: '#FFF',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 10px 20px rgba(93, 16, 16, 0.2)',
  },
  infoCard: {
    background: 'var(--dark-maroon)',
    padding: '3rem',
    borderRadius: '24px',
    color: '#FFF',
    position: 'sticky',
    top: '120px',
    boxShadow: '0 30px 60px rgba(93, 16, 16, 0.3)',
  },
  infoTitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: 'var(--accent-gold)',
    fontWeight: '700',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2.5',
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  footer: {
    padding: '40px 0',
    background: '#1A1A1A',
    color: '#FFF',
  }
};
