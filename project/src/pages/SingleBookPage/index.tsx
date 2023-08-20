import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/inedx"

import { fetchBookByIsbn13 } from "../../redux/bookSlice"

import { HomeLink } from "../../components/HomeLink"
import { BookInfo } from "../../components/BookInfo"
import { Loading } from "../../components/Loading"
import { Error } from "../../components/Error"

export function SingleBookPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const {bookWithDetails, loadingDetails, errorDetails} = useAppSelector(state => state.bookWithDetails)
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

  return (
    <>
      <HomeLink />
      <BookInfo data={bookWithDetails} />
    </>
  )
}
