import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 footer">
                            <h2><b>Lux Rentals</b></h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <div className="contact">
                                <h2>Contact</h2>
                                <p> +1 (921)-358-6107</p>
                            </div>
                        </div>
                        <div className="col-sm-3 social">
                            <h2>Social</h2>
                            <ul>
                                <li><a href="#Link"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="#Link"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#Link"><i className="fab fa-pinterest"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer