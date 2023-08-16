import { Outlet } from "react-router-dom"

import { Container } from "../../components/Container"
// import { UserForm } from "../../components/UserForm"

export function UserPage(): JSX.Element {
  return (
    <Container className="container-form">
      <Container className="container-form__content">
        <Outlet />
      </Container>
    </Container>
  )
}
