// src/componets/ItemQuantitySelector.js
import React, { useState } from 'react';

const ItemQuantitySelector = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemQuantitySelector;
