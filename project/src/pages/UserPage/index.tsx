import { Outlet } from "react-router-dom"

import { Container } from "../../components/Container"
// import { UserForm } from "../../components/UserForm"

export function UserPage(): JSX.Element {
  return (
    <Container variant="form">
      <Container variant="form__content">
        <Outlet />
      </Container>
    </Container>
  )
}
