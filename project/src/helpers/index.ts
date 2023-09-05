import { Dispatch } from 'redux'
import { setMyFavorites } from '../redux/newBooksSlice'
import { setBasketBooks } from '../redux/cartSlice'
import { setPage } from '../redux/newBooksSlice'
import { NewBookResponse } from '../types/interfeces/redux'

// Hendlers
function toggleFavorite(event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, favoritesBooks: NewBookResponse[]): void {
  const target = event.target as HTMLElement
  const { role, id } = target.dataset

  if (role === 'favorite') {
    const book = favoritesBooks.find((book) => book.isbn13 === id)

    if (book) {
      const updateBook = { ...book, favorite: !book.favorite }
      dispatch(setMyFavorites([...favoritesBooks, updateBook]))
    }
  }
}

function updateBasketBooks(event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, basketBooks: NewBookResponse[]): void {
  const target = event.target as HTMLElement
  const { role, id } = target.dataset

  if (role === 'decrement') {
    const updatedBasketBooks = doDecrementBasketBook(basketBooks, id)
    dispatch(setBasketBooks(updatedBasketBooks))
  }

  if (role === 'increment') {
    const updatedBasketBooks = doIncrementBasketBook(basketBooks, id)
    dispatch(setBasketBooks(updatedBasketBooks))
  }

  if (role === 'delete') {
    const updatedBasketBooks = deleteBasketBook(basketBooks, id)
    dispatch(setBasketBooks(updatedBasketBooks))
  }
}

function togglePage (event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, newBooks: NewBookResponse[], currentPage: number, limit: number, navigate: (url: string) => void): void {
  const target = event.target as HTMLElement
    const { page, role } = target.dataset as { page: string, role: string }

    if (role === 'getPage') {
      dispatch(setPage(Number(page)))
    }

    if (role === 'decrementPage') {
      if (currentPage > 1) {
        dispatch(setPage(currentPage - 1))
        navigate(`/new_books/pages/${currentPage - 1}`)
      } else return
    }

    if (role === 'incrementPage') {
      if ( currentPage < Math.ceil(newBooks.length / limit)) {
        dispatch(setPage(currentPage + 1))
        navigate(`/new_books/pages/${currentPage + 1}`)
      }
    }
}

// Local Storage
function getDataFromLocalStorage(name: string): NewBookResponse[] {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(name) as string)
  if (!dataFromLocalStorage) return []
  return dataFromLocalStorage
}

function setDataInLocalStorage(name: string, data: NewBookResponse[]): void {
  localStorage.setItem(name, JSON.stringify(data))
}


// Helpers functions
function doDecrementBasketBook(basketBooks: NewBookResponse[], isbn13: string | undefined): NewBookResponse[] {
  const updateBasketBooks = basketBooks
    .map((book: NewBookResponse) => {
      if (book.isbn13 === isbn13) {
        const newCount = book.count - 1

        if (newCount >= 1) {
          return { ...book, count: newCount }
        } else {
          return { ...book, count: 0 }
        }
      }
      return book
    })
    .filter((book: NewBookResponse) => book.count > 0)

  return updateBasketBooks
}

function doIncrementBasketBook(basketBooks: NewBookResponse[], isbn13: string | undefined): NewBookResponse[] {
  const updateBasketBooks = basketBooks.map((book) => {
    if (book.isbn13 === isbn13) {
      return { ...book, count: book.count + 1 }
    }
    return book
  })

  return updateBasketBooks
}

function deleteBasketBook ( basketBooks: NewBookResponse[], isbn13: string | undefined): NewBookResponse[] {
  const updateBasketBooks = basketBooks.filter((book) => book.isbn13 !== isbn13)
  return updateBasketBooks
}

//Export
export { toggleFavorite, getDataFromLocalStorage, setDataInLocalStorage, updateBasketBooks, togglePage }
