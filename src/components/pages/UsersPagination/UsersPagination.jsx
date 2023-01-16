import React from 'react'
import './usersPagination.css'
import {ArrowLeft, Arrowmiddle, ArrowRight,} from '../../images/index.js'

export const UsersPagination = () => {
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
                <img src="../../Assets/icons/num.svg" alt="" />
              </button>
            </li>
            <li data-page="max" className="pagination__list-btn">
              <button className="pagination__list-btn-page">
                <img src="../../Assets/icons/arrowRight.svg" alt="" />
              </button>
            </li>  */}
            <li data-page="min" className="pagination__list-btn">
              <button>
                <img src={ArrowLeft} alt="" />
              </button></li>
            <li data-page="1" className="pagination__list-btn pagination__list-btn--active">
              <button>1</button>
            </li>
            <li data-page="2" className="pagination__list-btn">
              <button>2</button>
            </li>
            <li data-page="mid" className="pagination__list-btn">
              <button><img src={Arrowmiddle} alt="" /></button>
            </li>
            <li data-page="9"className="pagination__list-btn">
              <button>9</button>
            </li>
            <li data-page="10" className="pagination__list-btn">
              <button>10</button>
            </li>
            <li data-page="max" className="pagination__list-btn">
              <button><img src={ArrowRight} alt="" /></button></li>
          </ul>
        </div>
    </section>
  )
}
