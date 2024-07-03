
import React from 'react';
import NavBar from './componets/NavBar';
import itemsListContainer from './componets/itemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a The Vape Store"/>
    </div>
  );
}

export default App;
