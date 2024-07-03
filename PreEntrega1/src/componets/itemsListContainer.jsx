import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ 
      padding: '20px', 
      marginTop: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '5px', 
      backgroundColor: '#f9f9f9' 
    }}>
      <h1 style={{ margin: '0', fontSize: '24px', color: '#333' }}>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
