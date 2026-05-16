import Image from 'next/image';

export default function BookGrid() {
  const books = [
    { title: "পথের পাঁচালী", author: "বিভুতিভূষণ বন্দ্যোপাধ্যায়", rating: 5, reviews: 1247, price: "২৮০", oldPrice: "৩৫০", img: "/1.png" },
    { title: "গোরা", author: "রবীন্দ্রনাথ ঠাকুর", rating: 4, reviews: 856, price: "৪২০", oldPrice: "৫০০", img: "/2.png" },
    { title: "শ্রীকান্ত", author: "শরৎচন্দ্র চট্টোপাধ্যায়", rating: 5, reviews: 932, price: "৩১০", oldPrice: "৩৮০", img: "/3.png" },
    { title: "পদ্মা নদীর মাঝি", author: "মানিক বন্দ্যোপাধ্যায়", rating: 4, reviews: 742, price: "১৯০", oldPrice: "২৪০", img: "/4.png" },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div>
            <span style={styles.subtitle}>সেরা নির্বাচন</span>
            <h2 style={styles.title}>প্রস্তাবিত বই</h2>
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
          <button style={styles.viewAll}>
            সব দেখুন 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        
        <div style={styles.grid}>
          {books.map((book, index) => (
            <div key={index} style={styles.card} className="animate-fade">
              <div style={styles.coverWrapper}>
                <div style={styles.coverPlaceholder}>
                  <Image src={book.img} alt={book.title} fill style={{objectFit: 'contain', borderRadius: '8px'}} />
                  <div style={styles.wishlist}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div style={styles.info}>
                <h3 style={styles.bookTitle}>{book.title}</h3>
                <p style={styles.author}>{book.author}</p>
                
                <div style={styles.ratingRow}>
                  <div style={styles.stars}>
                    {"★".repeat(book.rating)}{"☆".repeat(5-book.rating)}
                  </div>
                  <span style={styles.reviews}>({book.reviews})</span>
                </div>
                
                <div style={styles.priceRow}>
                  <span style={styles.price}>৳{book.price}</span>
                  <span style={styles.oldPrice}>৳{book.oldPrice}</span>
                </div>
                
                <div style={styles.actions}>
                  <button style={styles.cartBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    কার্টে যোগ করুন
                  </button>
                  <button style={styles.optionsBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
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
    padding: '80px 0',
    backgroundColor: '#FAF5F0',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '3rem',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--accent-gold)',
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--dark-maroon)',
    fontWeight: '700',
    marginBottom: '0.8rem',
  },
  separator: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '1rem',
  },
  viewAll: {
    background: 'transparent',
    border: 'none',
    color: 'var(--accent-gold)',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
    border: '1px solid rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  coverWrapper: {
    padding: '1rem 1rem 0',
  },
  coverPlaceholder: {
    height: '350px',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    background: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlist: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '36px',
    height: '36px',
    background: '#FFF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    zIndex: 2,
    border: '1px solid #eee',
    color: 'var(--accent-gold)',
  },
  info: {
    padding: '1.5rem',
  },
  bookTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '0.4rem',
    color: 'var(--text-dark)',
  },
  author: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    marginBottom: '1rem',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.2rem',
  },
  stars: {
    color: '#FFD700',
    letterSpacing: '3px',
    fontSize: '1.1rem',
  },
  reviews: {
    fontSize: '0.9rem',
    color: '#888',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  price: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: 'var(--dark-maroon)',
  },
  oldPrice: {
    fontSize: '1.1rem',
    color: '#999',
    textDecoration: 'line-through',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
  },
  cartBtn: {
    flex: 1,
    background: 'var(--dark-maroon)',
    color: '#FFF',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1rem',
  },
  optionsBtn: {
    width: '50px',
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--dark-maroon)',
  }
};
