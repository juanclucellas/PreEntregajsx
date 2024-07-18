import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItemById(id).then(data => setItem(data));
  }, [id]);

  return (
    <div>
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

const fetchItemById = async (id) => {
  // Simulación de fetch
  const items = [
    { id: '1', name: 'Vape ElfBar', description: 'Vape ElfBar 10.000 pufs' },
    { id: '2', name: 'Vape IGNITE', description: 'Vape IGNITE 5.000, 8.000 y 10.000 pufs' },
  ];
  return items.find(item => item.id === id);
};

export default ItemDetailContainer;
