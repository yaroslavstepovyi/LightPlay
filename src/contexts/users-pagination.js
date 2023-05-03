import React, { useState, useContext, createContext } from 'react'

import { usersContext } from './users-list'
import { getPagination } from '../utils/pagination'

const UsersPaginationContext = createContext()

const UsersPaginationProvider = ({ children }) => {
  const { users } = useContext(usersContext)
  const [active, setActive] = useState(1)
  const notesOnPage = 5

  const { pagination, getPaginatedArray, nextPage, prevPage } = getPagination(
    users,
    notesOnPage,
    active,
    setActive,
  )

  const value = {
    getPaginatedUsers: getPaginatedArray,
    nextPage,
    prevPage,
    pagination,
  }

  return (
    <UsersPaginationContext.Provider value={value}>
      {children}
    </UsersPaginationContext.Provider>
  )
}

export { UsersPaginationContext, UsersPaginationProvider }
