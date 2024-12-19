import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({name, link, handlerMenu}) => {
  return (
    <li className='header__item'>
        <Link to={link} onClick={() => handlerMenu()} className='header__link'>{name}</Link>
    </li>
  )
}

export default Menu