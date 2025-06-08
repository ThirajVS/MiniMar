import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>MiniMar - Smart Shopping List & Deal Finder</title>
        <meta name="description" content="Compare prices across India's top retailers and save money on every purchase." />
        <meta property="og:title" content="MiniMar - Smart Shopping List & Deal Finder" />
        <meta property="og:description" content="Compare prices across India's top retailers and save money on every purchase." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
      </Head>

      <Script
        src="/script.js"
        strategy="afterInteractive"
        onLoad={() => console.log('✅ script.js loaded (afterInteractive)')}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: `
            <header class="header">
              <div class="container">
                <div class="header-content">
                  <div class="logo">
                    <div class="logo-icon">
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="logo-text">
                      <h1>MiniMar</h1>
                      <p>Smart Shopping Made Easy</p>
                    </div>
                  </div>

                  <div class="search-container">
                    <form class="search-form">
                      <div class="search-input-wrapper">
                        <input type="text" id="searchInput" placeholder="Search for products, brands and more..." class="search-input">
                        <i class="fas fa-search search-icon"></i>
                        <button type="submit" class="search-btn">Search</button>
                      </div>
                    </form>
                    <div id="searchSuggestions" class="search-suggestions"></div>
                  </div>

                  <div class="user-actions">
                    <button class="action-btn">
                      <i class="fas fa-heart"></i>
                      <span class="badge">3</span>
                    </button>
                    <button class="action-btn" id="cartToggle">
                      <i class="fas fa-shopping-cart"></i>
                      <span class="badge" id="cartCount">0</span>
                    </button>
                    <div class="user-profile">
                      <div class="avatar">
                        <i class="fas fa-user"></i>
                      </div>
                      <span>Account</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <nav className="main-nav">
              
              <a href="#">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
                <nav class="category-nav">
        <div class="container">
            <div class="nav-content">
                <div class="categories">
                    <button class="category-btn active" data-category="all">
                        <span class="category-icon">🏠</span>
                        <span>All</span>
                    </button>
                    <button class="category-btn" data-category="electronics">
                        <span class="category-icon">📱</span>
                        <span>Electronics</span>
                    </button>
                    <button class="category-btn" data-category="kitchen">
                        <span class="category-icon">🍳</span>
                        <span>Kitchen</span>
                    </button>
                    <button class="category-btn" data-category="groceries">
                        <span class="category-icon">🛒</span>
                        <span>Groceries</span>
                    </button>
                    <button class="category-btn" data-category="clothing">
                        <span class="category-icon">👕</span>
                        <span>Clothing</span>
                    </button>
                    <button class="category-btn" data-category="personal-care">
                        <span class="category-icon">💄</span>
                        <span>Personal Care</span>
                    </button>
                </div>
                <div class="delivery-info">
                    <span>Deliver to:</span>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Mumbai 400001</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h2 class="hero-title">Find the Best Deals Across India</h2>
                    <p class="hero-description">
                        Compare prices from Amazon, Flipkart, Myntra & more in one place. 
                        Save time and money with MiniMar's smart shopping assistant.
                    </p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary">
                            <i class="fas fa-shopping-bag"></i>
                            Start Shopping
                        </button>
                        <button class="btn btn-outline">
                            <i class="fas fa-play"></i>
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div class="hero-deals">
                    <div class="deals-card">
                        <div class="deals-header">
                            <div class="deals-icon">🏷️</div>
                            <h3>Today's Best Deals</h3>
                        </div>
                        <div class="deals-list">
                            <div class="deal-item">
                                <span class="deal-name">iPhone 15</span>
                                <span class="deal-discount">-15%</span>
                                <div class="deal-price">From ₹79,900</div>
                            </div>
                            <div class="deal-item">
                                <span class="deal-name">Samsung TV</span>
                                <span class="deal-discount">-25%</span>
                                <div class="deal-price">From ₹25,999</div>
                            </div>
                            <div class="deal-item">
                                <span class="deal-name">Nike Shoes</span>
                                <span class="deal-discount">-30%</span>
                                <div class="deal-price">From ₹3,499</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="featured-categories">
        <div class="container">
            <div class="section-header">
                <h2>Shop by Category</h2>
                <p>Discover amazing deals across all your favorite categories. From tech gadgets to fashion essentials.</p>
            </div>
            <div class="categories-grid" id="categoriesGrid">

            </div>
        </div>
    </section>

    <section class="products-section">
        <div class="container">
            <div class="products-header">
                <div class="products-title">
                    <h2 id="productsTitle">Best Deals Today</h2>
                    <p id="productsSubtitle">Handpicked deals with the biggest savings</p>
                </div>
                <div class="products-controls">
                    <select id="sortSelect" class="sort-select">
                        <option value="popular">Sort by: Popularity</option>
                        <option value="price-low">Sort by: Price Low to High</option>
                        <option value="price-high">Sort by: Price High to Low</option>
                        <option value="discount">Sort by: Discount</option>
                        <option value="rating">Sort by: Rating</option>
                    </select>
                    <div class="view-controls">
                        <button class="view-btn active" data-view="grid">
                            <i class="fas fa-th"></i>
                        </button>
                        <button class="view-btn" data-view="list">
                            <i class="fas fa-list"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="products-grid" id="productsGrid">

            </div>
            <div class="load-more">
                <button class="btn btn-secondary">Load More Products</button>
            </div>
        </div>
    </section>

    <section class="popular-searches">
        <div class="container">
            <div class="section-header">
                <h2>Popular Searches</h2>
                <p>What others are searching for right now</p>
            </div>
            <div class="search-tags" id="popularSearches">

            </div>
            <div class="stats-grid">
                <div class="stat-card red">
                    <div class="stat-value">25M+</div>
                    <div class="stat-label">Products Compared</div>
                </div>
                <div class="stat-card blue">
                    <div class="stat-value">500K+</div>
                    <div class="stat-label">Happy Customers</div>
                </div>
                <div class="stat-card green">
                    <div class="stat-value">₹2.5Cr</div>
                    <div class="stat-label">Money Saved</div>
                </div>
                <div class="stat-card purple">
                    <div class="stat-value">50+</div>
                    <div class="stat-label">Partner Stores</div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">
                        <div class="logo-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="logo-text">
                            <h3>MiniMar</h3>
                            <p>Smart Shopping Made Easy</p>
                        </div>
                    </div>
                    <p class="brand-description">
                        Compare prices across India's top retailers and save money on every purchase. 
                        Your smart shopping companion.
                    </p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Price Comparison</a></li>
                            <li><a href="#">Partner Stores</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>Categories</h4>
                        <ul>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Kitchen & Home</a></li>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Personal Care</a></li>
                            <li><a href="#">Groceries</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 MiniMar. All rights reserved.</p>
                <div class="payment-methods">
                    <span>Accepted Payments:</span>
                    <div class="payment-icons">
                        <div class="payment-card visa">VISA</div>
                        <div class="payment-card mastercard">MC</div>
                        <div class="payment-card upi">UPI</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="floating-cart" id="floatingCart">
        <button class="floating-cart-btn">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-badge" id="floatingCartCount">0</span>
        </button>
    </div>

    <div class="cart-modal" id="cartModal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Shopping Cart</h3>
                <button class="close-btn" id="closeCart">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body" id="cartItems">

            </div>
            <div class="modal-footer" id="cartFooter">

            </div>
        </div>
    </div>

          `
        }}
      />
    </>
  );
}
