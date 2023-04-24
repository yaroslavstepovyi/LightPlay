import React, { useContext } from "react";

import "./usersFilter.css";

import { usersContext } from "../../../contexts/usersList";
import { Reset } from "../../../services/images";

export const UsersFilter = () => {
  const { handleRoleSort, sortedOption } = useContext(usersContext);

  return (
    <>
      <div className="users__filter">
        <div className="users__filter__wrap">
          <div className="users__filter__logo-wrap">
            <div className="users__filter__logo">
              <h3>VR Users</h3>
            </div>
          </div>
          <div className="users__filter__search">
            <div className="users__filter__search-box">
              <select
                id="select"
                className="users__filter__search-select"
                defaultValue="default"
                onChange={handleRoleSort}
              >
                <option
                  className="users__filter__search-option"
                  value="default"
                  disabled
                >
                  Sort By Role
                </option>
                <option className="users__filter__search-option" vlaue="admin">
                  admin
                </option>
                <option
                  className="users__filter__search-option"
                  vlaue="moderator"
                >
                  moderator
                </option>
                <option className="users__filter__search-option" vlaue="user">
                  user
                </option>
              </select>
              <span className="users__filter__search-box-arrow"></span>
            </div>
            {sortedOption === "default" ? (
              <button type="submit" className="reset-button">
                <img className="reset-btn" src={Reset} alt="reset" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
