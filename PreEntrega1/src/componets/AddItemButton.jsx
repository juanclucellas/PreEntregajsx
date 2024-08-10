
import React from 'react';

const AddItemButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd}>Agregar al carrito</button>
  );
};

export default AddItemButton;
