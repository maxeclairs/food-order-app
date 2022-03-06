import React, { useReducer } from 'react'
import CartContext from './cart-context';

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            // check if item is already in the cart
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // if item is already in the cart, update that item's amount

                const previousItems = [...state.items];
                const item = previousItems[itemIndex];
                const updatedItem = {
                    ...item,
                    amount: item.amount + action.payload.amount
                }
                previousItems[itemIndex] = updatedItem;

                return {
                    ...state,
                    items: previousItems,
                    totalAmount: state.totalAmount + action.payload.price
                }
       
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    totalAmount: state.totalAmount + action.payload.amount * action.payload.price
                }
            }
        case 'REMOVE_ITEM':
            // if item exists, decrease the count and amount
            const itemIndexToRemove = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndexToRemove >= 0) {
                const previousItems = [...state.items];
                const itemToRemove = previousItems[itemIndexToRemove];
                const updatedItem = {
                    ...itemToRemove,
                    amount: itemToRemove.amount - 1
                }
                previousItems[itemIndexToRemove] = updatedItem;

                //if item amount is 0, remove the item from the cart
                if (updatedItem.amount === 0) {
                    previousItems.splice(itemIndexToRemove, 1);
                }

            
                return {
                    ...state,
                    items: previousItems,
                    totalAmount: state.totalAmount - action.payload.price
                }
            } else {
                return state;

            }
        default:
            return state;
    }
}

const CartProvider = (props) => {
    
    const [cartState, dispatch] = useReducer(cartReducer, defaultState);

    const addItemToCartHandler = (item) => { 
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }
    const removeItemFromCartHandler = (id) => { 
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        })
    }
    
    const value = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler,
    }

  return (
      <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider