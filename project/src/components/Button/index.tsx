import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode,
  type: "button" | "submit" | "reset" | undefined,
  variant: string
}

export function Button ({ children, type, variant }: ButtonProps): JSX.Element {
  const big = variant === 'big' ? 'button__big' : ''
  const small = variant === 'small' ? 'button__small' : ''

  return (
    <button type={type} className={`button ${big || small}`}>{children}</button>
  )
}
