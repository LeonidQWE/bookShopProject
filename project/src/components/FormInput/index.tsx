import './FormInput.css'

type FromInputProps = {
  children: string
  type: string
  placeholder: string
  id: string
  htmlFor: string
}

export function FromInput ({ children, type, placeholder, id, htmlFor }: FromInputProps): JSX.Element {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={htmlFor}>{children}</label>
      <input className="form-input__field" type={type} placeholder={placeholder} id={id} />
    </div>
  )
}
