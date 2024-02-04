import React from 'react';

const profile = ({ host }) => {

    return (
        <div className="profile">
            <span>{host.name}</span>
            <img src={host.picture} alt="image de profil" />
        </div>
    );
};

export default profile;