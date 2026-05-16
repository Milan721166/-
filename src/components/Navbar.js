"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "বই", href: "/books" },
    { name: "লেখক", href: "/authors" },
    { name: "প্রকাশ করুন", href: "/publish" },
    { name: "ব্লগ", href: "/blog" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
        
        {/* Desktop Navigation Pill */}
        <div className="hide-mobile" style={styles.navPill}>
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
        
        {/* Actions & Login (Desktop) */}
        <div className="hide-mobile" style={styles.actions}>
          <div style={styles.iconGroup}>
            <svg style={styles.actionIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg style={styles.actionIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <button style={styles.loginBtn}>লগইন</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="show-mobile" style={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <div style={styles.mobileLinks}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                style={pathname === link.href ? styles.mobileLinkActive : styles.mobileLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div style={{marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center'}}>
               <svg style={styles.actionIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <svg style={styles.actionIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <button style={{...styles.loginBtn, width: '100%', marginTop: '2rem'}}>লগইন</button>
          </div>
        </div>
      )}
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
    padding: '0 1rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.8rem 1.5rem',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(20px)',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '30px',
    height: '30px',
    background: 'var(--dark-maroon)',
    borderRadius: '6px',
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
    fontSize: '1.2rem',
    fontWeight: '700',
    lineHeight: '1.1',
  },
  brandTagline: {
    color: 'var(--accent-gold)',
    fontSize: '0.65rem',
    fontWeight: '500',
    opacity: 0.8,
  },
  navPill: {
    display: 'flex',
    gap: '1.5rem',
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '0.5rem 1.8rem',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    opacity: 0.7,
  },
  linkActive: {
    color: 'var(--accent-gold)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    opacity: 1,
    borderBottom: '2px solid var(--accent-gold)',
    paddingBottom: '2px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  iconGroup: {
    display: 'flex',
    gap: '1rem',
    color: 'var(--accent-gold)',
  },
  actionIcon: {
    cursor: 'pointer',
    opacity: 0.9,
    transition: 'all 0.3s ease',
  },
  loginBtn: {
    padding: '0.5rem 1.2rem',
    background: 'var(--accent-gold)',
    border: 'none',
    borderRadius: '50px',
    color: 'var(--dark-maroon)',
    fontSize: '0.9rem',
    fontWeight: '700',
    cursor: 'pointer',
  },
  mobileMenuBtn: {
    color: '#FFF',
    cursor: 'pointer',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '100%',
    left: '1rem',
    right: '1rem',
    marginTop: '1rem',
    background: 'rgba(0,0,0,0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '2rem',
    border: '1px solid rgba(255,255,255,0.1)',
    zIndex: 999,
  },
  mobileLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'center',
  },
  mobileLink: {
    color: '#FFF',
    fontSize: '1.2rem',
    textDecoration: 'none',
    opacity: 0.7,
  },
  mobileLinkActive: {
    color: 'var(--accent-gold)',
    fontSize: '1.2rem',
    textDecoration: 'none',
    fontWeight: '700',
  }
};
