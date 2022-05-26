import { useReducer } from "react";
import { UIContext, UIReducer } from "./";
import { closeSideBar, openSideBar } from "./UIReducer";

export const initialState = {
  sideMenuOpen: false
};


export const UIProvider = ({children}) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);

  const openSideBarUI = () => dispatch(openSideBar());
  const closeSideBarUI = () => dispatch(closeSideBar());


  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideBarUI,
        closeSideBarUI,
      }}
    >
      {children}
    </UIContext.Provider>
  )
};