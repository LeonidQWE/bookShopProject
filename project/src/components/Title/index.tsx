import { ReactNode } from 'react'
import './Title.css'

type TitleProps = {
  children: ReactNode;
}

export function Title ({ children }: TitleProps): JSX.Element {
  return (
    <h1 className='title'>{children}</h1>
  )
}
