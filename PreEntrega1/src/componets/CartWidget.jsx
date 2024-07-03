import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', fontSize: '24px' }}>
      
      <span style={{ 
        position: 'absolute', 
        top: '-10px', 
        right: '-10px', 
        backgroundColor: 'red', 
        color: 'white', 
        borderRadius: '50%', 
        padding: '5px', 
        fontSize: '14px' 
      }}>
        3
      </span>
    </div>
  );
};

export default CartWidget;
