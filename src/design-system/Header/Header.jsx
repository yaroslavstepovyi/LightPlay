import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./header.css";

import { Logo } from "../../components/images";
import { DialogSignIn } from "../Dialogs";
import { DropdownUserMenu } from "../Dialogs/dialogs-common/dialog-dropdown-menu";
import { NavigationLinks } from "../../routers";
import { useAuth } from "../../hooks";
import { decryptUser } from "../../utils/encryption-user";

import withScroll from "../../hoc-helpers/withScroll";

const Header = ({ scroll }) => {
  const {
    state,
    onHandleOpenDialogSignIn,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
    isOpenDropdownMenu,
    UserIcon,
  } = useAuth();

  const commonProps = {
    state,
    NavigationLinks,
    onHandleOpenDialogSignIn,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
    isOpenDropdownMenu,
    UserIcon
  };

  return (
    <>
      <DesktopHeader
        {...commonProps}
        scroll={scroll}
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
  isOpenDropdownMenu,
  UserIcon,
  scroll,
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
                  }`}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {localStorage.getItem("user") ? (
              <>
                <img src={decryptUser().img} alt="user icon" onClick={UserIcon}/>
                {isOpenDropdownMenu && <div className="background-blur-transparent" onClick={UserIcon}></div>}
                {isOpenDropdownMenu && <DropdownUserMenu />}
              </>
            ) : (
              <button
                type="submit"
                className="header-nav-btn"
                onClick={onHandleOpenDialogSignIn}>
                Sign In
              </button>
            )}
          </div>
        </div>

        {state.isDialogVisible && <div className="background-blur"></div>}

        <button
          className="header-nav-small"
          onClick={onHandleBurgerMenuToggle}>
        </button>
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

export default withScroll(Header, 0);
