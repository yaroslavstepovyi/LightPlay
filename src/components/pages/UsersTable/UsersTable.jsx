import React from "react";
import "./usersTable.css";

export const UsersTable = () => {
  return (
    <section className="users">
      <div className="users__filter">
        <div className="users__filter__wrap">
          <div className="users__filter__logo-wrap">
            <div className="users__filter__logo">
              <h3>VR Users</h3>
            </div>
          </div>
          <div className="users__filter__search">
            <div className="users__filter__search-box">
              <select id="select" className="users__filter__search-select">
                <option
                  className="users__filter__search-option"
                  value="default"
                  selected
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
            <button type="submit" className="reset-button">
              <img
                className="reset-btn"
                src="../../../Assets/images/reset.png"
                alt="reset"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="background-transparent hidden"></div>
      <div className="users__datas">
        <div className="users__datas-wrap">
          <table className="users__datas-table"></table>
        </div>
      </div>
    </section>
  );
};
