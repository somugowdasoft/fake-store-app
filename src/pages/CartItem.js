import React, { useState } from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-4 px-2 space-y-4 md:space-y-0">
      {/* Image */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-28 h-28 object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="flex-1 text-center md:text-left md:ml-4">
        <h2 className="text font-semibold">{item.title}</h2>
        <p className="text-gray-600">${item.price}</p>
      </div>

      {/* Quantity Increment/Decrement */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => handleQuantityChange(quantity - 1)} 
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="text font-semibold">{quantity}</span>
        <button 
          onClick={() => handleQuantityChange(quantity + 1)} 
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg"
        >
          +
        </button>
      </div>

      {/* Updated Price */}
      <p className="text font-semibold mt-2 md:mt-0 ml-0 md:ml-4">
        ${item.price * quantity}
      </p>

      {/* Remove Button */}
      <button 
        onClick={() => removeFromCart(item.id)} 
        className="ml-0 md:ml-4 bg-gradient-isInCart text-white px-3 py-1 rounded-lg"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
