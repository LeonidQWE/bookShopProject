import { ReactNode } from 'react'

type ContainerProps = {
  className: string
  children: ReactNode
}

export function Container({ className, children }: ContainerProps): JSX.Element {
  // const newsletter = variant === 'newsletter' ? 'container-newsletter' : ''
  // const similar = variant === 'similar' ? 'container-similar' : ''

  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}
