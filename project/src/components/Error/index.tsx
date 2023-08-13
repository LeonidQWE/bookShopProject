import './Error.css'

export function Error ({children}) {
  return (
    <div className='error'>
      <h1 className='error__message'>{children}</h1>
    </div>
  )
}
