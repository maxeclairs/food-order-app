import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.amount}
                    onRemove={() => cartCtx.removeItemFromCart(item, 1)}
                    onAdd={() => cartCtx.addItemToCart({...item})}
                />
            ))}
        </ul>
    )
    return (
        <Modal onClick={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Cancel</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}


export default Cart