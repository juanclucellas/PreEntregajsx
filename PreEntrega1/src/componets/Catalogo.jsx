import React from 'react';

const catalogo = [
  {
    id: 'elfbar',
    name: 'ElfBar',
    variations: [
      { flavor: 'Blueberry Ice' },
      { flavor: 'Miami Mint' },
      { flavor: 'Strawberry Ice' },
    ],
  },
  {
    id: 'ignite',
    name: 'IGNITE',
    variations: [
      { size: '5000 puf', flavor: 'Banana Ice' },
      { size: '5000 puf', flavor: 'Green Apple' },
      { size: '5000 puf', flavor: 'Watermelon Ice' },
      { size: '8000 puf', flavor: 'Banana Ice' },
      { size: '8000 puf', flavor: 'Green Apple' },
      { size: '8000 puf', flavor: 'Watermelon Ice' },
      { size: '1500 puf', flavor: 'Banana Ice' },
      { size: '1500 puf', flavor: 'Green Apple' },
      { size: '1500 puf', flavor: 'Watermelon Ice' },
    ],
  },
];


const Catalogo = () => {
  return (
    <div>
      <h1>Catálogo</h1>
      {catalogo.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          {product.variations.map((variation, index) => (
            <div key={index}>
              {variation.size ? (
                <p>
                  Tamaño: {variation.size}, Sabor: {variation.flavor}
                </p>
              ) : (
                <p>Sabor: {variation.flavor}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Catalogo;
