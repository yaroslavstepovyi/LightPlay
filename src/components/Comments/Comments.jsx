import React from 'react'

import './comments.css'

import { COMMENTS } from '../../mocks/comments-mock'

const Comments = () => {
  return (
    <section className="comments">
      <div className="comments-radius-left"></div>
      <div className="comments-wrap">
        <h3 className="comments-headline-head">What our clients say</h3>
        <p className="comments-headline-content">
          See what our customer say about us. It really matter for us. How good
          or bad we will make it for the evaluation to make EhyalLive better.
        </p>
        <div className="comments-stars">
          <ul className="comments-list">
            <div className="comments-stars-list">
              {COMMENTS.map((comment) => {
                return (
                  <li key={comment.id} className="comments-stars-item">
                    <h3 className="comments-stars-item-headline">
                      <span>{comment.genre}</span> star
                    </h3>
                    <p className="comments-stars-item-par">{comment.comment}</p>
                    <div className="comments-stars-item-names">
                      <img src={comment.img} alt={comment.alt} />
                      <div>
                        <p className="comments-stars-item-name">
                          {comment.userName}
                        </p>
                        <a href={0} className="comments-stars-item-name">
                          @{comment.userNickName}
                        </a>
                      </div>
                    </div>
                  </li>
                )
              })}
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Comments }
