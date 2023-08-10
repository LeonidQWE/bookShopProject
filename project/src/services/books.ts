import { client } from "../utils/client";
import { newBooksEndPoint } from "../api";

interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

interface Books {
  total: string
  books: Book[]
}

export const requestNewBooks = async (): Promise<Books> => {
  const { data } = await client.get(newBooksEndPoint);
  console.log(data);
  return data;
}
