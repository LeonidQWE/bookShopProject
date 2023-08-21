import { useState } from "react"

import { UserForm } from "../../components/UserForm"
import { Subtitle } from "../../components/Subtitle"
import { FormInput } from "../../components/FormInput"
import { Message } from "../../components/Message"

export function ResetPassword() {
  const [showMessage, setShowMessage] = useState(false)

  function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setShowMessage(true)

    setTimeout(() => {
      window.location.href = '/account'
    }, 2000)
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
        htmlFor="resetPasswordEmail">Email</FormInput>
    </UserForm>
  )
}
