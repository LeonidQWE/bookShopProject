import { useAppSelector, useAppDispatch } from '../../hooks/inedx'
import { toggleFavorite } from '../../helpers'
import { NewBookResponse } from '../../interfeces/redux'

import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { Container } from '../../components/Container'

export function FavoriteBooks() {
  const dispatch = useAppDispatch()
  const { newBooks } = useAppSelector(state => state.newBooks)

  function renderMyFavoritesBooks() {
    const filteredBooks: NewBookResponse[] = newBooks.filter((book) => book.favorite)

    if (filteredBooks.length > 0) {
      return filteredBooks.map((book) => {
        if (book.favorite) {
          return <Book key={book.isbn13} data={book} />
        }
      })
    } else {
      return <h2>You have no favorite books</h2>
    }
  }

  function handleClickFavorite(event: React.MouseEvent<HTMLDivElement>) {
    toggleFavorite(event, dispatch, newBooks)
  }

  return (
    <>
      <Title>Your favorite Books</Title>
      <Container className="container_books" onClick={handleClickFavorite}>
        {newBooks.length && renderMyFavoritesBooks()}
      </Container>
    </>
  )
}
