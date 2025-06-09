import { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold" }}>₹{product.currentPrice.toLocaleString("en-IN")}</p>
      <button onClick={() => onAddToCart(product)} className="btn btn-primary">
        <i className="fas fa-cart-plus"></i> Add to Cart
      </button>
      <button onClick={toggleLike} className="like-btn">
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}
