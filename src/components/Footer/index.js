import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        
            <Navbar bg="dark" variant="dark" sticky="bottom">
                <Navbar.Brand href="https://github.com/maks-pixel">Github</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="https://www.linkedin.com/in/makda-girmay-a8b937b0/">LinkedIn</Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Footer;