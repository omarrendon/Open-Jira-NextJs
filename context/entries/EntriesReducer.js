import { initialState } from "./EntriesProvider";

export const openSideBar = () => ({
  type: 'UIOpenSidebar'
});

export const closeSideBar = () => ({
  type: 'UICloseSidebar'
});

export const EntriesReducer = (state = initialState, action) => {

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
    default:
      return state;
  }
};