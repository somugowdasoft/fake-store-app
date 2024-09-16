// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart, cartItems, removeFromCart }) => {

  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="border p-4 flex flex-col bg-white rounded-md shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700 mt-1">${product.price}</p>

      {isInCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-gradient-isInCart mt-auto text-white py-2 px-4 rounded"
        >
          Remove from Cart
        </button>
      ) : (<button
        className="bg-custom-gradient mt-auto text-white py-2 px-4 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>)
      }
    </div>
  );
};

export default ProductCard;
