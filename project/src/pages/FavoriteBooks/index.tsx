import { useEffect } from "react"
import { Title } from "../../components/Title"
import { useAppSelector, useAppDispatch } from "../../hooks/inedx"
import { Book } from "../../components/Book"
import { Container } from "../../components/Container"
import { setMyFavorites } from "../../redux/myFavoriteSlice"

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
