import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar errores cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validaciones comunes
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Validaciones para registro
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'El nombre es requerido';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Las contraseñas no coinciden';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simular llamada a API
    setTimeout(() => {
      const userData = {
        email: formData.email,
        name: isLogin ? formData.email.split('@')[0] : formData.name,
        id: Math.random().toString(36).substr(2, 9)
      };

      onLogin(userData);
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <main className="login-page">
      <div className="container">
        <div className="login-wrapper">
          <div className="auth-card">
            <div className="auth-header">
              <h1>🌟 GlowTech</h1>
              <p>{isLogin ? 'Inicia sesión' : 'Crea una cuenta'}</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    disabled={loading}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  disabled={loading}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mínimo 6 caracteres"
                  disabled={loading}
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repite tu contraseña"
                    disabled={loading}
                  />
                  {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? '⏳ Procesando...' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setErrors({});
                    setFormData({
                      email: '',
                      password: '',
                      name: '',
                      confirmPassword: ''
                    });
                  }}
                >
                  {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </button>
              </p>
            </div>

            <div className="demo-credentials">
              <p className="demo-title">🧪 Demostración</p>
              <p>Email: demo@example.com</p>
              <p>Contraseña: 123456</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
