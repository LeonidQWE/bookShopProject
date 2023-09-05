import { Link } from 'react-router-dom'

import { Rating } from '../Rating'

import activeFavorite from '../../images/activeFavorite.svg'
import mutedFavorite from '../../images/mutedFavorite.svg'
import { BookProps } from '../../types/interfeces/BookProps'

export function Book({ data }: BookProps): JSX.Element {
  return (
    <div className="book" >
      <div className="book__preview">
        <img className="book__favorite" src={data.favorite ? activeFavorite : mutedFavorite} alt="" data-role="favorite" data-id={data.isbn13} />
        <img className="book__image" src={data.image} alt="" />
      </div>
      <div>
        <Link to={`/${data.isbn13}`} className="book__title">
          {data.title}
        </Link>
      </div>
      <div className="book__info">
        <span className="book__author">{`${data.authors}, ${data.publisher} ${data.year}`}</span>
      </div>
      <div className="book__footer">
        <span className="book__price">{data.price}</span>
        <Rating rating={data.rating} />
      </div>
    </div>
  )
}
