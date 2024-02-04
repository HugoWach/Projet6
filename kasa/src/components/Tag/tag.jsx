import React from 'react';

const tag = ({ tags }) => {

    return (
        <ul>
            {tags.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul >
    );
};

export default tag;