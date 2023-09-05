import { ButtonProps } from '../../types/interfeces/ButtonProps'

export function Button ({ children, type, variant, onClick, role }: ButtonProps): JSX.Element {
  const big = variant === 'big' ? 'button_big' : ''
  const small = variant === 'small' ? 'button_small' : ''
  const pagination = variant === 'pagination' ? 'button_pagination' : ''

  return (
    <button
      data-role={role}
      onClick={onClick}
      type={type}
      className={`button ${big || small || pagination}`}>{children}
    </button>
  )
}
