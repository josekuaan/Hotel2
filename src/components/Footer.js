import React from 'react'
import { FaTwitter,FaFacebook,FaYoutube,FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
        <footer>
            <div className=" footer-content">
                <ul>
                <li>Phone Support</li>
                <li><h3>24 HOURS A DAY</h3></li>
                    
                    <li>+ 12 345 555 999</li>
                </ul>
                <ul>
                    <li>Follow Us</li>
                    <li> <h3>SOCIAL MEDIA CHANNELS</h3></li>
                    <li>
                       <FaTwitter /> <FaFacebook /> <FaYoutube /> <FaInstagram />
                    </li>
                </ul>
                <ul>
                    <li>Our Newsletter</li>
                    <li><h3>SIGNUP FOR SPECIAL OFFERS</h3></li>
                    <li>
                        <form className="subscribe">
                            <input type="text" placeholder="E-mail"/>
                            <button className="btn">SUBSCRIBE</button>
                        </form>
                    </li>
                </ul>
            </div>
            
        </footer>
        <div className="copy-write">
            <p>&copy; copywrite  Anyibaba 2020, Alright Reserve.</p>
        </div>
        </>
    )
}
