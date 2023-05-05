import { createContext, useState, useEffect } from 'react'

import { getUsers, USERS } from '../mocks/usersMocks'

import { sortFunctions } from '../utils/sort'

const usersContext = createContext()

const UsersListProvider = ({ children }) => {
  const [sortedOption, setSortedOption] = useState('default')
  const [usersOrder, setUsersOrder] = useState([])
  const [isRoleActive, setIsRoleActive] = useState(false)
  const [activeUserId, setActiveUserId] = useState(null)
  const [activeUserName, setActiveUserName] = useState(null)

  const handleRoleSelect = (userId, userName) => {
    setActiveUserId(activeUserId !== userId ? userId : null)
    setActiveUserName(activeUserName !== userName ? userName : null)
    setIsRoleActive(!isRoleActive)
  }

  const handleRoleSort = (e) => {
    const sortedUsers = [...USERS]

    if (sortFunctions.role.hasOwnProperty(e.target.value)) {
      sortedUsers.sort(sortFunctions.role[e.target.value])
    }

    setUsersOrder(sortedUsers)
  }

  useEffect(() => {
    getUsers()
      .then((result) => setUsersOrder(result))
      .catch((err) => console.log('fetch error', err))
  }, [])

  const value = {
    users: usersOrder,
    handleRoleSort,
    sortedOption,
    setSortedOption,
    setUsersOrder,
    handleRoleSelect,
    isRoleActive,
    activeUserId,
    setActiveUserId,
    activeUserName,
  }

  return <usersContext.Provider value={value}>{children}</usersContext.Provider>
}

export { usersContext, UsersListProvider }
