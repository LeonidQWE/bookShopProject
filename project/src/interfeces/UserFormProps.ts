import { ReactNode } from "react"

export interface UserFormProps {
  children: ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}
