import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/inedx";
import { setBasketBooks } from "../../redux/basketBookSlice";
import { unloadInformationFromLocalStorage } from "../../helpers";

import { Container } from "../../components/Container";
import { HomeLink } from "../../components/HomeLink";
import { Title } from "../../components/Title";
import { BasketBook } from "../../components/BasketBook";
import { FinalBasketPrice } from "../../components/FinalBasketPrice";

export function BasketPage() {
  const dispatch = useAppDispatch()
  const { basketBooks } = useAppSelector(state => state.basketBooks)

  useEffect(() => {
    const basketBooksFromLocalStorage = unloadInformationFromLocalStorage("basketBooks")
    if (basketBooksFromLocalStorage && basketBooksFromLocalStorage.length) {
      dispatch(setBasketBooks(basketBooksFromLocalStorage))
    }
  }, [dispatch])

  function renderBasketBooks() {
    return basketBooks.map((book) => <BasketBook key={book.isbn13} data={book} />)
  }

  function handleClickEvent(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement
    const { role, isbn13 } = target.dataset

    if (role === 'decrement') {
      const updateBasketBooks = basketBooks.map((book) => {
        if (book.isbn13 === isbn13) {
          return { ...book, count: book.count - 1 }
        }
        return book
      })
      dispatch(setBasketBooks(updateBasketBooks))
    }

    if (role === 'increment') {
      const updateBasketBooks = basketBooks.map((book) => {
        if (book.isbn13 === isbn13) {
          return { ...book, count: book.count + 1 }
        }
        return book
      })
      dispatch(setBasketBooks(updateBasketBooks))
    }

    if (role === 'delete') {
      const updateBasketBooks = basketBooks.filter((book) => book.isbn13 !== isbn13)
      dispatch(setBasketBooks(updateBasketBooks))
    }
  }


  return (
    <>
      <HomeLink />
      <Title>Your Cart</Title>
      <Container className="container_basket" onClick={handleClickEvent}>
        {basketBooks.length && renderBasketBooks()}
      </Container>
      <Container className="container_final-price">
        <FinalBasketPrice data={basketBooks} />
      </Container>
    </>
  )
}
