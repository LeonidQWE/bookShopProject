import { NavLink } from 'react-router-dom'
import { LinkMessageProps } from '../../interfeces/LinkMessageProps'

export function LinkMessage ({ children, to, className }: LinkMessageProps): JSX.Element {
  return (
    <div className="link-element">
      <NavLink to={to} className={className}>{children}</NavLink>
    </div>
  )
}
