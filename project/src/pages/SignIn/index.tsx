import { FromInput } from "../../components/FormInput"
import { Button } from "../../components/Button"
import { Link } from "../../components/Link"
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
      <Link
        to="/user_page/reset_password"
        className="link__text">Forgot password ?</Link>
      <Button type="submit">Sign In</Button>
    </UserForm>
  )
}
