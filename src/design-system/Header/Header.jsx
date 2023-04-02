import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import CryptoJS from "crypto-js";

import "./header.css";

import { Logo } from "../../components/images";
import { DialogSignIn } from "../Dialogs";
import { NavigationLinks } from "../../routers";
import { useAuth } from "../../hooks";
import withScroll from "../../hoc-helpers/withScroll";

const Header = ({ scroll }) => {
  const {
    state,
    onHandleOpenDialogSignIn,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
  } = useAuth();

  const commonProps = {
    state,
    NavigationLinks,
    onHandleOpenDialogSignIn,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
  };
  
  const encryptedUser = JSON.parse(localStorage.getItem("user")); //decryption of "user" from localStorage:
  let decryptedUser = null;

  if (encryptedUser) {
    const decrypted = CryptoJS.AES.decrypt(encryptedUser, "secret key"); //encryptedUser not a string;
    try {
      decryptedUser = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (e) {
      console.error("Error parsing decrypted user object", e);
    }
  }

  return (
    <>
      <DesktopHeader
        {...commonProps}
        scroll={scroll}
        decryptedUser={decryptedUser}
      />
      <MobileHeader {...commonProps} />
      {state.isDialogVisible && (
        <DialogSignIn onHandleBackgroundBlurHide={onHandleBackgroundBlurHide} />
      )}
    </>
  );
};

const DesktopHeader = ({
  state,
  NavigationLinks,
  onHandleOpenDialogSignIn,
  onHandleBurgerMenuToggle,
  scroll,
  decryptedUser,
}) => {
  return (
    <>
      <header className={`${scroll ? "header scrolled" : "header"}`}>
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo" />
        </Link>
        <div className="header-nav">
          <div className="header-nav-wrap">
            <ul className="header-links">
              {NavigationLinks.map((link, idx) => (
                <li
                  key={idx}
                  className={`header-link ${
                    link.isActive ? "nav-bar-active" : null
                  }`}
                >
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {localStorage.getItem("user") ? (
            <img src={decryptedUser.img} alt="user icon" />
          ) : (
            <button
              type="submit"
              className="header-nav-btn"
              onClick={onHandleOpenDialogSignIn}
            >
              Sign In
            </button>
          )}
        </div>

        {state.isDialogVisible && <div className="background-blur"></div>}

        <button
          className="header-nav-small"
          onClick={onHandleBurgerMenuToggle}
        ></button>
      </header>
    </>
  );
};

const MobileHeader = ({ NavigationLinks, state, onHandleBurgerMenuToggle }) => {
  return (
    <>
      {state.isBurgerMenuActive && (
        <div className="header-nav-mobile" onClick={onHandleBurgerMenuToggle}>
          <ul className="header-links">
            {NavigationLinks.map((link, idx) => (
              <li
                key={idx}
                className={`header-link ${
                  link.isActive ? "nav-bar-active" : null
                }`}
              >
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
            <li>
              <button type="submit" className="header-nav-btn-mobile">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default withScroll(Header, 22);
