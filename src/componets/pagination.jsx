import React from 'react'
import _ from 'lodash'

const Pagination = ({
  itemCount,
  pageSize,
  onhandelPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={'page-item ' + (page === currentPage ? 'active' : '')}
            key={'page' + page}
          >
            <button
              className="page-link"
              onClick={() => onhandelPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
