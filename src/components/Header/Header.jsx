import React, { useState } from 'react';
import { motion } from "framer-motion"
import Menu from '../Menu/Menu';
import { MENU } from '../../constants/constants';
import ButtonTheme from '../ButtonTheme/ButtonTheme';


const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    function handlerMenu () {
        setBurgerMenu(!burgerMenu);
        if (window.innerWidth <= 635) {
            document.querySelector("body").style.overflow = !burgerMenu ? "hidden" : "unset";
        }
    }

  return (
    <header className='header'>
        <motion.div 
            className="header__logo"
            initial={{ opacity: 0, x: "-1000%" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5 }}
        >
            <h3 className='header__title'>
                Dziuba.dev
            </h3>
        </motion.div>
        <nav className={burgerMenu ? "open" : ""}>
            <ul className='header__list'>
                {MENU.map(({name, link}) => (<Menu name={name} handlerMenu={handlerMenu} link={link} />))}
            </ul>
        </nav>
        <div onClick={handlerMenu} class="burger-menu-button">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ButtonTheme  />
    </header>
  )
}

export default Header