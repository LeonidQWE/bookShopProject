import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { BookForBasket, BasketBooksState } from "../interfeces/books";
import { NewBookResponse, BasketBooksState } from "../interfeces/redux";

const basketBooksSlice = createSlice({
  name: "basketBooks",
  initialState: {
    basketBooks: [],
  } as BasketBooksState,

  reducers: {
    setBasketBooks: (state, action: PayloadAction<NewBookResponse[]>) => {
      const updatedBasketBooks = action.payload

      const result = updatedBasketBooks.reduce((acc: NewBookResponse[], item: NewBookResponse) => {
        const existingBook = acc.find((book: NewBookResponse) => book.isbn13 === item.isbn13);
        if (existingBook) {
          existingBook.count += item.count;
        } else {
          acc.push({ ...item });
        }
        return acc;
      }, []);
      state.basketBooks = result;
    },
  }
})

export const { setBasketBooks } = basketBooksSlice.actions
export const basketBooksReducer = basketBooksSlice.reducer
