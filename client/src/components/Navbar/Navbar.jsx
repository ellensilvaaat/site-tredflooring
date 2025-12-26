import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      {/* LOGO — ESQUERDA */}
      <div className="logo">
        <img
          src="https://site-tredflooring-assets.s3.amazonaws.com/logo.svg"
          alt="TRED logo"
          width="200"
          height="60"
          loading="eager"
        />
      </div>

      {/* MENU — CENTRO (DESKTOP) */}
      <nav className="nav-desktop">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>

      {/* CARRINHO — DIREITA */}
      <div className="navbar-right">
        <Link to="/cart" className="navbar-cart-icon" title="Cart">
          <img
            src="https://site-tredflooring-assets.s3.amazonaws.com/icons/cart.png"
            alt="Cart"
            className="navbar-cart-img"
          />
        </Link>

        {/* HAMBURGER — MOBILE (inalterado) */}
        <div className="navbar-hamburger" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      {menuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}

      {/* MENU MOBILE (INALTERADO) */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <button className="navbar-close" onClick={closeMenu}>×</button>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
          <li>
            <NavLink to="/cart" onClick={closeMenu}>
              <img
                src="https://site-tredflooring-assets.s3.amazonaws.com/icons/cart.png"
                alt="Cart"
                className="navbar-cart-img"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}


