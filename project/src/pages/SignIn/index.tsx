import { useState } from 'react'

import { FormInput } from '../../components/FormInput'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'
import { UserForm } from '../../components/UserForm'

export function SignIn(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmitSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(`email: ${email}, password: ${password}`)

    setEmail('')
    setPassword('')
  }

  return (
    <UserForm onSubmit={handleSubmitSignIn}>
      <FormInput
        type="email"
        placeholder="Your email"
        id="signInEmail"
        htmlFor="signInEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>Email</FormInput>
      <FormInput
        type="password"
        placeholder="Your password"
        id="signInPassword"
        htmlFor="signInPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}>Password</FormInput>
      <Link
        to="/user_page/reset_password"
        className="link-element__text">Forgot password ?</Link>
      <Button variant="big" type="submit">Sign In</Button>
    </UserForm>
  )
}
