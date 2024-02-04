import React from 'react';
import { NavLink } from 'react-router-dom';
import error from '@/Assets/Images/404.png';


const Error = () => {
    return (
        <section className="Error404">
            <img src={error} alt="Error 404" />
            <div>Oups! La page que vous demandez n'existe pas.</div>
            <NavLink to="/accueil" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >Retourner sur la page d'accueil</NavLink>
        </section>
    );
};

export default Error;