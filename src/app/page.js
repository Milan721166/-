import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Features';
import BookGrid from '@/components/BookGrid';
import Founder from '@/components/Founder';
import FeaturedBook from '@/components/FeaturedBook';
import DiscountBanner from '@/components/DiscountBanner';
import AboutSection from '@/components/AboutSection';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <BookGrid />
        <Founder />
        <FeaturedBook />
        <DiscountBanner />
        <AboutSection />
        <Gallery />
        <Testimonials />
        <Blog />
        <FinalCTA />
      </main>

      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerGrid}>
            <div style={styles.footerBrand}>
              <h2 style={styles.logoText}>নবদিগন্ত</h2>
              <p style={styles.footerDesc}>
                বাংলা সাহিত্যের উৎকর্ষ সাধনে আমাদের এক ক্ষুদ্র প্রয়াস। সাহিত্যের নতুন দিগন্তে আপনাকে স্বাগতম।
              </p>
              <div style={styles.socialIcons}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', opacity: 0.8}}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', opacity: 0.8}}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer', opacity: 0.8}}>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </div>
            <div style={styles.footerLinks}>
              <h4 style={styles.footerTitle}>দ্রুত লিঙ্ক</h4>
              <ul style={styles.ul}>
                <li>হোম</li>
                <li>বইয়ের তালিকা</li>
                <li>লেখক তালিকা</li>
                <li>আমাদের সম্পর্কে</li>
              </ul>
            </div>
            <div style={styles.footerContact}>
              <h4 style={styles.footerTitle}>যোগাযোগ</h4>
              <ul style={styles.ul}>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  info@nabadigonto.com
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +৮৮০ ১২৩৪ ৫৬৭৮৯০
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  ঢাকা, বাংলাদেশ
                </li>
              </ul>
            </div>
          </div>
          <div style={styles.bottomBar}>
            <p>© ২০২৬ নবদিগন্ত স্টুডিও। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--bg-cream)',
  },
  footer: {
    padding: '80px 0 40px',
    background: '#1A1A1A',
    color: '#FFFFFF',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '4rem',
    marginBottom: '60px',
  },
  logoText: {
    fontSize: '2rem',
    color: 'var(--accent-gold)',
    marginBottom: '1.5rem',
  },
  footerDesc: {
    opacity: 0.6,
    lineHeight: '1.8',
    maxWidth: '400px',
    marginBottom: '2rem',
  },
  footerTitle: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    color: 'var(--accent-gold)',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2.5',
    opacity: 0.8,
  },
  socialIcons: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '1.5rem',
    color: 'var(--accent-gold)',
  },
  bottomBar: {
    paddingTop: '40px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    textAlign: 'center',
    opacity: 0.4,
    fontSize: '0.9rem',
  }
};
