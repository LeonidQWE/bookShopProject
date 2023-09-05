import { TitleProps } from '../../types/interfeces/Title'

export function Title ({ children }: TitleProps): JSX.Element {
  return (
    <h1 className="title">{children}</h1>
  )
}
