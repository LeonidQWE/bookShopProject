import { useState } from "react"

import { FormInput } from "../../components/FormInput"
import { Button } from "../../components/Button"
import { UserForm } from "../../components/UserForm"

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmitSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(`name: ${name}, email: ${email}, password: ${password}, confirmPassword: ${confirmPassword}`)

    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <UserForm onSubmit={handleSubmitSignUp}>
      <FormInput
        type="text"
        placeholder="Your name"
        id="signUpName"
        htmlFor="signUpName"
        value={name}
        onChange={(e) => setName(e.target.value)}>Name</FormInput>
      <FormInput
        type="email"
        placeholder="Your email"
        id="signUpEmail"
        htmlFor="signUpEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>Email</FormInput>
      <FormInput
        type="password"
        placeholder="Your password"
        id="signUpPassword"
        htmlFor="signUpPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}>Password</FormInput>
      <FormInput
        type="password"
        placeholder="Confirm your password"
        id="signUpConfirmPassword"
        htmlFor="signUpConfirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}>Confirm password</FormInput>
      <Button variant="big" type="submit">Sign Up</Button>
    </UserForm>
  )
}
