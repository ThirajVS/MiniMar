window.addEventListener("load", () => {
  console.log("🟢 script.js loaded");

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
      imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&h=300",
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
      imageUrl: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=400&h=300",
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
      imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&h=300",
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
      imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&h=300",
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
      imageUrl: "https://images.unsplash.com/photo-1631214540242-9c9bb16bb3e1?auto=format&fit=crop&w=400&h=300",
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
      <img src="${product.imageUrl}" alt="${product.name}" class="product-image" style="width:100%; border-radius:12px;" />
      <h3 style="margin-top: 10px;">${product.name}</h3>
      <p>${product.description}</p>
      <p class="price" style="font-weight:bold;color:#222;">₹${product.currentPrice.toLocaleString("en-IN")}</p>
    `;
    productsGrid.appendChild(productCard);
  });
});
