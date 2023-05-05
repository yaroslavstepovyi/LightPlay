import React, { useState, useContext } from 'react'

import './dialog.css'

import { DialogWrapper } from './DialogWrapper'
import { getUsers } from '../../../mocks/usersMocks'
import { AuthContext } from '../../../contexts/authUser'
import { validateCredentials, login, resetForm } from '../../../utils/userValidation'
import { updateItemInLocalStorage } from '../../../utils/localStorageUtils'
import { encryptUser } from '../../../utils/encryptionUser'

const DialogSignIn = ({ onHandleBackgroundBlurHide }) => {
  const { isloggedIn, setIsLoggedIn, setLoggedInUser } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogIn = (e) => {
    e.preventDefault()
    getUsers()
      .then((users) => validateCredentials(users, email, password))
      .then((userObject) =>
        login(
          userObject,
          setLoggedInUser,
          updateItemInLocalStorage,
          setIsLoggedIn,
          onHandleBackgroundBlurHide,
          encryptUser,
          resetForm(setEmail, setPassword, setError),
        ),
      )
      .catch((err) => {
        setError(new Error('Error fetching user'))
        console.log(err)
      })
  }

  return (
    <>
      {!isloggedIn && (
        <DialogWrapper onHandleBackgroundBlurHide={onHandleBackgroundBlurHide}>
          <div className="sign-in__inputs">
            <form className="sign-in__inputs-form" onSubmit={handleLogIn}>
              <input
                id="sign-in-email"
                className="sign-in__form-inpt"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="sign-in-password"
                className="sign-in__form-inpt"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="sign-in__form-btn">
                Sign In
              </button>
              {error && (
                <p className="invalid-email-password">{error.toString()}</p>
              )}
            </form>
          </div>
        </DialogWrapper>
      )}
    </>
  )
}

export { DialogSignIn }
