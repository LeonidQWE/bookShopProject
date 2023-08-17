import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestBookByIsbn13, BookResponse } from "../services/books";

interface BookState {
  bookWithDetails: BookResponse
  loadingDetails: boolean
  errorDetails: boolean
}

export const fetchBookByIsbn13 = createAsyncThunk<BookResponse, string>('bookWithDetails/fetchBookByIsbn13', async (isbn13: string) => {
  const bookWithDetails = await requestBookByIsbn13(isbn13)
  return bookWithDetails
})

const bookSlice = createSlice({
  name: 'bookWithDetails',
  initialState: {
    bookWithDetails: {},
    loadingDetails: false,
    errorDetails: false
  } as BookState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBookByIsbn13.pending, state => {
      state.loadingDetails = true
    })
    builder.addCase(fetchBookByIsbn13.fulfilled, (state, action) => {
      state.loadingDetails = false
      state.bookWithDetails = action.payload
    })
    builder.addCase(fetchBookByIsbn13.rejected, state => {
      state.loadingDetails = false
      state.errorDetails = true
    })
  }
})

export const bookReducer = bookSlice.reducer

