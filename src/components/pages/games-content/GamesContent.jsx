import React, { useContext, useState, useEffect } from "react";

import "./games-content.css";

import { AuthContext } from "../../../contexts/auth-user";
import { useAuth } from "../../../hooks";
import { DialogSignIn } from "../../../design-system/dialogs";
import getDeafultGames from "../../../services/default-games";
import { decryptUser } from "../../../utils/encryption-user";
import DialogGamesCard from "../games-card/DialogGamesCard";
import { GamesContext } from "../../../contexts/games-list";
import { GamesPaginationContext } from "../../../contexts/games-pagination";

export const GamesContent = () => {
  const { isloggedIn } = useContext(AuthContext);
  const [showGamesCard, setShowGamesCard] = useState(false);
  const { setGames } = useContext(GamesContext);
  const user = decryptUser(localStorage.getItem("user"), "secret key");
  const [selectedGame, setSelectedGame] = useState(null);
  const { onHandleOpenDialogSignIn, onHandleBackgroundBlurHide, state } =
    useAuth();
  const { getPaginatedGames } = useContext(GamesPaginationContext);

  useEffect(() => {
    getDeafultGames().then(() => {
      const savedGames = JSON.parse(localStorage.getItem("games"));
      if (savedGames) {
        setGames(savedGames);
      }
    });
  }, [setGames]);

  const handleGamesCard = (game) => {
    setSelectedGame(game);
    setShowGamesCard(true);
  };

  return (
    <>
      {isloggedIn ? (
        <section className="content">
          <ul className="content__grid__list">
            <div className="content__div-item">
              {getPaginatedGames().map((game) => (
                <li
                  className="content__grid-item"
                  key={game.id}
                  onClick={() => handleGamesCard(game)}
                >
                  <img
                    className="content__grid-item-img resize-photo"
                    src={game.img}
                    alt={game.name}
                  />
                  <div className="content__grid-item-description">
                    <div className="content__grid-item-description-left">
                      <h3 className="game-name">{game.name}</h3>
                      <span className="game-description">
                        {game.description}
                      </span>
                    </div>
                    <div className="content__grid-item-description-right">
                      <h3 className="user-name">{user.name}</h3>
                      <span className="user-review">{game.review}</span>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </section>
      ) : (
        <section className="content">
          <div className="content__empty-games">
            <div className="content__empty-games-wrap">
              <h1>Empty Games</h1>
              <p>
                <button
                  className="content__empty-games__sign-in-btn"
                  onClick={onHandleOpenDialogSignIn}>
                  Sign in
                </button>
                for adding games
              </p>
            </div>
          </div>
        </section>
      )}
      {state.isDialogVisible && (
        <>
          <DialogSignIn
            onHandleBackgroundBlurHide={onHandleBackgroundBlurHide}
          />
          <div className="background-blur"></div>
        </>
      )}
      {showGamesCard && (
        <>
          <div
            className="background-blur"
            onClick={() => setShowGamesCard(false)}
          ></div>
          <DialogGamesCard
            selectedGame={selectedGame}
            user={user}
            setShowGamesCard={setShowGamesCard}
          />
        </>
      )}
    </>
  );
};