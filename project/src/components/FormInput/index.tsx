import { FormInputProps } from '../../interfeces/FormInputProps'

export function FormInput ({ children, type, placeholder, id, htmlFor, value, onChange }: FormInputProps): JSX.Element {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={htmlFor}>{children}</label>
      <input
        className="form-input__field"
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}/>
    </div>
  )
}
