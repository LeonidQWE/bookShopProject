import { FromInput } from "../../components/FormInput"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <>
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
      <Button type="submit">Sign In</Button>
    </>
  )
}
