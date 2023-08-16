import { NavLink } from "react-router-dom"

import './Link.css'

interface LinkProps {
  children: React.ReactNode | React.ReactNodeArray
  to: string
  className?: string
}

export function Link ({ children, to, className }: LinkProps): JSX.Element {
  return (
    <div className="link">
      <NavLink to={to} className={className}>{children}</NavLink>
    </div>
  )
}
