import React, { useContext } from "react";

import "./gamesFilter.css";

import { AuthContext } from "../../../contexts/authUser";
import { useHandleGameCards } from "../../../hooks";
import { DialogAddNewCardGame } from "../../../design-system/Dialogs/dialogs-games";
import { GamesContext } from "../../../contexts/gamesList";

export const GamesFilter = () => {
  const { isloggedIn } = useContext(AuthContext);
  const { onAddNewCard, isDialogVisible, setIsDialogVisible, addNewCard } =
    useHandleGameCards();
  const { handleSortChange } = useContext(GamesContext);

  const onHandleAddNewCard = () => {
    onAddNewCard();
  };

  return (
    <>
      {isloggedIn ? (
        <section className="filter">
          <div className="filter__wrap">
            <div className="filter__logo-wrap">
              <div className="filter__logo">
                <h3>VR Games</h3>
              </div>
            </div>
            <div className="filter__search">
              <button
                className="filter__search-btn"
                type="submit"
                onClick={onHandleAddNewCard}
              >
                Add New Card
              </button>
              <div className="filter__search-box">
                <select
                  id="select"
                  className="filter__search-box-view"
                  defaultValue="default"
                  onChange={handleSortChange}
                >
                  <option
                    value="default"
                    disabled
                    className="filter__search-option"
                  >
                    Sort By Date
                  </option>
                  <option value="new-first" className="filter__search-option">
                    New first
                  </option>
                  <option value="new-second" className="filter__search-option">
                    New second
                  </option>
                </select>
                <span className="filter__search-box-arrow"></span>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {isDialogVisible ? (
        <>
          <DialogAddNewCardGame addNewCard={addNewCard} />
          <div
            className="background-blur"
            onClick={() => setIsDialogVisible(false)}
          ></div>
        </>
      ) : null}
    </>
  );
};
