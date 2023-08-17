import { useSelector } from "react-redux"
import { useEffect } from "react"


import { useAppDispatch } from "../../redux/store"
import { fetchNewBooks } from "../../redux/newBooksSlice"
import { RootState } from "../../redux/store"

import { Title } from "../../components/Title"
import { Container } from "../../components/Container"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Book } from "../../components/Book"

export function Books() {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error } = useSelector((state: RootState) => state.newBooks)

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  function renderBooks() {
    return newBooks.map((book) => <Book key={book.isbn13} data={book} />)
  }

  return (
    <>
      <Title>New Releases Books</Title>
      <Container className='container-flex'>
        {loading ? (
          <Loading />
        ) : (
          newBooks.length && renderBooks()
        )}
      </Container>
    </>
  )
}
