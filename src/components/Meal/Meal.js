import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = ({meal, handleClick}) => {
    return (
        <div className='meal'>
            <img src={meal.strMealThumb} alt="" />
            <h2>{meal.strMeal}</h2>
            <p>{meal.strInstructions.slice(0,170)}</p>
            <button onClick={()=>handleClick(meal.strMeal)}>Add To Cart...<FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Meal;