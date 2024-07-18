
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemsListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItemsByCategory(categoryId).then(data => setItems(data));
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href={`/item/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const fetchItemsByCategory = async (categoryId) => {
  // Simulación de fetch
  const allItems = [
    { id: '1', name: 'ElfBar', category: 'vape-elfbar' },
    { id: '2', name: 'IGNITE', category: 'vape-ignite' },
  ];
  return categoryId ? allItems.filter(item => item.category === categoryId) : allItems;
};

export default ItemsListContainer;
