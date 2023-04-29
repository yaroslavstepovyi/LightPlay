import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./dropdown-menu.css";

import { AuthContext } from "../../../../contexts/authUser";

const DropdownUserMenu = ({ onHandleBackgroundBlurHide, onHandleUserIcon }) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    onHandleBackgroundBlurHide(false);
    setIsLoggedIn(false);
    onHandleUserIcon();
  };

  return (
    <div className="dropdown-menu">
      <div className="triangle"></div>
      <ul>
        <li>
          <a href="#0">
            <FontAwesomeIcon className="font-awesome" icon={faUser} />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#1">
            <FontAwesomeIcon className="font-awesome" icon={faCog} />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#2">
            <FontAwesomeIcon className="font-awesome" icon={faQuestionCircle} />
            <span>Help</span>
          </a>
        </li>
        <li>
          <div className="log-out" onClick={handleLogOut}>
            <FontAwesomeIcon className="font-awesome" icon={faSignOutAlt} />
            <span>Log Out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownUserMenu;
