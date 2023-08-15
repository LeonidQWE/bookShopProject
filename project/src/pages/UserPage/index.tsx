import { Outlet } from "react-router-dom"

import { Container } from "../../components/Container"
import { UserForm } from "../../components/UserForm"
import { AuthOptions } from "../../components/AuthOptions"

export function UserPage(): JSX.Element {
  return (
    <Container className="container-form">
      <UserForm>
        <AuthOptions/>
        <Outlet/>
      </UserForm>
    </Container>
  )
}
