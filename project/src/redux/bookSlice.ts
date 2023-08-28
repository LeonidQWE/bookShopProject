import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit"
import { put } from "redux-saga/effects"
import { requestBookByIsbn13, BookResponse } from "../services/books"

interface BookState {
  bookWithDetails: BookResponse
  loadingDetails: boolean
  errorDetails: boolean
}

export function* getBookSaga({ payload: isbn13}: PayloadAction<string>) {
  yield put(setLoading(true))

  try {
    const payload: BookResponse = yield requestBookByIsbn13(isbn13)
    yield put(getBookSucces(payload))
  } catch (error) {
    yield put(setError(error))
  }

  yield put(setLoading(false))
}

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    bookWithDetails: {},
    loadingDetails: false,
    errorDetails: false
  } as BookState,

  reducers: {
    getBookSucces: (state, action: PayloadAction<BookResponse>) => {
      state.loadingDetails = false
      state.bookWithDetails = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loadingDetails = action.payload
    },
    setError: (state, action) => {
      state.loadingDetails = false
      state.errorDetails = action.payload
    }
  }
})

export const GET_BOOK = 'book/GET_BOOK'
export const getBook = createAction<string>(GET_BOOK)
export const { getBookSucces, setLoading, setError } = bookSlice.actions
export const bookReducer = bookSlice.reducer
