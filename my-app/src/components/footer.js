import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="contain">
                <h1 id="About">About Us</h1>
                <p>We are Lux Rentals giving the best deals and prices for all our customers. Giving our customers the best experience through our website.</p>
                </div>
                <div className="col">
                <h1>Information</h1>
                <ul>
                    <li>About</li>
                    <li>Mission</li>
                    <li>Services</li>
                </ul>
                </div>
                <div className="col">
                <h1>Resources</h1>
                <ul>
                    <li>Redeem Code</li>
                    <li>Deals</li>
                </ul>
                </div>
                <div className="col">
                <h1 id="contact">Contact Us</h1>
                <ul>
                    <li>+1 (921)-358-6107</li>
                </ul>
                </div>
                <div className="col social">
                <h1>Social</h1>
                <ul>
                    <li><img src="https://svgshare.com/i/5fq.svg"></img></li>
                    <li><img src="https://vignette.wikia.nocookie.net/magic-school-lussid/images/1/19/Twitter_icon.svg/revision/latest?cb=20150830032010" style={{width:'37px', height:'40px'}}></img></li>
                    <li><img src="https://svgshare.com/i/5f_.svg" style={{width:'37px', height:'40px'}}></img></li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Footer