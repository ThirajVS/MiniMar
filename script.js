document.addEventListener("DOMContentLoaded", function () {
let categories = [
    { id: 1, name: "Electronics", slug: "electronics", icon: "📱", description: "Smartphones, laptops, tablets and more", productCount: 1000, discountText: "Up to 60% off" },
    { id: 2, name: "Kitchen", slug: "kitchen", icon: "🍳", description: "Kitchen appliances and cookware", productCount: 500, discountText: "Up to 45% off" },
    { id: 3, name: "Groceries", slug: "groceries", icon: "🛒", description: "Fresh groceries and daily essentials", productCount: 2000, discountText: "Up to 30% off" },
    { id: 4, name: "Clothing", slug: "clothing", icon: "👕", description: "Fashion for men, women and kids", productCount: 800, discountText: "Up to 70% off" },
    { id: 5, name: "Personal Care", slug: "personal-care", icon: "💄", description: "Beauty and personal care products", productCount: 600, discountText: "Up to 50% off" }
];


let retailers = [
    { id: 1, name: "amazon", displayName: "Amazon India", color: "text-blue-600", website: "amazon.in" },
    { id: 2, name: "flipkart", displayName: "Flipkart", color: "text-blue-600", website: "flipkart.com" },
    { id: 3, name: "myntra", displayName: "Myntra", color: "text-purple-600", website: "myntra.com" },
    { id: 4, name: "bigbasket", displayName: "BigBasket", color: "text-green-600", website: "bigbasket.com" },
    { id: 5, name: "nykaa", displayName: "Nykaa", color: "text-pink-600", website: "nykaa.com" },
    { id: 6, name: "reliance", displayName: "Reliance Digital", color: "text-red-600", website: "reliancedigital.in" },
    { id: 7, name: "croma", displayName: "Croma", color: "text-gray-600", website: "croma.com" },
    { id: 8, name: "jiomart", displayName: "JioMart", color: "text-blue-500", website: "jiomart.com" },
    { id: 9, name: "snapdeal", displayName: "Snapdeal", color: "text-red-500", website: "snapdeal.com" },
    { id: 10, name: "paytm", displayName: "Paytm Mall", color: "text-blue-700", website: "paytmmall.com" }
];

let products = [
    {
        id: 1,
        name: "Apple iPhone 15 Pro (128GB)",
        description: "Latest A17 Pro chip, titanium design, advanced camera system with 5x telephoto zoom",
        imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        brand: "Apple",
        rating: 4.8,
        reviewCount: 2847,
        originalPrice: 134900,
        currentPrice: 119900,
        discountPercentage: 11,
        isPopular: true,
        prices: [
            { retailerId: 2, price: 119900, isLowestPrice: true },
            { retailerId: 1, price: 122999, isLowestPrice: false },
            { retailerId: 6, price: 125500, isLowestPrice: false },
            { retailerId: 7, price: 126999, isLowestPrice: false }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra (256GB)",
        description: "Galaxy AI, S Pen included, 200MP camera, titanium frame, 6.8-inch Dynamic AMOLED display",
        imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        brand: "Samsung",
        rating: 4.7,
        reviewCount: 1923,
        originalPrice: 129999,
        currentPrice: 109999,
        discountPercentage: 15,
        isPopular: true,
        prices: [
            { retailerId: 1, price: 109999, isLowestPrice: true },
            { retailerId: 2, price: 112500, isLowestPrice: false },
            { retailerId: 6, price: 114999, isLowestPrice: false }
        ]
    },
    {
        id: 3,
        name: "MacBook Air M3 (13-inch, 256GB)",
        description: "M3 chip with 8-core CPU, 10-core GPU, 18-hour battery life, Liquid Retina display",
        imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        brand: "Apple",
        rating: 4.9,
        reviewCount: 1456,
        originalPrice: 134900,
        currentPrice: 124900,
        discountPercentage: 7,
        isPopular: true,
        prices: [
            { retailerId: 1, price: 124900, isLowestPrice: true },
            { retailerId: 2, price: 126999, isLowestPrice: false },
            { retailerId: 7, price: 129999, isLowestPrice: false }
        ]
    },
    {
        id: 4,
        name: "Dell XPS 13 Plus (Intel i7, 512GB)",
        description: "12th Gen Intel Core i7, 16GB RAM, InfinityEdge display, premium carbon fiber build",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        brand: "Dell",
        rating: 4.6,
        reviewCount: 892,
        originalPrice: 159999,
        currentPrice: 139999,
        discountPercentage: 13,
        isPopular: false,
        prices: [
            { retailerId: 1, price: 139999, isLowestPrice: true },
            { retailerId: 2, price: 142500, isLowestPrice: false },
            { retailerId: 6, price: 145999, isLowestPrice: false }
        ]
    },
    {
        id: 5,
        name: "Sony WH-1000XM5 Wireless Headphones",
        description: "Industry-leading noise cancellation, 30-hour battery, crystal clear hands-free calling",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        brand: "Sony",
        rating: 4.8,
        reviewCount: 2134,
        originalPrice: 34990,
        currentPrice: 26990,
        discountPercentage: 23,
        isPopular: true,
        prices: [
            { retailerId: 2, price: 26990, isLowestPrice: true },
            { retailerId: 1, price: 28499, isLowestPrice: false },
            { retailerId: 7, price: 29999, isLowestPrice: false }
        ]
    },
    {
        id: 6,
        name: "Instant Pot Duo 7-in-1 (6L)",
        description: "Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker & warmer in one",
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 2,
        brand: "Instant Pot",
        rating: 4.5,
        reviewCount: 3421,
        originalPrice: 12999,
        currentPrice: 8999,
        discountPercentage: 31,
        isPopular: true,
        prices: [
            { retailerId: 1, price: 8999, isLowestPrice: true },
            { retailerId: 2, price: 9299, isLowestPrice: false },
            { retailerId: 4, price: 9599, isLowestPrice: false }
        ]
    },
    {
        id: 7,
        name: "Hawkins Pressure Cooker (5L)",
        description: "Premium aluminum pressure cooker with safety valve, ideal for Indian cooking",
        imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 2,
        brand: "Hawkins",
        rating: 4.4,
        reviewCount: 5632,
        originalPrice: 3499,
        currentPrice: 2299,
        discountPercentage: 34,
        isPopular: false,
        prices: [
            { retailerId: 4, price: 2299, isLowestPrice: true },
            { retailerId: 1, price: 2399, isLowestPrice: false },
            { retailerId: 2, price: 2499, isLowestPrice: false },
            { retailerId: 8, price: 2599, isLowestPrice: false }
        ]
    },
    {
        id: 8,
        name: "Philips Air Fryer HD9252/90 (4.1L)",
        description: "Rapid Air technology, fat removal technology, digital display with preset programs",
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 2,
        brand: "Philips",
        rating: 4.3,
        reviewCount: 2847,
        originalPrice: 17995,
        currentPrice: 12995,
        discountPercentage: 28,
        isPopular: true,
        prices: [
            { retailerId: 2, price: 12995, isLowestPrice: true },
            { retailerId: 1, price: 13499, isLowestPrice: false },
            { retailerId: 6, price: 14299, isLowestPrice: false }
        ]
    },
    {
        id: 9,
        name: "Tata Salt (1kg)",
        description: "Vacuum evaporated iodised salt, India's trusted salt brand for over 100 years",
        imageUrl: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 3,
        brand: "Tata",
        rating: 4.6,
        reviewCount: 12435,
        originalPrice: 25,
        currentPrice: 22,
        discountPercentage: 12,
        isPopular: true,
        prices: [
            { retailerId: 4, price: 22, isLowestPrice: true },
            { retailerId: 8, price: 23, isLowestPrice: false },
            { retailerId: 1, price: 24, isLowestPrice: false }
        ]
    },
    {
        id: 10,
        name: "Amul Gold Milk (1L)",
        description: "Full cream milk, rich in protein and calcium, homogenized and pasteurized",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 3,
        brand: "Amul",
        rating: 4.7,
        reviewCount: 8976,
        originalPrice: 68,
        currentPrice: 65,
        discountPercentage: 4,
        isPopular: false,
        prices: [
            { retailerId: 4, price: 65, isLowestPrice: true },
            { retailerId: 8, price: 66, isLowestPrice: false },
            { retailerId: 1, price: 67, isLowestPrice: false }
        ]
    },
    {
        id: 11,
        name: "Levi's 511 Slim Fit Jeans",
        description: "Classic slim fit jeans, comfortable stretch denim, perfect for everyday wear",
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 4,
        brand: "Levi's",
        rating: 4.5,
        reviewCount: 3421,
        originalPrice: 3999,
        currentPrice: 2399,
        discountPercentage: 40,
        isPopular: true,
        prices: [
            { retailerId: 3, price: 2399, isLowestPrice: true },
            { retailerId: 2, price: 2599, isLowestPrice: false },
            { retailerId: 1, price: 2799, isLowestPrice: false }
        ]
    },
    {
        id: 12,
        name: "Nike Air Max 270 Running Shoes",
        description: "Max Air unit in heel, lightweight mesh upper, comfortable for all-day wear",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 4,
        brand: "Nike",
        rating: 4.7,
        reviewCount: 2156,
        originalPrice: 9995,
        currentPrice: 5999,
        discountPercentage: 40,
        isPopular: true,
        prices: [
            { retailerId: 3, price: 5999, isLowestPrice: true },
            { retailerId: 2, price: 6299, isLowestPrice: false },
            { retailerId: 1, price: 6599, isLowestPrice: false }
        ]
    },
    {
        id: 13,
        name: "Lakme Absolute Perfect Radiance Foundation",
        description: "Lightweight foundation with SPF 20, provides natural coverage and radiant finish",
        imageUrl: "https://images.unsplash.com/photo-1631214540242-9c9bb16bb3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 5,
        brand: "Lakme",
        rating: 4.2,
        reviewCount: 1897,
        originalPrice: 850,
        currentPrice: 629,
        discountPercentage: 26,
        isPopular: false,
        prices: [
            { retailerId: 5, price: 629, isLowestPrice: true },
            { retailerId: 1, price: 679, isLowestPrice: false },
            { retailerId: 2, price: 699, isLowestPrice: false }
        ]
    },
    {
        id: 14,
        name: "Himalaya Neem Face Wash",
        description: "Purifying neem face wash, removes excess oil, prevents pimples, suitable for oily skin",
        imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 5,
        brand: "Himalaya",
        rating: 4.4,
        reviewCount: 6789,
        originalPrice: 170,
        currentPrice: 142,
        discountPercentage: 16,
        isPopular: true,
        prices: [
            { retailerId: 5, price: 142, isLowestPrice: true },
            { retailerId: 4, price: 149, isLowestPrice: false },
            { retailerId: 1, price: 155, isLowestPrice: false }
        ]
    },
    {
        id: 15,
        name: "Boat Airdopes 141 Bluetooth Earbuds",
        description: "42H playtime, IPX4 water resistance, instant voice assistant, ergonomic design",
        imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        brand: "Boat",
        rating: 4.1,
        reviewCount: 15623,
        originalPrice: 4990,
        currentPrice: 1699,
        discountPercentage: 66,
        isPopular: true,
        prices: [
            { retailerId: 2, price: 1699, isLowestPrice: true },
            { retailerId: 1, price: 1799, isLowestPrice: false },
            { retailerId: 9, price: 1899, isLowestPrice: false }
        ]
    }
];

let popularSearches = [
    { id: 1, query: "iPhone 15", searchCount: 15432 },
    { id: 2, query: "Samsung TV", searchCount: 12876 },
    { id: 3, query: "Nike shoes", searchCount: 11234 },
    { id: 4, query: "MacBook", searchCount: 9876 },
    { id: 5, query: "Air fryer", searchCount: 8765 },
    { id: 6, query: "Jeans", searchCount: 7654 },
    { id: 7, query: "Face wash", searchCount: 6543 },
    { id: 8, query: "Pressure cooker", searchCount: 5432 }
];

let cart = [];
let currentCategory = 'all';
let currentSort = 'popular';
let currentView = 'grid';

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading...</div>';
}

function hideLoading(element) {
    const loading = element.querySelector('.loading');
    if (loading) loading.remove();
}

function searchProducts(query) {
    if (!query || query.length < 2) return [];
    
    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
}

function showSearchSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    
    if (suggestions.length === 0) {
        suggestionsContainer.classList.remove('show');
        return;
    }
    
    suggestionsContainer.innerHTML = suggestions.map(product => `
        <div class="suggestion-item" onclick="selectSuggestion('${product.name}')">
            <i class="fas fa-search"></i>
            <div class="suggestion-content">
                <div class="suggestion-name">${product.name}</div>
                <div class="suggestion-brand">${product.brand}</div>
            </div>
            <div class="suggestion-price">${formatCurrency(product.currentPrice)}</div>
        </div>
    `).join('');
    
    suggestionsContainer.classList.add('show');
}

function selectSuggestion(productName) {
    document.getElementById('searchInput').value = productName;
    document.getElementById('searchSuggestions').classList.remove('show');

    updatePopularSearch(productName);

    filterProductsBySearch(productName);
}

function updatePopularSearch(query) {
    const existing = popularSearches.find(search => search.query.toLowerCase() === query.toLowerCase());
    if (existing) {
        existing.searchCount++;
    } else {
        popularSearches.push({
            id: popularSearches.length + 1,
            query: query,
            searchCount: 1
        });
    }
    popularSearches.sort((a, b) => b.searchCount - a.searchCount);
    renderPopularSearches();
}

function filterProductsBySearch(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    document.getElementById('productsTitle').textContent = `Search Results for "${query}"`;
    document.getElementById('productsSubtitle').textContent = `${filteredProducts.length} products found`;
    
    renderProducts(filteredProducts);
}

function filterByCategory(categorySlug) {
    currentCategory = categorySlug;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${categorySlug}"]`).classList.add('active');
    
    let filteredProducts = categorySlug === 'all' 
        ? products 
        : products.filter(product => {
            const category = categories.find(cat => cat.id === product.categoryId);
            return category && category.slug === categorySlug;
        });
    
    if (categorySlug === 'all') {
        document.getElementById('productsTitle').textContent = 'Best Deals Today';
        document.getElementById('productsSubtitle').textContent = 'Handpicked deals with the biggest savings';
    } else {
        const category = categories.find(cat => cat.slug === categorySlug);
        document.getElementById('productsTitle').textContent = `${category.name} Products`;
        document.getElementById('productsSubtitle').textContent = `Explore products in ${category.name.toLowerCase()}`;
    }
    
    renderProducts(filteredProducts);
}

function getProductsToRender() {
    let filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => {
            const category = categories.find(cat => cat.id === product.categoryId);
            return category && category.slug === currentCategory;
        });
    
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'price-low':
                return a.currentPrice - b.currentPrice;
            case 'price-high':
                return b.currentPrice - a.currentPrice;
            case 'discount':
                return (b.discountPercentage || 0) - (a.discountPercentage || 0);
            case 'rating':
                return (b.rating || 0) - (a.rating || 0);
            default:
                return b.isPopular ? 1 : -1;
        }
    });
    
    return filteredProducts;
}

