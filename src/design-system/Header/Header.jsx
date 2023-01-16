import React from "react";
import "./header.css";
import { Logo } from "../../components/images/index";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DialogSignIn } from "../Dialogs";

export const Header = () => {
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);

  const handleOpenDialogSignIn = () => {
    setIsDialogVisible(true);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__nav">
        <div className="header__nav-wrap">
          <ul className="header__links">
            <li className="header__link nav-bar-active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/games">Games</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          className="header__nav-btn"
          onClick={() => handleOpenDialogSignIn()}
        >
          Sign In
        </button>
        {isDialogVisible && <div className="background-blur"></div>}  
        {isDialogVisible && <DialogSignIn />}
      </div>
      <button
        /* onclick="toggleNavigBtn()" */ className="header__nav-small"
        ></button>
    </header>
  );
};
