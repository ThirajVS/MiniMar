import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CategoryFilter from '@/components/CategoryFilter';

export default function Home() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', content: "Hello! How can I assist you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const categories = ['all', 'electronics', 'kitchen', 'groceries', 'clothing', 'personal_care'];
  const sendAiMessage = async () => {
  if (!chatInput.trim()) return;

  setAiMessages((prev) => [...prev, { role: 'user', content: chatInput }]);
  setChatInput('');
  setIsTyping(true);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: chatInput })
    });

    const data = await res.json();

    setAiMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
  } catch (err) {
    setAiMessages((prev) => [...prev, { role: 'assistant', content: "⚠️ Failed to fetch reply." }]);
  } finally {
    setIsTyping(false);
  }
};

  // Load products
  useEffect(() => {
    const data = [
      {
        name: "Apple iPhone 15 Pro (128GB)",
        description: "Titanium body, A17 Pro chip, 5x zoom camera",
        imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&h=300",
        currentPrice: 119900,
        category: 'electronics'
      },
      {
        name: "Samsung Galaxy S24 Ultra",
        description: "200MP camera, S Pen, AI features, 6.8-inch Dynamic AMOLED 2X display, 120Hz refresh rate, Snapdragon 8 Gen 3 processor",
        imageUrl: "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true?auto=format&fit=crop&w=400&h=300",
        currentPrice: 109999,
        category: 'electronics'
      },
      {
        name: "MacBook Air M3 (13-inch)",
        description: "M3 chip, 18-hour battery, 13.6-inch Liquid Retina display, 1080p FaceTime HD camera",
        imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&h=300",
        currentPrice: 124900,
        category: 'electronics'
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        description: "30H battery, noise cancelling",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=300",
        currentPrice: 26990,
        category: 'electronics'
      },
      {
        name: "Boat Airdopes 141",
        description: "42H playtime, ergonomic design",
        imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300",
        currentPrice: 1699,
        category: 'electronics'
      },
      {
        name: "Tata Salt (1kg)",
        description: "India’s trusted salt brand",
        imageUrl: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg?auto=format&fit=crop&w=400&h=300",
        currentPrice: 22,
        category: 'groceries'
      },
      {
        name: "Nike Shoes – Air Max 270",
        description: "Air heel, mesh upper, ultra comfort",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&h=300",
        currentPrice: 5999,
        category: 'clothing'
      },
      {
        name: "Philips Air Fryer 4.1L",
        description: "Fat removal tech, digital presets",
        imageUrl: "https://alghandielectronics.com/images/productimages/16042209195f9e77f71ce62.jpg?auto=format&fit=crop&w=400&h=300",
        currentPrice: 12995,
        category: 'kitchen'
      },
      {
        name: "Himalaya Neem Face Wash",
        description: "Removes oil, pimples, best for oily skin",
        imageUrl: "https://himalayawellness.in/cdn/shop/files/7405112-2_Moisturising-Aloe-Vera-Face-Wash_100ml_FOP.jpg?auto=format&fit=crop&w=400&h=300",
        currentPrice: 142,
        category: 'personal_care'
      },
      {
        name: "Instant Pot Duo 7-in-1",
        description: "Rice, slow, pressure, yogurt maker",
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=300",
        currentPrice: 8999,
        category: 'kitchen'
      },
      {
        name: "Amul Gold Milk (1L)",
        description: "Pasteurized full cream milk",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&h=300",
        currentPrice: 65,
        category: 'groceries'
      },
      {
        name: "Hawkins Pressure Cooker",
        description: "Premium safety valve cooker",
        imageUrl: "https://m.media-amazon.com/images/I/51z8bjUc4kL.jpg?auto=format&fit=crop&w=400&h=300",
        currentPrice: 2299,
        category: 'kitchen'
      },
      {
        name: "Levi’s 511 Slim Fit Jeans",
        description: "Stretch denim, comfy fit",
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&h=300",
        currentPrice: 2399,
        category: 'clothing'
      },
      {
        name: "Lakme Radiance Foundation",
        description: "SPF 20, radiant coverage",
        imageUrl: "https://m.media-amazon.com/images/I/51PeHvfAUUL._SX522_.jpg?auto=format&fit=crop&w=400&h=300",
        currentPrice: 629,
        category: 'personal_care'
      },
      {
        name: "Dell XPS 13 Plus",
        description: "Intel i7, 16GB, carbon build",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=300",
        currentPrice: 139999,
        category: 'electronics'
      }
    ];
    setProducts(data);
  }, []);

  // Cart functionality
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`🛒 ${product.name} added to cart!`);
  };

  const updateQuantity = (index, delta) => {
    setCartItems((prev) => {
      const newItems = [...prev];
      const newQuantity = newItems[index].quantity + delta;
      if (newQuantity < 1) return newItems.filter((_, i) => i !== index);
      newItems[index] = { ...newItems[index], quantity: newQuantity };
      return newItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Search functionality
const filteredProducts = products.filter((p) => {
  const matchesCategory = filter === 'all' || p.category === filter;
  const matchesSearch =
    searchQuery.trim() === '' ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});


  // Search suggestions
  const suggestions = searchQuery
    ? products
        .filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];
useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-container')) {
      setShowSuggestions(false);
    }
  };
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, []);

