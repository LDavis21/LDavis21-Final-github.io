import React from 'react'
import {Component} from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            userInfo: {}
        }
    }
    render() {
        return (
            <>
                <div className="header">
                    <div className="nav-bar" id="navbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="logo-wrapper">
                                        <img src="../img/logo1.png" alt="Logo" />
                                        <div className="logo-text">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="navbar-menus">
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <ul className="navigation">
                                        <li><a href="final.html">Home</a></li>
                                        <li><a href="#About">About</a></li>
                                        <li><a href="link/products.html">Products</a></li>
                                        <li><a href="#contact">Contact Us</a></li>
                                        <li><a href="#link/login.html">Login</a></li>
                                        <li><a href="link/signup.html">Sign Up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } 
}

export default Header