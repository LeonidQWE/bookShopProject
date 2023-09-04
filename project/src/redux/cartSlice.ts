import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NewBookResponse, BasketBooksState } from '../interfeces/redux'
import { getDataFromLocalStorage, setDataInLocalStorage } from '../helpers'

const cartSlice = createSlice({
  name: 'basketBooks',
  initialState: {
    basketBooks: getDataFromLocalStorage('basketBooks'),
  } as BasketBooksState,

  reducers: {
    setBasketBooks: (state, action: PayloadAction<NewBookResponse[]>) => {
      const updatedBasketBooks = action.payload

      const result = updatedBasketBooks.reduce((acc: NewBookResponse[], item: NewBookResponse) => {
        const existingBook = acc.find((book: NewBookResponse) => book.isbn13 === item.isbn13);
        if (existingBook) {
          existingBook.count += item.count
        } else {
          acc.push({ ...item })
        }
        return acc;
      }, []);
      state.basketBooks = result
      setDataInLocalStorage("basketBooks", state.basketBooks)
    },
  }
})

export const { setBasketBooks } = cartSlice.actions
export const cartReducer = cartSlice.reducer
