import React from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef } from 'react'

const MealItemForm = (props) => {

  //state variable to check the validity of the amount input
  const [amountValid, setAmountValid] = React.useState(true);
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const quantity = quantityInputRef.current.value;

    //convert quantity to number
    const quantityNumber = parseInt(quantity);

    // validate the quantity input to check if quantity is not empty and quantity is between 1 and 5

    if (quantity.trim() === '' || quantityNumber < 1 || quantityNumber > 5) {
      setAmountValid(false);
      return;
    }
    // if quantity is valid, then set the amountValid to true and call the addItemToCartHandler
    setAmountValid(true);
    props.onAddtoCart(quantityNumber);



  }
  return (
        <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={quantityInputRef}
              label={'Amount'}
                input={{
                    id: 'amount_' + props.uid,
                    type: 'number',
                    min: 0,
                    max: 5,
                    step: 1,
                    defaultValue: 1
                }}
          />
      <button>+ Add</button>
      {//display error if quantity is invalid
        !amountValid && <p>Quantity must be between 1 and 5</p>
      }

        </form>
  )
}

export default MealItemForm