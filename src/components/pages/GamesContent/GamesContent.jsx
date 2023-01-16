import React from "react";
import "./gamesContent.css";

export const GamesContent = () => {
  return (
    <section className="content">
      <ul className="content__grid__list"></ul>
      <div className="background-blur hidden-background-blur"></div>
      <div className="game-dialog modal hidden">
        <div className="game-dialog__container">
          <img
            className="game-dialog__img"
            src="../../Assets/images/Games/battlefield.png"
            alt=""
          />
          <div className="game-dialog__content">
            <div className="content__main">
              <h3 className="game-dialog__game-name">game-name</h3>
              <p className="game-dialog__game-description">game-description</p>
            </div>
            <div className="content__review">
              <div className="content__review-user">
                <img src="../../Assets/icons/DialogUsernameImg.svg" alt="" />
                <div className="content__review-name">
                  <p className="game-dialog__user-name">user-name</p>
                  <h3 className="game-dialog__user-review">user-review</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content__empty-games">
        <div className="content__empty-games-wrap">
          <h1>Empty Games</h1>
          <p>
            <button className="content__empty-games__sign-in-btn">
              Sign in
            </button>
            for adding games
          </p>
        </div>
      </div>
    </section>
  );
};
