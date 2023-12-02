import React from 'react';

import './Navbar.css';
import logo from '../assets/Youtube_logo.png'

const Navbar = () => {
    return (
        <div >
          <div>
            <img src = {logo} alt ="logo"/>
            <h1>YouTube</h1> 
            </div>

            <div className='searchbar'>
            <input className = "searchkob" type="text" placeholder="Search" />
            </div>
                </div>
    );
}

export default Navbar;
