import { Title } from "../Title"
import { Rating } from "../Rating"
import { Button } from "../Button"

import { BookResponse } from "../../services/books"

import './BookInfo.css'

interface BookInfoProps {
  data: BookResponse
}

export function BookInfo({ data }: BookInfoProps): JSX.Element {
  return (
    <>
      <Title>{data.title}</Title>
      <div className="single-book">
        <div className="single-book__preview">
          <img className="preview__image" src={data.image} alt="" />
          <img className="preview__favorite" src="" alt="favorite" />
        </div>

        <div className="single-book__info">
          <div className="info__title">
            <span className="info__price">{data.price}</span>
            <Rating rating={data.rating} />
          </div>

          <div className="info__description">
            <div className="description__item">
              <span className="item__category">Authors</span>
              <span className="item__text">{data.authors}</span>
            </div>

            <div className="description__item">
              <span className="item__category">Publisher</span>
              <span className="item__text">{data.publisher}</span>
            </div>

            <div className="description__item">
              <span className="item__category">Language</span>
              <span className="item__text">{data.language}</span>
            </div>

            <div className="description__item">
              <span className="item__category">Format</span>
              <span className="item__text">Paper book / ebook (PDF)</span>
            </div>
          </div>

          <Button type="button">Add to card</Button>
        </div>
      </div>
    </>

  )
}
