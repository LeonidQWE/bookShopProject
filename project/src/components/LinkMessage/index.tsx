import { NavLink } from "react-router-dom"

import './LinkMessage.css'

interface LinkProps {
  children: React.ReactNode | React.ReactNodeArray
  to: string
  className?: string
}

export function LinkMessage ({ children, to, className }: LinkProps): JSX.Element {
  return (
    <div className="link-element">
      <NavLink to={to} className={className}>{children}</NavLink>
    </div>
  )
}
