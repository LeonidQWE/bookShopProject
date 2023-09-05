import { ContainerProps } from '../../types/interfeces/ContainerProps'

export function Container({ className, children, onClick }: ContainerProps): JSX.Element {
  return (
    <div className={`container ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
