import { ReactNode } from "react"

type TitleProps = {
  children: ReactNode;
}

export function Title ({ children }: TitleProps): JSX.Element {
  return (
    <h1 className="title">{children}</h1>
  )
}
