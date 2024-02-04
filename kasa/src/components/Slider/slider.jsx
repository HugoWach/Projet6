import React, { useState } from 'react';

import previousarrow from "@/Assets/Images/previousarrow.png";
import nextarrow from "@/Assets/Images/nextarrow.png";

const Slider = ({ pictures }) => {

    const [index, setIndex] = useState(0);


    const previousSlide = () => {
        setIndex((previndex) => previndex === 0 ? pictures.length - 1 : previndex - 1)

    }

    const nextSlide = () => {
        setIndex((previndex) => previndex + 1 === pictures.length ? 0 : previndex + 1)
    }

    return (
        <div className='sliderContainer'>

            {
                pictures.length > 1 && (
                    <img className='previousarrow' src={previousarrow} alt="arrow left" onClick={() => previousSlide()} />
                )
            }

            <div className='containerimage' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    pictures.map((picture, index) => (
                        <div className='imageslider' key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>
                    ))
                }
            </div>


            {
                pictures.length > 1 && (
                    <>
                        <img className='nextarrow' src={nextarrow} alt="arrow right" onClick={() => nextSlide()} />
                        <p>{index + 1} / {pictures.length}</p>
                    </>
                )
            }

        </div>
    );
};

export default Slider;