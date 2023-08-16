import { FromInput } from "../../components/FormInput"
import { Button } from "../../components/Button"
import { UserForm } from "../../components/UserForm"

export function SignUp() {
  return (
    <UserForm>
      <FromInput
        type="text"
        placeholder="Your name"
        id="signUpName"
        htmlFor="signUpName">Name</FromInput>
      <FromInput
        type="email"
        placeholder="Your email"
        id="signUpEmail"
        htmlFor="signUpEmail">Email</FromInput>
      <FromInput
        type="password"
        placeholder="Your password"
        id="signUpPassword"
        htmlFor="signUpPassword">Password</FromInput>
      <FromInput
        type="password"
        placeholder="Confirm your password"
        id="signUpConfirmPassword"
        htmlFor="signUpConfirmPassword">Confirm password</FromInput>
      <Button type="submit">Sign Up</Button>
    </UserForm>
  )
}
