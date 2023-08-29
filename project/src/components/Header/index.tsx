import { NavLink } from "react-router-dom"

import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

export function Header(): JSX.Element {
  function getLinkClass({ isActive }: { isActive: boolean }): string {
    return isActive ? 'nav-link active' : 'nav-link'
  }

  return (
    <header className="header">
      <NavLink to="/">
        <span className="header__logo">bookstore</span>
      </NavLink>
      <input className="header__search" placeholder="Search" type="text" />
      <div className="header__navbar">
        <NavLink className={getLinkClass} to="/favorite_books">
          <img src={favorite} alt=""></img>
          <div className="header__active-marker"></div>
        </NavLink>
        <img src={basket} alt=""></img>
        <NavLink className={getLinkClass} to="/user_page">
          <img src={user} alt=""></img>
          <div className="header__active-marker"></div>
        </NavLink>
      </div>
    </header>
  )
}
