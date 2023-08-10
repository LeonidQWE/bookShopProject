// need to fix

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestNewBooks } from "../services/books"

interface Books {
  total: string,
  books: []
}

interface NewBooksState {
  newBooks: Books[]
  loading: boolean
  error: boolean
}



const fetchNewBooks = createAsyncThunk( 'newBooks/fetchNewBooks', async () => {
  const response = await requestNewBooks()
  return response as Books
  // const { books } = await requestNewBooks()
  // return { books }
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
      state.newBooks = action.payload.books
    })
    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export { fetchNewBooks }
export const newBooksReducer = newBooksSlice.reducer

