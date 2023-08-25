import { ReactNode } from "react"

type ContainerProps = {
  className: string
  children: ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export function Container({ className, children, onClick }: ContainerProps): JSX.Element {
  return (
    <div className={`container ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
