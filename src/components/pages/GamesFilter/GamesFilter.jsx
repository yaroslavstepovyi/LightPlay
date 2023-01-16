import React from "react";
import "./gamesFilter.css";

export const GamesFilter = () => {
  return (
    <section className="filter">
      <div className="filter__wrap">
        <div className="filter__logo-wrap">
          <div className="filter__logo">
            <h3>VR Games</h3>
          </div>
        </div>
        <div className="filter__search">
          <button className="filter__search-btn" type="submit">
            Add new card
          </button>
          <div className="filter__search-box">
            <select id="select" className="filter__search-box-view">
              <option
                value="default"
                selected
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
          <button type="submit" className="reset-button">
            <img
              className="reset-btn"
              src="../../Assets/images/reset.png"
              alt="reset"
            />
          </button>
        </div>
      </div>
      <div className="background-blur hidden-background-blur"></div>
      <div className="adding modal hidden">
        <div className="adding__wrap">
          <div className="adding__headline">
            <h3>Add New Game</h3>
          </div>
          <div className="adding__inputs">
            <form action="">
              <input
                id="adding-name"
                className="adding__form-inpt"
                type="text"
                placeholder="Game name"
              />
              <input
                id="adding-description"
                className="adding__form-inpt"
                type="text"
                placeholder="Game description"
              />
              <input
                id="adding-review"
                className="adding__form-inpt"
                type="text"
                placeholder="Game review"
              />
              <select className="adding__form-inpt" id="adding-image">
                <option value="default" disabled selected>
                  Game Image
                </option>
                <option value="fifa">fifa</option>
                <option value="gta">gta</option>
                <option value="battlefield">battlefield</option>
                <option value="callofduty">callofduty</option>
                <option value="doom">doom</option>
                <option value="fallout">fallout</option>
                <option value="half-life">half life</option>
                <option value="heroes">heroes</option>
                <option value="minecraft">minecraft</option>
                <option value="mortal-kombat">mortal kombat</option>
                <option value="stalker">stalker</option>
                <option value="warcraft">warcraft</option>
              </select>
            </form>
            <button type="submit" className="adding__form-btn">
              Add New Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
