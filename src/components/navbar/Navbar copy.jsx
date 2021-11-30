import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

//BEM -> block Element Modifier

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
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
                <div className="victory__navbar-menu">
                    {toggleMenu 
                        ? <RiCloseLin color= "#fff" size= {27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="victory-menu_container scale-up-center">
                        <div className="victory-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className="victory-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                        </div>
                     )}
                </div>
            </div>
        </div>
    );
};

export default Navbar