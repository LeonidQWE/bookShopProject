import { Link } from "react-router-dom"

import home from '../../images/home.svg'

export function HomeLink(): JSX.Element {
  return (
    <Link to="/" className="link-element__home">
      <img src={home} alt="" />
    </Link>
  )
}
