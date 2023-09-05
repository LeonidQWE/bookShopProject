import { MainProps } from '../../types/interfeces/MainProps'

export function Main (props: MainProps): JSX.Element {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}
