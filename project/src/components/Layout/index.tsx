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
import { Loading } from '../Loading'
import { Error } from '../Error'
import { Title } from '../Title'
import { Container } from '../Container'

export function Layout() {
  const dispatch = useDispatch<any>()  //TODO: fix any
  const { newBooks, loading, error } = useSelector((state: RootState) => state.newBooks)
  const [booksWithDetails, setBooksWithDetails] = useState([]);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  useEffect(() => {
    const fetchBooksDetails = async () => {
      setLoadingDetails(true)

      try {
        const bookDetailsPromises = newBooks.map((book) => dispatch(fetchBookByIsbn13(book.isbn13)))
        const bookDetails = await Promise.all(bookDetailsPromises)
        setBooksWithDetails(bookDetails)
      } catch (error) {
        alert(error)
      } finally {
        setLoadingDetails(false);
      }
    };

    fetchBooksDetails();
  }, [dispatch, newBooks]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error>Data upload interrupted! Try again!</Error>
  }

  function renderBooks() {
    return booksWithDetails.map((book) => <Book key={book.payload.isbn13} data={book.payload} />)
  }

  return (
    <div className="layout">
      <Header />
      <Main>
        <Title>New Releases Books</Title>
        <Container className='container-flex'>
          {loading || loadingDetails ? (
            <Loading />
          ) : (
            newBooks.length && renderBooks()
          )}
        </Container>
      </Main>
      <Footer />
    </div>
  )
}
