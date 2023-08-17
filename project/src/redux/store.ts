import { configureStore } from "@reduxjs/toolkit"
import { newBooksReducer } from "./newBooksSlice"
import { bookReducer } from "./bookSlice"

const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookWithDetails: bookReducer,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
