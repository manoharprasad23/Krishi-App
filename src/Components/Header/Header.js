import React from 'react';
import TopNav from '../TopNav/TopNav';
import Nav from '../Nav/Nav';
import './Header.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

function Header() {
    return (
        <div className="App-header">
        <div className="logo">
                <img src="https://pacinst.org/wp-content/uploads/2018/08/logo-copy.png" alt="logo" />
            </div>
            <Nav/>
        </div>
    )
}

export default Header
