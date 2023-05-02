import { createContext, useState, useEffect } from 'react'

import { getUsers, USERS } from '../mocks/users-mocks'

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
    setSortedOption(e.target.value)

    let sortedUsers = [...USERS]

    switch (e.target.value) {
      case 'admin':
        sortedUsers.sort((a, b) =>
          a.role === 'admin' ? -1 : b.role === 'admin' ? 1 : 0,
        )
        break
      case 'moderator':
        sortedUsers.sort((a, b) =>
          a.role === 'moderator' ? -1 : b.role === 'moderator' ? 1 : 0,
        )
        break
      case 'user':
        sortedUsers.sort((a, b) =>
          a.role === 'user' ? -1 : b.role === 'user' ? 1 : 0,
        )
        break
      default:
        break
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
