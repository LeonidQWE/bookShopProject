import { NavLink } from "react-router-dom"

import { PaginationProps } from "../../interfeces/PaginationProps"

export function Pagination ({books, limit}: PaginationProps): JSX.Element {
  function buildPaginationScheme () {
    const allPages = Math.ceil(books.length / limit)
    const pagesArray = []
    for (let i = 1; i <= allPages; i++) {
      pagesArray.push(i)
    }
    return pagesArray
  }

  function renderPagination () {
    const pages = buildPaginationScheme()
    return pages.map((page, index) => (
      <li key={index} className="pagination__item">
        <NavLink
          to={`/new_books/pages/${page}`}
          data-page={page}
          data-role="getPage"
          className={({ isActive }) => (isActive ? 'pagination__link active' : 'pagination__link')}>
          {page}
        </NavLink>
      </li>
    ))
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {renderPagination()}
      </ul>
    </div>
  )
}
