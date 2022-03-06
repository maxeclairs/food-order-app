import { useState, useContext, useEffect } from 'react'
import CartContext from '../../../store/cart-context.js';
import classes from './HeaderCartButton.module.css'



const HeaderCartButton = (props) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((acc, item) => { 
    return acc + item.amount;
  }, 0);

  // create a constant variable that holds the classes for animating cart button
  const cartButtonClasses = `${classes['cart-btn']} ${isButtonHighlighted ? classes.bump : ''}`;

  useEffect(() => { 
    if (items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);  
    return () => clearTimeout(timer);

  },[items])

    return (
      <button className={cartButtonClasses} onClick={props.onClick}>
          <span className={classes['cart-icon']}>🛒</span>
          <span>My Cart</span>
        <span className={classes['cart-count']}>{ numberOfCartItems }</span>
        </button>
  )
}

export default HeaderCartButton