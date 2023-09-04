import { useState } from 'react'

import { UserForm } from '../../components/UserForm'
import { Subtitle } from '../../components/Subtitle'
import { FormInput } from '../../components/FormInput'
import { Message } from '../../components/Message'

export function ResetPassword() {
  const [email, setEmail] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setShowMessage(true)

    console.log(`email: ${email}`)

    setTimeout(() => {
      window.location.href = '/account'
    }, 2000)

    setEmail('')
  }

  return (
    <UserForm onSubmit={handleSubmitEmail}>
      <Subtitle>Reset password</Subtitle>
      {showMessage
      &&
      <Message>You will receive an email example@gmail.com with a link to reset your password!</Message>}
      <FormInput
        type="email"
        placeholder="Your email"
        id="resetPasswordEmail"
        htmlFor="resetPasswordEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>Email</FormInput>
    </UserForm>
  )
}
