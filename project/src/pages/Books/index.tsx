import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/inedx"
import { fetchNewBooks, setMyFavorites } from "../../redux/newBooksSlice"

import { Title } from "../../components/Title"
import { Container } from "../../components/Container"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Book } from "../../components/Book"
import { toggleFavorite, getDataFromLocalStorage } from "../../helpers"

export function Books(): JSX.Element {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error } = useAppSelector(state => state.newBooks)

  useEffect(() => {
    const dataFromLocalStorage = getDataFromLocalStorage('favoritesBooks')
    if (dataFromLocalStorage && dataFromLocalStorage.length) {
      dispatch(setMyFavorites(dataFromLocalStorage))
    } else {
      dispatch(fetchNewBooks(''))
    }
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  const handleClickFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
    toggleFavorite(event, dispatch, newBooks)
  }

  function renderBooks(): JSX.Element[] {
    return newBooks.map((book) => <Book key={book.isbn13} data={book} />)
  }

  return (
    <>
      <Title>New Releases Books</Title>
      <Container className="container_books" onClick={handleClickFavorite}>
        {loading ? (
          <Loading />
        ) : (
          renderBooks()
        )}
      </Container>
    </>
  )
}
