import { useState, useContext } from 'react'

import { AuthContext } from '../contexts/authUser'

const useAuth = () => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false)

  const [state, setState] = useState({
    isDialogVisible: false,
    isBackgroundBlurVisible: false,
    isBurgerMenuActive: false,
  })

  const onHandleOpenDialogSignIn = () => {
    setState((prevState) => ({
      ...prevState,
      isDialogVisible: true,
    }))
  }

  const onHandleBackgroundBlurHide = () => {
    setState((prevState) => ({
      ...prevState,
      isDialogVisible: false,
    }))
  }

  const onHandleUserIcon = () => {
    setIsOpenDropdownMenu(!isOpenDropdownMenu)
  }

  const onHandleBurgerMenuToggle = () => {
    setState((prevState) => ({
      ...prevState,
      isBurgerMenuActive: !prevState.isBurgerMenuActive,
    }))
  }

  const { setIsLoggedIn } = useContext(AuthContext)
  const onHandleLogOut = () => {
    localStorage.removeItem('user')
    onHandleBackgroundBlurHide(false)
    setIsLoggedIn(false)
  }

  return {
    state,
    isOpenDropdownMenu,
    onHandleOpenDialogSignIn,
    onHandleLogOut,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
    onHandleUserIcon,
  }
}

export { useAuth }
