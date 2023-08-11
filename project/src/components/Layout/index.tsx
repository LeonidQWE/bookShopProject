import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'
import './Layout.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { useEffect } from 'react'
import { RootState } from '../../redux/store'

export function Layout() {
  const dispatch = useDispatch<any>()  //TODO: fix any
  const { newBooks, loading, error } = useSelector((state: RootState) => state.newBooks);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);


  return (
    <div className="layout">
      <Header/>
      <Main>

      </Main>
      <Footer/>
    </div>
  )
}
