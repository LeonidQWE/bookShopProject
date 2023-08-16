import { useState } from "react"

import { UserForm } from "../../components/UserForm"
import { Subtitle } from "../../components/Subtitle"
import { FromInput } from "../../components/FormInput"
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
      <FromInput
        type="email"
        placeholder="Your email"
        id="resetPasswordEmail"
        htmlFor="resetPasswordEmail">Email</FromInput>
    </UserForm>
  )
}
