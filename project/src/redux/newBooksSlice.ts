import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestNewBooks, requestBookByIsbn13 } from '../services/books'
import { NewBookResponse, NewBooksState } from '../types/interfeces/redux'
import { setDataInLocalStorage, getDataFromLocalStorage } from '../helpers'

export const fetchNewBooks = createAsyncThunk( 'newBooks/fetchNewBooks', async (searchQuery?: string) => {
  const { books } = await requestNewBooks(searchQuery)
  const listByIsbn13 = books.map((book) => book.isbn13)
  const bookDetailsPromises = listByIsbn13.map((isbn13) => requestBookByIsbn13(isbn13))
  const bookDetails = await Promise.all(bookDetailsPromises)
  const bookDetailsWithFavorite = bookDetails.map((book) => ({ ...book, favorite: false, count: 0 }))
  return bookDetailsWithFavorite as NewBookResponse[]
})

const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    newBooks: getDataFromLocalStorage('favoritesBooks'),
    loading: false,
    error: false,
    searchQuery: '',
    currentPage: 1,
    limit: 6,
  } as NewBooksState,

  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.newBooks = []
    },

    setMyFavorites: (state, action: PayloadAction<NewBookResponse[]>) => {
      const updatedBooks = action.payload
      updatedBooks.forEach((updatedBook) => {
        const index = state.newBooks.findIndex((book) => book.isbn13 === updatedBook.isbn13);

        if (index !== -1) {
          state.newBooks[index] = updatedBook
        } else {
          state.newBooks.push(updatedBook)
        }
        setDataInLocalStorage('favoritesBooks', state.newBooks)
      })
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNewBooks.fulfilled, (state, action: PayloadAction<NewBookResponse[]>) => {
      state.loading = false
      state.newBooks = action.payload
      setDataInLocalStorage('favoritesBooks', state.newBooks)
    })
    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const { setSearchQuery, setMyFavorites, setPage } = newBooksSlice.actions
export const newBooksReducer = newBooksSlice.reducer

