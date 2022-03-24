import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Container.css'

const Container = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[]);


    let addedMeals=[];
    const handleClick =(name)=>{
        if(cart){
            addedMeals=[...cart, name];
            const ul = addedMeals.map(li=><li>{li}</li>);
            setCart(ul);        
        }
    };

    return (
        <div className='container'>
            <div className="meals-container">
                {
                    meals.map(meal=><Meal key={meal.idMeal} handleClick={handleClick} meal={meal}></Meal>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;