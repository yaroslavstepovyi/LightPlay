import React from "react";
import "./dialog.css";

export const DialogAddNewCardGame = () => {
  return (
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
        {/* <input id="adding-image" className="adding__form-inpt" type="text" placeholder="Game image"/>  */}
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
  );
};
