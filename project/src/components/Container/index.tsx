import { ReactNode } from 'react'

type ContainerProps = {
  variant: string
  children: ReactNode
}

export function Container({ variant, children }: ContainerProps): JSX.Element {
  const books = variant === 'books' ? 'container-books' : ''
  const form = variant === 'form' ? 'container-form' : ''
  const formContent = variant === 'form__content' ? 'container-form__content' : ''
  const newsletter = variant === 'newsletter' ? 'container-newsletter' : ''
  const similar = variant === 'similar' ? 'container-similar' : ''

  return (
    <div className={books || form || formContent || newsletter || similar}>
      {children}
    </div>
  )
}
