import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        <section className='footer'>
            <div className='footer-links'>
                <a className='f-link' href='https://github.com/maks-pixel' ><FontAwesomeIcon icon={faGithub} className='fa-2x' /></a>
                <a className='f-link' href='https://www.linkedin.com/in/makda-girmay-a8b937b0/' ><FontAwesomeIcon icon={faLinkedin} className='fa-2x' /></a>
           </div>
        </section>
    );
}

export default Footer;