export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface Books {
  error: string
  total: string
  books: Book[]
}

export interface BookResponse {
  error: string
  title: string
  subtitle: string
  authors: string
  publisher: string
  isbn10: string
  isbn13: string
  pages: string
  year: string
  rating: string
  desc: string
  price: string
  image: string
  url: string
  pdf: object
  language: string
}

export interface BookResponseWithFavorite extends BookResponse {
  favorite: boolean
}

export interface BookProps {
  data: BookResponseWithFavorite
}

export interface BookInfoProps {
  data: BookResponse
}

export interface BookState {
  bookWithDetails: BookResponse
  loadingDetails: boolean
  errorDetails: boolean
}

export interface MyFavoriteState {
  favoritesNewBooks: BookResponseWithFavorite[]
}

export interface NewBooksState {
  newBooks: BookResponseWithFavorite[]
  loading: boolean
  error: boolean
}
