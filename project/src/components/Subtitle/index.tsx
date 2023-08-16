import './Subtitle.css'

interface SubtitleProps {
  children: React.ReactNode;
}

export function Subtitle ({ children }: SubtitleProps): JSX.Element {
  return (
    <h2 className="subtitle">{children}</h2>
  )
}
