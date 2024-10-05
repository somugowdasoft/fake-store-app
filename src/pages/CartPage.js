// src/pages/CartPage.js
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price and apply 10% discount
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total * 0.9); // Apply 10% discount
  }, [cartItems]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {/* Display message if cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      )}

      {/* Display total price */}
      <div className="flex justify-between mt-6 text-center md:text-right">
        <h2 className="text font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <p className="text font-bold text-gray-500">10% discount applied</p>
      </div>
    </div>
  );
};

export default CartPage;
