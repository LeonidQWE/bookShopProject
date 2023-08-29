import { SubtitleProps } from "../../interfeces/SubtitleProps"

export function Subtitle ({ children }: SubtitleProps): JSX.Element {
  return (
    <h2 className="subtitle">{children}</h2>
  )
}
