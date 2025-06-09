import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const grid = document.getElementById("productsGrid");

    if (!grid) return;

      const products = [
    {
      name: "Apple iPhone 15 Pro (128GB)",
      description: "Titanium body, A17 Pro chip, 5x zoom camera",
      imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&h=300",
      currentPrice: 119900
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      description: "200MP camera, S Pen, AI features",
      imageUrl: "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true?auto=format&fit=crop&w=400&h=300",
      currentPrice: 109999
    },
    {
      name: "MacBook Air M3 (13-inch)",
      description: "M3 chip, 18-hour battery, Retina display",
      imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&h=300",
      currentPrice: 124900
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      description: "30H battery, noise cancelling",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=300",
      currentPrice: 26990
    },
    {
      name: "Boat Airdopes 141",
      description: "42H playtime, ergonomic design",
      imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300",
      currentPrice: 1699
    },
    {
      name: "Tata Salt (1kg)",
      description: "India’s trusted salt brand",
      imageUrl: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 22
    },
    {
      name: "Nike Air Max 270",
      description: "Air heel, mesh upper, ultra comfort",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&h=300",
      currentPrice: 5999
    },
    {
      name: "Philips Air Fryer 4.1L",
      description: "Fat removal tech, digital presets",
      imageUrl: "https://alghandielectronics.com/images/productimages/16042209195f9e77f71ce62.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 12995
    },
    {
      name: "Himalaya Neem Face Wash",
      description: "Removes oil, pimples, best for oily skin",
      imageUrl: "https://himalayawellness.in/cdn/shop/files/7405112-2_Moisturising-Aloe-Vera-Face-Wash_100ml_FOP.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 142
    },
    {
      name: "Instant Pot Duo 7-in-1",
      description: "Rice, slow, pressure, yogurt maker",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=300",
      currentPrice: 8999
    },
    {
      name: "Amul Gold Milk (1L)",
      description: "Pasteurized full cream milk",
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&h=300",
      currentPrice: 65
    },
    {
      name: "Hawkins Pressure Cooker",
      description: "Premium safety valve cooker",
      imageUrl: "https://m.media-amazon.com/images/I/51z8bjUc4kL.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 2299
    },
    {
      name: "Levi’s 511 Slim Fit Jeans",
      description: "Stretch denim, comfy fit",
      imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&h=300",
      currentPrice: 2399
    },
    {
      name: "Lakme Radiance Foundation",
      description: "SPF 20, radiant coverage",
      imageUrl: "https://m.media-amazon.com/images/I/51PeHvfAUUL._SX522_.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 629
    },
    {
      name: "Dell XPS 13 Plus",
      description: "Intel i7, 16GB, carbon build",
      imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=300",
      currentPrice: 139999
    }
  ];

  const productsGrid = document.getElementById("productsGrid");

  if (!productsGrid) {
    console.error("❌ productsGrid not found in DOM");
    return;
  }

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.innerHTML = `
  <div style="flex: 1;">
    <img src="${product.imageUrl}" alt="${product.name}" class="product-image" style="width:100%; border-radius:12px;" />
    <h3 style="margin-top: 10px;">${product.name}</h3>
    <p>${product.description}</p>
    <p class="price" style="font-weight:bold;color:#222;">₹${product.currentPrice.toLocaleString("en-IN")}</p>
  </div>
  <button class="add-to-cart btn btn-primary" data-name="${product.name}" data-price="${product.currentPrice}">
    <i class="fas fa-cart-plus"></i> Add to Cart
  </button>
`;

  productsGrid.appendChild(productCard);
});

document.getElementById("cartToggle")?.addEventListener("click", () => {
  document.getElementById("cartModal")?.classList.add("show");
});

document.getElementById("floatingCart")?.addEventListener("click", () => {
  document.getElementById("cartModal")?.classList.add("show");
});

document.getElementById("closeCart")?.addEventListener("click", () => {
  document.getElementById("cartModal")?.classList.remove("show");
});


let cartItems = [];
let cartCount = 0;

document.addEventListener("click", function (e) {
  const button = e.target.closest(".add-to-cart"); // 🔥 this line is crucial
  if (button) {
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));

    cartItems.push({ name, price, quantity: 1 });
    cartCount++;
    updateCartUI();

    alert(`🛒 ${name} added to cart!`);
  }
});

function updateCartUI() {
  const cartCountElem = document.getElementById("cartCount");
  const floatingCartCount = document.getElementById("floatingCartCount");
  const cartItemsElem = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");

  // Update counter
  if (cartCountElem) cartCountElem.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  if (floatingCartCount) floatingCartCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Clear list
  if (cartItemsElem) cartItemsElem.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    const itemElem = document.createElement("div");
    itemElem.className = "cart-item";
    itemElem.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString("en-IN")}</div>
        <div class="quantity-controls">
          <button class="qty-btn minus" data-index="${index}">−</button>
          <span class="quantity">${item.quantity}</span>
          <button class="qty-btn plus" data-index="${index}">+</button>
        </div>
      </div>
      <button class="remove-item" data-index="${index}" style="background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer;">
        Remove
      </button>
    `;
    cartItemsElem.appendChild(itemElem);
  });

  // Footer total + clear cart + checkout
  if (cartFooter) {
    cartFooter.innerHTML = `
      <div class="cart-total">
        <span class="total-label">Total:</span>
        <span class="total-amount">₹${totalPrice.toLocaleString("en-IN")}</span>
      </div>
      <button class="checkout-btn"><i class="fas fa-credit-card"></i> Checkout</button>
      <button class="clear-cart-btn" style="margin-left: 1rem; background:#9ca3af; color:white; padding:0.5rem 1rem; border-radius:8px; border:none; cursor:pointer;">
        Clear Cart
      </button>
    `;
  }

  // Remove item
  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      cartItems.splice(index, 1);
      updateCartUI();
    });
  });

  // Quantity + / -
  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(btn.getAttribute("data-index"));
      if (btn.classList.contains("plus")) {
        cartItems[index].quantity += 1;
      } else if (btn.classList.contains("minus") && cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      }
      updateCartUI();
    });
  });

  // Clear cart
  const clearCartBtn = document.querySelector(".clear-cart-btn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cartItems = [];
      updateCartUI();
    });
  }
}
});

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
          <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-yfOBFvrcbb9vCIbB1F88vZu+8UdVpJ9CUhqyp88UVnyUIEVqVdO5G4CUAxNMbPSsCkZnSK1Cl+VuOZeZ4SxiEA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
      </Head>

      <Script
        src="/script.js"
        strategy="afterInteractive"
        onLoad={() => console.log('✅ script.js loaded (afterInteractive)')}
      />
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
                        <Link href="#"><i class="fab fa-facebook"></i></Link>
                        <Link href="#"><i class="fab fa-twitter"></i></Link>
                        <Link href="#"><i class="fab fa-instagram"></i></Link>
                        <Link href="#"><i class="fab fa-linkedin"></i></Link>
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

<!-- Floating Cart -->
<div class="floating-cart" id="floatingCart">
  <button class="floating-cart-btn">
    <i class="fas fa-shopping-cart"></i>
    <span class="cart-badge" id="floatingCartCount">0</span>
  </button>
</div>

<!-- Cart Modal -->
<div class="cart-modal" id="cartModal">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <div class="modal-header">
      <h3>Shopping Cart</h3>
      <button class="close-btn" id="closeCart"><i class="fas fa-times"></i></button>
    </div>
    <div class="modal-body" id="cartItems"></div>
    <div class="modal-footer" id="cartFooter"></div>
  </div>
</div>

          `
        }}
      />
    </>
  );
}
