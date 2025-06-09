import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CartPanel from "@/components/CartPanel";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [sortType, setSortType] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
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
      imageUrl: "https://m.media-amazon.com/images/I/51PeHvfAUUL._SX522_.jpg?auto=format&fit=crop&w=400&h=300",
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


  const sortProducts = (list) => {
    let sorted = [...list];
    switch (sortType) {
      case "price-low":
        sorted.sort((a, b) => a.currentPrice - b.currentPrice);
        break;
      case "price-high":
        sorted.sort((a, b) => b.currentPrice - a.currentPrice);
        break;
      case "discount":
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
      default:
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
    }
    return sorted;
  };

  const filteredProducts = selectedCategory === "all"
    ? sortProducts(products)
    : sortProducts(products.filter(p => p.category === selectedCategory));

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.name === product.name);
      if (existing) {
        return prev.map(p =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Head>
        <title>MiniMar – Smart Shopping List & Deal Finder</title>
        <meta name="description" content="Compare prices across India’s top retailers. Save more with smart shopping." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      {/* Static Category Row */}
      <div className="category-row">
        {[
          { name: "All", key: "all", icon: "🏠" },
          { name: "Electronics", key: "electronics", icon: "📱" },
          { name: "Kitchen", key: "kitchen", icon: "🍳" },
          { name: "Groceries", key: "groceries", icon: "🛒" },
          { name: "Clothing", key: "clothing", icon: "👕" },
          { name: "Personal Care", key: "personal-care", icon: "💄" }
        ].map(cat => (
          <button
            key={cat.key}
            className={`category-btn ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Sorting Controls */}
      <div className="sorting-controls">
        <label>Sort by:</label>
        <select value={sortType} onChange={e => setSortType(e.target.value)}>
          <option value="popular">Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="discount">Discount</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>

      {/* Cart Panel */}
      <CartPanel cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}
