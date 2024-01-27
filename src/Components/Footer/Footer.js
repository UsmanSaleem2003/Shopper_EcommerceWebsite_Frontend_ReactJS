import React from 'react';
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";

export default function Footer() {
    const latestyear = new Date();
    let currentYear = latestyear.getFullYear();

    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt='' />
                <p className='logoname'>Shopper</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icons'>
                <div className='footer-icons-container'>
                    <i className="fab fa-instagram"></i>
                </div>
                <div className='footer-icons-container'>
                    <i class="fab fa-pinterest"></i>
                </div>
                <div className='footer-icons-container'>
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright © {currentYear} - All Rights Reserved.</p>
            </div>
        </div>
    )
}
