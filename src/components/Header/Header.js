import React from 'react';
import logo from '../../logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/meals">Meals</a>
                    <a href="/orders">Orders</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;