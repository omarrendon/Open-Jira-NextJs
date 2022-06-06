import { useReducer } from "react";
import { UIContext, UIReducer } from "./";
import {
  closeSideBar,
  endDragging,
  openSideBar,
  startDragging,
} from "./UIReducer";

export const initialState = {
  sideMenuOpen: false,
  isDragging: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);

  const openSideBarUI = () => dispatch(openSideBar());
  const closeSideBarUI = () => dispatch(closeSideBar());
  const startDraggingUI = () => dispatch(startDragging());
  const endDraggingUI = () => dispatch(endDragging());


  return (
    <UIContext.Provider
      value={{
        ...state,
        // Methods
        openSideBarUI,
        closeSideBarUI,

        startDraggingUI,
        endDraggingUI,
      }}
    >
      {children}
    </UIContext.Provider>
  )
};