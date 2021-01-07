import React from 'react';
import './Navbar.css';

const Navbar = ({isScrolling}) => {

    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling': null}`}>
            <div className={`navbar-logo ${isScrolling > 20 ? 'scrolling-text': null}`} onClick={toTheTop}>
                Eduardo Custiel - Web Developer Jr
            </div>
        </nav>
    )
}

export default Navbar
