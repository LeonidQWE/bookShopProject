import { Container } from "../../components/Container"
import { UserForm } from "../../components/UserForm"
import { AuthOptions } from "../../components/AuthOptions"

export function UserPage() {
  return (
    <Container className="container-form">
      <UserForm>
        <AuthOptions/>

      </UserForm>
    </Container>
  )
}
