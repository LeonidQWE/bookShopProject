import { ButtonProps } from "../../interfeces/ButtonProps"

export function Button ({ children, type, variant, onClick }: ButtonProps): JSX.Element {
  const big = variant === 'big' ? "button_big" : ""
  const small = variant === "small" ? 'button_small' : ""

  return (
    <button onClick={onClick} type={type} className={`button ${big || small}`}>{children}</button>
  )
}
