import { initialState } from "./EntriesProvider";

export const addEntry = (data) => ({
  type: '[Entry] Add-Entry',
  payload: data
});

export const updateEntryReducer = (data) => ({
  type: '[Entry] Update-Entry',
  payload: data
});

export const getEntriesReducer = (data) => ({
  type: '[Entry] Get-Entry',
  payload: data,
});



export const EntriesReducer = (state = initialState, action) => {

  switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case '[Entry] Get-Entry':
      return {
        ...state,
        entries: action.payload,
      };
    case '[Entry] Update-Entry':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        })
      };
    default:
      return state;
  }
};