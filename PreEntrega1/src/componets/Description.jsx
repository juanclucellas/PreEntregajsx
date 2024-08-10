// src/componets/Description.js
import React from 'react';

const Description = ({ text }) => {
  return (
    <div>
      <h3>Descripción del producto</h3>
      <p>{text}</p>
    </div>
  );
};

export default Description;
