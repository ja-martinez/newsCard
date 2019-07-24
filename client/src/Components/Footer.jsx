import React from 'react';

function Footer(props) {
    return (
        <nav className="navbar">
            <h5 className="footer">&copy; {props.copyright}</h5>
        </nav>
    )
}

export default Footer;