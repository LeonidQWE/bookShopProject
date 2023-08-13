import './Book.css'

export function Book({ data }: any) {  //TODO: fix any
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
