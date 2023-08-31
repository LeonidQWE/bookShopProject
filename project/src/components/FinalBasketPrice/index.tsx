import { Button } from "../Button"
import { UserForm } from "../UserForm"

import { NewBookResponse } from "../../interfeces/redux"
import { FinalBasketPriceProps } from "../../interfeces/FinalBasketPriceProps"

export function FinalBasketPrice({ data }: FinalBasketPriceProps): JSX.Element {
  const vatPrice = 12.5

  console.log(data)

  function getBooksSum(data: NewBookResponse[]): number {
    return data.reduce((sum, book) => {
      const priceWithoutDollar = book.price.replace('$', '')
      const price = parseFloat(priceWithoutDollar)
      if (!isNaN(price)) {
        return sum + book.count * price
      }
      return sum
    }, 0)
  }

  function getFinalRrice(): number {
    return getBooksSum(data) + vatPrice
  }

  return (
    <UserForm>
      <div className="basket-price">
        <div className="basket-price__sum">
          <span>Sum total</span><span>$ {getBooksSum(data)}</span>
        </div>

        <div className="basket-price__vat">
          <span>VAT</span><span>$ {vatPrice}</span>
        </div>

        <div className="basket-price__sum-total">
          <span>total:</span><span>$ {getFinalRrice()}</span>
        </div>
      </div>

      <Button variant="big" type="submit">check out</Button>
    </UserForm>
  )
}
