import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="barra-navegacion">
      <a className="marca-navegacion" href="#">Logo</a>
      <div className="menu-navegacion">
        <a className="elemento-navegacion" href="#">Inicio</a>
        <a className="elemento-navegacion" href="#">Contacto</a>
        <a className="elemento-navegacion" href="#">Sobre Nosotros</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
