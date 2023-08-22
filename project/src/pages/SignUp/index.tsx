import { FormInput } from "../../components/FormInput"
import { Button } from "../../components/Button"
import { UserForm } from "../../components/UserForm"

export function SignUp() {
  return (
    <UserForm>
      <FormInput
        type="text"
        placeholder="Your name"
        id="signUpName"
        htmlFor="signUpName">Name</FormInput>
      <FormInput
        type="email"
        placeholder="Your email"
        id="signUpEmail"
        htmlFor="signUpEmail">Email</FormInput>
      <FormInput
        type="password"
        placeholder="Your password"
        id="signUpPassword"
        htmlFor="signUpPassword">Password</FormInput>
      <FormInput
        type="password"
        placeholder="Confirm your password"
        id="signUpConfirmPassword"
        htmlFor="signUpConfirmPassword">Confirm password</FormInput>
      <Button variant="big" type="submit">Sign Up</Button>
    </UserForm>
  )
}
