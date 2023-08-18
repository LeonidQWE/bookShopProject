import { Link } from 'react-router-dom'

import { Rating } from '../Rating'

import './Book.css'

type BookProps = {
  data: {
    error: string
    title: string
    subtitle: string
    authors: string
    publisher: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
    pdf: object
  }
}

export function Book({ data }: BookProps): JSX.Element {  //TODO: fix any
  return (
    <div className="book">
      <img className="book__image" src={data.image} alt="" />
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
