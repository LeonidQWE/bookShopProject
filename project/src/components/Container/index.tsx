import { ContainerProps } from '../../interfeces/ContainerProps'

export function Container({ className, children, onClick }: ContainerProps): JSX.Element {
  return (
    <div className={`container ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
