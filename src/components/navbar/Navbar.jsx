import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

//BEM -> block Element Modifier

const Navbar = () => {
    return (
        <div className="victory__navbar">            
            <div className="victory__navbar-links">
                <div className="vitory__nabvar-links_logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="victory__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#victory">Victory</a></p>
                    <p><a href="#possibility">OepnAI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>                    
                </div>
                <div className="victory__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar