import { Outlet } from 'react-router-dom'

import { Container } from '../../components/Container'

export function UserPage(): JSX.Element {
  return (
    <Container className="container_form">
      <Container className="container_form-content">
        <Outlet />
      </Container>
    </Container>
  )
}
