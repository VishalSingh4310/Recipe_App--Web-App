import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';
const Nav=()=>{
    return(
        <div className="parent">
            <nav className="nav">
                <h2  className="brand">Foody</h2>
                <ul className="nav-links">
                    <Link to="/">
                        <li className="nav-items">Home</li>
                    </Link>
                    <li className="nav-items">Recipe</li>
                    <li className="nav-items">About</li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;