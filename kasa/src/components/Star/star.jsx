import React from 'react';
import fullStar from '@/Assets/Images/fullStar.png';
import emptyStar from '@/Assets/Images/emptyStar.png';


const star = ({ rating }) => {
    return (
        <div classNAme='star'>
            {
                [...Array(5)].map((value, index) => {
                    if (index + 1 <= rating) {
                        return (
                            <img key={index} src={fullStar} alt="étoile remplie"></img>
                        )
                    } else {
                        return (
                            <img key={index} src={emptyStar} alt="étoile vide"></img>
                        )
                    }
                })
            }

        </div>
    );
};

export default star;