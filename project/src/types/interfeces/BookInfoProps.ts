import { BookResponse } from './redux'

export interface BookInfoProps {
  data: BookResponse
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
