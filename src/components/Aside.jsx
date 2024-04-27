import React, { useState } from 'react';
import DropdownMenu from "./DropdownMenu";
import { Link } from 'react-router-dom';

const Aside = () => {

    const [showDropdownMenu, setDropdownMenu] = useState(false);

    const toggleDropdownMenu = () => {setDropdownMenu(!showDropdownMenu);};
    
    return (
        <div className="aside">
            <ul>
            <button className='boton-vinos' onClick={toggleDropdownMenu}>VINOS</button>
            {showDropdownMenu && <DropdownMenu />}
            <Link to="/categoria/cervezas"><li>CERVEZAS</li></Link>
            <Link to="/categoria/champagne"><li>CHAMPAGNE</li></Link>
            </ul>
        </div>
    );
}
export default Aside
