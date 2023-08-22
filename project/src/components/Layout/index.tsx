import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'

export function Layout(): JSX.Element {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}
