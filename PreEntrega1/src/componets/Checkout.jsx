import React from 'react';

const Checkout = ({ items, total }) => {
  const handleCheckout = () => {
    alert('Compra finalizada!');
    // Lógica para finalizar la compra
  };

  return (
    <div>
      <h3>Finalizar compra</h3>
      <p>Items en el carrito: {items.length}</p>
      <p>Total: ${total}</p>
      <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
