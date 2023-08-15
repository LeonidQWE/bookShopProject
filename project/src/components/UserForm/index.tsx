import { ReactNode } from 'react'
import './UserForm.css'

type UserFormProps = {
  children: ReactNode
}

export function UserForm ({ children }: UserFormProps): React.ReactElement {
  return (
    <form action="" className="user-form">
      {children}
    </form>
  )
}
