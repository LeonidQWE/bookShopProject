import { CartProps } from '../../types/interfeces/BasketBookProps'

import deleteButton from '../../images/delete.svg'

export function Cart({ data }: CartProps): JSX.Element {
  return (
    <div className="basket-book">
      <div className="basket-book__preview">
        <img src={data.image} alt="" className="basket-book__image"/>
      </div>

      <div className="basket-book__info">
        <h3 className="basket-book__title">{data.title}</h3>
        <p className="basket-book__description">{data.authors}, {data.publisher} {data.year}</p>
        <div>
          <button data-role="decrement" data-id={data.isbn13} className="basket-book__button">-</button>
          <span className="basket-book__count">{data.count}</span>
          <button data-role="increment" data-id={data.isbn13} className="basket-book__button">+</button>
        </div>
      </div>

      <div className="basket-book__price">
        <p >{data.price}</p>
      </div>

      <div className="basket-book__delete">
        <img className="basket-book__button" data-role="delete" data-id={data.isbn13} src={deleteButton} alt="" />
      </div>
    </div>
  )
}
