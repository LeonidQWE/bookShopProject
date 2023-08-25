import { ReactNode } from "react"

interface MessageProps {
  children: ReactNode
}

export function Message ({children}: MessageProps): JSX.Element {
  return (
    <div className="message">
      <p className="message__text">{children}</p>
    </div>
  )
}
