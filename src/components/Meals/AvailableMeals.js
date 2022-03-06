import React from 'react'
import Card from '../Card/Card'
import DUMMY_MEALS from './dummy-meals'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'
// import MealItemForm from './MealItemForm'

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return (
            <MealItem
                id={meal.id}
                key={meal.id} 
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
            
        )
    })
  return (
        <div className={classes['available-meals']}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </div>
  )
}

export default AvailableMeals