import React from 'react'

import './dialog-add-new-card-game.css'

import { GAME_IMAGES } from '../../../services'
import { ErrorBubble } from '../../../components/common/error-bubble'
import { useAddNewCard } from '../../../hooks'

const DialogAddNewCardGame = ({ addNewCard }) => {
  const {
    nameError,
    descriptionError,
    reviewError,
    handleSubmit,
    nameInputRef,
    descriptionInputRef,
    reviewInputRef,
    imageSelectRef,
  } = useAddNewCard(addNewCard)

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
                ref={nameInputRef}
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
                ref={descriptionInputRef}
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
                ref={reviewInputRef}
                required
              />
              {reviewError && <ErrorBubble error={reviewError} />}
            </div>
            <div className="input-container">
              <select
                className="adding__form-select"
                name="adding-image"
                defaultValue=""
                ref={imageSelectRef}
                required
              >
                <option value="" disabled>
                  Select Game Image
                </option>
                {GAME_IMAGES.map((image, idx) => (
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
  )
}

export { DialogAddNewCardGame }
