import { useEffect } from "react"

import { useAppSelector, useAppDispatch } from "../../hooks/inedx"
import { setMyFavorites } from "../../redux/myFavoriteSlice"
import { toggleFavorite, unloadInformationFromLocalStorage, loadInformationInLocalStorage } from "../../helpers"
import { BookResponseWithFavorite } from "../../interfeces/books"

import { Title } from "../../components/Title"
import { Book } from "../../components/Book"
import { Container } from "../../components/Container"

export function FavoriteBooks() {
  const dispatch = useAppDispatch()
  const { favoritesNewBooks } = useAppSelector(state => state.myFavorites)

  useEffect(() => {
    const dataFromLocalStorage = unloadInformationFromLocalStorage("favoritesBooks")

    if (dataFromLocalStorage && dataFromLocalStorage.length) {
      dispatch(setMyFavorites(dataFromLocalStorage))
    }
  }, [dispatch])

  useEffect(() => {
    loadInformationInLocalStorage("favoritesBooks", favoritesNewBooks)
  }, [favoritesNewBooks])

  function renderMyFavoritesBooks() {
    const filteredBooks: BookResponseWithFavorite[] = favoritesNewBooks.filter((book) => book.favorite)

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
    toggleFavorite(event, dispatch, favoritesNewBooks)
  }

  return (
    <>
      <Title>Your favorite Books</Title>
      <Container className="container_books" onClick={handleClickFavorite}>
        {favoritesNewBooks.length && renderMyFavoritesBooks()}
      </Container>
    </>
  )
}
