import { NavLink } from "react-router-dom"

import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

export function Header(): JSX.Element {
  return (
    <header className='header'>
      <NavLink to='/'>
        <span className='header__logo'>bookstore</span>
      </NavLink>
      <input className='header__search' placeholder='Search' type="text" />
      <div>
        <NavLink to='/favorite_books'><img src={favorite} alt=""></img></NavLink>
        <img src={basket} alt=""></img>
        <NavLink to='/user_page'><img src={user} alt=""></img></NavLink>
      </div>
    </header>
  )
}
