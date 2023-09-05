import { NavLink } from 'react-router-dom'

import { PaginationProps } from '../../types/interfeces/PaginationProps'

export function Pagination({ books, limit, pageNumber }: PaginationProps): JSX.Element {
  function buildPaginationScheme() {
    const prevPageNumber = pageNumber - 1
    const nexPageNumber = pageNumber + 1
    const maxPageNumber = Math.ceil(books.length / limit)
    const scheme = [1, prevPageNumber, pageNumber, nexPageNumber, maxPageNumber]
    const filteredScheme = scheme.filter(item => item > 0 && item <= maxPageNumber)
    const set = new Set(filteredScheme)
    const result: (number | string)[] = Array.from(set) as (number | string)[]

    if (parseInt(result[0] as string) + 1 !== parseInt(result[1] as string)) result.splice(1, 0, '...')
    if (parseInt(result[result.length - 2] as string) + 1 !== parseInt(result[result.length - 1] as string)) result.splice(result.length - 1, 0, '...')
    return result
  }

  function renderPagination() {
    const pages = buildPaginationScheme()
    return pages.map((page: number | string, index) => {
      if (page === '...') {
        return <li key={index} className="pagination__item pagination__item_disabled">...</li>
      }

      return (
        <li key={index} className="pagination__item">
          <NavLink
            to={`/new_books/pages/${page}`}
            data-page={page}
            data-role="getPage"
            className={({ isActive }) => (isActive ? "pagination__link active" : "pagination__link")}>
            {page}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {renderPagination()}
      </ul>
    </div>
  )
}
