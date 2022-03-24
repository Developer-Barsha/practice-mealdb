import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart-component'>
            <h1>Cart Summary</h1>
            <ul>{cart}</ul>
            <h1>Thank you!!</h1>
        </div>
    );
};

export default Cart;