import { NavLink } from "react-router-dom"

import './AuthOptions.css'

export function AuthOptions() {
  return (
    <div className="auth-options">
      <NavLink to="/user_page/sign_in" className="auth-options__variant">sign in</NavLink>
      <NavLink to="/user_page/sign_up" className="auth-options__variant">sign up</NavLink>
    </div>
  )
}
