import { useState } from "react";

const useHeaderState = () => {
    const [state, setState] = useState({
      isDialogVisible: false,
      isBurgerMenuActive: false,
    });
  
    const onHandleOpenDialogSignIn = () => {
      setState((prevState) => ({
        ...prevState,
        isDialogVisible: true,
      }));
    };
  
    const onHandleBackroundBlurHide = () => {
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
  
    return { state, onHandleOpenDialogSignIn, onHandleBackroundBlurHide, onHandleBurgerMenuToggle };
  };

  export default useHeaderState ;