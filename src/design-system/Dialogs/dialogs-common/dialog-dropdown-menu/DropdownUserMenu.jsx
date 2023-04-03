import React from "react";

import './dropdown-menu.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faQuestionCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DropdownUserMenu = () => {
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
          <a href="#3">
            <FontAwesomeIcon className="font-awesome" icon={faSignOutAlt} />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownUserMenu;
