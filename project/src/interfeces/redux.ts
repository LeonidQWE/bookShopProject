interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface BooksState {
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

export interface NewBookResponse extends BookResponse {
  favorite: boolean
  count: number
}

export interface NewBooksState {
  newBooks: NewBookResponse[]
  loading: boolean
  error: boolean
  searchQuery: string
}

export interface BookState {
  bookWithDetails: BookResponse
  loadingDetails: boolean
  errorDetails: boolean
}

export interface MyFavoriteState {
  favoritesNewBooks: NewBookResponse[]
}

export interface BasketBooksState {
  basketBooks: NewBookResponse[]
}
