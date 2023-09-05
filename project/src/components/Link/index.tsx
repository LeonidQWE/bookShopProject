import { NavLink } from 'react-router-dom'
import { LinkProps } from '../../types/interfeces/LinkProps'

export function Link ({ children, to, className }: LinkProps): JSX.Element {
  return (
    <div className="link-element">
      <NavLink to={to} className={className}>{children}</NavLink>
    </div>
  )
}
