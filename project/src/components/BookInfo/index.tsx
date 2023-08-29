import { useState } from "react"

import { BookInfoProps } from "../../interfeces/books"

import { Title } from "../Title"
import { Rating } from "../Rating"
import { Button } from "../Button"

export function BookInfo({ data }: BookInfoProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('description')
  let bookInfo = ''

  function handleClickSelectOption(option: string) {
    setSelectedOption(option)
  }

  if (selectedOption === 'description') {
    bookInfo = data.desc
  } if (selectedOption === 'authors') {
    bookInfo = data.authors
  } if (selectedOption === 'reviews') {
    bookInfo = 'Good book!'
  }

  return (
    <>
      <Title>{data.title}</Title>
      <div className="single-book">
        <div className="single-book__preview">
          <img className="preview__image" src={data.image} alt="" />
        </div>

        <div className="single-book__info">
          <div className="single-book__title">
            <span className="single-book__price">{data.price}</span>
            <Rating rating={data.rating} />
          </div>

          <div className="single-book__description">
            <div className="single-book__item">
              <span className="single-book__category">Authors</span>
              <span className="single-book__text">{data.authors}</span>
            </div>

            <div className="single-book__item">
              <span className="single-book__category">Publisher</span>
              <span className="single-book__text">{data.publisher}</span>
            </div>

            <div className="single-book__item">
              <span className="single-book__category">Language</span>
              <span className="single-book__text">{data.language}</span>
            </div>

            <div className="single-book__item">
              <span className="single-book__category">Format</span>
              <span className="single-book__text">Paper book / ebook (PDF)</span>
            </div>
          </div>

          <Button variant="big" type="button">Add to card</Button>
        </div>
      </div>

      <nav className="single-book__navbar">
        <ul className="single-book__list">
          <li onClick={() => handleClickSelectOption('description')}
          className={`single-book__option ${(selectedOption === "description" ? "single-book__option_active" : "")}`}>Description</li>
          <li onClick={() => handleClickSelectOption('authors')}
          className={`single-book__option ${(selectedOption === 'authors' ? "single-book__option_active" : "")}`}>Authors</li>
          <li onClick={() => handleClickSelectOption('reviews')}
          className={`single-book__option ${(selectedOption === 'reviews' ? "single-book__option_active" : "")}`}>Reviews</li>
        </ul>
      </nav>

      <div className="single-book__content">
        {bookInfo}
      </div>
    </>

  )
}
