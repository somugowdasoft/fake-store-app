// src/pages/CartPage.js
import React, { useEffect, useState } from 'react';

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
          <div key={item.id} className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover mr-4"
              />
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </div>

            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            <p className="text-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-white bg-gradient-isInCart p-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ))
      )}

      {/* Display total price */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        <p className="text-gray-500">10% discount applied</p>
      </div>
    </div>
  );
};

export default CartPage;
