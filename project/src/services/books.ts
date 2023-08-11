import { client } from "../utils/client";
import { newBooksEndPoint } from "../api";

export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface Books {
  error: string
  total: string
  books: Book[]
}

export const requestNewBooks = async (): Promise<Books> => {
  const { data } = await client.get(newBooksEndPoint);
  return data as Books
}
