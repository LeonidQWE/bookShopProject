import { useEffect } from "react"

import { useAppSelector, useAppDispatch } from "../../hooks/inedx"
import { setMyFavorites } from "../../redux/myFavoriteSlice"

import { Title } from "../../components/Title"
import { Book } from "../../components/Book"
import { Container } from "../../components/Container"

export function FavoriteBooks () {
  const dispatch = useAppDispatch()
  const { favoritesNewBooks } = useAppSelector(state => state.myFavorites)


  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("favoritesBooks")

    if (dataFromLocalStorage && dataFromLocalStorage !== '[]') {
      dispatch(setMyFavorites(JSON.parse(dataFromLocalStorage)))
    }
  }, [dispatch])

  function renderMyFavorites () {
     return favoritesNewBooks.map((book) => {
      if (book.favorite) {
        return <Book key={book.isbn13} data={book} />
      }
    })
  }

  return (
    <>
      <Title>Your favorite Books</Title>
      <Container className="container_books">
        {favoritesNewBooks.length && renderMyFavorites()}
      </Container>
    </>
  )
}
