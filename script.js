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

let products = []; // Trimmed for brevity
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
    floatingCart.style.display = itemCount > 0 ? 'block' : 'none';
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

document.addEventListener('DOMContentLoaded', function() {
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
                document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
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