function renderProducts(productsToRender = null) {
    const container = document.getElementById('productsGrid');
    const products = productsToRender || getProductsToRender();
    
    container.className = currentView === 'grid' ? 'products-grid' : 'products-grid list';
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or browse other categories.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const category = categories.find(cat => cat.id === product.categoryId);
    const productPrices = product.prices.map(price => {
        const retailer = retailers.find(r => r.id === price.retailerId);
        return { ...price, retailer };
    }).sort((a, b) => a.price - b.price);
    
    const lowestPrice = productPrices[0];
    const isInCart = cart.some(item => item.productId === product.id);
    
    return `
        <div class="product-card ${currentView}">
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Product+Image'">
                ${product.discountPercentage ? `<div class="product-discount">${product.discountPercentage}% OFF</div>` : ''}
                <button class="product-wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">
                        ${Array.from({length: 5}, (_, i) => 
                            `<i class="fas fa-star${i < Math.floor(product.rating) ? '' : '-o'}"></i>`
                        ).join('')}
                    </div>
                    <span class="rating-text">${product.rating} (${product.reviewCount?.toLocaleString('en-IN')})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formatCurrency(product.currentPrice)}</span>
                    ${product.originalPrice ? `<span class="original-price">${formatCurrency(product.originalPrice)}</span>` : ''}
                </div>
                ${productPrices.length > 0 ? `
                    <div class="price-comparison">
                        <div class="comparison-title">Price Comparison:</div>
                        <div class="comparison-list">
                            ${productPrices.slice(0, 3).map(price => `
                                <div class="comparison-item">
                                    <span class="retailer-name ${price.isLowestPrice ? 'lowest' : ''}">${price.retailer.displayName} ${price.isLowestPrice ? '✓' : ''}</span>
                                    <span class="retailer-price ${price.isLowestPrice ? 'lowest' : ''}">${formatCurrency(price.price)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                <button class="add-to-cart ${isInCart ? 'added' : ''}" onclick="addToCart(${product.id})">
                    ${isInCart ? '<i class="fas fa-check"></i> Added!' : '<i class="fas fa-shopping-cart"></i> Add to Cart'}
                </button>
            </div>
        </div>
    `;
}

function addToCart(productId) {
    const button = event.target;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: cart.length + 1,
            productId: productId,
            quantity: 1,
            product: product
        });
    }
    
    button.classList.add('added');
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    
    setTimeout(() => {
        button.classList.remove('added');
        button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
    }, 2000);
    
    updateCartUI();
    showCartNotification();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    updateCartUI();
    renderCartItems();
}

