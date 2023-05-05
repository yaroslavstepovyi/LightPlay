import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './dropdown-user-menu.css'

import { AuthContext } from '../../../../contexts/authUser'
import { removeFromLocalStorage } from '../../../../utils/localStorageUtils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

const DropdownUserMenu = ({ onHandleBackgroundBlurHide, onHandleUserIcon }) => {
  const { setIsLoggedIn } = useContext(AuthContext)
  
  const handleLogOut = () => {
    removeFromLocalStorage('user')
    onHandleBackgroundBlurHide(false)
    setIsLoggedIn(false)
    onHandleUserIcon()
  }

  return (
    <div className="dropdown-menu">
      <div className="triangle"></div>
      <ul>
        <li>
          <Link to="#profile">
            <FontAwesomeIcon className="font-awesome" icon={faUser} />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="#settings">
            <FontAwesomeIcon className="font-awesome" icon={faCog} />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="#help">
            <FontAwesomeIcon className="font-awesome" icon={faQuestionCircle} />
            <span>Help</span>
          </Link>
        </li>
        <li>
          <div className="log-out" onClick={handleLogOut}>
            <FontAwesomeIcon className="font-awesome" icon={faSignOutAlt} />
            <span>Log Out</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export { DropdownUserMenu }
