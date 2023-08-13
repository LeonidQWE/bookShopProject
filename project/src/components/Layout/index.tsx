import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import './Layout.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { fetchBookByIsbn13 } from '../../redux/bookSlice'
import { useEffect, useState } from 'react'
import { RootState } from '../../redux/store'
import { Book } from '../Book'

export function Layout() {
  const dispatch = useDispatch<any>()  //TODO: fix any
  const { newBooks, loading, error } = useSelector((state: RootState) => state.newBooks)
  // const { bookWithDetails, loadingDetails, errorDetails } = useSelector((state: RootState) => state.bookWithDetails)
  const [booksWithDetails, setBooksWithDetails] = useState<Book[]>([]);


  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  useEffect(() => {
    const fetchBooksDetails = async () => {
      const bookDetails = await Promise.all(
        newBooks.map((book) => dispatch(fetchBookByIsbn13(book.isbn13)))
      );
      setBooksWithDetails(bookDetails);
    };

    fetchBooksDetails();
  }, [dispatch, newBooks]);

  booksWithDetails.map((book) => console.log(book.payload))

  function renderBooks () {
    return booksWithDetails.map((book) =>  <Book key={book.payload.isbn13} data={book.payload} />)
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
