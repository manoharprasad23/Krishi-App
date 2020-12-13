import React, {useState} from 'react';
import {headerData} from '../../data';
import './Nav.css';
import {NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Nav = () => {
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about/">About</NavLink></li>
                <li><NavLink to="/contact/">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
