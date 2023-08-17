import { configureStore } from "@reduxjs/toolkit"
import { newBooksReducer } from "./newBooksSlice"
import { bookReducer } from "./bookSlice"
import { useDispatch } from "react-redux"

const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookWithDetails: bookReducer,
  }
})

export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
