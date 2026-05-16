import Navbar from '@/components/Navbar';
import Blog from '@/components/Blog';

export default function BlogPage() {
  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1 style={styles.title}>সাহিত্য ব্লগ</h1>
          <p style={styles.subtitle}>সাহিত্যের নানা দিক নিয়ে আমাদের লেখকদের বিশ্লেষণ ও আলোচনা</p>
        </div>
        <Blog />
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
  title: {
    fontSize: '3rem',
    color: 'var(--dark-maroon)',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  footer: {
    padding: '40px 0',
    background: '#1A1A1A',
    color: '#FFF',
    marginTop: '100px',
  }
};
