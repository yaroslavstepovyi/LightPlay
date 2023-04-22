import React from "react";

import "./dialog-games-card.css";

const DialogGamesCard = ({ selectedGame, user }) => {
  return (
    <div className="game-dialog modal">
      <div className="game-dialog__container">
        <img
          className="game-dialog__img"
          src={selectedGame.img}
          alt="dialog img"
        />
        <div className="game-dialog__content">
          <div className="content__main">
            <h3 className="game-dialog__game-name">{selectedGame.name}</h3>
            <p className="game-dialog__game-description">
              {selectedGame.description}
            </p>
          </div>
          <div className="content__review">
            <div className="content__review-user">
              <img src={user.img} alt="user icon" />
              <div className="content__review-name">
                <p className="game-dialog__user-name">{user.name}</p>
                <h3 className="game-dialog__user-review">
                  {selectedGame.review}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogGamesCard;
