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
        <img src={favorite}></img>
        <img src={basket}></img>
        <img src={user}></img>
      </div>
    </header>
  )
}
