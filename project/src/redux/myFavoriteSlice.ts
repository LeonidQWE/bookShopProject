import { PayloadAction, createSlice } from "@reduxjs/toolkit"
// import { MyFavoriteState, BookResponseWithFavorite } from "../interfeces/books";
import { NewBookResponse, MyFavoriteState } from "../interfeces/redux";

const myFavoriteSlice = createSlice({
  name: "myFavorites",
  initialState: {
    favoritesNewBooks: [],
  } as MyFavoriteState,

  reducers: {
    setMyFavorites: (state, action: PayloadAction<NewBookResponse[]>) => {
      const updatedBooks = action.payload;
      updatedBooks.forEach((updatedBook) => {
        const index = state.favoritesNewBooks.findIndex((book) => book.isbn13 === updatedBook.isbn13);

        if (index !== -1) {
          state.favoritesNewBooks[index] = updatedBook;
        } else {
          state.favoritesNewBooks.push(updatedBook);
        }
      });
    },
  }
})

export const { setMyFavorites } = myFavoriteSlice.actions
export const myFavoriteReducer = myFavoriteSlice.reducer
