const validateCredentials = (users, email, password) => {
  const matchedUsers = users.filter(
    (user) => user.email === email && user.password === password,
  )
  if (matchedUsers.length === 0) {
    throw new Error('Invalid Email or Password')
  }
  return matchedUsers[0]
}

const login = (
  userObject,
  setLoggedInUser,
  updateItemInLocalStorage,
  setIsLoggedIn,
  onHandleBackgroundBlurHide,
  encryptUser,
  resetForm,
) => {
  const encryptedUser = encryptUser(userObject)
  setLoggedInUser(userObject)
  updateItemInLocalStorage('user', encryptedUser)
  setIsLoggedIn(true)
  onHandleBackgroundBlurHide(false)
  resetForm()
}

const resetForm = (setEmail, setPassword, setError) => {
  setEmail('')
  setPassword('')
  setError('')
}

export { validateCredentials, login, resetForm }
