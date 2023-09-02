import { NewBookResponse } from "./redux"

export interface PaginationProps {
  books: NewBookResponse[]
  limit: number
}
