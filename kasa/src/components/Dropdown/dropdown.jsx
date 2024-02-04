import React, { useState } from 'react';
import upArrow from '@/Assets/Images/upArrow.png';
import downArrow from '@/Assets/Images/downArrow.png';



const Dropdown = ({ title, content, pages }) => {

    const [open, setopen] = useState(false);

    const handleDropdown = () => {
        setopen(!open);
    }
    return (
        <li className="Dropdown">
            <div className="dropdown-header" onClick={handleDropdown}>
                <h2>{title}</h2>
                <span>
                    <img src={open ? upArrow : downArrow} alt="flechesClick" />
                </span>
            </div>

            {
                open && (
                    <div className="dropdown-description">
                        {
                            pages ? (
                                <p>{content}</p>
                            ) : (
                                <ul>
                                    <li></li>
                                </ul>
                            )
                        }
                    </div>
                )
            }
        </li>
    );
};

export default Dropdown;