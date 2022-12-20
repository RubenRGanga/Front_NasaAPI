import React, { Component, useState } from "react";


import "./navbar_styles.css"
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
                    <li><a href='#home' className='active'>HOME</a></li>
                    <li><a href='#landings'>LANDINGS</a></li>
                    <li><a href='#neas'>NEAS</a></li>
                </ul>
            </div>
            <div id='mobile' onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
        </>
    )}


export default Navbar;