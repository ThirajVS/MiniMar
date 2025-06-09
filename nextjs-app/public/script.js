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
