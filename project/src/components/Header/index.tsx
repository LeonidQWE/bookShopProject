import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../hooks/inedx'
import { setSearchQuery } from '../../redux/newBooksSlice'
import { setPage } from '../../redux/newBooksSlice'

import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

export function Header(): JSX.Element {
  const [query, setQuery] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function getLinkClass({ isActive }: { isActive: boolean }): string {
    return isActive ? 'nav-link active' : 'nav-link'
  }

  function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    dispatch(setSearchQuery(query))
    navigate(`/search/${query}`)
    setQuery('')
  }

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleClickLogo() {
    dispatch(setPage(1))
  }

  return (
    <header className="header">
      <NavLink to="/" onClick={handleClickLogo}>
        <span className="header__logo">bookstore</span>
      </NavLink>
      <form action="" onSubmit={handleSubmitSearch}>
        <input className="header__search" placeholder="Search" type="text" value={query} onChange={handleChangeSearch}/>
      </form>
      <div className="header__navbar">
        <NavLink className={getLinkClass} to="/favorite_books">
          <img src={favorite} alt=""></img>
          <div className="header__active-marker"></div>
        </NavLink>
        <NavLink className={getLinkClass} to="/basket">
          <img src={basket} alt=""></img>
          <div className="header__active-marker"></div>
        </NavLink>
        <NavLink className={getLinkClass} to="/user_page">
          <img src={user} alt=""></img>
          <div className="header__active-marker"></div>
        </NavLink>
      </div>
    </header>
  )
}
