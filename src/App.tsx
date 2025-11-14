import { Home } from './pages/Home'
import './App.css'
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { CartDrawer } from './components/CartDrawer/CartDrawer';
import { CartProvider } from './context/CartProvider';
import { Routes, Route } from 'react-router-dom';
import { CheckoutPage } from './pages/Checkout';
function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartProvider>
      <Header onOpenCart={() => setIsCartOpen(true)} cartCount={0} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>

    </CartProvider>
  )
}

export default App
