import { Outlet } from 'react-router-dom'

import { AuthTabs } from '../../components/AuthTabs'

export function Autorization () {
  return (
    <>
      <AuthTabs/>
      <Outlet/>
    </>
  )
}
