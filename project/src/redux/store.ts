// need to fix
import { configureStore } from "@reduxjs/toolkit"
import { newBooksReducer } from "./newBooksSlice"

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
  }
})
