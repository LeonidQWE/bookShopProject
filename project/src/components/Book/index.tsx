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

export function Book({ data }: BookProps ): JSX.Element {  //TODO: fix any
  return (
    <div className="book">
      <img className="book__image" src={data.image} alt="" />
      <h3 className="book__title">{data.title}</h3>
      <div className="book__info">
        <span className="book__author">{`${data.authors}, ${data.publisher} ${data.year}`}</span>
      </div>
      <div className="book__footer">
        <span className="book__price">{data.price}</span>
        <span className="book__rating">{data.rating}</span>
      </div>
    </div>
  )
}
