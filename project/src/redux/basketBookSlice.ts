import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookForBasket, BasketBooksState } from "../interfeces/books";

const basketBooksSlice = createSlice({
  name: "basketBooks",
  initialState: {
    basketBooks: [],
  } as BasketBooksState,

  reducers: {
    setBasketBooks: (state, action: PayloadAction<BookForBasket[]>) => {
      const updatedBasketBooks = action.payload

      const result = updatedBasketBooks.reduce((acc: BookForBasket[], item: BookForBasket) => {
        const existingBook = acc.find((book: BookForBasket) => book.isbn13 === item.isbn13);
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
