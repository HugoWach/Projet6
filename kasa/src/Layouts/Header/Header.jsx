import React from 'react';

import Logo from "@/Assets/Images/Logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <img src={Logo} alt="logo du header" />
            <nav>
                <NavLink to="/accueil" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >Accueil</NavLink>
                <NavLink to="/about" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;