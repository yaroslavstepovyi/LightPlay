import React from "react";
import "./header.css";
import { Logo } from "../../components/images/index";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DialogSignIn } from "../Dialogs";

export const Header = () => {
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);
  const [isBurgerMenuActive, setIsBurgerMenuActive] = React.useState(false);

  const handleOpenDialogSignIn = () => {
    setIsDialogVisible(true);
  };

  const handleBackroundBlurHide = () => {
    setIsDialogVisible(false);
  };

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuActive(true);
  };

  const handleNavSmall = () =>{
    setIsBurgerMenuActive(false);
  }
  return (
    <>
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
        </div>
        {isDialogVisible && (
          <div
            className="background-blur"
            onClick={() => handleBackroundBlurHide()}
          ></div>
        )}
        <button
          className="header__nav-small"
          onClick={() => handleBurgerMenuToggle()}
        ></button>
      </header>
      {isBurgerMenuActive && (
        <div
          className="header__nav-mobile"
          onClick={() => handleNavSmall()}
        >
          <ul className="header__links">
            <li className="header__link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/games">Games</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <button type="submit" className="header__nav-btn-mobile">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
      {isDialogVisible && <DialogSignIn />}
    </>
  );
};
