import React from "react";

function Nav() {

    return (
        <div>
            <h1>
                <a data-testid="link" href="/">
                    Collin
                </a>
            </h1>
            <ul>
                <h2>
                <li>
                    <a data-testid="about" href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <a data-testid="portfolio" href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a data-testid="contact" href="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a data-testid="resume" href="#resume">
                        Resume
                    </a>
                </li>
                </h2>
            </ul>
        </div>
    )
}

export default Nav;