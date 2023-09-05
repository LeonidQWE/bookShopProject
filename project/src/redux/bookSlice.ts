import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'
import { requestBookById } from '../services/books'

import { BookResponse, BookState } from '../types/interfeces/redux'

export function* getBookSaga({ payload: id}: PayloadAction<string>) {
  yield put(setLoading(true))

  try {
    const payload: BookResponse = yield requestBookById(id)
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

export const GET_BOOK = 'book/getBook'
export const getBook = createAction<string>(GET_BOOK)
export const { getBookSucces, setLoading, setError } = bookSlice.actions
export const bookReducer = bookSlice.reducer
