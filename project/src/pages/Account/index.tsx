import { useState } from 'react'

import { Title } from '../../components/Title'
import { Subtitle } from '../../components/Subtitle'
import { UserForm } from '../../components/UserForm'
import { FormInput } from '../../components/FormInput'
import { HomeLink } from '../../components/HomeLink'
import { Button } from '../../components/Button'

export function Account() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  function handleSubmitAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(`name: ${name}, email: ${email}, password: ${password}, newPassword: ${newPassword}, confirmNewPassword: ${confirmNewPassword}`)

    setName('')
    setEmail('')
    setPassword('')
    setNewPassword('')
    setConfirmNewPassword('')
  }

  return (
    <>
      <HomeLink />
      <Title>Account</Title>
      <Subtitle>people</Subtitle>
      <UserForm onSubmit={handleSubmitAccount}>
        <FormInput
          type="text"
          placeholder="Your name"
          id="accountName"
          htmlFor="accountName"
          value={name}
          onChange={(e) => setName(e.target.value)}>Name</FormInput>
        <FormInput
          type="email"
          placeholder="Your email"
          id="accountEmail"
          htmlFor="accountEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}>Email</FormInput>
        <Subtitle>password</Subtitle>
        <FormInput
          type="password"
          placeholder="Your password"
          id="accountPassword"
          htmlFor="accountPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}>Password</FormInput>
        <FormInput
          type="password"
          placeholder="Your new password"
          id="accountNewPassword"
          htmlFor="accountNewPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}>New password</FormInput>
        <FormInput
          type="password"
          placeholder="Confirm your new password"
          id="accountConfirmNewPassword"
          htmlFor="accountConfirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}>Confirm new password</FormInput>
        <Button type="submit" variant="small">Save</Button>
      </UserForm>
    </>
  )
}
