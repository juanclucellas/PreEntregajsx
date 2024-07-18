
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componets/NavBar';
import ItemsListContainer from './componets/ItemsListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';
import Catalogo from './componets/Catalogo';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting="Bienvenido a iVape!" />} />
          <Route path="/category/:categoryId" element={<ItemsListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
