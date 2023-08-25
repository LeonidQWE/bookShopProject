import { configureStore } from "@reduxjs/toolkit"
import { newBooksReducer } from "./newBooksSlice"
import { bookReducer } from "./bookSlice"
import { myFavoriteReducer } from "./myFavoriteSlice"

const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookWithDetails: bookReducer,
    myFavorites: myFavoriteReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
