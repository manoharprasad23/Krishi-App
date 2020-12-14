import React, {useState} from 'react';
import {headerData} from '../../data';
import './Nav.css';
import {NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
//import 'font-awesome/css/font-awesome.min.css';

const showHamburger = () => {
    console.log('hamburger clicked');
}

const Nav = () => {
    return (
        <nav className="navBar">
            <ul className="topnav" id="myTopnav">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about/">About</NavLink></li>
                <li><NavLink to="/contact/">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
