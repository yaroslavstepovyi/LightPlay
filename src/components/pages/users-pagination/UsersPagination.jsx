import React, { useContext } from 'react'

import '../games-pagination/games-pagination.css'

import { UsersPaginationContext } from '../../../contexts/users-pagination'
import { ArrowLeft, ArrowRight } from '../../../services/images'

export const UsersPagination = () => {
  const { pagination, prevPage, nextPage } = useContext(UsersPaginationContext)

  return (
    <section className="pagination">
      <div className="pagination__list">
        <ul className="pagination__list-btns">
          <li data-page="min" className="pagination__list-btn">
            <button className="pagination__list-btn-page" onClick={prevPage}>
              <img src={ArrowLeft} alt="min" />
            </button>
          </li>
          {pagination}
          <li
            data-page="max"
            className="pagination__list-btn"
            onClick={nextPage}
          >
            <button className="pagination__list-btn-page">
              <img src={ArrowRight} alt="max" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
