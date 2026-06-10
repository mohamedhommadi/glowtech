import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ user, cartItemsCount, onLogout }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <span className="logo-text">🌟 GlowTech</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/cart" className="nav-link cart-link">
              🛒 Carrito
              {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
            </Link>
            {user ? (
              <div className="user-menu">
                <span className="user-name">👤 {user.name}</span>
                <button className="nav-button logout-btn" onClick={onLogout}>
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <Link to="/login" className="nav-button login-btn">
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;