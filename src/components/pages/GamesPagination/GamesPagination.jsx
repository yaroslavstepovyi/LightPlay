import React from 'react'
import './gamesPagination.css'

export const GamesPagination = () => {
  return (
    <section className="pagination">
          <div className="pagination__list">
            <ul className="pagination__list-btns">
              {/* <li data-page="min" className="pagination__list-btn">
                      <button className="pagination__list-btn-page">
                        <img src="../../Assets/icons/arrowLeft.svg" alt="" />
                      </button></li>
                    <li data-page="mid" className="pagination__list-btn">
                      <button className="pagination__list-btn-page">
                        <img src="../../Assets/icons/num.svg" alt=""/>
                      </button>
                    </li>
                    <li data-page="max" className="pagination__list-btn">
                      <button className="pagination__list-btn-page">
                        <img src="../../Assets/icons/arrowRight.svg" alt=""/>
                      </button>
                    </li>  */}
            </ul>
          </div>
        </section>
  )
}
