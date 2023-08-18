import { ReactNode } from 'react'
import './Containre.css'

type ContainerProps = {
  variant: string
  children: ReactNode
}

export function Container({ variant, children }: ContainerProps): JSX.Element {
  const flex = variant === 'flex' ? 'container-flex' : ''
  const form = variant === 'form' ? 'container-form' : ''
  const formContent = variant === 'form__content' ? 'container-form__content' : ''

  return (
    <div className={flex || form || formContent}>
      {children}
    </div>
  )
}
