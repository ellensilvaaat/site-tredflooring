// src/components/Footer/Footer.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg-decor">
        {/* If you have a decorative background image for the footer, add it here */}
        {/* Example: <img src="https://site-tredflooring-assets.s3.amazonaws.com/footer-bg.jpg"" alt="Footer background" /> */}
      </div>

      <div className="footer-container">
        {/* TOPO */}
        <div className="footer-top">
          {/* Lado Esquerdo - Logo, frase, redes sociais */}
          <div className="footer-left">
            <img src="https://site-tredflooring-assets.s3.amazonaws.com/logofooter.svg"" alt="TRED Logo" className="footer-logo" />
            <p className="footer-quote">
              “Quality is remembered long after price is forgotten.”<br />– Aldo Gucci
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>

          {/* Lado Direito - Menu e localização lado a lado */}
          <div className="footer-right-group">
            <div className="footer-nav">
              <h4>Menu</h4>
              <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>
            </div>
            <div className="footer-location">
              <h4>Contact us</h4>
              <p>(02) 8542 2249</p>
              <p>Supa Centa Moore, Ground Floor<br />2a Todman Ave, Kensington</p>
            </div>
          </div>
        </div>

        {/* Rodapé Legal */}
        <div className="footer-bottom">
          <span>© 2025 TRED FLOORING. ALL RIGHTS RESERVED.</span>
          <div className="footer-links">
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms &amp; Conditions</NavLink>
            <NavLink to="/disclaimer">Product &amp; Website Disclaimer</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}






