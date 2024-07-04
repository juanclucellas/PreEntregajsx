
import React from 'react';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemsListContainer'; 


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a The Vape Store"/>
    </div>
  );
}

export default App;
