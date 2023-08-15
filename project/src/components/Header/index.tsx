import { NavLink } from "react-router-dom"

import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

import './Header.css'

export function Header() {
  return (
    <header className='header'>
      <span className='header__logo'>bookstore</span>
      <input className='header__search' placeholder='Search' type="text" />
      <div>
        <NavLink to='/bookmarks'><img src={favorite}></img></NavLink>
        <img src={basket}></img>
        <NavLink to='/user_page'><img src={user}></img></NavLink>
      </div>
    </header>
  )
}
