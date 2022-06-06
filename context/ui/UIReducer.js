import { initialState } from "./UIProvider";

export const openSideBar = () => ({
  type: 'UIOpenSidebar'
});

export const closeSideBar = () => ({
  type: 'UICloseSidebar'
});

export const startDragging = () => ({
  type: 'UIStartDragging'
});

export const endDragging = () => ({
  type: 'UEndDragging'
});

export const UIReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'UIOpenSidebar':
      return {
        ...state,
        sideMenuOpen: true,
      };
    case 'UICloseSidebar':
      return {
        ...state,
        sideMenuOpen: false,
      };
      case 'UIStartDragging':
        return {
          ...state,
          isDragging: true,
        };
    case 'UEndDragging':
      return {
        ...state,
        isDragging: false,
      }
    default:
      return state;
  }
};