import React from 'react'

function Header() {
    return (
        <div className="Header">
        <div className="container"></div>
        <p id="logo"><img src="img/logo1.png"></img></p>
        <div className="main"></div>
        <ul id="navbar">
        <li className="active"><a href="final.html">Home</a></li>
        <li><a href="#About">About Us</a></li>
        <li><a href="link/products.html">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="link/login.html">Login</a></li>
        <li><a href="link/signup.html">Sign Up</a></li>
        </ul>
        </div>
    )
}

export default Header