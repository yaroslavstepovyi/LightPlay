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
    </section>
  );
};
