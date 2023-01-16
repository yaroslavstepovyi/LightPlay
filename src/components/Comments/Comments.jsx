import React from "react";
import "./comments.css";
import { COMMENTS } from "../../mocks/comments.mock";

export const Comments = () => {
  return (
    <section className="comments">
      <div className="comments__radius-center"></div>
      <div className="comments__radius-left"></div>
      <div className="comments__wrap">
        <h3 className="comments__headline-head">What our clients say</h3>
        <p className="comments__headline-content">
          See what our customer say about us. It really matter for us. How good
          or bad we will make it for the evaluation to make EhyalLive better.
        </p>
        <div className="comments__stars">
          <ul className="comments__list">
            <div className="comments__stars-list">
              {COMMENTS.map((comment) => {
                return (
                  <li key={comment.id} className="comments__stars-item">
                    <h3 className="comments__stars-item-headline">
                      <span>{comment.genre}</span> star
                    </h3>
                    <p className="comments__stars-item-par">
                      {comment.comment}
                    </p>
                    <div className="comments__stars-item-names">
                      <img src={comment.img} alt={comment.alt} />
                      <div>
                        <p className="comments__stars-item-name">
                          ${comment.userName}
                        </p>
                        <a href={0} className="comments__stars-item-name">
                          @{comment.userNickName}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
