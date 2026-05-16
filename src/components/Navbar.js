"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "বই", href: "/books" },
    { name: "লেখক", href: "/authors" },
    { name: "প্রকাশ করুন", href: "/publish" },
    { name: "ব্লগ", href: "/blog" },
  ];

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        {/* Logo */}
        <Link href="/" style={styles.logo}>
          <div style={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
            </svg>
          </div>
          <div style={styles.logoText}>
            <span style={styles.brandName}>নবদিগন্ত</span>
            <span style={styles.brandTagline}>সাহিত্য প্রকাশনী</span>
          </div>
        </Link>
        
        {/* Centered Navigation Pill */}
        <div style={styles.navPill}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              style={pathname === link.href ? styles.linkActive : styles.link}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Actions & Login */}
        <div style={styles.actions}>
          <div style={styles.iconGroup}>
            <svg style={styles.actionIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg style={styles.actionIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <svg style={styles.actionIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <button style={styles.loginBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            লগইন
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: '20px',
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0 2rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.8rem 2rem',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(15px)',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    background: 'var(--dark-maroon)',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: '1.4rem',
    fontWeight: '700',
    lineHeight: '1.1',
  },
  brandTagline: {
    color: 'var(--accent-gold)',
    fontSize: '0.75rem',
    fontWeight: '500',
    opacity: 0.8,
  },
  navPill: {
    display: 'flex',
    gap: '2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '0.4rem 2rem',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    opacity: 0.8,
  },
  linkActive: {
    color: 'var(--accent-gold)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '600',
    position: 'relative',
    opacity: 1,
    borderBottom: '2px solid var(--accent-gold)',
    paddingBottom: '2px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
  },
  iconGroup: {
    display: 'flex',
    gap: '1.5rem',
    color: 'var(--accent-gold)',
  },
  actionIcon: {
    cursor: 'pointer',
    opacity: 0.9,
    transition: 'all 0.3s ease',
  },
  loginBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1.5rem',
    background: 'transparent',
    border: '1px solid var(--accent-gold)',
    borderRadius: '10px',
    color: 'var(--accent-gold)',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};
