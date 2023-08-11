import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import './Layout.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { useEffect } from 'react'
import { RootState } from '../../redux/store'
import { Book } from '../Book'

export function Layout() {
  const dispatch = useDispatch<any>()  //TODO: fix any
  const { newBooks, loading, error } = useSelector((state: RootState) => state.newBooks);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  function renderBooks () {
    return newBooks.map((book) => <Book key={book.isbn13} data={book} />)
  }

  return (
    <div className="layout">
      <Header/>
      <Main>
        {newBooks.length && renderBooks()}
      </Main>
      <Footer/>
    </div>
  )
}
