import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks/inedx'
import { fetchNewBooks, setMyFavorites, setPage } from '../../redux/newBooksSlice'

import { Title } from '../../components/Title'
import { Container } from '../../components/Container'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/Error'
import { Book } from '../../components/Book'
import { Pagination } from '../../components/Pagination'
import { Button } from '../../components/Button'


import { toggleFavorite, getDataFromLocalStorage, togglePage } from '../../helpers'

import prevPage from '../../images/prevPag.svg'
import nextPage from '../../images/nextPag.svg'

export function Books(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { newBooks, loading, error, currentPage, limit } = useAppSelector(state => state.newBooks)
  const { pageNumber } = useParams()
  const pageNumberCount: number = Number(pageNumber)

  useEffect(() => {
    const dataFromLocalStorage = getDataFromLocalStorage('favoritesBooks')
    if (dataFromLocalStorage && dataFromLocalStorage.length) {
      dispatch(setMyFavorites(dataFromLocalStorage))
    } else {
      dispatch(fetchNewBooks(''))
    }

    setPage(pageNumberCount)
  }, [dispatch, pageNumberCount])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  const handleClickFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
    toggleFavorite(event, dispatch, newBooks)
  }

  function handleClickPage (event: React.MouseEvent<HTMLDivElement>) {
    togglePage(event, dispatch, newBooks, currentPage, limit, navigate)
  }

  function renderBooks(): JSX.Element[] {
    const startIndex = (currentPage - 1) * limit
    const endIndex = startIndex + limit

    return newBooks.slice(startIndex, endIndex).map((book) => (
      <Book key={book.isbn13} data={book} />
    ))
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
      <Container className="container_pagination" onClick={handleClickPage}>
        <Button variant="pagination" type="button" role="decrementPage">
          <img src={prevPage} alt="" />
          prev</Button>
        <Pagination books={newBooks} limit={limit} pageNumber={pageNumberCount}/>
        <Button variant="pagination" type="button" role="incrementPage">
          next
          <img src={nextPage} alt="" /></Button>
      </Container>
    </>
  )
}
