import { ReactNode } from "react"

export interface ContainerProps {
  className: string
  children: ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}
