import { TitleProps } from "../../interfeces/Title"

export function Title ({ children }: TitleProps): JSX.Element {
  return (
    <h1 className="title">{children}</h1>
  )
}
