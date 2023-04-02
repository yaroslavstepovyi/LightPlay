import { useState } from "react";

const useAuth = () => {
  const [state, setState] = useState({
    isDialogVisible: false,
    isBackgroundBlurVisible: false,
    isBurgerMenuActive: false,
  });

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

  const onHandleBurgerMenuToggle = () => {
    setState((prevState) => ({
      ...prevState,
      isBurgerMenuActive: !prevState.isBurgerMenuActive,
    }));
  };

  return {
    state,
    onHandleOpenDialogSignIn,
    onHandleBackgroundBlurHide,
    onHandleBurgerMenuToggle,
  };
};

export default useAuth;
