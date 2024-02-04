import React from 'react';

const banner = ({ image, title }) => {
    return (
        <div className="Banner">
            <img src={image} alt="Banner de haut page" />
            <div className="Banner-sombre"></div>
            <h1>{title}</h1>
        </div>
    );
};

export default banner;