import React, { useContext, useState, useEffect } from 'react'

import './users-filter.css'

import { usersContext } from '../../../contexts/users-list'
import { Reset } from '../../../services/images'
import { USERS } from '../../../mocks/users.mocks'

export const UsersFilter = () => {
  const {
    handleRoleSort,
    sortedOption,
    setSortedOption,
    setUsersOrder,
  } = useContext(usersContext);

  const [
    showResetButton,
    setShowResetButton
  ] = useState(false);

  const handleResetSort = () => {
    setSortedOption('default')
    setShowResetButton(false);
    setUsersOrder([...USERS]);
  }

  useEffect(() => {
    setShowResetButton(sortedOption !== "default");
  }, [sortedOption, setSortedOption]);

  return (
    <div className='users__filter'>
      <div className='users__filter__wrap'>
        <div className='users__filter__logo-wrap'>
          <div className='users__filter__logo'>
            <h3>VR Users</h3>
          </div>
        </div>
        <div className='users__filter__search'>
          {showResetButton && (
            <button type='button' className='reset-button' onClick={handleResetSort}>
              <img className='reset-btn' src={Reset} alt='reset' />
            </button>
          )}
          <div className='users__filter__search-box'>
            <select
              id='select'
              className='users__filter__search-select'
              value={sortedOption}
              onChange={handleRoleSort}
            >
              <option
                className='users__filter__search-option'
                value='default'
                disabled
              >
                Sort By Role
              </option>
              <option className='users__filter__search-option' value='admin'>
                admin
              </option>
              <option
                className='users__filter__search-option'
                value='moderator'
              >
                moderator
              </option>
              <option className='users__filter__search-option' value='user'>
                user
              </option>
            </select>
            <span className='users__filter__search-box-arrow'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
