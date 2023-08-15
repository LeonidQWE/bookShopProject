import { FromInput } from "../../components/FormInput"

export function SignUp() {
  return (
    <>
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
    </>
  )
}
