import Navbar from '@/components/Navbar';
import BookGrid from '@/components/BookGrid';
import Categories from '@/components/Features';

export default function BooksPage() {
  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        <div className="container">
          <h1 style={styles.title}>বইয়ের তালিকা</h1>
          <p style={styles.subtitle}>আমাদের সংগ্রহের সেরা বইগুলো আপনার জন্য</p>
        </div>
        <Categories />
        <BookGrid />
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
