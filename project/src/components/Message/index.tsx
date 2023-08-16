import { ReactNode } from 'react'

import './Message.css'

interface MessageProps {
  children: ReactNode
}

export function Message ({children}: MessageProps): JSX.Element {
  return (
    <div className='message'>
      <p className='message__text'>{children}</p>
    </div>
  )
}
