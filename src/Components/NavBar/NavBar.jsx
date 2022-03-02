import React, {useState, useEffect} from 'react'
import './NavBar.css'
import {ReactComponent as LogoSmall} from './Asset 26.svg'
import {ReactComponent as LogoLarge} from './Asset 24.svg'
import {ReactComponent as MenuLines} from './menu.svg'

export default function NavBar() {

    const [toggleMenu,
        setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => setToggleMenu(!toggleMenu);

    useEffect( () => {
      const changeWidth = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', changeWidth)
      return () => window.removeEventListener('resize', changeWidth)

    }, [])


    return (
        <nav className='navbar'>
            <div className='navbar-logo-small'>
                <LogoSmall className='logo-svg'/>
                <button className="navbar_btn" onClick={toggleNav}>
                  <MenuLines />
                </button>
            </div>
            {(toggleMenu) && (

                <ul className="navbar_list">
                    <li className="navbar_list_element">Placeholder</li>
                    <li className="navbar_list_element">Placeholder</li>
                    <li className="navbar_list_element">Placeholder</li>
                    <li className="navbar_list_element">Placeholder</li>
                    <li className="navbar_list_element">Placeholder</li>
                </ul>
            )}
        </nav>
    )
}
