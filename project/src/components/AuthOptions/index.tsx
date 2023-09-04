import { NavLink } from 'react-router-dom'

export function AuthOptions(): JSX.Element {
  return (
    <div className="auth-options">
      <NavLink to="/user_page/autorization/sign_in" className="auth-options__variant">sign in</NavLink>
      <NavLink to="/user_page/autorization/sign_up" className="auth-options__variant">sign up</NavLink>
    </div>
  )
}
