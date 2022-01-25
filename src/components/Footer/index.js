import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        
            <Navbar bg="dark" variant="dark" sticky="bottom">
                <Navbar.Brand href="https://github.com/maks-pixel"><FontAwesomeIcon icon={faGithub} /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Brand href="https://www.linkedin.com/in/makda-girmay-a8b937b0/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Footer;