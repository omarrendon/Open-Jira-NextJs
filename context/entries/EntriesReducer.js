import { initialState } from "./EntriesProvider";

export const addEntry = (data) => ({
  type: '[Entry] Add-Entry',
  payload: data
});



export const EntriesReducer = (state = initialState, action) => {

  switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
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