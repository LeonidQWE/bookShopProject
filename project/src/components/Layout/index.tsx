import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import './Layout.css'

export function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
