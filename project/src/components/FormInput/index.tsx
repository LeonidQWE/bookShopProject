import { ReactNode } from 'react'

import './FormInput.css'

type FormInputProps = {
  children: ReactNode
  type: string
  placeholder: string
  id: string
  htmlFor: string
}

export function FormInput ({ children, type, placeholder, id, htmlFor }: FormInputProps): JSX.Element {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={htmlFor}>{children}</label>
      <input className="form-input__field" type={type} placeholder={placeholder} id={id} />
    </div>
  )
}
