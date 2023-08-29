import { ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode,
  type: "button" | "submit" | "reset" | undefined,
  variant: string
}
