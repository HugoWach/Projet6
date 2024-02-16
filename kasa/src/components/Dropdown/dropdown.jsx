import React, { useState } from 'react';
import upArrow from '@/Assets/Images/upArrow.png';



const Dropdown = ({ title, content, pages }) => {
    const [open, setOpen] = useState(false);

    const handleDropdown = () => {
        setOpen(!open);
    }

    return (
        <li className="Dropdown">
            <div className="dropdown-header" onClick={handleDropdown}>
                <h2>{title}</h2>
                <span>
                    <img className={open ? "upArrow" : "downArrow"} src={upArrow} alt="flechesClick" />
                </span>
            </div>

            {open && (
                <div className="dropdown-description">
                    {pages ? (
                        <p>{content}</p>
                    ) : (
                        <ul>
                            {content.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </li>
    );
};

export default Dropdown;
