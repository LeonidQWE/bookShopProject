import { client } from '../utils/client'
import { newBooksEndPoint, bookEndPoint } from '../api'
import { BooksState, BookResponse } from '../types/interfeces/redux'

export const requestNewBooks = async (searchQuery?: string): Promise<BooksState> => {
  const { data } = await client.get(newBooksEndPoint, {
    params: {
      searchQuery: searchQuery || undefined
    }
  });
  return data
}

export const requestBookById = async (id: string): Promise<BookResponse> => {
  const { data } = await client.get(`${bookEndPoint}/${id}`)
  return data
}
