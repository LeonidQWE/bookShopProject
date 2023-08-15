import { Outlet } from 'react-router-dom'
import { ReactElement } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'

import './Layout.css'

export function Layout(): ReactElement {
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
