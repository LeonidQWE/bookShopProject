import { useAppSelector, useAppDispatch } from "../../hooks/inedx"

import { updateBasketBooks } from "../../helpers"

import { Container } from "../../components/Container"
import { HomeLink } from "../../components/HomeLink"
import { Title } from "../../components/Title"
import { Cart } from "../../components/Cart"
import { FinalBasketPrice } from "../../components/FinalBasketPrice"

export function CartPage() {
  const dispatch = useAppDispatch()
  const { basketBooks } = useAppSelector(state => state.basketBooks)

  function renderBasketBooks() {
    if (basketBooks.length > 0) {
      return basketBooks.map((book) => <Cart key={book.isbn13} data={book} />)
    } else {
      return <h2>Your basket is empty</h2>
    }
  }

  function handleClickEvent(event: React.MouseEvent<HTMLDivElement>) {
    updateBasketBooks(event, dispatch, basketBooks)
  }

  return (
    <>
      <HomeLink />
      <Title>Your Cart</Title>
      <Container className="container_basket" onClick={handleClickEvent}>
        { renderBasketBooks()}
      </Container>
      <Container className="container_final-price">
        <FinalBasketPrice data={basketBooks} />
      </Container>
    </>
  )
}
