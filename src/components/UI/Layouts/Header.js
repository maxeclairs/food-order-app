import React from 'react'
import banner from '../../../assets/images/food-header.jpg'
import classes from  './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food Order</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['header-img']}>
                <img src={banner} alt="banner"/>
            </div>
            
        </>
  )
}

export default Header