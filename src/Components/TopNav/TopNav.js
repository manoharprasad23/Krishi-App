import React, {useState} from 'react';
import './TopNav.css';

function TopNav(props) {
    const [contact, useContact] = useState('/home');
    return (
        <div>
            <div className="topnav" id="myTopnav">
                <a href={contact} className="active">Home</a>
                <a href={contact}>News</a>
                <a href={contact}>Contact</a>
                <div className="dropdown">
                    <button className="dropbtn">Dropdown 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href={contact}>Link 1</a>
                    <a href={contact}>Link 2</a>
                    <a href={contact}>Link 3</a>
                    </div>
                </div> 
                <a href={contact}>About</a>
                <a href={contact} className="icon" onClick={()=> {console.log('clicked')}}>&#9776;</a>
                </div>
        </div>
    )
}

export default TopNav
