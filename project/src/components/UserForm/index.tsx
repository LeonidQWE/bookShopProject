import { ReactNode } from "react"

type UserFormProps = {
  children: ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export function UserForm ({ children, onSubmit }: UserFormProps): React.ReactElement {
  return (
    <form action="" className="user-form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
