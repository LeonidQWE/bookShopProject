import { Title } from "../../components/Title"
import { Subtitle } from "../../components/Subtitle"
import { FormInput } from "../../components/FormInput"
import { HomeLink } from "../../components/HomeLink"

export function Account() {
  return (
    <>
      <HomeLink />
      <Title>Account</Title>
      <Subtitle>people</Subtitle>
      <FormInput
        type="text"
        placeholder="Your name"
        id="accountName"
        htmlFor="accountName">Name</FormInput>
      <FormInput
        type="email"
        placeholder="Your email"
        id="accountEmail"
        htmlFor="accountEmail">Email</FormInput>
      <Subtitle>password</Subtitle>
      <FormInput
        type="password"
        placeholder="Your password"
        id="accountPassword"
        htmlFor="accountPassword">Password</FormInput>
      <FormInput
        type="password"
        placeholder="Your new password"
        id="accountNewPassword"
        htmlFor="accountNewPassword">New password</FormInput>
      <FormInput
        type="password"
        placeholder="Confirm your new password"
        id="accountConfirmNewPassword"
        htmlFor="accountConfirmNewPassword">Confirm new password</FormInput>
    </>
  )
}
