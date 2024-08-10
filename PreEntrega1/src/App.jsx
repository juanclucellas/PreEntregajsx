
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componets/NavBar';
import ItemsListContainer from './componets/ItemsListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';
import Checkout from './componets/Checkout';
import Brief from './componets/Brief';
import ItemQuaintySelector from './componets/ItemQuaintySelector';
import ItemDetail from './componets/ItemDetail';
import Description from './componets/Description';
import AddItemButton from './componets/AddItemButton';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Mi Tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemsListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout items={[]} total={0} />} />
          <Route path="/brief" element={<Brief items={[]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
