import React from 'react';

function Header() {
    return(
        <header>
            <h2>Welcome!</h2>
            <nav>
                <ul className="flex-row">
                    <li >
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li >
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;