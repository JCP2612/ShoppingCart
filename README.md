# Shopping Cart

Una aplicación de carrito de compras moderna construida con React, TypeScript y Vite.

## Frameworks y Tecnologías

- **React 19** - Librería de UI con soporte para el último estándar JavaScript
- **TypeScript** - Tipado estático para JavaScript
- **Vite 7** - Build tool y dev server ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first para estilos
- **React Router 7** - Enrutamiento de aplicaciones SPA
- **Heroicons** - Librería de iconos de alta calidad
- **ESLint** - Linting y análisis de código estático

## Estructura del Proyecto

```
shoppingcart/
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── CartDrawer/          # Drawer del carrito
│   │   ├── Checkout/            # Página de checkout
│   │   ├── Header/              # Encabezado de la aplicación
│   │   ├── ProductCard/         # Tarjeta de producto
│   │   └── ProductList/         # Lista de productos
│   ├── context/                 # Context API para estado global
│   │   ├── CartContext.tsx      # Contexto del carrito
│   │   ├── CartProvider.tsx     # Proveedor del contexto
│   │   └── types.tsx            # Tipos TypeScript
│   ├── hooks/                   # Custom hooks
│   │   ├── useCart.ts           # Hook para gestionar carrito
│   │   └── usePriceCalculation.ts # Hook para cálculos de precio
│   ├── pages/                   # Páginas de la aplicación
│   │   ├── Home.tsx             # Página de inicio
│   │   └── Checkout.tsx         # Página de checkout
│   ├── data/
│   │   └── products.ts          # Datos de productos
│   ├── assets/                  # Archivos estáticos
│   ├── App.tsx                  # Componente raíz
│   ├── main.tsx                 # Punto de entrada
│   ├── App.css                  # Estilos de la aplicación
│   └── index.css                # Estilos globales
├── public/                      # Archivos públicos estáticos
├── package.json                 # Dependencias del proyecto
├── vite.config.ts               # Configuración de Vite
├── tailwind.config.js           # Configuración de Tailwind CSS
├── tsconfig.json                # Configuración de TypeScript
└── eslint.config.js             # Configuración de ESLint
```

## Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/JCP2612/ShoppingCart
cd shoppingcart
```

2. **Instalar dependencias**

```bash
npm install
```

## Ejecución

### Modo Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Características

- ✨ Gestión de carrito con Context API
- 🛍️ Catálogo de productos dinámico
- 💰 Cálculo automático de precios y totales
- 🎨 Interfaz moderna con Tailwind CSS
- 📱 Diseño responsivo
- ⚡ HMR para desarrollo rápido
- 🔒 Tipado completo con TypeScript
