import React from 'react';

import LogoFooter from "@/Assets/Images/LogoFooter.png";


const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt="logo du footer" />
            <div className="textFooter">
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;