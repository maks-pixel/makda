import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
       <footer>
           <ul>
               <li>
               {/* <FontAwesomeIcon icon={faGithub} /> */}
               <a class="social-list__link" href="https://github.com/maks-pixel">Github</a>
               </li>
               <li>
               <a class="social-list__link" href="https://www.linkedin.com/in/makda-girmay-a8b937b0/">LinkedIn</a>
               </li>
           </ul>
       </footer>

    );
}

export default Footer;