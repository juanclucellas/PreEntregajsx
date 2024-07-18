
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="barra-navegacion">
      <Link className="marca-navegacion" to="/">Logo</Link>
      <div className="menu-navegacion">
        <Link className="elemento-navegacion" to="/">Inicio</Link>
        <Link className="elemento-navegacion" to="/category/ElfBar">Vape ElfBar</Link>
        <Link className="elemento-navegacion" to="/category/IGNITE">Vape Ignite</Link>
        <Link className="elemento-navegacion" to="/contacto">Contacto</Link>
        <Link className="elemento-navegacion" to="/sobre-nosotros">Sobre Nosotros</Link>
        <CartWidget />  
      </div>
    </nav>
  );
};

export default NavBar;
