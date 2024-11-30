import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li><NavLink to='/'>Shop</NavLink></li>
                <li><NavLink to='/mens'>Men</NavLink></li>
                <li><NavLink to="/womens">Women</NavLink></li>
                <li><NavLink to='/kids'>Kids</NavLink></li>
            </ul>
            
            <div className="nav-login-cart">
                <Link to='/login'><button>Log In</button></Link>
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar