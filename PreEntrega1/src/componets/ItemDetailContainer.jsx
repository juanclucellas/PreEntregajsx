
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemQuaintySelector from './ItemQuaintySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulación de obtener datos del producto
    const fetchItem = async () => {
      const data = {
        id: '1',
        name: 'ElfBar Blueberry Ice',
        description: 'Un vape con sabor refrescante a arándano.',
        stock: 10,
        price: 15.0,
      };
      setItem(data);
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${item.name}`);
  };

  return (
    <div>
      {item && (
        <>
          <ItemDetail item={item} />
          <Description text={item.description} />
          <ItemQuantitySelector stock={item.stock} initial={1} onAdd={handleAddToCart} />
          <AddItemButton onAdd={() => handleAddToCart(1)} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
