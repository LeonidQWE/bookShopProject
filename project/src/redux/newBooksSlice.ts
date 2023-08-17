import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestNewBooks, requestBookByIsbn13, BookResponse } from "../services/books"

interface NewBooksState {
  newBooks: BookResponse[]
  loading: boolean
  error: boolean
}

export const fetchNewBooks = createAsyncThunk<BookResponse[]>( 'newBooks/fetchNewBooks', async () => {
  const { books } = await requestNewBooks()
  const listByIsbn13 = books.map((book) => book.isbn13)
  const bookDetailsPromises = listByIsbn13.map((isbn13) => requestBookByIsbn13(isbn13))
  const bookDetails = await Promise.all(bookDetailsPromises)
  return bookDetails
})

const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    newBooks: [],
    loading: false,
    error: false
  } as NewBooksState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.loading = false
      state.newBooks = action.payload
    })
    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const newBooksReducer = newBooksSlice.reducer