const handleCategoryClick = (category) => {
  setSearchQuery('');          // 💥 clear search text
  setShowSuggestions(false);   // optional: hide suggestions
  setFilter(category);         // set the clicked category

  const target = document.getElementById('personal-care-deals');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>
      <Head>
        <title>MiniMar - Smart Shopping List & Deal Finder</title>
        <meta name="description" content="Compare prices across India&apos;s top retailers and save money on every purchase." />
        <meta property="og:title" content="MiniMar - Smart Shopping List & Deal Finder" />
        <meta property="og:description" content="Compare prices across India&apos;s top retailers and save money on every purchase." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      {/* Top Navigation */}
      <nav className="top-pages-nav">
        <div className="container">
          <ul className="page-links">
            <li>
              <Link href="/" className="page-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="page-link">
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="page-link">
                <i className="fas fa-phone"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="logo-text">
                <h1>MiniMar</h1>
                <p>Smart Shopping Made Easy</p>
              </div>
            </div>
            <div className="search-container">
              <form
                className="search-form"
                onSubmit={(e) => {
                e.preventDefault();
                setShowSuggestions(false); // hide suggestion box
                const target = document.getElementById('personal-care-deals');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
>


                <div className="search-input-wrapper">
                  <input
                    type="text"
                    id="searchInput"
                    placeholder="Search for products, brands and more..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true); // show suggestions when typing
                    }}
                  />
                  <i className="fas fa-search search-icon"></i>
                  <button type="submit" className="search-btn">
                    Search
                  </button>
                </div>
              </form>
              {suggestions.length > 0 && showSuggestions && (
                <div className="search-suggestions show">
                  {suggestions.map((product, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => {
                        setSearchQuery(product.name);
                        setShowSuggestions(false); // hide suggestion box
                        setTimeout(() => {
                      const target = document.getElementById('personal-care-deals');
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                  }, 50);
                }}
>


                      <i className="fas fa-search"></i>
                      {product.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="user-actions">
              <button className="action-btn">
                <i className="fas fa-heart"></i>
                <span className="badge">3</span>
              </button>
              <button
                className="action-btn"
                onClick={() => setIsCartOpen(true)}
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="badge">{totalItems}</span>
              </button>
              <div className="user-profile">
                <div className="avatar">
                  <i className="fas fa-user"></i>
                </div>
                <span>Account</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="category-nav">
        <div className="container">
          <div className="nav-content">
            <div className="categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <i className={`category-icon fas fa-${category === 'all' ? 'th' : category === 'electronics' ? 'laptop' : category === 'kitchen' ? 'utensils' : category === 'groceries' ? 'carrot' : category === 'clothing' ? 'tshirt' : 'hand-holding-medical'}`}></i>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
                  
                </button>
              ))}
            </div>
            <div className="delivery-info">
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                Deliver to India
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">Find the Best Deals Across India</h2>
              <p className="hero-description">
                Compare prices from Amazon, Flipkart, Myntra & more in one place.
                Save time and money with MiniMar&apos;s smart shopping assistant.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  <i className="fas fa-shopping-bag"></i> Start Shopping
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-play"></i> Watch Demo
                </button>
              </div>
            </div>
            <div className="hero-deals">
              <div className="deals-card">
                <div className="deals-header">
                  <div className="deals-icon">🏷️</div>
                  <h3>Today&apos;s Best Deals</h3>
                </div>
                <div className="deals-list">
                  <div className="deal-item">
                    <span className="deal-name">iPhone 15</span>
                    <span className="deal-discount">-15%</span>
                    <div className="deal-price">From ₹79,900</div>
                  </div>
                  <div className="deal-item">
                    <span className="deal-name">Samsung TV</span>
                    <span className="deal-discount">-25%</span>
                    <div className="deal-price">From ₹25,999</div>
                  </div>
                  <div className="deal-item">
                    <span className="deal-name">Nike Shoes</span>
                    <span className="deal-discount">-30%</span>
                    <div className="deal-price">From ₹3,499</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Discover amazing deals across all your favorite categories. From tech gadgets to fashion essentials.</p>
          </div>
          <div className="categories-grid">
            {categories.slice(1).map((category) => (
              <div
                key={category}
                className="category-card"
                onClick={() => handleCategoryClick(category)}
>
                <div className="category-card-icon">
                  <i className={`fas fa-${category === 'electronics' ? 'laptop' : category === 'kitchen' ? 'utensils' : category === 'groceries' ? 'carrot' : category === 'clothing' ? 'tshirt' : 'hand-holding-medical'}`}></i>
                </div>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}</h3>
                <p>Explore top deals</p>
                <div className="discount">Up to 50% off</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <div className="products-title">
              <section id="personal-care-deals">
              <h2>Best Deals Today</h2>
              <p>Handpicked deals with the biggest savings</p>
              </section>
            </div>
            <div className="products-controls">
              <select className="sort-select">
                <option value="popular">Sort by: Popularity</option>
                <option value="price-low">Sort by: Price Low to High</option>
                <option value="price-high">Sort by: Price High to Low</option>
                <option value="discount">Sort by: Discount</option>
                <option value="rating">Sort by: Rating</option>
              </select>
              <div className="view-controls">
                <button className="view-btn active" data-view="grid">
                  <i className="fas fa-th"></i>
                </button>
                <button className="view-btn" data-view="list">
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.name} />
                  <div className="product-discount">10% OFF</div>
                  <button className="product-wishlist">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">
                    <span className="current-price">₹{product.currentPrice.toLocaleString('en-IN')}</span>
                    <span className="original-price">₹{(product.currentPrice * 1.1).toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    className="add-to-cart btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="load-more">
            <button className="btn btn-secondary">Load More Products</button>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="popular-searches">
        <div className="container">
          <div className="section-header">
            <h2>Popular Searches</h2>
            <p>What others are searching for right now</p>
          </div>
          <div className="search-tags">
            {['iPhone 15', 'Samsung Galaxy', 'MacBook Air', 'Air Fryer', 'Nike Shoes', 'Face Wash'].map((tag) => (
  <button
    key={tag}
    className="search-tag"
    onClick={() => {
      setFilter('all'); // ✅ Reset category
      setSearchQuery(''); // Force update
      setShowSuggestions(false);
      setTimeout(() => {
        setSearchQuery(tag);
        const target = document.getElementById('personal-care-deals');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10);
    }}
  >
    {tag}
  </button>
))}


          </div>
          <div className="stats-grid">
            <div className="stat-card red">
              <div className="stat-value">25M+</div>
              <div className="stat-label">Products Compared</div>
            </div>
            <div className="stat-card blue">
              <div className="stat-value">500K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card green">
              <div className="stat-value">₹2.5Cr</div>
              <div className="stat-label">Money Saved</div>
            </div>
            <div className="stat-card purple">
              <div className="stat-value">50+</div>
              <div className="stat-label">Partner Stores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="logo-text">
                  <h3>MiniMar</h3>
                  <p>Smart Shopping Made Easy</p>
                </div>
              </div>
              <p className="brand-description">
                Compare prices across India&apos;s top retailers and save money on every purchase.
                Your smart shopping companion.
              </p>
              <div className="social-links">
                <Link href="#"><i className="fab fa-facebook"></i></Link>
                <Link href="#"><i className="fab fa-twitter"></i></Link>
                <Link href="#"><i className="fab fa-instagram"></i></Link>
                <Link href="#"><i className="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">How it Works</Link></li>
                  <li><Link href="#">Price Comparison</Link></li>
                  <li><Link href="#">Partner Stores</Link></li>
                  <li><Link href="#">Careers</Link></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Categories</h4>
                <ul>
                  <li><Link href="#">Electronics</Link></li>
                  <li><Link href="#">Kitchen & Home</Link></li>
                  <li><Link href="#">Fashion</Link></li>
                  <li><Link href="#">Personal Care</Link></li>
                  <li><Link href="#">Groceries</Link></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <ul>
                  <li><Link href="#">Help Center</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Terms of Service</Link></li>
                  <li><Link href="#">Returns</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 MiniMar. All rights reserved.</p>
            <div className="payment-methods">
              <span>Accepted Payments:</span>
              <div className="payment-icons">
                <div className="payment-card visa">VISA</div>
                <div className="payment-card mastercard">MC</div>
                <div className="payment-card upi">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cart */}
      <div className="floating-cart">
        <button
          className="floating-cart-btn"
          onClick={() => setIsCartOpen(true)}
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-badge">{totalItems}</span>
        </button>
      </div>

      {/* Cart Modal */}
      <div className={`cart-modal ${isCartOpen ? 'show' : ''}`}>
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}></div>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Shopping Cart</h3>
            <button
              className="close-btn"
              onClick={() => setIsCartOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <i className="fas fa-shopping-cart"></i>
                <h4>Your cart is empty</h4>
                <p>Explore our products and start shopping!</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">₹{(item.currentPrice * item.quantity).toLocaleString('en-IN')}</div>
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(index, -1)}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer">
            <div className="cart-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <button className="checkout-btn">
              <i className="fas fa-credit-card"></i> Checkout
            </button>
            <button
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
      {/* Floating Chat Button */}
{!isChatOpen && (
  <button
    onClick={() => setIsChatOpen(true)}
    style={{
      position: 'fixed',
      bottom: '100px',
      left: '20px',
      backgroundColor: '#2563EB',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      fontSize: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 999
    }}
  >
    💬
  </button>
)}

{/* Floating Chat Panel */}
{isChatOpen && (
  <div
    style={{
      position: 'fixed',
      bottom: '170px',
      left: '20px',
      width: '320px',
      maxHeight: '420px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 999
    }}
  >
    <div style={{ background: '#2563EB', padding: '1rem', color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
      <span>MiniMar AI</span>
      <button onClick={() => setIsChatOpen(false)} style={{ color: 'white', background: 'transparent', border: 'none', fontSize: '16px' }}>✖</button>
    </div>

    <div className="chat-box" style={{ padding: '1rem', overflowY: 'auto', flex: 1 }}>
      {aiMessages.map((msg, index) => (
        <div
          key={index}
          style={{
            background: msg.role === 'user' ? '#d1e7ff' : '#f1f1f1',
            padding: '8px 12px',
            borderRadius: '8px',
            marginBottom: '8px',
            textAlign: msg.role === 'user' ? 'right' : 'left',
            fontSize: '14px'
          }}
        >
          <strong>{msg.role === 'user' ? 'You' : 'MiniMar AI'}:</strong> {msg.content}
        </div>
      ))}
      {isTyping && (
        <div style={{ fontStyle: 'italic', fontSize: '13px', color: '#888' }}>MiniMar AI is typing...</div>
      )}
    </div>

    <div style={{ display: 'flex', borderTop: '1px solid #eee', padding: '0.5rem' }}>
      <input
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendAiMessage()}
        placeholder="Type a message..."
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          padding: '0.5rem',
          borderRadius: '6px',
          fontSize: '14px'
        }}
      />
      <button
        onClick={sendAiMessage}
        style={{
          marginLeft: '8px',
          background: '#2563EB',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}
      >
        Send
      </button>
    </div>
  </div>
)}

    </>
  );
}