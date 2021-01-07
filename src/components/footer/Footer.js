import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Eduardo Custiel</h1>
                <p>Montevideo, Uruguay</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me</h3>
                <p>ecustiel@gmail.com</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Design By Eduardo Custiel
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/ecustiel/" target='_blank' rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="https://twitter.com/eduardo_custiel" target='_blank' rel='noreferrer'>
                        <i className='fab fa-twitter twitter'></i>
                    </a>
                    <a href="https://www.facebook.com/EddieRiot/" target='_blank' rel='noreferrer'>
                        <i className='fab fa-facebook facebook'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
