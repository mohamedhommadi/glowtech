import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart, removeFromCart, updateQuantity, user }) {
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cart.reduce((sum, item) => {
    const price = item.discount 
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return sum + (price * item.quantity);
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (!user) {
      alert('Por favor inicia sesión para continuar');
      window.location.href = '/login';
      return;
    }
    alert(`¡Gracias ${user.name}! Tu pedido ha sido procesado.\nTotal: $${total.toFixed(2)}`);
  };

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="container">
          <h1>Tu Carrito</h1>
          <div className="empty-cart">
            <p className="empty-icon">🛒</p>
            <p className="empty-message">Tu carrito está vacío</p>
            <Link to="/" className="continue-shopping-btn">
              Continuar comprando
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <h1>Tu Carrito</h1>

        <div className="cart-content">
          <section className="cart-items">
            <div className="items-header">
              <span>{cart.length} artículos en tu carrito</span>
            </div>

            {cart.map(item => {
              const itemPrice = item.discount 
                ? item.price * (1 - item.discount / 100)
                : item.price;
              const itemTotal = itemPrice * item.quantity;

              return (
                <div key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`} className="item-image">
                    <img src={item.image} alt={item.name} />
                  </Link>

                  <div className="item-details">
                    <Link to={`/product/${item.id}`} className="item-name">
                      {item.name}
                    </Link>
                    <p className="item-category">{item.category}</p>
                    
                    {item.discount && (
                      <p className="item-discount">
                        Descuento: -{item.discount}%
                      </p>
                    )}
                  </div>

                  <div className="item-price">
                    {item.discount ? (
                      <>
                        <span className="original">${item.price.toFixed(2)}</span>
                        <span className="sale">${itemPrice.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="price">${itemPrice.toFixed(2)}</span>
                    )}
                  </div>

                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >−</button>
                    <input 
                      type="number" 
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="qty-input"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >+</button>
                  </div>

                  <div className="item-total">
                    <strong>${itemTotal.toFixed(2)}</strong>
                  </div>

                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar del carrito"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </section>

          <aside className="cart-summary">
            <div className="summary-box">
              <h2>Resumen del Pedido</h2>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Impuesto (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Envío:</span>
                <span className="free">Gratis</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {user ? (
                <div className="user-info">
                  <p>👤 Comprador: {user.name}</p>
                  <p>📧 {user.email}</p>
                </div>
              ) : (
                <p className="login-reminder">Inicia sesión para continuar</p>
              )}

              <button 
                className="checkout-btn"
                onClick={handleCheckout}
              >
                {user ? 'Proceder al Pago' : 'Iniciar Sesión para Comprar'}
              </button>

              <Link to="/" className="continue-btn">
                ← Continuar Comprando
              </Link>
            </div>

            <div className="trust-box">
              <h3>Protección de Compra</h3>
              <ul>
                <li>✓ Garantía de 30 días</li>
                <li>✓ Devolución gratis</li>
                <li>✓ Pago seguro</li>
                <li>✓ Envío rápido</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
