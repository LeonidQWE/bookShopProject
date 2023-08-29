import { client } from "../utils/client";
import { newBooksEndPoint, bookEndPoint } from "../api";
import { Books, BookResponse } from "../interfeces/books";

export const requestNewBooks = async (searchQuery?: string): Promise<Books> => {
  const { data } = await client.get(newBooksEndPoint, {
    params: {
      searchQuery: searchQuery || undefined
    }
  });
  return data as Books
}

export const requestBookByIsbn13 = async (isbn13: string): Promise<BookResponse> => {
  const { data } = await client.get(`${bookEndPoint}/${isbn13}`)
  return data as BookResponse
}
