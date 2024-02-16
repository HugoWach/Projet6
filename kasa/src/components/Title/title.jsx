import React from 'react';

const titles = ({ title, location }) => {
    return (
        <div className='title'>
            <div>
                {title}
            </div>
            <div className='location'>
                {location}
            </div>
        </div>

    );
};

export default titles;