function updateCartQuantity(cartItemId, newQuantity) {
    const item = cart.find(item => item.id === cartItemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            renderCartItems();
        }
    }
}

function updateCartUI() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = itemCount;
    document.getElementById('floatingCartCount').textContent = itemCount;
    
    const floatingCart = document.getElementById('floatingCart');
    if (itemCount > 0) {
        floatingCart.style.display = 'block';
    } else {
        floatingCart.style.display = 'none';
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.product.currentPrice * item.quantity), 0);
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h4>Your cart is empty</h4>
                <p>Add some products to get started!</p>
            </div>
        `;
        footer.innerHTML = '';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.product.imageUrl}" alt="${item.product.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.product.name}</h4>
                <p class="cart-item-brand">${item.product.brand}</p>
                <div class="cart-item-controls">
                    <span class="cart-item-price">${formatCurrency(item.product.currentPrice)}</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    footer.innerHTML = `
        <div class="cart-total">
            <span class="total-label">Total:</span>
            <span class="total-amount">${formatCurrency(getCartTotal())}</span>
        </div>
        <button class="checkout-btn">
            <i class="fas fa-credit-card"></i>
            Proceed to Checkout
        </button>
        <button class="continue-shopping" onclick="closeCart()">
            Continue Shopping
        </button>
    `;
}

function showCartNotification() {

    console.log('Item added to cart!');
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        renderCartItems();
    }
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    
    container.innerHTML = categories.map((category, index) => `
        <div class="category-card" onclick="filterByCategory('${category.slug}')" style="animation-delay: ${index * 0.1}s">
            <div class="category-card-icon">
                <span>${category.icon}</span>
            </div>
            <h3>${category.name}</h3>
            <p>${category.productCount?.toLocaleString('en-IN')}+ products</p>
            ${category.discountText ? `<div class="discount">${category.discountText}</div>` : ''}
        </div>
    `).join('');
}

function renderPopularSearches() {
    const container = document.getElementById('popularSearches');
    
    container.innerHTML = popularSearches.slice(0, 8).map((search, index) => `
        <button class="search-tag" onclick="selectSuggestion('${search.query}')" style="animation-delay: ${index * 0.1}s">
            ${search.query}
        </button>
    `).join('');
}

    renderCategories();
    renderProducts();
    renderPopularSearches();
    updateCartUI();
    
    const searchInput = document.getElementById('searchInput');
    const debouncedSearch = debounce((query) => {
        const suggestions = searchProducts(query);
        showSearchSuggestions(suggestions);
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
    
    searchInput.addEventListener('focus', (e) => {
        if (e.target.value.length >= 2) {
            const suggestions = searchProducts(e.target.value);
            showSearchSuggestions(suggestions);
        }
    });
    
    document.querySelector('.search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            selectSuggestion(query);
        }
    });
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterByCategory(btn.dataset.category);
        });
    });
    
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
    
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            renderProducts();
        });
    });
    
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('floatingCart').addEventListener('click', toggleCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    
    document.querySelector('.modal-overlay').addEventListener('click', closeCart);
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            document.getElementById('searchSuggestions').classList.remove('show');
        }
    });
    
    document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.textContent.includes('Start Shopping')) {
                e.preventDefault();
                document.querySelector('.products-section').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, .category-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product && navigator.share) {
        navigator.share({
            title: product.name,
            text: `Check out this amazing deal on ${product.name}`,
            url: window.location.href
        });
    }
}

function toggleWishlist(productId) {

    console.log('Toggle wishlist for product:', productId);
}