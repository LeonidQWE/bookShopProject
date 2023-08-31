import { Dispatch } from "redux"
import { setMyFavorites } from "../redux/myFavoriteSlice"
import { NewBookResponse } from "../interfeces/redux"

// Helpers
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

// Local Storage
function unloadInformationFromLocalStorage(name: string): NewBookResponse[] {
  const dataFromLocalStorage: string | null = localStorage.getItem(name)
  const dataFromLocalStorageParsed: NewBookResponse[] = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : []

  if (dataFromLocalStorageParsed.length === 0) {
    return []
  } else {
    return dataFromLocalStorageParsed
  }
}

function loadInformationInLocalStorage(name: string, data: NewBookResponse[]): void {
  localStorage.setItem(name, JSON.stringify(data))
}

export { toggleFavorite, unloadInformationFromLocalStorage, loadInformationInLocalStorage }
