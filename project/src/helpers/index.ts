import { Dispatch } from "redux"
import { setMyFavorites } from "../redux/newBooksSlice"
import { setBasketBooks } from "../redux/cartSlice"
import { NewBookResponse } from "../interfeces/redux"

// Hendlers
function toggleFavorite(event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, favoritesBooks: NewBookResponse[]): void {
  const target = event.target as HTMLElement
  const { role, isbn13 } = target.dataset

  if (role === 'favorite') {
    const book = favoritesBooks.find((book) => book.isbn13 === isbn13)

    if (book) {
      const updateBook = { ...book, favorite: !book.favorite }
      dispatch(setMyFavorites([...favoritesBooks, updateBook]))
    }
  }
}

function updateBasketBooks(event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, basketBooks: NewBookResponse[]): void {
  const target = event.target as HTMLElement
  const { role, isbn13 } = target.dataset

  if (role === 'decrement') {
    const updatedBasketBooks = doDecrementBasketBook(basketBooks, isbn13)
    dispatch(setBasketBooks(updatedBasketBooks))
  }

  if (role === 'increment') {
    const updatedBasketBooks = doIncrementBasketBook(basketBooks, isbn13)
    dispatch(setBasketBooks(updatedBasketBooks))
  }

  if (role === 'delete') {
    const updatedBasketBooks = deleteBasketBook(basketBooks, isbn13)
    dispatch(setBasketBooks(updatedBasketBooks))
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
export { toggleFavorite, getDataFromLocalStorage, setDataInLocalStorage, updateBasketBooks }
