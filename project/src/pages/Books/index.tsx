import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/inedx"
import { fetchNewBooks } from "../../redux/newBooksSlice"
import { BookResponseWithFavorite } from "../../services/books"

import { Title } from "../../components/Title"
import { Container } from "../../components/Container"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Book } from "../../components/Book"

export function Books(): JSX.Element {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error } = useAppSelector(state => state.newBooks)

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  const newBooksWithFavorite: BookResponseWithFavorite[] = newBooks.map((book) => {
    return { ...book, favorite: false }
  })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  function renderBooks() {
    return newBooksWithFavorite.map((book) => <Book key={book.isbn13} data={book} />)
  }

  return (
    <>
      <Title>New Releases Books</Title>
      <Container className="container_books">
        {loading ? (
          <Loading />
        ) : (
          newBooks.length && renderBooks()
        )}
      </Container>
    </>
  )
}
