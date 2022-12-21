import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import "./styles/navbar_styles.css"
import logo from "./logo.svg"

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {setClicked(!clicked)}
    return(
        <>
        <nav>
            <a href='https://api.nasa.gov/' target="_blank" rel="noopener noreferrer">
            <img src={logo} className="App-logo" alt="NASA logo" />
            </a>
            <div id='cajaTexto'>
                <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
                    <li><NavLink to="/home">HOME</NavLink></li>
                    <li><NavLink to="/landings">LANDINGS</NavLink></li>
                    <li><NavLink to="/neas">NEAS</NavLink></li>
                </ul>
            </div>
            <div id='mobile' onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
        </>
    )}


export default Navbar;