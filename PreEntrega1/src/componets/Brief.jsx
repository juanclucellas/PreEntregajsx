
import React from 'react';

const Brief = ({ items }) => {
  return (
    <div>
      <h3>Resumen de la compra</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} unidades
          </li>
        ))}
      </ul>
      <p>Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default Brief;
