import { FromInput } from "../../components/FormInput"
import { Button } from "../../components/Button"
import { LinkMessage } from "../../components/LinkMessage"
import { UserForm } from "../../components/UserForm"

export function SignIn() {
  return (
    <UserForm>
      <FromInput
        type="email"
        placeholder="Your email"
        id="signInEmail"
        htmlFor="signInEmail">Email</FromInput>
      <FromInput
        type="password"
        placeholder="Your password"
        id="signInPassword"
        htmlFor="signInPassword">Password</FromInput>
      <LinkMessage
        to="/user_page/reset_password"
        className="link-element__text">Forgot password ?</LinkMessage>
      <Button type="submit">Sign In</Button>
    </UserForm>
  )
}
