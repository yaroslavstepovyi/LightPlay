import { useState } from "react";


const useAuth = () => {
  const [state, setState] = useState({
    isDialogVisible: false,
    isBackgroundBlurVisible: false,
    isBurgerMenuActive: false,
  });

  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);

  const onHandleOpenDialogSignIn = () => {
    setState((prevState) => ({
      ...prevState,
      isDialogVisible: true,
    }));
  };

  const onHandleBackgroundBlurHide = () => {
    setState((prevState) => ({
      ...prevState,
      isDialogVisible: false,
    }));
  };

  const onHandleUserIcon = () => {
    setIsOpenDropdownMenu(!isOpenDropdownMenu);
  };

  const onHandleBurgerMenuToggle = () => {
    setState((prevState) => ({
      ...prevState,
      isBurgerMenuActive: !prevState.isBurgerMenuActive,
    }));
  };

  return {
    state,
    isOpenDropdownMenu,
    onHandleOpenDialogSignIn,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
    onHandleUserIcon,
  };
};

export default useAuth;
