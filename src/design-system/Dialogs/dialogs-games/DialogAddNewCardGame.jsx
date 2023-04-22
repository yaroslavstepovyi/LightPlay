import React from "react";

import "./dialogAddNewCardGame.css";

import { _GAME_IMAGES } from "../../../services";
import ErrorBubble from "../../../utils/error-bubble";
import { useAddNewCard } from "../../../hooks";

const DialogAddNewCardGame = ({ addNewCard }) => {
  const {
    nameError,
    descriptionError,
    reviewError,
    handleSubmit,
  } = useAddNewCard(addNewCard);

  return (
    <div className="adding modal hidden">
      <div className="adding__wrap">
        <div className="adding__headline">
          <h3>Add New Game</h3>
        </div>
        <div className="adding__inputs">
          <form className="adding__form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                name="adding-name"
                className="adding__form-inpt"
                type="text"
                placeholder="Game name"
                required
              />
              {nameError && <ErrorBubble error={nameError} />}
            </div>
            <div className="input-container">
              <input
                name="adding-description"
                className="adding__form-inpt"
                type="text"
                placeholder="Game description"
                required
              />
              {descriptionError && <ErrorBubble error={descriptionError} />}
            </div>
            <div className="input-container">
              <input
                name="adding-review"
                className="adding__form-inpt"
                type="text"
                placeholder="Game review"
                required
              />
              {reviewError && <ErrorBubble error={reviewError} />}
            </div>
            <div className="input-container">
              <select
                className="adding__form-inpt"
                name="adding-image"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Game Image
                </option>
                {_GAME_IMAGES.map((image, idx) => (
                  <option key={idx} value={image}>
                    {image}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="adding__form-btn">
              Add New Game
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DialogAddNewCardGame;
