import { Title } from "../../components/Title"
import { Link } from "../../components/Link"
import { Subtitle } from "../../components/Subtitle"
import { FromInput } from "../../components/FormInput"

import home from "../../images/home.svg"

export function Account() {
  return (
    <>
      <Link to="/" className="link__home">
        <img src={home} alt="" />
      </Link>
      <Title>Account</Title>
      <Subtitle>people</Subtitle>
      <FromInput
        type="text"
        placeholder="Your name"
        id="accountName"
        htmlFor="accountName">Name</FromInput>
      <FromInput
        type="email"
        placeholder="Your email"
        id="accountEmail"
        htmlFor="accountEmail">Email</FromInput>
      <Subtitle>password</Subtitle>
      <FromInput
        type="password"
        placeholder="Your password"
        id="accountPassword"
        htmlFor="accountPassword">Password</FromInput>
      <FromInput
        type="password"
        placeholder="Your new password"
        id="accountNewPassword"
        htmlFor="accountNewPassword">New password</FromInput>
      <FromInput
        type="password"
        placeholder="Confirm your new password"
        id="accountConfirmNewPassword"
        htmlFor="accountConfirmNewPassword">Confirm new password</FromInput>
    </>
  )
}