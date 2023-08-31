import { BookForBasket } from "../../interfeces/books"

import deleteButton from "../../images/delete.svg"

interface BasketBookProps {
  data: BookForBasket
}

export function BasketBook({ data }: BasketBookProps): JSX.Element {
  return (
    <div className="basket-book">
      <div className="basket-book__preview">
        <img src={data.image} alt="" className="basket-book__image"/>
      </div>

      <div className="basket-book__info">
        <h3 className="basket-book__title">{data.title}</h3>
        <p className="basket-book__description">{data.authors}, {data.publisher} {data.year}</p>
        <p className="basket-book__count">- {data.count} +</p>
      </div>

      <div className="basket-book__price">
        <p >{data.price}</p>
      </div>

      <div className="basket-book__delete">
        <img src={deleteButton} alt="" />
      </div>
    </div>
  )
}
