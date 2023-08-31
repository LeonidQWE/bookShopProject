import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/inedx";
import { setBasketBooks } from "../../redux/basketBookSlice";
import { unloadInformationFromLocalStorage } from "../../helpers";

import { Container } from "../../components/Container";
import { HomeLink } from "../../components/HomeLink";
import { Title } from "../../components/Title";
import { BasketBook } from "../../components/BasketBook";

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

  return (
    <>
      <HomeLink />
      <Title>Your Cart</Title>
      <Container className="container_basket">
        {basketBooks.length && renderBasketBooks()}
      </Container>
    </>
  )
}
