import React from "react";
import './Navbar.css'
import Logo from './Mini Logo.svg'
import Gear from './Gears.svg'

const Navbar = () =>{
    return(
        <nav className='navbar'>
            <img src={Logo}
            className='navbar-logo'
                 alt={"Logo"}
            />

            <div className='navbar-config'>

                <img className='navbar-config-gear'
                     alt={"Configuracion"}
                     src={Gear} />
            </div>

        </nav>
    )
}

export default Navbar;