import { ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode,
  type: "button" | "submit" | "reset" | undefined,
  variant: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  role?: string
}
