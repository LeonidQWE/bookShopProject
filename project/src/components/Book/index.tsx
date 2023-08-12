// NEED TO FIX:
// Выводит слишком много книг (около 450)
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBookByIsbn13 } from '../../redux/bookSlice'
import { RootState } from '../../redux/store'
import './Book.css'

export function Book({ data }: any) {  //TODO: fix any
  const dispatch = useDispatch<any>()
  const { book, loading, error } = useSelector((state: RootState) => state.book)

  useEffect(() => {
    dispatch(fetchBookByIsbn13(data.isbn13))
  }, [dispatch])

  // console.log(book)

  return (
    <div className="book">
      <img className="book__image" src={data.image} alt="" />
      <h3 className="book__title">{data.title}</h3>
      <div className="book__info">
        <span className="book__author">{`${book.authors}, ${book.publisher} ${book.year}`}</span>
      </div>
      <div className="book__footer">
        <span className="book__price">{data.price}</span>
        <img className="book__rating" src="#" alt="" />
      </div>
    </div>
  )
}
