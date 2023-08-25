import { ReactNode } from 'react'

interface ErrorProps {
  children: ReactNode
}

export function Error ({children}: ErrorProps): JSX.Element {
  return (
    <div className="error">
      <h1 className="error__message">{children}</h1>
    </div>
  )
}
