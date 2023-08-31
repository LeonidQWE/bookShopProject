import { useEffect } from "react"

import { fetchNewBooks } from "../../redux/newBooksSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/inedx"

import { Title } from "../../components/Title"
import { Container } from "../../components/Container"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Book } from "../../components/Book"

export const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error, searchQuery } = useAppSelector(state => state.newBooks)
  const foundedBooks = newBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    if (searchQuery !== '') {
      dispatch(fetchNewBooks(searchQuery))
    }
  }, [dispatch, searchQuery])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  function renderFoundedBooks(): JSX.Element[] {
    return foundedBooks.map((book) => <Book key={book.isbn13} data={book} />)
  }

  return (
    <>
      <Title>'{searchQuery}' SEARCH RESULTS</Title>
      <p>Found {foundedBooks.length} books</p>
      <Container className="container_books">
        {renderFoundedBooks()}
      </Container>
    </>
  )
}
