import { client } from '../utils/client'
import { newBooksEndPoint, bookEndPoint } from '../api'
import { BooksState, BookResponse } from '../interfeces/redux'

export const requestNewBooks = async (searchQuery?: string): Promise<BooksState> => {
  const { data } = await client.get(newBooksEndPoint, {
    params: {
      searchQuery: searchQuery || undefined
    }
  });
  return data
}

export const requestBookByIsbn13 = async (isbn13: string): Promise<BookResponse> => {
  const { data } = await client.get(`${bookEndPoint}/${isbn13}`)
  return data
}
