import React, { useContext } from 'react'

import './gamesPagination.css'

import { AuthContext } from '../../../contexts/authUser'
import { GamesPaginationContext } from '../../../contexts/gamesPagination'
import { ArrowLeft, ArrowRight } from '../../../services/images'

export const GamesPagination = () => {
  const { isloggedIn } = useContext(AuthContext)
  const { pagination, nextPage, prevPage } = useContext(GamesPaginationContext)

  return (
    <>
      {isloggedIn && (
        <section className='pagination'>
          <div className='pagination__list'>
            <ul className='pagination__list-btns'>
              <li data-page='min' className='pagination__list-btn'>
                <button
                  className='pagination__list-btn-page'
                  onClick={prevPage}
                >
                  <img src={ArrowLeft} alt='min' />
                </button>
              </li>
              {pagination()}
              <li
                data-page='max'
                className='pagination__list-btn'
                onClick={nextPage}
              >
                <button className='pagination__list-btn-page'>
                  <img src={ArrowRight} alt='max' />
                </button>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
