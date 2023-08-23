import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../hooks/inedx"
import { fetchBookByIsbn13 } from "../../redux/bookSlice"

import { HomeLink } from "../../components/HomeLink"
import { BookInfo } from "../../components/BookInfo"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Container } from "../../components/Container"
import { Subtitle } from "../../components/Subtitle"
import { UserForm } from "../../components/UserForm"
import { FormInput } from "../../components/FormInput"
import { Button } from "../../components/Button"
import { Book } from "../../components/Book"

export function SingleBookPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const {bookWithDetails, loadingDetails, errorDetails} = useAppSelector(state => state.bookWithDetails)
  const { newBooks } = useAppSelector(state => state.newBooks)
  const isbn13 = useParams()
  const bookId: string | undefined = isbn13.isbn13

  useEffect(() => {
    if (bookId) {
      dispatch(fetchBookByIsbn13(bookId))
    }
  }, [dispatch, bookId])

  if (loadingDetails) {
    return <Loading />
  }

  if (errorDetails) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  function renderSimilarBooks() {
    const minRating: string = '4'
    const similarBooks = newBooks.filter((book) => book.rating > minRating)
    if (similarBooks.length === 3) {
      return similarBooks.map((book) => <Book key={book.isbn13} data={book} />)
    }

  }

  return (
    <>
      <HomeLink />
      <BookInfo data={bookWithDetails} />

      <Container className="container_newsletter">
        <Subtitle>Subscribe to Newsletter</Subtitle>
        <UserForm>
          <FormInput
            type="email"
            placeholder="Your email"
            id="newsletterEmail"
            htmlFor="newsletterEmail">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</FormInput>
          <Button variant="small" type="submit">Subscribe</Button>
        </UserForm>
      </Container>

      <Container className="container_similar">
        <Subtitle>Similar books</Subtitle>
        <Container className="container_books">
         {renderSimilarBooks()}
        </Container>
      </Container>
    </>
  )
}
