import { createContext, useState, useEffect } from 'react'

import { setItemLocalStorage } from '../utils/localStorageUtils'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [isloggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  useEffect(() => {
    setItemLocalStorage('isLoggedIn', isloggedIn)
  }, [isloggedIn])

  return (
    <AuthContext.Provider
      value={{ isloggedIn, setIsLoggedIn, setLoggedInUser, loggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
