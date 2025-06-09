// pages/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('popular');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const productList = [
    {
      name: "Apple iPhone 15 Pro (128GB)",
      category: "electronics",
      description: "Titanium body, A17 Pro chip, 5x zoom camera",
      imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&h=300",
      currentPrice: 119900,
      popularity: 10500,
      discount: 5,
      rating: 4.7
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      category: "electronics",
      description: "200MP camera, S Pen, AI features",
      imageUrl: "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true?auto=format&fit=crop&w=400&h=300",
      currentPrice: 109999,
      popularity: 500,
      discount: 7,
      rating: 3.8
    },
    {
      name: "MacBook Air M3 (13-inch)",
      category: "electronics",
      description: "M3 chip, 18-hour battery, Retina display",
      imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&h=300",
      currentPrice: 124900,
      popularity: 70,
      discount: 13,
      rating: 4.9      
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      category: "electronics",
      description: "30H battery, noise cancelling",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=300",
      currentPrice: 26990,
      popularity: 500000,
      discount: 47,
      rating: 4.7
    },
    {
      name: "Boat Airdopes 141",
      category: "electronics",
      description: "42H playtime, ergonomic design",
      imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300",
      currentPrice: 1699,
      popularity: 1500,
      discount: 14,
      rating: 4.1
    },
    {
      name: "Tata Salt (1kg)",
      category: "groceries",
      description: "India’s trusted salt brand",
      imageUrl: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 22,
      popularity: 2500,
      discount: 11,
      rating: 3.9
    },
    {
      name: "Nike Air Max 270",
      category: "clothing",
      description: "Air heel, mesh upper, ultra comfort",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&h=300",
      currentPrice: 5999,
      popularity: 8780,
      discount: 9,
      rating: 4.7
    },
    {
      name: "Philips Air Fryer 4.1L",
      category: "kitchen",
      description: "Fat removal tech, digital presets",
      imageUrl: "https://alghandielectronics.com/images/productimages/16042209195f9e77f71ce62.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 12995,
      popularity: 11500,
      discount: 5,
      rating: 4.6
    },
    {
      name: "Himalaya Neem Face Wash",
      category: "personal-care",
      description: "Removes oil, pimples, best for oily skin",
      imageUrl: "https://himalayawellness.in/cdn/shop/files/7405112-2_Moisturising-Aloe-Vera-Face-Wash_100ml_FOP.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 142,
      popularity: 300,
      discount: 2,
      rating: 3.4
    },
    {
      name: "Instant Pot Duo 7-in-1",
      category: "kitchen",
      description: "Rice, slow, pressure, yogurt maker",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=300",
      currentPrice: 8999,
      popularity: 56,
      discount: 1,
      rating: 4.0
    },
    {
      name: "Amul Gold Milk (1L)",
      category: "groceries",
      description: "Pasteurized full cream milk",
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&h=300",
      currentPrice: 65,
      popularity: 6500,
      discount: 8,
      rating: 4.1
    },
    {
      name: "Hawkins Pressure Cooker",
      category: "kitchen",
      description: "Premium safety valve cooker",
      imageUrl: "https://m.media-amazon.com/images/I/51z8bjUc4kL.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 2299,
      popularity: 8500,
      discount: 5,
      rating: 4.2
    },
    {
      name: "Levi’s 511 Slim Fit Jeans",
      category: "clothing",
      description: "Stretch denim, comfy fit",
      imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&h=300",
      currentPrice: 2399,
      popularity: 8790,
      discount: 4,
      rating: 4.1
    },
    {
      name: "Lakme Radiance Foundation",
      category: "personal-care",
      description: "SPF 20, radiant coverage",
      imageUrl: "https://m.media-amazon.com/images/I/51PeHvfAUUL.SX522.jpg?auto=format&fit=crop&w=400&h=300",
      currentPrice: 629,
      popularity: 400,
      discount: 5,
      rating: 3.1
    },
    {
      name: "Dell XPS 13 Plus",
      category: "electronics",
      description: "Intel i7, 16GB, carbon build",
      imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=300",
      currentPrice: 139999,
      popularity: 156500,
      discount: 10,
      rating: 5.0
    }
  ];
    setProducts(productList);
  }, []);
  useEffect(() => {
    let sorted = [...products];

    // Filter by category
    if (category !== 'all') {
      sorted = sorted.filter((p) => p.category === category);
    }

    // Sort logic
    switch (sortOption) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
      default:
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
    }

    setFilteredProducts(sorted);
  }, [products, sortOption, category]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const updateQty = (index, delta) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].qty += delta;
      if (updated[index].qty <= 0) updated.splice(index, 1);
      return updated;
    });
  };

  const removeItem = (index) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  const clearCart = () => setCartItems([]);

return (
  <>
    <Head>
      <title>MiniMar - Smart Shopping Assistant</title>
      <meta name="description" content="Compare deals, manage cart, and shop smart across India’s top retailers." />
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </Head>

    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon"><i className="fas fa-shopping-cart"></i></div>
          <div className="logo-text">
            <h3>MiniMar</h3>
            <p>Smart shopping made easy</p>
          </div>
        </div>

        <div className="nav-actions">
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
            <option value="popular">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <button className="cart-icon-btn" onClick={() => setShowCart(true)}>
            <i className="fas fa-shopping-bag"></i>
            <span className="cart-badge">{cartItems.reduce((a, b) => a + b.qty, 0)}</span>
          </button>
        </div>
      </div>

      <div className="category-bar">
        {[
          { name: "All", slug: "all", icon: "🛍️" },
          { name: "Electronics", slug: "electronics", icon: "📱" },
          { name: "Kitchen", slug: "kitchen", icon: "🍳" },
          { name: "Groceries", slug: "groceries", icon: "🛒" },
          { name: "Clothing", slug: "clothing", icon: "👕" },
          { name: "Personal Care", slug: "personal-care", icon: "🧴" }
        ].map((cat) => (
          <button
            key={cat.slug}
            className={`category-btn ${category === cat.slug ? 'active' : ''}`}
            onClick={() => setCategory(cat.slug)}
          >
            <span className="icon">{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>
    </header>

    <main className="main-section">
      <div className="products-grid" id="productsGrid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="desc">{product.description}</p>
            <p className="price">₹{product.currentPrice.toLocaleString('en-IN')}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
    {showCart && (
      <div className="cart-modal">
        <div className="cart-panel">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-details">
                    <span>{item.name}</span>
                    <span>₹{item.currentPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(index, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(index, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
                </div>
              ))}
              <div className="cart-footer">
                <div className="total">
                  Total: ₹
                  {cartItems.reduce((sum, item) => sum + item.qty * item.currentPrice, 0).toLocaleString('en-IN')}
                </div>
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
              </div>
            </>
          )}
          <button className="close-cart" onClick={() => setShowCart(false)}>Close</button>
        </div>
      </div>
    )}
  </>
);
}
