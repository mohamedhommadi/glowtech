![GlowTech Banner](https://via.placeholder.com/1200x300?text=GlowTech+E-commerce)

# 🌟 GlowTech - E-commerce Platform

Una plataforma de e-commerce moderna y completa construida con **React**, **HTML**, **CSS** y **JavaScript**. Diseñada para ofrecer una experiencia de compra fluida con un catálogo de productos, búsqueda avanzada, filtros, carrito de compras y autenticación de usuarios.

## ✨ Características

### 🏠 Página Principal
- **Catálogo de Productos**: Grid responsive de productos
- **Búsqueda en Tiempo Real**: Busca productos por nombre o descripción
- **Filtros Avanzados**:
  - Filtro por categoría
  - Rango de precio dinámico
  - Filtro por calificación
- **Interfaz Moderna**: Diseño limpio y profesional

### 🛍️ Carrito de Compras
- Agregar/eliminar productos
- Actualizar cantidades
- Cálculo automático de totales
- Impuesto incluido (8%)
- Envío gratis
- Persistencia de datos en localStorage

### 📱 Detalles del Producto
- Vista detallada con imagen grande
- Especificaciones completas
- Reseñas y calificaciones
- Selector de cantidad
- Productos relacionados
- Descuentos destacados

### 👤 Autenticación
- Login/Registro
- Validación de formularios
- Datos de usuario persistentes
- Demo credentials para pruebas rápidas

### 🎨 Diseño
- Interfaz responsiva (Mobile-first)
- Colores modernos y profesionales
- Animaciones suaves
- Experiencia de usuario optimizada

## 📋 Requisitos

- Node.js (v14 o superior)
- npm o yarn

## 🚀 Instalación y Setup

1. **Clonar el repositorio**:
```bash
git clone https://github.com/tu-usuario/glowtech.git
cd glowtech
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**:
```bash
npm start
```

4. **Abrir en el navegador**:
La aplicación se abrirá automáticamente en `http://localhost:3000`

## 📦 Estructura del Proyecto

```
glowtech/
├── public/
│   ├── index.html
│   └── index.css
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── ProductCard.js
│   │   ├── ProductCard.css
│   │   ├── SearchBar.js
│   │   ├── SearchBar.css
│   │   ├── FilterSidebar.js
│   │   └── FilterSidebar.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HomePage.css
│   │   ├── ProductDetailPage.js
│   │   ├── ProductDetailPage.css
│   │   ├── CartPage.js
│   │   ├── CartPage.css
│   │   ├── LoginPage.js
│   │   └── LoginPage.css
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🔑 Credenciales de Demostración

Para probar la aplicación sin necesidad de registrarse:

- **Email**: demo@example.com
- **Contraseña**: 123456

## 🛠️ Tecnologías Utilizadas

- **React 18**: Librería principal
- **React Router 6**: Navegación entre páginas
- **CSS3**: Estilos responsive
- **localStorage**: Persistencia de datos
- **Axios**: Preparado para integración con APIs

## 📱 Características Responsivas

- ✅ Totalmente responsive
- ✅ Optimizado para móviles
- ✅ Tabletas
- ✅ Pantallas de escritorio

## 🎯 Funcionalidades Principales

### 1. **Búsqueda y Filtros**
- Búsqueda por texto completo
- Filtros por categoría, precio y calificación
- Actualización en tiempo real

### 2. **Gestión de Carrito**
- LocalStorage para persistencia
- Sincronización entre páginas
- Cálculo de impuestos y totales

### 3. **Sistema de Autenticación**
- Validación de emails
- Validación de contraseñas
- Mensajes de error informativos

### 4. **Catálogo de Productos**
- 12 productos de demostración
- Imágenes placeholder
- Precios, descuentos y calificaciones

## 🚀 Mejoras Futuras

- [ ] Integración con API real
- [ ] Pasarela de pagos (Stripe/PayPal)
- [ ] Sistema de reseñas de usuarios
- [ ] Historial de pedidos
- [ ] Wishlist/Favoritos
- [ ] Notificaciones de descuentos
- [ ] Multi-idioma
- [ ] Dark mode

## 📝 Scripts Disponibles

```bash
# Iniciar desarrollo
npm start

# Compilar para producción
npm build

# Ejecutar pruebas
npm test

# Eyectar configuración
npm eject
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👨‍💻 Autor

Creado con ❤️ para proporcionar una solución completa de e-commerce.

---

**¡Gracias por usar GlowTech! Si tienes sugerencias o encontraste bugs, siéntete libre de reportarlos.** 🚀
