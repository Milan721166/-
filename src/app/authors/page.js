import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Founder from '@/components/Founder';

export default function AuthorsPage() {
  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1 style={styles.title}>আমাদের লেখকগণ</h1>
          <p style={styles.subtitle}>সাহিত্যের অঙ্গনে যাদের পদচারণা আমাদের গর্ব</p>
        </div>
        <Founder />
        <Testimonials />
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
