import { UserFormProps } from '../../interfeces/UserFormProps'

export function UserForm ({ children, onSubmit }: UserFormProps): React.ReactElement {
  return (
    <form action="" className="user-form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
