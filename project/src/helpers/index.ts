import { Dispatch } from "redux"
import { BookResponseWithFavorite } from "../interfeces/books"
import { setMyFavorites } from "../redux/myFavoriteSlice"

function toggleFavorite(event: React.MouseEvent<HTMLDivElement>, dispatch: Dispatch, favoritesBooks: BookResponseWithFavorite[]): void {
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

function unloadInformationFromLocalStorage(name: string): BookResponseWithFavorite[] {
  const dataFromLocalStorage: string | null = localStorage.getItem(name)
  const dataFromLocalStorageParsed: BookResponseWithFavorite[] = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : []

  if (dataFromLocalStorageParsed.length === 0) {
    return []
  } else {
    return dataFromLocalStorageParsed
  }
}

function loadInformationFromLocalStorage(name: string, data: BookResponseWithFavorite[]): void {
  localStorage.setItem(name, JSON.stringify(data))
}

export { toggleFavorite, unloadInformationFromLocalStorage, loadInformationFromLocalStorage }
