import { Outlet } from 'react-router-dom'

import { AuthOptions } from '../../components/AuthOptions'

export function Autorization () {
  return (
    <>
      <AuthOptions/>
      <Outlet/>
    </>
  )
}
