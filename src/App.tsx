import { Home } from './pages/Home'
import './App.css'
import { useState } from 'react';
import { Header } from './components/Header/Header';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Header onOpenCart={() => setIsCartOpen(true)} cartCount={0} />
      <Home />
    </>
  )
}

export default App
