import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/inedx"
import { fetchNewBooks } from "../../redux/newBooksSlice"
import { setMyFavorites } from "../../redux/myFavoriteSlice"

import { Title } from "../../components/Title"
import { Container } from "../../components/Container"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"
import { Book } from "../../components/Book"
import { toggleFavorite, unloadInformationFromLocalStorage, loadInformationInLocalStorage } from "../../helpers"

export function Books(): JSX.Element {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error } = useAppSelector(state => state.newBooks)
  const { favoritesNewBooks } = useAppSelector(state => state.myFavorites)

  useEffect(() => {
    dispatch(fetchNewBooks(''))
  }, [dispatch])

  useEffect(() => {
    const dataFromLocalStorage = unloadInformationFromLocalStorage("favoritesBooks")

    if (dataFromLocalStorage && dataFromLocalStorage.length) {
      dispatch(setMyFavorites(dataFromLocalStorage))
    } else {
      dispatch(setMyFavorites(newBooks))
    }
  }, [dispatch, newBooks])

  useEffect(() => {
    loadInformationInLocalStorage("favoritesBooks", favoritesNewBooks)
  }, [favoritesNewBooks])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  const handleClickFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
    toggleFavorite(event, dispatch, favoritesNewBooks)
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
