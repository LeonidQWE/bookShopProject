import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/inedx"
import { fetchNewBooks } from "../../redux/newBooksSlice"
import { setMyFavorites } from "../../redux/myFavoriteSlice"

import { Title } from "../../components/Title"
import { Container } from "../../components/Container"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Book } from "../../components/Book"

export function Books(): JSX.Element {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error } = useAppSelector(state => state.newBooks)
  const { favoritesNewBooks } = useAppSelector(state => state.myFavorites)

  useEffect(() => {
    dispatch(fetchNewBooks())
  }, [dispatch])

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("favoritesBooks")

    if (dataFromLocalStorage && dataFromLocalStorage !== '[]') {
      dispatch(setMyFavorites(JSON.parse(dataFromLocalStorage)))
    } else {
      dispatch(setMyFavorites(newBooks))
    }
  }, [dispatch, newBooks])

  useEffect(() => {
    const saveBooksToLocalStorage = () => {
      localStorage.setItem("favoritesBooks", JSON.stringify(favoritesNewBooks))
    }
    saveBooksToLocalStorage()
  }, [favoritesNewBooks])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  const handleClickFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    const { role, isbn13 } = target.dataset

    if (role === 'favorite') {
      const book = favoritesNewBooks.find((book) => book.isbn13 === isbn13)

      if (book) {
        const updateBook = { ...book, favorite: !book.favorite }
        dispatch(setMyFavorites([...favoritesNewBooks, updateBook]))

      }
    }
  }

  function renderBooks(): JSX.Element[] {
    return favoritesNewBooks.map((book) => <Book key={book.isbn13} data={book} />)
  }

  return (
    <>
      <Title>New Releases Books</Title>
      <Container className="container_books" onClick={handleClickFavorite}>
        {loading ? (
          <Loading />
        ) : (
          favoritesNewBooks.length && renderBooks()
        )}
      </Container>
    </>
  )
}
