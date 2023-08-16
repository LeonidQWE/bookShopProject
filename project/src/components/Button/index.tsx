import { ReactNode } from 'react'

import './Button.css'

type ButtonProps = {
  children: ReactNode,
  type: "button" | "submit" | "reset" | undefined
}

export function Button ({ children, type }: ButtonProps): JSX.Element {
  return (
    <button type={type} className="button">{children}</button>
  )
}
