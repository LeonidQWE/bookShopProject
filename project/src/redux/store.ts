import createSagaMiddleware from "@redux-saga/core"
import { takeEvery } from "redux-saga/effects"
import { configureStore } from "@reduxjs/toolkit"

import { newBooksReducer } from "./newBooksSlice"
import { myFavoriteReducer } from "./myFavoriteSlice"
import { GET_BOOK, getBookSaga, bookReducer } from "./bookSlice"
import { basketBooksReducer } from "./basketBookSlice"

const sagaMiddleware = createSagaMiddleware()

function* sagas() {
  yield takeEvery(GET_BOOK, getBookSaga)
}

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookWithDetails: bookReducer,
    myFavorites: myFavoriteReducer,
    basketBooks: basketBooksReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
