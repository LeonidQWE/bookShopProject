import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { requestBookByIsbn13, BookResponse } from "../services/books";

interface BookState {
  book: BookResponse
  loading: boolean
  error: boolean
}

export const fetchBookByIsbn13 = createAsyncThunk('book/fetchBookByIsbn13', async (isbn13: string) => {
  const book = await requestBookByIsbn13(isbn13)
  return book as BookResponse
})

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: {},
    loading: false,
    error: false
  } as BookState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBookByIsbn13.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchBookByIsbn13.fulfilled, (state, action: PayloadAction<BookResponse>) => {
      state.loading = false
      state.book = action.payload
    })
    builder.addCase(fetchBookByIsbn13.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const bookReducer = bookSlice.reducer
