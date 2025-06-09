import { useEffect, useState } from "react";

export default function CartPanel({ cartItems, setCartItems }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => sum += item.price * item.qty);
    setTotal(sum);
  }, [cartItems]);

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].qty += 1;
    setCartItems(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setCartItems(updated);
    }
  };

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const clearCart = () => setCartItems([]);

  return (
    <div className="cart-panel">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                <strong>{item.name}</strong> <br />
                ₹{item.price.toLocaleString("en-IN")} × {item.qty}
              </div>
              <div className="cart-controls">
                <button onClick={() => decreaseQty(index)}>-</button>
                <button onClick={() => increaseQty(index)}>+</button>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <p><strong>Total:</strong> ₹{total.toLocaleString("en-IN")}</p>
      {cartItems.length > 0 && (
        <button onClick={clearCart} className="clear-btn">Clear Cart</button>
      )}
    </div>
  );
}
