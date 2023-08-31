import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { requestNewBooks, requestBookByIsbn13 } from "../services/books"
import { NewBookResponse, NewBooksState } from "../interfeces/redux"

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
    newBooks: [],
    loading: false,
    error: false,
    searchQuery: '',
  } as NewBooksState,

  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.newBooks = []
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNewBooks.fulfilled, (state, action: PayloadAction<NewBookResponse[]>) => {
      state.loading = false
      state.newBooks = action.payload
    })
    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const { setSearchQuery } = newBooksSlice.actions
export const newBooksReducer = newBooksSlice.reducer

