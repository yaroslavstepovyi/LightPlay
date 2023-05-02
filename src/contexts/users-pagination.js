import React, { useState, useContext, createContext } from 'react'

import { usersContext } from './users-list'

const UsersPaginationContext = createContext()

const UsersPaginationProvider = ({ children }) => {
  const { users } = useContext(usersContext)
  const [notesOnPage] = useState(5)
  const [active, setActive] = useState(1)

  const handlePageClick = (pageNumber) => {
    setActive(pageNumber)

    const startIndex = (pageNumber - 1) * notesOnPage
    const endIndex = startIndex + notesOnPage
    return users.slice(startIndex, endIndex)
  }

  const pagination = () => {
    const amountElementOnPage = Math.ceil(users.length / notesOnPage)

    let items = []

    for (let i = 1; i <= amountElementOnPage; i++) {
      const liClassNames = ['pagination__list-btn']
      const listItem = (
        <li key={i} className={liClassNames.join(' ')}>
          <button
            className={`pagination__list-btn-page ${
              active === i ? 'active-btn' : null
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        </li>
      )

      items.push(listItem)
    }

    return items
  }

  const getPaginatedUsers = () => {
    const startIndex = (active - 1) * notesOnPage
    const endIndex = startIndex + notesOnPage
    return users.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    if (active < Math.ceil(users.length / notesOnPage)) {
      setActive(active + 1)
    }
  }

  const prevPage = () => {
    if (active > 1) {
      setActive(active - 1)
    }
  }

  const value = {
    getPaginatedUsers,
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
