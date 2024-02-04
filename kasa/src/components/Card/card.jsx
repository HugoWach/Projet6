import React from 'react';

const card = ({ image, title }) => {
    return (
        <li className="Card">
            <img src={image} alt="Card d'un logement" />
            <div className="Card-sombre"></div>
            <h2>{title}</h2>
        </li>
    );
};

export default card;