import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/UI/Layouts/Header';
import CartProvider from './store/CartProvider';

function App() {

  const [isCartShown, setIsCartShown] = useState(false);

  const toggleCart = () => {
    setIsCartShown(!isCartShown);
  }

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={toggleCart}/>}
      <Header onShowCart={ toggleCart }/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
