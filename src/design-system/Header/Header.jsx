import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./header.css";

import withScroll from "../../hoc-helpers/withScroll";

import { Logo } from "../../components/images/index";
import { DialogSignIn } from "../Dialogs";
import { NavigationLinks } from "../../routers";
import useHeaderState from "./headerState";

const DesktopHeader = ({ 
  state,
  isDialogVisible,
  NavigationLinks,
  onHandleOpenDialogSignIn,
  onHandleBackroundBlurHide,
  onHandleBurgerMenuToggle,
  scroll }) => {
    
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
                  className={`header-link ${ link.isActive ? "nav-bar-active" : null }`}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="header-nav-btn"
            onClick={onHandleOpenDialogSignIn}>
            Sign In
          </button>
        </div>

        {state.isDialogVisible && (
          <div
            className="background-blur"
            onClick={onHandleBackroundBlurHide}></div>
        )}

        <button
          className="header-nav-small"
          onClick={onHandleBurgerMenuToggle}></button>
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
            {
              NavigationLinks.map((link, idx) => (
                <li
                  key={idx}
                  className={`header-link ${ link.isActive ? "nav-bar-active" : null}`}>
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

const Header = (props) => {
  const { scroll } = props;
  const {
    state,
    onHandleOpenDialogSignIn,
    onHandleBackroundBlurHide,
    onHandleBurgerMenuToggle,
  } = useHeaderState();

  const commonProps = {
    state,
    NavigationLinks,
    onHandleOpenDialogSignIn,
    onHandleBackroundBlurHide,
    onHandleBurgerMenuToggle,
  }

  return (
    <>
      <DesktopHeader {...commonProps} scroll={scroll}/>
      <MobileHeader {...commonProps} />
      {state.isDialogVisible && <DialogSignIn />}
    </>
  );
};

export default withScroll(Header, 22);
